// src/pages/OurStory.jsx
import HeroSection from '../components/HeroSectionGeneral';
import AboutUsSection from '../components/AboutUsSection';
import MeetTheFounder from '../components/MeetTheFounder';

const OurStory = () => {
  return (
    <div>
      <HeroSection
        image="https://res.cloudinary.com/dxaycpvto/image/upload/v1748617778/Image01_k1vh8m.png"
        text="About Us"
      />
      <AboutUsSection />
      <MeetTheFounder />
      {/* Other sections will go here */}
    </div>
  );
};

export default OurStory;