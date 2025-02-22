import { CurrencyType } from "@/types";

// make function to get currency symbol
export const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "INR":
      return "₹";
    case "GBP":
      return "£";
    case "JPY":
      return "¥";
    case "AUD":
      return "A$";
    case "CAD":
      return "C$";
    case "CHF":
      return "Fr";
    case "CNY":
      return "¥";
    case "RUB":
      return "₽";
    case "KRW":
      return "₩";
    case "BRL":
      return "R$";
    default:
      return "$";
  }
};

// conversionRates
export const conversionRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.72,
  JPY: 109.67,
  INR: 85,
  AUD: 1.31,
  CAD: 1.25,
  CHF: 0.91,
  CNY: 6.47,
  RUB: 73.64,
  KRW: 1130.1,
  BRL: 5.27
};

// make function to format currency
export const formatCurrency = (
  value: number,
  currency: CurrencyType,
  dir = "ltr"
) => {
  // dir is for direction of currency symbol to handle arabic rtl
  //   price will be value * conversionRates[currency]
  const price = value * conversionRates[currency];
  if (dir === "rtl") {
    return `${price.toFixed(2)} ${getCurrencySymbol(currency)}`;
  }
  return `${getCurrencySymbol(currency)} ${price.toFixed(2)}`;
};
