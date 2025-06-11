import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12" style={{ backgroundColor: '#F1ECE8' }}>
      <div className="max-w-6xl mx-auto px-4 font-quincy">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* OUR COMPANY Section */}
          <div className="flex-1">
            <h3 className="font-medium text-gray-800 mb-4">OUR COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="/our-story" className="text-gray-600 hover:text-gray-900 text-sm">OUR STORY</a></li>
              <li><a href="/projects" className="text-gray-600 hover:text-gray-900 text-sm">PROJECTS</a></li>
              {/* <li><a href="/curtain-headings" className="text-gray-600 hover:text-gray-900 text-sm">CURTAIN HEADINGS</a></li> */}
              <li><a href="/blog" className="text-gray-600 hover:text-gray-900 text-sm">BLOG</a></li>
            </ul>
          </div>
          
          {/* CONTACT US Section */}
          <div className="flex-1 md:mr-12">
            <h3 className="font-medium text-gray-800 mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="">Address: <span className="font-serif font-medium">Harrow, HA3 0LL, London</span></li>
              <li className="">Email: <a href="mailto:pooja@curtainsandmore.co.uk" className="hover:text-gray-900 font-serif font-medium">pooja@curtainsandmore.co.uk
              </a></li>
              <li>Phone: <a href="tel:+447590337823" className="hover:text-gray-900 font-serif font-medium">+44-7590337823</a></li>
              {/* <li className='font-semibold'>Hours: <span className="font-serif font-medium">Mon-Fri: 8am-5pm (CST)</span></li> */}
            </ul>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.instagram.com/curtainsandmoreuk" className="text-gray-600 hover:text-gray-900">
                <FaInstagram size={20} /> 
              </a>
              {/* <a href="https://www.facebook.com/curtainsandmoreuk" className="text-gray-600 hover:text-gray-900">
                <FaFacebook size={20} />
              </a> */}
            </div>
          </div>
          
          {/* QUOTE Section */}
          {/* <div className="flex-1">
            <h3 className="font-medium text-gray-800 mb-4">QUOTE</h3>
            <p className="text-sm text-gray-600 mb-4">
              Book your free measure and quote
            </p>
            
          </div> */}
          
          {/* ABOUT Section */}
          <div className="flex-1">
            <h3 className="font-medium text-gray-800 mb-4">ABOUT</h3>
            <p className="text-sm text-gray-600">
              Curtains and More.
              <ul>
                <li>
                  <Link to="/projects#project-curtains" className="text-gray-600 hover:text-gray-900 font-serif font-medium">
                    Bespoke Curtains
                  </Link>
                </li>
                <li>
                  <Link to="/projects#project-blinds" className="text-gray-600 hover:text-gray-900 font-serif font-medium">
                    Bespoke Shutters
                  </Link>
                </li>
                <li>
                  <Link to="/projects#project-shutters" className="text-gray-600 hover:text-gray-900 font-serif font-medium">
                    Bespoke Blinds
                  </Link>
                </li>
              </ul>
              Made-to-Measure for every space
            </p>
          </div>
        </div>
        
        {/* Copyright at bottom */}
        <div className="mt-12 text-center text-xs text-gray-500">
          Curtains and More @2025
        </div>
      </div>
    </footer>
  );
}