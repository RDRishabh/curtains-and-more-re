// src/pages/OurStory.jsx
import HeroSection from '../components/HeroSectionGeneral';
import HowWeWorkSection from '../components/HowWeWork';
import ContactUsCTA from '../components/ContactUsCTA';
import ContactForm from '../components/ContactForm';

const HowWeWork = () => {
  return (
    <div>
      <HeroSection
        image="/png/contactuscta.png"
        text="How we work"
      />
      <HowWeWorkSection />
      <ContactUsCTA />
      <ContactForm />
      {/* Other sections will go here */}
    </div>
  );
};

export default HowWeWork;