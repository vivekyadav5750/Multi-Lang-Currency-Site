import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="bg-gray-50 py-10 px-5 sm:px-10 lg:px-20 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Contact Information */}
        <div className="lg:w-1/2 flex flex-col space-y-6 mb-10 lg:mb-0 lg:pr-16">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Feel free to reach out to us for any queries or assistance.
          </p>

          <div className="space-y-6">
            {/* Call Us */}
            <div className="flex items-start">
              <Phone className="text-orange-500 mr-3 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-600">
                  1 (234) 567-891, 1 (234) 987-654
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <MapPin className="text-red-500 mr-3 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">
                  121 Rock Street, 21 Avenue, New York, NY 92103-9000
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start">
              <Clock className="text-blue-500 mr-3 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-gray-900">Business Hours</h3>
                <p className="text-gray-600">
                  Mon – Fri: 10 am – 8 pm
                  <br />
                  Sat, Sun: Closed
                </p>
              </div>
            </div>

            {/* social link / icon to connect */}
            {/* Social Media Links */}
            <div className="flex  space-x-10">
                <Link href="https://twitter.com">
                    <Twitter className="w-6 h-6 text-blue-500" />
                </Link>
                <Link href="https://facebook.com">
                    <Facebook className="w-6 h-6 text-blue-500" />
                </Link>
                <Link href="https://instagram.com">
                    <Instagram className="w-6 h-6 text-red-500" />
                </Link>
                <Link href="https://linkedin.com">
                    <Linkedin className="w-6 h-6 text-blue-500" />
                </Link>
            </div>
       
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 bg-white rounded-lg shadow-md p-8">
          <form>
            <div className="mb-6">
              <Input
                type="text"
                placeholder="Enter your Name"
                className="w-full p-3"
              />
            </div>
            <div className="mb-6">
              <Input
                type="email"
                placeholder="Enter a valid email address"
                className="w-full p-3"
              />
            </div>
            <div className="mb-6">
              <Textarea placeholder="Your Message" className="w-full p-3" />
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-800 text-white py-3"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}