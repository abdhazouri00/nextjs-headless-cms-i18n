import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import FaqSection from "@/sections/faq-section";
import HeroSection from "@/sections/hero-section";
import Newsletter from "@/sections/newsletter";
import OurLatestCreations from "@/sections/our-latest-creations";
import OurTestimonialSection from "@/sections/our-testimonials-section";
import WhatWeDoSection from "@/sections/what-we-do-section";
import HeroWrapper from "@/sections/hero-wrapper.js";

type Params = Promise<{ locale: string }>;

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageContent locale={locale} />;
}

function HomePageContent({ locale }: { locale: string }) {
  const t = useTranslations();

  return (
    <main className="px-4">
      <HeroWrapper locale={locale} />
      <WhatWeDoSection />
      <OurLatestCreations />
      <OurTestimonialSection />
      <FaqSection />
      <Newsletter />
    </main>
  );
}
