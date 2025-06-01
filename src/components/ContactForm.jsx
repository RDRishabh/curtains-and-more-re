import React, { useState } from 'react';

export default function ContactForm({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace this URL with your deployed Apps Script web app URL
    const BACKEND_URL = 'https://script.google.com/macros/s/AKfycbx5s96jS_TqrTF_xnQQlvd1uDNPLizqAaz0CHE-8LCgM6OXHupjnFfyxkkr_lTVOhHMHA/exec';

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });

      // Clear form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        company: '',
        interest: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id={id} className="w-full max-w-6xl mx-auto pt-16 px-4 relative font-quincy">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="19" y="0" width="2" height="40" fill="black" />
          <path d="M10 40 C10 30 30 30 30 40 L30 60 C30 70 10 70 10 60 Z" fill="black" />
        </svg>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-serif mb-2 text-gray-900">Have an Idea? Let's Discuss.</h2>
          {/* <h3 className="text-4xl font-serif mb-6 text-gray-900">Let's Discuss.</h3> */}
          <p className="text-gray-700 mb-1">Thank you for getting in touch.</p>
          <p className="text-gray-700 mb-1">Kindly fill the form, have a great day!.</p>
        </div>

        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500" />
              <select name="country" value={formData.country} onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 bg-white">
                {/* <option value="" disabled>Country</option> */}
                <option value="uk">United Kingdom</option>
                {/* <option value="other">Other</option> */}
              </select>
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500" />
              <select name="interest" value={formData.interest} onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 bg-white">
                <option value="" disabled>Interested in</option>
                <option value="curtains">Curtains</option>
                <option value="blinds">Blinds</option>
                <option value="blinds">Shutters</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="w-full mb-6">
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="3" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 resize-none"></textarea>
            </div>

            {submitStatus && (
              <div className={`mb-4 p-3 rounded ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'}`}>
                {submitStatus.message}
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className={`py-2 px-10 transition-colors duration-300 ${isSubmitting ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400 text-gray-700 cursor-pointer'}`}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-24 text-8xl font-bold text-gray-100 opacity-50 select-none drop-shadow-lg">
        <img src="/png/contactus.png" alt="Contact Us" />
      </div>
    </div>
  );
}