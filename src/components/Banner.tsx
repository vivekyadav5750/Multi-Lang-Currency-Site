import { cn } from "@/lib/utils";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { formatLocalizedDate } from "@/utils/dateFormatter";

const Banner = () => {
  const t = useTranslations();
    const locale = useLocale();
  return (
    <div className="bg-blue-600 text-white text-center p-6">
      <h2 className="text-3xl font-bold">{t("banner.name")}</h2>
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
};

export default Banner;
