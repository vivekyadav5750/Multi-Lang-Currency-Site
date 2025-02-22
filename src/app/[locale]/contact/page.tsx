import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils"; // Assuming cn is exported from a utils file
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us | Multi-Lang CMS",
    description: "Get in touch with us for any inquiries or support."
  };
}

export default function ContactUs() {
  const t = useTranslations("contact");

  return (
    <div
      className={cn(
        "py-10 px-5 sm:px-10 lg:px-20 mt-16",
        "bg-gray-50 dark:bg-gray-900" // Light: gray-50, Dark: gray-900
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Contact Information */}
        <div className="lg:w-1/2 flex flex-col space-y-6 mb-10 lg:mb-0 lg:pr-16">
          <h2
            className={cn(
              "text-3xl font-bold",
              "text-gray-900 dark:text-gray-100" // Light: gray-900, Dark: gray-100
            )}
          >
            {t("title")}
          </h2>
          <p
            className={cn(
              "text-lg",
              "text-gray-600 dark:text-gray-300" // Light: gray-600, Dark: gray-300
            )}
          >
            {t("description")}
          </p>

          <div className="space-y-6">
            {/* Call Us */}
            <div className="flex items-start">
              <Phone
                className={cn(
                  "mr-3 w-6 h-6",
                  "text-orange-500 dark:text-orange-400" // Light: orange-500, Dark: orange-400
                )}
              />
              <div>
                <h3
                  className={cn(
                    "font-semibold",
                    "text-gray-900 dark:text-gray-100"
                  )}
                >
                  {t("call")}
                </h3>
                <p
                  className={cn(
                    "text-gray-600 dark:text-gray-300"
                  )}
                >
                  {t("phone")}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <MapPin
                className={cn(
                  "mr-3 w-6 h-6",
                  "text-red-500 dark:text-red-400" // Light: red-500, Dark: red-400
                )}
              />
              <div>
                <h3
                  className={cn(
                    "font-semibold",
                    "text-gray-900 dark:text-gray-100"
                  )}
                >
                  {t("Location")}
                </h3>
                <p
                  className={cn(
                    "text-gray-600 dark:text-gray-300"
                  )}
                >
                  {t("address")}
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-10">
              <Link href="https://twitter.com">
                <Twitter
                  className={cn(
                    "w-6 h-6",
                    "text-blue-500 dark:text-blue-400" // Light: blue-500, Dark: blue-400
                  )}
                />
              </Link>
              <Link href="https://facebook.com">
                <Facebook
                  className={cn(
                    "w-6 h-6",
                    "text-blue-500 dark:text-blue-400"
                  )}
                />
              </Link>
              <Link href="https://instagram.com">
                <Instagram
                  className={cn(
                    "w-6 h-6",
                    "text-red-500 dark:text-red-400"
                  )}
                />
              </Link>
              <Link href="https://linkedin.com">
                <Linkedin
                  className={cn(
                    "w-6 h-6",
                    "text-blue-500 dark:text-blue-400"
                  )}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className={cn(
            "lg:w-1/2 rounded-lg shadow-md p-8",
            "bg-white dark:bg-gray-800" // Light: white, Dark: gray-800
          )}
        >
          <form>
            <div className="mb-6">
              <Input
                type="text"
                placeholder={t("placeholderName")}
                className={cn(
                  "w-full p-3",
                  "bg-white dark:bg-gray-700",
                  "text-gray-900 dark:text-gray-100",
                  "border-gray-300 dark:border-gray-600"
                )}
              />
            </div>
            <div className="mb-6">
              <Input
                type="email"
                placeholder={t("placeholderEmail")}
                className={cn(
                  "w-full p-3",
                  "bg-white dark:bg-gray-700",
                  "text-gray-900 dark:text-gray-100",
                  "border-gray-300 dark:border-gray-600"
                )}
              />
            </div>
            <div className="mb-6">
              <Textarea
                placeholder={t("placeholderMessage")}
                className={cn(
                  "w-full p-3",
                  "bg-white dark:bg-gray-700",
                  "text-gray-900 dark:text-gray-100",
                  "border-gray-300 dark:border-gray-600"
                )}
              />
            </div>
            <Button
              type="submit"
              className={cn(
                "w-full py-3",
                "bg-purple-800 text-white",
                "dark:bg-purple-700 dark:hover:bg-purple-600" // Dark mode adjustments
              )}
            >
              {t("submitButton")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}