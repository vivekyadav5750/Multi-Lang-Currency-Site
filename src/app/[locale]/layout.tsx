import React, { Suspense } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme-provider";
import "./../globals.css";
import Providers from "@/redux/providers";
import { languageType } from "@/types";
import Error404 from "@/components/404-page";
import { Metadata } from "next";
import schemaData from "./_schema";
import Script from "next/script";

// Lazy-load client-side components
const Navbar = React.lazy(() => import("@/components/Navbar"));
const Footer = React.lazy(() => import("@/components/Footer"));

type paramsType = {
  locale: string;
};

export async function generateMetadata({
  params
}: {
  params: paramsType;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `Multi-Lang CMS | ${locale.toUpperCase()}`,
    description: "A multilingual CMS platform for global businesses.",
    keywords: "multilingual, CMS, global",
    openGraph: {
      title: `Multi-Lang CMS | ${locale.toUpperCase()}`,
      description: "A multilingual CMS platform for global businesses.",
      type: "website"
    },
    alternates: {
      canonical: "https://multi-lang-currency-site.vercel.app/"
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: paramsType;
}) {
  const { locale } = await params;

  // Ensure that the locale is valid
  if (!routing.locales.includes(locale as languageType)) {
    return (
      <html lang="en">
        <body>
          <Error404 />
        </body>
      </html>
    );
  }

  // Fetch localized messages
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Schema */}
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {/* Lazy-loaded Navbar */}
              <Suspense
                fallback={<div className="h-16 bg-gray-200 animate-pulse" />}
              >
                <Navbar />
              </Suspense>

              {/* Main content */}
              <main className="flex-grow container mx-auto p-4">
                {children}
              </main>

              {/* Lazy-loaded Footer */}
              <Suspense
                fallback={<div className="h-16 bg-gray-200 animate-pulse" />}
              >
                <Footer />
              </Suspense>
            </ThemeProvider>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
