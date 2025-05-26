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
        title: "Double Pinch Pleat Curtains",
        content: "These have two fabric folds gathered together to form each pleat, creating a more refined and contemporary look. They are suitable for both traditional and transitional homes and can work well with a variety of fabrics.",
        image: ""
      },
      {
        title: "Triple Pinch Pleats Curtains",
        content: "These feature three fabric folds per pleat, resulting in a fuller, more classic look that is often associated with luxury and formality. They are well-suited for traditional and formal settings and require more fabric than double pinch pleats.",
        image: ""
      },
      {
        title: "Single pleat Curtains",
        content: "Single Pleat curtain features a simple curtain heading style with a single fold or pleat along the top edge. This design offers a modern, streamlined look, making it a popular choice for both lined and unlined curtains, and especially suitable for patterned or heavy fabrics. Single pleat make them a good option for rooms with limited space. ",
        image: ""
      },
      {
        title: "Wave Curtains",
        content: "Wave curtains are a sleek and modern choice for window treatments, offering a flowing design that adds a touch of sophistication to any room. Wave curtains utilise a special flat tape sewn into the heading, adds a seamless layer.",
        image: ""
      },
      {
        title: "Eyelet Curtains",
        content: "Eyelet curtains are undoubtedly a contemporary and modern choice, and are likely the style of curtains you'd come by most often. Known for their simplicity, the term 'eyelet' refers to the metal loops at the top of the fabric which allows them to easily slide onto curtain poles.",
        image: ""
      },
      {
        title: "Tab Top Curtains",
        content: "Tab top curtains feature fabric loops at the top of the curtain, typically made from the same material as the main panel, that are designed to slip over a curtain rod or pole. This style provides a casual, relaxed look and is relatively simple to install.",
        image: ""
      },
      {
        title: "Cafe Curtains",
        content: "Cafe curtains are short, usually half-length curtains designed to cover the lower portion of a window, typically from the sill up to around the center of the window. They are commonly made from lighter materials like linen or voile, which allow natural light to filter through while still providing some privacy.",
        image: ""
      },
      {
        title: "Inverted Box Pleat Curtains",
        content: "Inverted box pleat curtains feature pleats that are hidden on the back of the curtain heading, creating a smooth, clean, and tailored look on the front. This style provides a more contemporary aesthetic compared to traditional pinch pleat curtains, which have pleats visible on the front",
        image: ""
      },
      {
        title: "Pencil Pleat Curtains",
        content: "Pencil pleat curtains feature a heading with tightly gathered folds, resembling a row of pencils. These folds are created by pulling cords or tapes sewn into the top of the curtain fabric. This style is popular for its simple, classic look and is suitable for a variety of decor styles, from traditional to modern.",
        image: ""
      }
    ],
    galleryImages: [
      { src: "/png/Image01.png", alt: "Curtain example 1" },
      { src: "/png/Image02.png", alt: "Curtain example 2" },
      { src: "/png/Image03.png", alt: "Curtain example 3" },
      { src: "/png/Image04.png", alt: "Curtain example 4" },
      { src: "/png/Image05.png", alt: "Curtain example 5" },
      { src: "/png/Image06.png", alt: "Curtain example 6" },
      { src: "/png/Image07.png", alt: "Curtain example 7" },
      { src: "/png/Image08.png", alt: "Curtain example 8" },
      { src: "/png/Image09.png", alt: "Curtain example 9" },
      { src: "/png/Image10.png", alt: "Curtain example 10" },
      { src: "/png/Image11.png", alt: "Curtain example 11" },
      { src: "/png/Image12.png", alt: "Curtain example 12" },
      { src: "/png/Image13.png", alt: "Curtain example 13" },
      { src: "/png/Image14.gif", alt: "Curtain example 14" },
      { src: "/png/Image15.png", alt: "Curtain example 15" },
      { src: "/png/Image16.png", alt: "Curtain example 16" },
      { src: "/png/Image17.png", alt: "Curtain example 17" },
      { src: "/png/Image18.png", alt: "Curtain example 18" },
      { src: "/png/Image19.png", alt: "Curtain example 19" },
      { src: "/png/Image20.png", alt: "Curtain example 20" },
      { src: "/png/Image21.png", alt: "Curtain example 21" },
      { src: "/png/Image22.png", alt: "Curtain example 22" },
      { src: "/png/Image23.png", alt: "Curtain example 23" },
      { src: "/png/Image24.png", alt: "Curtain example 24" },
      { src: "/png/Image25.png", alt: "Curtain example 25" },
    ]
  };

  // Data for blinds section
  const blindsData = {
    title: "SHUTTERS",
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
    title: "BLINDS",
    intro: [
      "Our inspired collections of fabrics, cushion covers, tiebacks, wall art and more look stunning in contemporary or period settings. We aim to create beautiful, enduring pieces for your home.",
      "We supply our comprehensive ranges of very high quality products directly to the home owners and interior designers in London. With over hundreds of lines and fabrics from cotton, linen, silk, velvet etc you will be spoilt for choice.",
      "For beautiful made to measure curtains in Harrow, Kenton, Pinner, Watford, Wembley, Northwood, Finchley, Edgware, Enfield, Hayes, Slough and around London, give us a call and see how we could help you."
    ],
    items: [
      {
        title: "Venetian Blinds",
        content: "Venetian blinds feature horizontal slats that can be tilted to control light and privacy. Available in aluminum, wood, or faux wood, they offer a clean, contemporary look for any window.",
        image: ""
      },
      {
        title: "Vertical Blinds",
        content: "Vertical blinds consist of vertical fabric or vinyl slats that can be rotated for light control. They're ideal for covering large windows and sliding glass doors with a sleek, contemporary look.",
        image: ""
      },
      {
        title: "Roller Blinds",
        content: "Roller blinds feature a simple design where fabric rolls around a tube at the top of the window. They provide a clean, streamlined look and are available in a wide range of fabrics from blackout to sheer.",
        image: ""
      },
      {
        title: "Roman Blinds",
        content: "Roman blinds fold up into horizontal pleats when raised. They combine the softness of curtains with the functionality of blinds, perfect for adding texture and warmth to any room.",
        image: ""
      },
      {
        title: "Cellular (Honeycomb) Shades",
        content: "Honeycomb blinds feature a unique cellular structure that traps air, providing excellent insulation. They're energy efficient and available in single, double, or triple cell designs for various insulation needs.",
        image: ""
      },
      {
        title: "Pleated Blinds",
        content: "Pleated blinds feature crisp pleats that create a clean, tailored appearance. Lightweight and versatile, they're excellent for skylights and uniquely shaped windows.",
        image: ""
      },
      {
        title: "Panel Track Blinds",
        content: "Panel track blinds consist of wide fabric panels that slide on a track system. They're perfect for large windows, sliding doors, or as room dividers, offering a modern, minimalist aesthetic.",
        image: ""
      },
      {
        title: "Skylight Blinds",
        content: "Bamboo blinds are made from natural materials like bamboo, jute, and reeds. They add organic texture and warmth to interiors while filtering light beautifully for a natural ambiance.",
        image: ""
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