"use client";

import SectionTitle from "@/components/section-title";
import { useTranslations } from "next-intl";

export default function OurLatestCreations() {
  const t = useTranslations("creations");

  const data = [
    {
      title: t("item1Title"),
      description: t("item1Desc"),
      image: "/assets/image-1.png",
    },
    {
      title: t("item2Title"),
      description: t("item2Desc"),
      image: "/assets/image-2.png",
    },
    {
      title: t("item3Title"),
      description: t("item3Desc"),
      image: "/assets/image-3.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center mt-40">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="max-w-80 hover:-translate-y-0.5 transition duration-300"
          >
            <img className="rounded-xl" src={item.image} alt={item.title} />
            <h3 className="text-base font-semibold text-slate-700 mt-4">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
