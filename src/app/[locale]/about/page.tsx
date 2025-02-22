import React, { Suspense } from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

// Lazy load the FoundersSection component
const FoundersSection = React.lazy(
  () => import("@/components/FoundersSection")
);

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us | Multi-Lang CMS",
    description: "Learn about our company history and founders."
  };
}

export default function AboutUs() {
  const t = useTranslations("about");

  return (
    <div
      className={cn(
        "py-12 px-5 sm:px-10 lg:px-20",
        "bg-gray-50 dark:bg-gray-900"
      )}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* About Us Heading */}
        <h2
          className={cn(
            "text-4xl font-bold mb-6",
            "text-gray-900 dark:text-gray-100"
          )}
        >
          {t("title")}
        </h2>
        <p
          className={cn(
            "text-lg leading-relaxed max-w-4xl mx-auto mb-10",
            "text-gray-600 dark:text-gray-300"
          )}
        >
          {t("history")}
        </p>

        {/* Lazy Founder Section */}
        <Suspense fallback={<div className="h-16 bg-gray-200 animate-pulse" />}>
          <FoundersSection />
        </Suspense>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <Button
            variant="ghost"
            className={cn(
              "p-4",
              "text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
            )}
            asChild
          >
            <Link href="https://twitter.com" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "p-4",
              "text-blue-700 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400"
            )}
            asChild
          >
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "p-4",
              "text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-300"
            )}
            asChild
          >
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "p-4",
              "text-blue-800 dark:text-blue-600 hover:text-blue-900 dark:hover:text-blue-500"
            )}
            asChild
          >
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
