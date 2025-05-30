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
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617778/Image01_k1vh8m.png", alt: "Curtain example 1" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617778/Image02_ea316k.png", alt: "Curtain example 2" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617777/Image03_slxmkb.png", alt: "Curtain example 3" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617740/Image04_e6tqej.png", alt: "Curtain example 4" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617777/Image05_blngmi.png", alt: "Curtain example 5" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617776/Image06_nv3nk1.png", alt: "Curtain example 6" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617776/Image07_nyo4mt.png", alt: "Curtain example 7" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617775/Image08_rqcnjg.png", alt: "Curtain example 8" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617774/Image09_wnzjon.png", alt: "Curtain example 9" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617778/Image10_lgmro9.png", alt: "Curtain example 10" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617773/Image11_d4dva0.png", alt: "Curtain example 11" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617764/Image12_grhkxl.png", alt: "Curtain example 12" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617767/Image13_qan31g.png", alt: "Curtain example 13" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617768/Image15_nogsjt.png", alt: "Curtain example 15" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617766/Image16_fyox3u.png", alt: "Curtain example 16" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617770/Image17_psv8an.png", alt: "Curtain example 17" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617767/Image18_al2sna.png", alt: "Curtain example 18" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617771/Image19_y1ulz6.png", alt: "Curtain example 19" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617772/Image20_rpkh8d.png", alt: "Curtain example 20" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617770/Image21_kmvyyj.png", alt: "Curtain example 21" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617770/Image22_z2llnz.png", alt: "Curtain example 22" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617770/Image23_splw9x.png", alt: "Curtain example 23" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617771/Image24_avyy77.png", alt: "Curtain example 24" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748617772/Image25_x7xudb.png", alt: "Curtain example 25" },
    ]
  };

  // Data for blinds section
  const blindsData = {
    title: "SHUTTERS",
    intro: [
      "Shutters are solid window coverings, typically made of wood, vinyl, or composite materials, that consist of a frame with adjustable slats or louvres. These slats can be tilted to control the amount of light and air entering a room, offering privacy and light control. Shutters can be installed internally or externally and are often used for decoration, security, or protection against the elements."],
    items: [
      {
        title: "Plantation Shutters",
        content: "A popular style known for their wide, adjustable slats and classic look.",
        image: ""
      },
      {
        title: "Cafe Style Shutters",
        content: "Cover the lower half of the window, offering privacy while allowing light in.",
        image: ""
      },
      {
        title: "Austin shutters",
        content: "Transform your home with the luxury and elegance of a real wood shutter. Our made to measure Austin shutters are skilfully hand-made by quality craftsmen.",
        image: ""
      },
      {
        title: "Dulwich Stutters",
        content: "Perfect for all windows in your home and ideal for your kitchen or bathroom. The Dulwich shutter is made from PVC that is water resistant and can be finished in any colour from our contemporary range. This product is also suitable for areas that see a high volume of traffic thanks to its durable make up. Dulwich Shutters are made from dense PVC that is mortise and tenon joined for ultimate stability and strength.",        
        image: ""
      },
      {
        title: "Newport shutters",
        content: "We are delighted to introduce our Newport Shutter. This premium product is made with wood from the Poplar tree; a dense and extremely durable hardwood which, when painted, gives a beautifully luxurious finish. Newport is available in our full range of painted colours including the custom colour option.",
        image: ""
      }
    ],
    galleryImages: [
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614904/s01_rrmlyr.webp", alt: "Shutters example 1" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614904/s02_eooamh.jpg", alt: "Shutters example 2" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614904/s03_ec8kgj.jpg", alt: "Shutters example 3" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614904/s04_cssunp.webp", alt: "Shutters example 4" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614905/s05_inywwy.jpg", alt: "Shutters example 5" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614905/s06_tjlqee.webp", alt: "Shutters example 6" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614905/s07_utxgv5.webp", alt: "Shutters example 7" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614905/s08_cvqlhq.webp", alt: "Shutters example 8" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614905/s09_z2gs7c.webp", alt: "Shutters example 9" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614905/s10_f9nxwt.jpg", alt: "Shutters example 10" }
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
        content: "Skylight blinds are designed to cover skylights and roof windows, lanterns etc providing light control, temperature regulation, and privacy. They help manage the amount of sunlight entering a room, reducing glare and preventing overheating while still allowing natural light to filter in. Key features and benefits.",
        image: ""
      }
    ],
    galleryImages: [
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614898/b01_nbtvmt.jpg", alt: "Blinds example 1" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614897/b02_fnh00n.jpg", alt: "Blinds example 2" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614898/b03_qj3gvw.webp", alt: "Blinds example 3" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614897/b04_trk8pz.jpg" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614898/b05_nerrgl.jpg", alt: "Blinds example 5" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614898/b06_as8utp.jpg", alt: "Blinds example 6" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614899/b07_afidjh.jpg", alt: "Blinds example 7" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614896/b08_p7rzgp.jpg", alt: "Blinds example 8" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614896/b09_z99qiz.jpg", alt: "Blinds example 9" },
      { src: "https://res.cloudinary.com/dxaycpvto/image/upload/v1748614897/b10_tmyqp2.jpg", alt: "Blinds example 10" }
    ]
  };

  return (
    <>
      <HeroSection
        image="https://res.cloudinary.com/dxaycpvto/image/upload/v1748617770/Image17_psv8an.png"
        text="Projects"
      />
      
      <ProjectsSection {...curtainsData} />
      <ProjectsSection {...blindsData} />
      <ProjectsSection {...shuttersData} />
    </>
  );
};

export default Projects;