import React from 'react';
import { ClipboardList, MapPin, Hand, Ruler, Cog, Truck } from 'lucide-react';

const HowWeWorkSection = () => {
  const workSteps = [
    {
      icon: <ClipboardList className="h-8 w-8" />,
      title: "ENQUIRE",
      description: "Enquire with us through online form or calling / emailing us."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "VISIT",
      description: "We see you at our Decor Studio and understand your specific requirements, overall decor you would like for your home."
    },
    {
      icon: <Hand className="h-8 w-8" />,
      title: "CHOOSE",
      description: "We help you with design services - helping you choose the right fabric depending on your other decor, light settings, colour etc."
    },
    {
      icon: <Ruler className="h-8 w-8" />,
      title: "MEASURE",
      description: "We visit your home to get the exact measurements, discuss options and ensure that you are happy with your selection."
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "PROCESS",
      description: "Our skilled workman apply their art to get your order ready."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "DELIVERY",
      description: "Finally delivering / installation of your finished products."
    }
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-medium text-center mb-16">HOW WE WORK</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {workSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4">
              {step.icon}
            </div>
            <h3 className="font-bold text-lg mb-3">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWorkSection;