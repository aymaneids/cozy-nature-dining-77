
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-nature-950 text-cream-100">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-medium mb-4">
              212 Mini Mall/
              <span className="text-accent">Coffee Bean</span>
            </h3>
            <p className="text-cream-300 max-w-md">
              Experience the perfect blend of rustic charm and culinary excellence
              in the heart of Forest Park. Join us for a memorable dining
              experience surrounded by nature.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-4">Hours</h4>
            <ul className="space-y-2 text-cream-300">
              <li>Monday: Closed</li>
              <li>Tuesday - Friday: 8am - 9pm</li>
              <li>Saturday: 8am - 10pm</li>
              <li>Sunday: 8am - 8pm</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-cream-300">
              <li>123 Forest Avenue</li>
              <li>Forest Park, OR 97123</li>
              <li>(123) 456-7890</li>
              <li>info@cozynature.com</li>
            </ul>
          </div>
        </div>

        <hr className="border-nature-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-cream-400 text-sm">
            © {new Date().getFullYear()} 212 Mini Mall/Coffee Bean. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-cream-400 hover:text-cream-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-cream-400 hover:text-cream-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-cream-400 hover:text-cream-100 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
