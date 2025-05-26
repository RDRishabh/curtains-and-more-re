import React from 'react';
import { Mail, MessageCircle, Hand, Scissors, Truck } from 'lucide-react';

const HowWeWorkSection = () => {
  const workSteps = [
    {
      icon: <Mail className="h-12 w-12 text-[#bfa98c] mb-4" />,
      title: "1. Enquire",
      description: "Get in touch through our online form, phone or email—whatever's most convenient for you."
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-[#bfa98c] mb-4" />,
      title: "2. Consult",
      description: "We discuss your requirements and provide a clear idea of the cost—either in person or over a call."
    },
    {
      icon: <Hand className="h-12 w-12 text-[#bfa98c] mb-4" />,
      title: "3. Select and Measure",
      description: "With our expert design guidance, select your ideal fabric and finish, then we take exact measurements at your home"
    },
    {
      icon: <Scissors className="h-12 w-12 text-[#bfa98c] mb-4" />,
      title: "4. Process",
      description: "Our skilled craftsmen hand-finish your order"
    },
    {
      icon: <Truck className="h-12 w-12 text-[#bfa98c] mb-4" />,
      title: "5. Installation",
      description: "We professionally install your custom-made curtains or blinds"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-quincy text-center text-[#bfa98c] mb-12">
        HOW WE WORK
      </h2>
        {/* First row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {workSteps.slice(0, 3).map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-quincy text-lg text-[#2e2e2e] mb-3">{step.title}</h3>
              <p className="font-lovato text-sm text-[#444] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Second row - 2 items centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            {workSteps.slice(3, 5).map((step, index) => (
              <div key={index + 3} className="flex flex-col items-center text-center px-4">
                <div className="mb-4">{step.icon}</div>
                <h3 className="font-quincy text-lg text-[#2e2e2e] mb-3">{step.title}</h3>
                <p className="font-lovato text-sm text-[#444] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;