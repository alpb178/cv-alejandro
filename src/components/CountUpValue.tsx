"use client";

import { useEffect, useRef } from "react";

/**
 * Session flag: once the figures have counted up, later mounts (e.g. ES ↔ EN switch) show final
 * values. The head bootstrap script in app/[locale]/layout.tsx reads the same key.
 */
const COUNTUP_STORAGE_KEY = "cv-countup-played";

const VALUE_PATTERN = /^(\D*)(\d+)(\D*)$/;
const STAGGER_MS = 90;

type Props = {
  /** Final display text, e.g. "9+", "~60%". Always present in the server HTML. */
  value: string;
  /** Position in the highlight strip; delays the start by index × 90 ms. */
  index?: number;
  durationMs?: number;
};

function alreadyPlayed(): boolean {
  try {
    return window.sessionStorage.getItem(COUNTUP_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markPlayed() {
  try {
    window.sessionStorage.setItem(COUNTUP_STORAGE_KEY, "1");
  } catch {
    // Storage unavailable (private mode, blocked) — the figures simply animate again next time.
  }
}

/**
 * Counts a highlight figure up from 0 to its final value the first time it scrolls into view.
 *
 * Server render and first client render both show the final `value`, so crawlers, link
 * previews and no-JS visitors read the real figure. The `countup` class that the head
 * bootstrap script puts on <html> hides `pending` figures until this effect takes over
 * (with a CSS fallback reveal). Updates go straight to the DOM through refs: one figure
 * re-rendering React 60 times a second is wasted work.
 */
export default function CountUpValue({ value, index = 0, durationMs = 1100 }: Props) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const digitsRef = useRef<HTMLSpanElement>(null);
  const animatable = VALUE_PATTERN.test(value);

  useEffect(() => {
    const root = rootRef.current;
    const digits = digitsRef.current;
    const match = VALUE_PATTERN.exec(value);
    if (!root || !digits || !match) return;

    const [, prefix, rawTarget, suffix] = match;
    const target = Number(rawTarget);
    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const setState = (state: "pending" | "running" | "done") => {
      root.dataset.countup = state;
    };
    const showFinal = () => {
      digits.textContent = value;
      setState("done");
    };

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduceMotion || typeof IntersectionObserver === "undefined" || alreadyPlayed()) {
      showFinal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        timer = setTimeout(run, index * STAGGER_MS);
      },
      { threshold: 0.4 },
    );
    const finish = () => {
      observer.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      showFinal();
    };

    const run = () => {
      setState("running");
      const startedAt = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - startedAt) / durationMs);
        if (t >= 1) {
          finish();
          markPlayed();
          return;
        }
        const eased = 1 - (1 - t) ** 3;
        digits.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    digits.textContent = `${prefix}0${suffix}`;
    setState("pending");
    observer.observe(root);

    // Printing (toolbar "Print / PDF") must never capture 0 or a mid-count number.
    window.addEventListener("beforeprint", finish);

    return () => {
      window.removeEventListener("beforeprint", finish);
      finish();
    };
  }, [value, index, durationMs]);

  if (!animatable) {
    return <span data-countup="done">{value}</span>;
  }

  return (
    <span ref={rootRef} data-countup="pending" className="tabular-nums">
      {/* Invisible copy of the final value reserves its exact width, so counting never shifts the layout. */}
      <span aria-hidden="true" className="inline-grid">
        <span className="invisible col-start-1 row-start-1">{value}</span>
        <span ref={digitsRef} className="col-start-1 row-start-1">
          {value}
        </span>
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
