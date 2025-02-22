import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils"; // Assuming cn is exported from a utils file

export default function AboutUs() {
  const t = useTranslations("about");

  return (
    <div
      className={cn(
        "py-12 px-5 sm:px-10 lg:px-20",
        "bg-gray-50 dark:bg-gray-900" // Light: gray-50, Dark: gray-900
      )}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* About Us Heading */}
        <h2
          className={cn(
            "text-4xl font-bold mb-6",
            "text-gray-900 dark:text-gray-100" // Light: gray-900, Dark: gray-100
          )}
        >
          {t("title")}
        </h2>
        <p
          className={cn(
            "text-lg leading-relaxed max-w-4xl mx-auto mb-10",
            "text-gray-600 dark:text-gray-300" // Light: gray-600, Dark: gray-300
          )}
        >
          {t("history")}
        </p>

        {/* Founders' Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16 mb-12">
          {/* Founder 1 */}
          <div className="text-center lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="/images/tom.jpg"
              alt={t("founder1.title")} // Improved alt text for accessibility
              width={160}
              height={160}
              className={cn(
                "w-40 h-40 mx-auto rounded-full mb-4 shadow-lg",
                "dark:shadow-gray-700" // Dark mode shadow adjustment
              )}
            />
            <h3
              className={cn(
                "text-xl font-semibold",
                "text-gray-900 dark:text-gray-100"
              )}
            >
              {t("founder1.title")}
            </h3>
            <p className={cn("text-gray-600 dark:text-gray-300")}>
              {t("founder1.name")}
            </p>
          </div>

          {/* Founder 2 */}
          <div className="text-center lg:w-1/2">
            <Image
              src="/images/jerry.jpg"
              alt={t("founder2.title")} // Improved alt text for accessibility
              width={160}
              height={160}
              className={cn(
                "w-40 h-40 mx-auto rounded-full mb-4 shadow-lg",
                "dark:shadow-gray-700" // Dark mode shadow adjustment
              )}
            />
            <h3
              className={cn(
                "text-xl font-semibold",
                "text-gray-900 dark:text-gray-100"
              )}
            >
              {t("founder2.title")}
            </h3>
            <p className={cn("text-gray-600 dark:text-gray-300")}>
              {t("founder2.name")}
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <Button
            variant="ghost"
            className={cn(
              "p-4",
              "text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300" // Adjusted hover states
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
