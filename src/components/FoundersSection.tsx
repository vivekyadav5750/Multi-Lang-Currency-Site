// components/FoundersSection.jsx
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function FoundersSection() {
  const t = useTranslations("about");

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16 mb-12">
      {/* Founder 1 */}
      <div className="text-center lg:w-1/2 mb-10 lg:mb-0">
        <Image
          src="/images/tom.jpg"
          alt={t("founder1.title")}
          width={160}
          height={160}
          className={cn(
            "w-40 h-40 mx-auto rounded-full mb-4 shadow-lg",
            "dark:shadow-gray-700"
          )}
        />
        <h3
          className={cn(
            "text-xl font-semibold",
            "text-gray-900 dark:text-gray-100"
          )}
        >
          {t("founder1.title")}
        </h3>
        <p className={cn("text-gray-600 dark:text-gray-300")}>
          {t("founder1.name")}
        </p>
      </div>

      {/* Founder 2 */}
      <div className="text-center lg:w-1/2">
        <Image
          src="/images/jerry.jpg"
          alt={t("founder2.title")}
          width={160}
          height={160}
          className={cn(
            "w-40 h-40 mx-auto rounded-full mb-4 shadow-lg",
            "dark:shadow-gray-700"
          )}
        />
        <h3
          className={cn(
            "text-xl font-semibold",
            "text-gray-900 dark:text-gray-100"
          )}
        >
          {t("founder2.title")}
        </h3>
        <p className={cn("text-gray-600 dark:text-gray-300")}>
          {t("founder2.name")}
        </p>
      </div>
    </div>
  );
}
