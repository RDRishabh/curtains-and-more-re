import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12" style={{ backgroundColor: '#F1ECE8' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* OUR COMPANY Section */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">OUR COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="/our-story" className="text-gray-600 hover:text-gray-900 text-sm">OUR STORY</a></li>
              <li><a href="/products" className="text-gray-600 hover:text-gray-900 text-sm">PRODUCTS</a></li>
              <li><a href="/curtain-headings" className="text-gray-600 hover:text-gray-900 text-sm">CURTAIN HEADINGS</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-gray-900 text-sm">BLOG</a></li>
            </ul>
          </div>

          {/* CONTACT US Section */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: <a href="mailto:Send us a message" className="hover:text-gray-900">Send us a message</a></li>
              <li>Phone: <a href="tel:469-372-5774" className="hover:text-gray-900">469 372 5774</a></li>
              <li>Hours: Mon-Fri: 8am-5pm (CST)</li>
            </ul>
          </div>

          {/* QUOTE Section */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">QUOTE</h3>
            <p className="text-sm text-gray-600 mb-4">
              Book your free measure and quote
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* ABOUT Section */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">ABOUT</h3>
            <p className="text-sm text-gray-600">
              Curtains and More - Made to order Blinds, Curtains and Shutters via our website.
            </p>
          </div>
        </div>

        {/* Copyright at bottom */}
        <div className="mt-12 text-center text-xs text-gray-500">
          Copyright © Curtains and More 2025
        </div>
      </div>
    </footer>
  );
}