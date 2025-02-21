import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="container mx-auto p-6">
      {/* <h1 className="text-3xl font-bold">{t("welcome")}</h1> */}
      <p>{t("description")}</p>
    </div>
  );
}
