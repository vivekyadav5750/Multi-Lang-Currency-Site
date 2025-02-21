"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { useAppDispatch } from "@/redux/hook";
import { setCurrency } from "@/redux/currencySlice";
import { CurrencyType } from "@/types";
import Cookies from "js-cookie";

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
  // const { currency } = useAppSelector((state) => state.currency);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("USD");
  
  const locale = useLocale();
  const router = useRouter();
  const dispatch = useAppDispatch();

  // Read cookies only once
  useEffect(() => {
    const lang = Cookies.get("language") || locale;
    const currency = Cookies.get("currency") || "USD";

    setSelectedLang(lang);
    setSelectedCurrency(currency as CurrencyType);

    // Store in Redux state
    dispatch(setCurrency(currency as CurrencyType));

    // Redirect to correct locale
    router.push(`/${lang}`);
  }, []);

  const changeLanguage = (newLang: string) => {
    setSelectedLang(newLang);
    Cookies.set("language", newLang, { expires: 365 });
    router.push(`/${newLang}`);
  };

  const changeCurrency = (newCurrency: CurrencyType) => {
    setSelectedCurrency(newCurrency);
    Cookies.set("currency", newCurrency, { expires: 365 });
    dispatch(setCurrency(newCurrency));
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Multi-Lang CMS</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <LanguageSelector selectedLang={selectedLang} onChange={changeLanguage} />
          <CurrencySelector selectedCurrency={selectedCurrency} onChange={changeCurrency} />
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-800 p-4 mt-2 space-y-3">
          <LanguageSelector selectedLang={selectedLang} onChange={changeLanguage} isMobile />
          <CurrencySelector selectedCurrency={selectedCurrency} onChange={changeCurrency} isMobile />
          <ModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/* --- Language Selector Component --- */
const LanguageSelector = ({
  selectedLang,
  onChange,
  isMobile = false
}: {
  selectedLang: string;
  onChange: (lang: string) => void;
  isMobile?: boolean;
}) => (
  <select
    value={selectedLang}
    onChange={(e) => onChange(e.target.value)}
    className={`bg-gray-${isMobile ? "700" : "800"} text-white p-2 rounded`}
  >
    {languages.map((lang) => (
      <option key={lang.code} value={lang.code}>
        {lang.label}
      </option>
    ))}
  </select>
);

/* --- Currency Selector Component --- */
const CurrencySelector = ({
  selectedCurrency,
  onChange,
  isMobile = false
}: {
  selectedCurrency: string;
  onChange: (currency: CurrencyType) => void;
  isMobile?: boolean;
}) => (
  <select
    value={selectedCurrency}
    onChange={(e) => onChange(e.target.value as CurrencyType)}
    className={`bg-gray-${isMobile ? "700" : "800"} text-white p-2 rounded`}
  >
    {currencies.map((cur) => (
      <option key={cur} value={cur}>
        {cur}
      </option>
    ))}
  </select>
);
