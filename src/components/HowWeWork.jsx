import React from 'react';
import { ClipboardList, MapPin, Hand, Ruler, Cog, Truck } from 'lucide-react';

const HowWeWorkSection = () => {
  const workSteps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-[#bfa98c]" />,
      title: "ENQUIRE",
      description: "Enquire with us through online form or calling / emailing us."
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#bfa98c]" />,
      title: "VISIT",
      description: "We see you at our Decor Studio and understand your specific requirements, overall decor you would like for your home."
    },
    {
      icon: <Hand className="h-8 w-8 text-[#bfa98c]" />,
      title: "CHOOSE",
      description: "We help you with design services - helping you choose the right fabric depending on your other decor, light settings, colour etc."
    },
    {
      icon: <Ruler className="h-8 w-8 text-[#bfa98c]" />,
      title: "MEASURE",
      description: "We visit your home to get the exact measurements, discuss options and ensure that you are happy with your selection."
    },
    {
      icon: <Cog className="h-8 w-8 text-[#bfa98c]" />,
      title: "PROCESS",
      description: "Our skilled workman apply their art to get your order ready."
    },
    {
      icon: <Truck className="h-8 w-8 text-[#bfa98c]" />,
      title: "DELIVERY",
      description: "Finally delivering / installation of your finished products."
    }
  ];

  return (
    <section className=" py-14 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-quincy text-center text-[#bfa98c] mb-12">
        HOW WE WORK
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {workSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center px-2 sm:px-4">
            <div className="mb-4">{step.icon}</div>
            <h3 className="font-quincy text-lg sm:text-xl text-[#2e2e2e] mb-2">{step.title}</h3>
            <p className="font-lovato text-sm sm:text-base text-[#444]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWorkSection;
