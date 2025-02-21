import { format, Locale } from "date-fns";
import {
  enUS,
  fr,
  de,
  es,
  zhCN,
  ja,
  ar,
  ru,
  pt,
  hi,
  ko,
  it
} from "date-fns/locale";

// Map locales to date-fns locale objects
const localesMap: Record<string, Locale> = {
  en: enUS,
  fr: fr,
  de: de,
  es: es,
  zh: zhCN,
  ja: ja,
  ar: ar,
  ru: ru,
  pt: pt,
  hi: hi,
  ko: ko,
  it: it
};

// Function to format date based on locale
export const formatLocalizedDate = (
  locale: string,
  date: Date = new Date()
): string => {
  return format(date, "PPPP", { locale: localesMap[locale] || enUS });
};
