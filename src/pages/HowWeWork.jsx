// src/pages/OurStory.jsx
import HeroSection from '../components/HeroSectionGeneral';
import HowWeWorkSection from '../components/HowWeWork';
import ContactUsCTA from '../components/ContactUsCTA';
import ContactForm from '../components/ContactForm';

const HowWeWork = () => {
  return (
    <div>
      <HeroSection
        image="https://res.cloudinary.com/dxaycpvto/image/upload/v1748617771/Image19_y1ulz6.png"
        text="How we work"
      />
      <HowWeWorkSection />
      <ContactUsCTA />
      <ContactForm id="contact" />
      {/* Other sections will go here */}
    </div>
  );
};

export default HowWeWork;