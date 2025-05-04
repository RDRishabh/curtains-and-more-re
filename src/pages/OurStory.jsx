// src/pages/OurStory.jsx
import HeroSection from '../components/HeroSectionGeneral';
import AboutUsSection from '../components/AboutUsSection';
import MeetTheFounder from '../components/MeetTheFounder';

const OurStory = () => {
  return (
    <div>
      <HeroSection
        image="/png/contactuscta.png"
        text="About Us"
      />
      <AboutUsSection />
      <MeetTheFounder />
      {/* Other sections will go here */}
    </div>
  );
};

export default OurStory;