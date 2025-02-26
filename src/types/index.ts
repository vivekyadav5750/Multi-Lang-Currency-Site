export type CurrencyType =
  | "USD"
  | "EUR"
  | "INR"
  | "GBP"
  | "JPY"
  | "AUD"
  | "CAD"
  | "CHF"
  | "CNY"
  | "RUB"
  | "KRW"
  | "BRL";

export type languageType =
  | "ar"
  | "de"
  | "en"
  | "es"
  | "fr"
  | "hi"
  | "it"
  | "ja"
  | "ko"
  | "pt"
  | "ru"
  | "zh";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  inventory: number;
}
