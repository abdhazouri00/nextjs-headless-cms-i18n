"use client";

import { ArrowRightIcon, CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function HeroSection({ strapiData }) {
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");
  const installCommandd = "npm install prebuiltui@latest";
  const [isCopied, setIsCopied] = useState(false);
  const { title, brand, description, logos } = strapiData;
  const baseUrl = "http://localhost:1337";

  const logoss = [
    "/companies-logo/instagram.svg",
    "/companies-logo/framer.svg",
    "/companies-logo/microsoft.svg",
    "/companies-logo/huawei.svg",
    "/companies-logo/walmart.svg",
  ];

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(installCommand);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <section className="flex flex-col items-center justify-center relative h-svh overflow-hidden">
      <h1 className="text-4xl md:text-6xl/18 text-center font-semibold max-w-2xl mt-5 bg-gradient-to-r from-black to-[#748298] text-transparent bg-clip-text">
        {title}{" "}
        <span className="bg-gradient-to-b from-indigo-300 to-indigo-600 bg-clip-text text-transparent">
          {brand}
        </span>
        .
      </h1>
      <p className="text-slate-600 md:text-base max-md:px-2 text-center max-w-lg mt-3">
        {description}
      </p>
      <button className="flex items-center gap-2 btn hover:opacity-90 text-white px-8 py-3 mt-8 rounded-full transition">
        <span>{tCommon("getStarted")}</span>
        <ArrowRightIcon className="size-5 rtl:rotate-180" />
      </button>
      <p className="py-6 text-slate-600 mt-14">{t("trustedBy")}</p>
      <div
        className="flex flex-wrap justify-between max-sm:justify-center gap-10 max-w-4xl w-full mx-auto py-4"
        id="logo-container"
      >
        {logos && logos.length > 0 ? (
          logos.map((logo, index) => (
            <img
              key={index}
              src={baseUrl + logo.url}
              alt="logo"
              className="h-10 w-auto max-w-xs"
            />
          ))
        ) : (
          <p>No logos found</p> // Fallback UI
        )}
      </div>
    </section>
  );
}
