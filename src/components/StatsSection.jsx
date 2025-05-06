import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StatCounter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
      let start = 0;
      const duration = 1500;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
    }
  }, [inView, end, hasStarted]);

  return (
    <div ref={ref} className="text-center px-2 sm:px-4">
      <div className="text-xl sm:text-2xl lg:text-3xl font-quincy text-[#bfa98c]">
        {count}
      </div>
      <div className="text-xs sm:text-sm lg:text-base font-lovato text-[#bfa98c] mt-1">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-[#f3efeb] py-10 sm:py-14 lg:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        <StatCounter end={10} label="years" />
        <StatCounter end={138} label="houses" />
        <StatCounter end={235} label="offices" />
        <StatCounter end={32} label="appartments" />
      </div>
    </section>
  );
};

export default StatsSection;
