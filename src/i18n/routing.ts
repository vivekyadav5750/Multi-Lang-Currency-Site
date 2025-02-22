import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { languageType } from "@/types";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [
    "en",
    "fr",
    "es",
    "ar",
    "de",
    "hi",
    "ja",
    "pt",
    "zh",
    "ru",
    "ko",
    "it"
  ] as languageType[],

  // Used when no locale matches
  defaultLocale: "en",

  // Ensure localized paths are generated for all routes
  localePrefix: "always",
  pathnames: {
    "/about": {
      en: "/about",
      fr: "/a-propos",
      es: "/acerca-de",
      ar: "/حول",
      de: "/über",
      hi: "/के-बारे-में",
      ja: "/約",
      pt: "/sobre",
      zh: "/关于",
      ru: "/о",
      ko: "/약",
      it: "/di"
    },
    "/contact": {
      en: "/contact",
      fr: "/contact",
      es: "/contacto",
      ar: "/اتصل",
      de: "/kontakt",
      hi: "/संपर्क",
      ja: "/接触",
      pt: "/contato",
      zh: "/联系",
      ru: "/контакт",
      ko: "/접촉",
      it: "/contatto"
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
