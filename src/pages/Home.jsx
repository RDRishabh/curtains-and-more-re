// src/pages/Home.jsx
import HeroSection from '../components/HeroSection';
import WhyUsSection from '../components/WhyUsSection';
import AboutUsSection from '../components/AboutUsSection';
import StatsSection from '../components/StatsSection';
import HowWeWorkSection from '../components/HowWeWork';
import GoogleReviewer from '../components/GoogleReviewer';
import WorkLocations from '../components/WorkLocations';
import ContactUsCTA from '../components/ContactUsCTA';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyUsSection />
      <AboutUsSection />
      <StatsSection />
      <HowWeWorkSection />
      <GoogleReviewer />
      <WorkLocations />
      <ContactUsCTA />
      <ContactForm />
      {/* Other sections will go here */}
    </div>
  );
};

export default Home;