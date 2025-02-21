"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { formatLocalizedDate } from "@/utils/dateFormatter";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function LocalizedContent() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* About Us Section */}
      <section
        className={cn(
          "p-6 rounded-lg mb-6 shadow-lg",
          "bg-gray-100 dark:bg-gray-900"
        )}
      >
        <h2
          className={cn("text-3xl font-bold", "text-gray-900 dark:text-white")}
        >
          {t("about.title")}
        </h2>
        <p className={cn("text-gray-700 dark:text-gray-300 mt-2")}>
          {t("about.history")}
        </p>
      </section>

      {/* Contact Information */}
      <section
        className={cn(
          "p-6 rounded-lg mb-6 shadow-lg",
          "bg-white dark:bg-gray-800"
        )}
      >
        <h2
          className={cn("text-3xl font-bold", "text-gray-900 dark:text-white")}
        >
          📞 {t("contact.phone")}
        </h2>
        <p className={cn("text-gray-700 dark:text-gray-300 mt-2")}>
          📍 {t("contact.address")}
        </p>
      </section>

      {/* Promotional Banner */}
      <section
        className={cn(
          "relative text-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-8",
          "bg-blue-600 dark:bg-blue-800"
        )}
      >
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold">{t("banner.title")}</h2>
          <p className="mt-2">{t("banner.subtitle")}</p>
          <p className="mt-2 text-sm text-gray-200">
            📅 {formatLocalizedDate(locale)}
          </p>
        </div>

        {/* Image container with max-width constraints */}
        <div className="w-full sm:w-auto flex justify-center">
          <Image
            src="/images/sale.jpg"
            alt="Promotion"
            width={150}
            height={150}
            className="rounded-lg shadow-md max-w-full sm:max-w-[150px]"
          />
        </div>
      </section>
    </div>
  );
}
