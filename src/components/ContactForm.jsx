import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 relative font-quincy">
      {/* Decorative pendant light */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="19" y="0" width="2" height="40" fill="black" />
          <path d="M10 40 C10 30 30 30 30 40 L30 60 C30 70 10 70 10 60 Z" fill="black" />
        </svg>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-12">
        {/* Left section with text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-serif mb-2 text-gray-900">Have an idea</h2>
          <h3 className="text-4xl font-serif mb-6 text-gray-900">Let's discuss</h3>
          
          <p className="text-gray-700 mb-1">Thank you for getting in touch.</p>
          <p className="text-gray-700 mb-1">Kindly.</p>
          <p className="text-gray-700">Fill the form, have a great day.</p>
          
          {/* Decorative "contact us" text */}
          <div className="mt-24 text-8xl font-bold text-gray-100 opacity-50 select-none hidden md:block">
            <img src="co" alt="" />
          </div>
        </div>
        
        {/* Right section with form */}
        <div className="w-full md:w-1/2">
          <div className="contact-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Name field */}
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>
              
              {/* Email field */}
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>
              
              {/* Phone field */}
              <div className="w-full">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>
              
              {/* Country dropdown */}
              <div className="w-full">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 bg-white"
                >
                  <option value="" disabled>Country</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              {/* Company field */}
              <div className="w-full">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>
              
              {/* Interest dropdown */}
              <div className="w-full">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 bg-white"
                >
                  <option value="" disabled>Interested in</option>
                  <option value="curtains">Curtains</option>
                  <option value="blinds">Blinds</option>
                  <option value="furnishings">Soft Furnishings</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            {/* Message field - full width */}
            <div className="w-full mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="3"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 resize-none"
              ></textarea>
            </div>
            
            {/* Submit button */}
            <div 
              onClick={handleSubmit}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-10 transition-colors duration-300 inline-block cursor-pointer"
            >
              Submit
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile version of decorative text */}
      <div className="mt-8 text-6xl font-bold text-gray-100 opacity-50 select-none md:hidden text-center">
        contact us
      </div>
    </div>
  );
}