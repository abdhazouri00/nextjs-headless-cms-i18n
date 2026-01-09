"use client";

import SectionTitle from "@/components/section-title";
import { StarIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function OurTestimonialSection() {
  const t = useTranslations("testimonials");

  const data = [
    {
      review: t("review1"),
      name: "Richard Nelson",
      about: t("founderCeo"),
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      review: t("review2"),
      name: "Sophia Martinez",
      about: t("founderCeo"),
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      review: t("review3"),
      name: "Ethan Roberts",
      about: t("founderCeo"),
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    },
    {
      review: t("review4"),
      name: "Isabella Kim",
      about: t("founderCeo"),
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    },
    {
      review: t("review5"),
      name: "Liam Johnson",
      about: t("founderCeo"),
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      review: t("review6"),
      name: "Ava Patel",
      about: t("founderCeo"),
      rating: 5,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center mt-40">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-5 text-gray-500 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex gap-1">
              {...Array(item.rating)
                .fill("")
                .map((_, index) => (
                  <StarIcon
                    key={index}
                    className="size-4 fill-gray-600 text-gray-600"
                  />
                ))}
            </div>
            <p className="line-clamp-3">"{item.review}"</p>
            <div className="flex items-center gap-2 pt-3">
              <img
                className="size-10 rounded-full"
                src={item.image}
                alt={item.name}
              />
              <div>
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-xs">{item.about}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
