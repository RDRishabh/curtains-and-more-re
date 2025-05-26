import React from 'react';
import { Calendar, Smile, Users, Scissors, Leaf, Clock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center px-4 py-6">
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-gray-700" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-gray-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Over 1,500 Fabrics to Choose From",
      description: "A wide and curated selection of premium fabrics to suit every style, taste, and budget."
    },
    {
      icon: Smile,
      title: "Personalised Service",
      description: "We take the time to understand your needs and preferences, offering a truly tailored experience."
    },
    {
      icon: Users,
      title: "Your One-Stop Shop",
      description: "From consultation and design to delivery and installation—we take care of everything, seamlessly."
    },
    {
      icon: Scissors,
      title: "Expert Craftsmanship",
      description: "Every curtain and blind is custom-made by skilled hands, ensuring superior finish and fit."
    },
    {
      icon: Leaf,
      title: "Bespoke Design for Your Home",
      description: "Design ideas thoughtfully crafted to reflect your unique space."
    },
    {
      icon: Clock,
      title: "Timely Turnaround",
      description: "We value your time—expect efficient service and timely delivery, without compromising on quality."
    }
  ];

  return (
    <section className="bg-[#f3efeb] py-6 sm:py-6 lg:py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="  font-quincy grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              // description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;