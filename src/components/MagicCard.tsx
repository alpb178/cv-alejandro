"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

const SPOTLIGHT_SIZE_PX = 200;
const RESET_POSITION = `-${SPOTLIGHT_SIZE_PX}px`;
// Touch is excluded so a tap never leaves a frozen spotlight behind.
const FINE_POINTER_TYPES: readonly string[] = ["mouse", "pen"];

type Props = {
  children: ReactNode;
  /** Added to the wrapper, e.g. "h-full rounded-xl" (the layers inherit the radius). */
  className?: string;
};

/**
 * Accent spotlight and ring that follow the pointer over a card (Magic UI "magic-card"
 * technique). The pointer position goes straight into CSS variables, so moving the mouse
 * never re-renders React, and `children` stay server-rendered. Styles: `.magic-card` in
 * app/globals.css.
 */
export default function MagicCard({ children, className = "" }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const setSpotlightPosition = (x: string, y: string) => {
    cardRef.current?.style.setProperty("--magic-x", x);
    cardRef.current?.style.setProperty("--magic-y", y);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!FINE_POINTER_TYPES.includes(event.pointerType)) return;
    // With reduced motion the effect is off (the CSS hides the layers too).
    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    setSpotlightPosition(`${event.clientX - rect.left}px`, `${event.clientY - rect.top}px`);
  };

  const handlePointerLeave = () => {
    setSpotlightPosition(RESET_POSITION, RESET_POSITION);
  };

  return (
    <div
      ref={cardRef}
      className={`magic-card ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
      <span className="magic-card__spotlight" aria-hidden="true" />
      <span className="magic-card__border" aria-hidden="true" />
    </div>
  );
}
