"use client";

import SectionTitle from "@/components/section-title";
import { useTranslations } from "next-intl";

export default function Newsletter() {
  const t = useTranslations("newsletter");
  const tCommon = useTranslations("common");

  return (
    <section className="flex flex-col items-center justify-center mt-40">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200">
        <input
          className="flex-1 rounded-full pl-5 max-md:py-3 outline-none"
          type="text"
          placeholder={t("placeholder")}
        />
        <button className="font-medium hidden md:block btn text-white px-7 py-3 rounded-full hover:opacity-90 active:scale-95 transition">
          {tCommon("getUpdates")}
        </button>
      </div>
      <button className="font-medium md:hidden btn text-white px-7 py-3 rounded-full hover:opacity-90 active:scale-95 transition">
        {tCommon("getUpdates")}
      </button>
    </section>
  );
}
