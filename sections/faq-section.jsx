"use client";

import SectionTitle from "@/components/section-title";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FaqSection() {
  const t = useTranslations("faq");
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { question: t("q1"), answer: t("a1") },
    { question: t("q2"), answer: t("a2") },
    { question: t("q3"), answer: t("a3") },
    { question: t("q4"), answer: t("a4") },
    { question: t("q5"), answer: t("a5") },
    { question: t("q6"), answer: t("a6") },
  ];

  return (
    <section className="flex flex-col items-center justify-center mt-40">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto mt-12 w-full max-w-xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-b border-gray-200 bg-white"
          >
            <h3
              className="flex cursor-pointer items-start justify-between gap-4 py-4 font-medium"
              onClick={() => setIsOpen(isOpen === index ? null : index)}
            >
              {item.question}
              {isOpen === index ? (
                <MinusIcon className="size-5 text-gray-500" />
              ) : (
                <PlusIcon className="size-5 text-gray-500" />
              )}
            </h3>
            <p
              className={`pb-4 text-sm/6 text-gray-500 ${
                isOpen === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
