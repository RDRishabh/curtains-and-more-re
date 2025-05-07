import React from "react"; // adjust the path as needed

const MeetTheFounder = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-quincy font-bold text-black mb-16">
          Meet the Founder
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Founder Image */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative z-10">
              <img
                src="/png/Aboutus.png" // replace with the actual image path
                alt="Pooja Bhutoria - Founder of Curtains & More"
                className="rounded-lg shadow-xl object-cover w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-200 rounded-lg -z-0"></div>
          </div>

          {/* Founder Description */}
          <div className="w-full lg:w-3/5 font-lovato">
            <h3 className="text-3xl font-quincy font-bold text-black mb-6">
              Pooja Bhutoria
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Meet Pooja Bhutoria, the creative force behind Curtains & More. A true connoisseur of interiors, 
              Pooja has an innate ability to blend style, function, and innovation to craft spaces that exude elegance. 
              Her journey in the world of design is fueled by a deep passion for aesthetics and an unwavering commitment to perfection.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With an expert eye for detail and years of hands-on experience, Pooja has transformed countless homes 
              with her bespoke curtain and blind solutions. She understands that window treatments aren't just accessories—they're 
              statement pieces that set the tone for an entire space.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Driven by the belief that every home deserves a touch of sophistication, Pooja's approach is highly personalized. 
              She works closely with clients to bring their vision to life—offering tailored guidance, expert insights, and a 
              stress-free experience from selection to installation.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With a reputation for excellence and an ever-growing portfolio of stunning transformations, Pooja and her team at 
              Curtains and More continue to redefine interiors—one window at a time.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="/portfolio"
                className="px-8 py-3 bg-black text-white font-medium font-quincy rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Portfolio
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-black text-black font-qunicy font-medium rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounder;
