// src/components/HeroSection.jsx
const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Fallback Color */}
      <div
        className="absolute inset-0 bg-[#f4f1ea] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/png/bg-cam.png')" }}
        aria-hidden="true"
      />

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

      {/* Hero Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide drop-shadow-md">
          CURTAINS AND MORE
        </h2>
        <p className="text-base md:text-xl tracking-widest uppercase drop-shadow-md">
          ELEVATE YOUR SPACE WITH ELEGANCE
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
