"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { useAppDispatch } from "@/redux/hook";
import { setCurrency } from "@/redux/currencySlice";
import { CurrencyType } from "@/types";
import Cookies from "js-cookie";
import Link from "next/link";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ar", label: "العربية" },
  { code: "ru", label: "Русский" },
  { code: "pt", label: "Português" },
  { code: "hi", label: "हिन्दी" },
  { code: "ko", label: "한국어" },
  { code: "it", label: "Italiano" }
];

const currencies: CurrencyType[] = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "INR",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "RUB",
  "KRW",
  "BRL"
];

const Navbar = () => {
  const t = useTranslations("navbar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("USD");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const lang = Cookies.get("language") || locale;
    const currency = Cookies.get("currency") || "USD";

    setSelectedLang(lang);
    setSelectedCurrency(currency as CurrencyType);
    dispatch(setCurrency(currency as CurrencyType));
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");
    const newPath = `/${lang}${pathWithoutLocale || "/"}`;

    router.push(newPath);
  }, []);

  const changeLanguage = (newLang: string) => {
    setSelectedLang(newLang);
    Cookies.set("language", newLang, { expires: 365 });

    // Extract the current path excluding the locale
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");
    const newPath = `/${newLang}${pathWithoutLocale || "/"}`;

    router.push(newPath);
  };

  const changeCurrency = (newCurrency: CurrencyType) => {
    setSelectedCurrency(newCurrency);
    Cookies.set("currency", newCurrency, { expires: 365 });
    dispatch(setCurrency(newCurrency));
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${locale}`} className="text-2xl font-bold text-white">
          {t("home")}
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <NavLinks locale={locale} about={t("about")} contact={t("contact")} />
          <LanguageSelector
            selectedLang={selectedLang}
            onChange={changeLanguage}
          />
          <CurrencySelector
            selectedCurrency={selectedCurrency}
            onChange={changeCurrency}
          />
          <ModeToggle />
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-800 p-4 mt-2 space-y-3">
          <NavLinks
            locale={locale}
            isMobile
            about={t("about")}
            contact={t("contact")}
          />
          <LanguageSelector
            selectedLang={selectedLang}
            onChange={changeLanguage}
          />
          <CurrencySelector
            selectedCurrency={selectedCurrency}
            onChange={changeCurrency}
          />
          <ModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const NavLinks = ({
  locale,
  isMobile = false,
  about,
  contact
}: {
  locale: string;
  isMobile?: boolean;
  about: string;
  contact: string;
}) => (
  <div className={`flex ${isMobile ? "flex-col space-y-3" : "space-x-6"}`}>
    <Link
      href={`/${locale}/about`}
      className="hover:text-gray-400 text-xl p-2 transition duration-200"
    >
      {about}
    </Link>
    <Link
      href={`/${locale}/contact`}
      className="hover:text-gray-400 text-xl p-2 transition duration-200"
    >
      {contact}
    </Link>
  </div>
);

const LanguageSelector = ({
  selectedLang,
  onChange
}: {
  selectedLang: string;
  onChange: (lang: string) => void;
}) => (
  <select
    value={selectedLang}
    onChange={(e) => onChange(e.target.value)}
    className="dark:bg-gray-900 dark:text-white bg-white text-gray-900 p-2 rounded border-white border-2"
  >
    {languages.map((lang) => (
      <option key={lang.code} value={lang.code}>
        {lang.label}
      </option>
    ))}
  </select>
);

const CurrencySelector = ({
  selectedCurrency,
  onChange
}: {
  selectedCurrency: string;
  onChange: (currency: CurrencyType) => void;
}) => (
  <select
    value={selectedCurrency}
    onChange={(e) => onChange(e.target.value as CurrencyType)}
    className="dark:bg-gray-900 dark:text-white bg-white text-gray-900 p-2 rounded border-white border-2"
  >
    {currencies.map((cur) => (
      <option key={cur} value={cur}>
        {cur}
      </option>
    ))}
  </select>
);
