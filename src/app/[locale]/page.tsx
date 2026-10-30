import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} dict={dict} />
      <main className="container-cv pb-16">
        <HeaderCard locale={locale} dict={dict} />
        <Summary locale={locale} dict={dict} />
        <Skills locale={locale} dict={dict} />
        <Experience locale={locale} dict={dict} />
        <Projects locale={locale} dict={dict} />
        <Education locale={locale} dict={dict} />
        <Contact locale={locale} dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
