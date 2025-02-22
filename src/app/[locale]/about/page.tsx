import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 py-12 px-5 sm:px-10 lg:px-20 ">
      <div className="max-w-7xl mx-auto text-center">
        {/* About Us Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">
          Ragi Mart was founded by two friends with a shared passion for
          healthy, sustainable, and natural food products. We believe in the
          power of wholesome, nutritious ingredients that are not only good for
          you but also for the planet. Our mission is to deliver high-quality
          ragi-based products that promote a healthy lifestyle.
        </p>

        {/* Founders' Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16 mb-12">
          {/* Founder 1 */}
          <div className="text-center lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="/images/tom.jpg"
              alt="Founder 1"
              width={160}
              height={160}
              className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"
            />

            <h3 className="text-xl font-semibold text-gray-900">
              Founder Name 1
            </h3>
            <p className="text-gray-600">Co-Founder & Product Lead</p>
          </div>

          {/* Founder 2 */}
          <div className="text-center lg:w-1/2">
            <Image
              src="/images/jerry.jpg"
              alt="Founder 1"
              width={160}
              height={160}
              className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Founder Name 2
            </h3>
            <p className="text-gray-600">Co-Founder & Marketing Lead</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <Button variant="ghost" className="p-4">
            <Link href="https://twitter.com">
              <Twitter className="w-6 h-6 text-blue-500" />
            </Link>
          </Button>
          <Button variant="ghost" className="p-4">
            <Link href="https://facebook.com">
              <Facebook className="w-6 h-6 text-blue-700" />
            </Link>
          </Button>

          <Button variant="ghost" className="p-4">
            <Link href="https://instagram.com">
              <Instagram className="w-6 h-6 text-pink-500" />
            </Link>
          </Button>
          <Button variant="ghost" className="p-4">
            <Link href="https://linkedin.com">
              <Linkedin className="w-6 h-6 text-blue-800" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}