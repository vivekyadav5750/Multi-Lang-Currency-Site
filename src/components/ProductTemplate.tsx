"use client";

import { useAppSelector } from "@/redux/hook";
import { formatCurrency } from "@/utils/currencySymbols";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Product } from "@/types";

export default function ProductTemplate() {
  const t = useTranslations("product");
  const { currency: currCurrency } = useAppSelector((state) => state.currency);

  // Sample product data
  const product: Product = {
    id: 1,
    name: t("name"),
    description: t("description"),
    price: 99.99,
    image: "/images/headphone.jpg",
    inventory: 15
  };

  const recommendedProducts: Product[] = [
    {
      id: 2,
      name: t("recommended.0.name"),
      description: t("recommended.0.description"),
      price: 79.99,
      image: "/images/earbud.jpg",
      inventory: 8
    },
    {
      id: 3,
      name: t("recommended.1.name"),
      description: t("recommended.1.description"),
      price: 59.99,
      image: "/images/speaker.jpg",
      inventory: 12
    },
    {
      id: 4,
      name: t("recommended.2.name"),
      description: t("recommended.2.description"),
      price: 89.99,
      image: "/images/gamingheadset2.jpg",
      inventory: 5
    }
  ];

  return (
    <>
      <div className="container mx-auto px-6 py-10">
        {/* Main Product Section */}
        <div
          className={cn(
            "bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6"
          )}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={280}
            height={280}
            className="w-80 h-80 object-cover rounded-xl shadow-md"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {product.description}
            </p>
            <p className="text-2xl font-semibold mt-4 text-green-600">
              {t("price")}: {formatCurrency(product.price, currCurrency)}
            </p>
            <p
              className={cn(
                "mt-2 text-lg font-medium",
                product.inventory > 0 ? "text-green-500" : "text-red-500"
              )}
            >
              {t("inventory")}:{" "}
              {product.inventory > 0 ? product.inventory : t("outOfStock")}
            </p>
          </div>
        </div>

        {/* Recommended Products Section */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
          {t("recommendedTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={256}
                height={256}
                className="w-full h-72 object-cover rounded-lg shadow-sm"
              />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2">
                {item.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
              <p className="text-green-600 font-semibold mt-2">
                {t("price")}: {formatCurrency(item.price, currCurrency)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
