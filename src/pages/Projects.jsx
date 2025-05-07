import React from 'react';
import HeroSection from '../components/HeroSectionGeneral';
import ProjectsSection from '../components/ProjectsSection';

const Projects = () => {
  // Data for curtains section
  const curtainsData = {
    title: "CURTAINS",
    intro: [
      "Our inspired collections of fabrics, cushion covers, tiebacks, wall art and more look stunning in contemporary or period settings. We aim to create beautiful, enduring pieces for your home.",
      "We supply our comprehensive ranges of very high quality products directly to the home owners and interior designers in London. With over hundreds of lines and fabrics from cotton, linen, silk, velvet etc you will be spoilt for choice.",
      "For beautiful made to measure curtains in Harrow, Kenton, Pinner, Watford, Wembley, Northwood, Finchley, Edgware, Enfield, Hayes, Slough and around London, give us a call and see how we could help you."
    ],
    items: [
      {
        title: "Rod Pocket Curtains",
        content: "Rod pocket curtains have a sewn in pocket at the top that slides directly onto the curtain rod. They create a gathered, casual look that works well in traditional and country style interiors.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Grommet Curtains",
        content: "Grommet curtains feature metal rings embedded directly into the curtain header. They create neat, even pleats and are easy to open and close. Perfect for modern and contemporary spaces.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Tab Top Curtains",
        content: "Tab top curtains have fabric loops or tabs at the top that slide over the curtain rod. They create a relaxed, informal look that's ideal for casual living spaces and countrystyle interiors.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Pleated Curtains",
        content: "Pleated curtains are designed with tailored folds sewn into the header. They create a formal, elegant appearance perfect for traditional and classic interior designs.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Eyelet Curtains",
        content: "Eyelet curtains feature metal rings embedded directly into the curtain header. Popular for their contemporary look and ease of use, they hang with deep, even folds and glide smoothly.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Sheer Curtains",
        content: "Sheer curtains are made from lightweight, semitransparent fabrics that allow light to filter through. They provide privacy while still letting in natural light, perfect as standalone curtains or layered under heavier drapes.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Blackout Curtains",
        content: "Blackout curtains are lined with special material designed to block out light, reduce noise, and provide insulation. Ideal for bedrooms, home theaters, or any room where light control is important.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Thermal Curtains",
        content: "Thermal curtains are designed with insulating properties to keep heat in during winter and out during summer. They help reduce energy costs and create a more comfortable living environment.",
        image: "/png/Aboutus.png"
      }
    ],
    galleryImages: [
      { src: "/png/Aboutus.png", alt: "Curtain example 1" },
      { src: "/png/Aboutus.png", alt: "Curtain example 2" },
      { src: "/png/Aboutus.png", alt: "Curtain example 3" },
      { src: "/png/Aboutus.png", alt: "Curtain example 4" },
      { src: "/png/Aboutus.png", alt: "Curtain example 5" },
      { src: "/png/Aboutus.png", alt: "Curtain example 6" }
    ]
  };

  // Data for blinds section
  const blindsData = {
    title: "BLINDS",
    intro: [
      "Our inspired collections of fabrics, cushion covers, tiebacks, wall art and more look stunning in contemporary or period settings. We aim to create beautiful, enduring pieces for your home.",
      "We supply our comprehensive ranges of very high quality products directly to the home owners and interior designers in London. With over hundreds of lines and fabrics from cotton, linen, silk, velvet etc you will be spoilt for choice.",
      "For beautiful made to measure curtains in Harrow, Kenton, Pinner, Watford, Wembley, Northwood, Finchley, Edgware, Enfield, Hayes, Slough and around London, give us a call and see how we could help you."
    ],
    items: [
      {
        title: "Wood Shutters",
        content: "Wood shutters offer a timeless, elegant look with exceptional durability. Made from premium hardwoods, they provide excellent light control and insulation while adding value to your home.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Composite/Faux Wood Shutters",
        content: "Composite shutters combine the beauty of wood with enhanced durability and moisture resistance. Perfect for bathrooms, kitchens, or humid environments where real wood might warp.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Vinyl Shutters",
        content: "Vinyl shutters offer excellent durability and moisture resistance at an affordable price point. Easy to clean and maintain, they're ideal for high traffic areas and homes with children or pets.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Plantation Shutters",
        content: "Plantation shutters feature wide louvers that allow maximum light and visibility when open. Their classic, Southern inspired design adds architectural interest and increases home value.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Café Style Shutters",
        content: "Café style shutters cover only the bottom portion of windows, offering privacy while still allowing plenty of natural light. Perfect for street level windows in urban homes.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Full Height Shutters",
        content: "Full height shutters cover the entire window from top to bottom. They provide maximum privacy and light control while creating a clean, unified look for your windows.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Tier on Tier Shutters",
        content: "Tier on tier shutters feature independent top and bottom panels that can be opened separately. This design offers maximum flexibility for light control and privacy throughout the day.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Solid Panel Shutters",
        content: "Solid panel shutters create a dramatic, traditional look while providing complete privacy and excellent insulation. Ideal for period properties and bedrooms requiring total darkness.",
        image: "/png/Aboutus.png"
      }
    ],
    galleryImages: [
      { src: "/png/Aboutus.png", alt: "Blinds example 1" },
      { src: "/png/Aboutus.png", alt: "Blinds example 2" },
      { src: "/png/Aboutus.png", alt: "Blinds example 3" },
      { src: "/png/Aboutus.png", alt: "Blinds example 4" },
      { src: "/png/Aboutus.png", alt: "Blinds example 5" },
      { src: "/png/Aboutus.png", alt: "Blinds example 6" }
    ]
  };

  // Data for shutters section
  const shuttersData = {
    title: "SHUTTERS",
    intro: [
      "Our inspired collections of fabrics, cushion covers, tiebacks, wall art and more look stunning in contemporary or period settings. We aim to create beautiful, enduring pieces for your home.",
      "We supply our comprehensive ranges of very high quality products directly to the home owners and interior designers in London. With over hundreds of lines and fabrics from cotton, linen, silk, velvet etc you will be spoilt for choice.",
      "For beautiful made to measure curtains in Harrow, Kenton, Pinner, Watford, Wembley, Northwood, Finchley, Edgware, Enfield, Hayes, Slough and around London, give us a call and see how we could help you."
    ],
    items: [
      {
        title: "Venetian Blinds",
        content: "Venetian blinds feature horizontal slats that can be tilted to control light and privacy. Available in aluminum, wood, or faux wood, they offer a clean, contemporary look for any window.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Vertical Blinds",
        content: "Vertical blinds consist of vertical fabric or vinyl slats that can be rotated for light control. They're ideal for covering large windows and sliding glass doors with a sleek, contemporary look.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Roller Blinds",
        content: "Roller blinds feature a simple design where fabric rolls around a tube at the top of the window. They provide a clean, streamlined look and are available in a wide range of fabrics from blackout to sheer.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Roman Blinds",
        content: "Roman blinds fold up into horizontal pleats when raised. They combine the softness of curtains with the functionality of blinds, perfect for adding texture and warmth to any room.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Honeycomb/Cellular Blinds",
        content: "Honeycomb blinds feature a unique cellular structure that traps air, providing excellent insulation. They're energy efficient and available in single, double, or triple cell designs for various insulation needs.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Pleated Blinds",
        content: "Pleated blinds feature crisp pleats that create a clean, tailored appearance. Lightweight and versatile, they're excellent for skylights and uniquely shaped windows.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Panel Track Blinds",
        content: "Panel track blinds consist of wide fabric panels that slide on a track system. They're perfect for large windows, sliding doors, or as room dividers, offering a modern, minimalist aesthetic.",
        image: "/png/Aboutus.png"
      },
      {
        title: "Bamboo or Woven Wood Blinds",
        content: "Bamboo blinds are made from natural materials like bamboo, jute, and reeds. They add organic texture and warmth to interiors while filtering light beautifully for a natural ambiance.",
        image: "/png/Aboutus.png"
      }
    ],
    galleryImages: [
      { src: "/png/Aboutus.png", alt: "Shutters example 1" },
      { src: "/png/Aboutus.png", alt: "Shutters example 2" },
      { src: "/png/Aboutus.png", alt: "Shutters example 3" },
      { src: "/png/Aboutus.png", alt: "Shutters example 4" },
      { src: "/png/Aboutus.png", alt: "Shutters example 5" },
      { src: "/png/Aboutus.png", alt: "Shutters example 6" }
    ]
  };

  return (
    <>
      <HeroSection
        image="/png/ProjectsHeroSection.jpg"
        text="Projects"
      />
      
      <ProjectsSection {...curtainsData} />
      <ProjectsSection {...blindsData} />
      <ProjectsSection {...shuttersData} />
    </>
  );
};

export default Projects;