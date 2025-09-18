export interface DevelopmentImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface DevelopmentFeature {
  icon: string;
  title: string;
  description: string;
}

export interface DevelopmentAmenity {
  category: string;
  items: string[];
}

export interface DevelopmentSpecs {
  totalArea: string;
  units: string;
  floors: string;
  parking: string;
  completion: string;
  priceRange: string;
}

export interface Development {
  id: string;
  name: string;
  tagline: string;
  location: string;
  status: string;
  description: string;
  longDescription: string;
  heroImage: string;
  images: DevelopmentImage[];
  architecturalConcept: {
    title: string;
    description: string;
    principles: string[];
  };
  features: DevelopmentFeature[];
  amenities: DevelopmentAmenity[];
  specifications: DevelopmentSpecs;
  masterPlan: {
    description: string;
    highlights: string[];
  };
  sustainability: {
    title: string;
    features: string[];
  };
}

export const developmentsData: Development[] = [
  {
    id: "fairfield-residence",
    name: "Fairfield Residence",
    tagline: "Sophisticated Urban Living Redefined",
    location: "Lalud, Calapan City",
    status: "Design Phase",
    description:
      "Experience sophisticated urban living in our premium condominium development featuring modern amenities, stunning city views, contemporary design excellence, and smart home integration.",
    longDescription:
      "Fairfield Residence represents the pinnacle of contemporary urban living, where architectural excellence meets modern convenience. This premium condominium development is meticulously designed to offer residents an elevated lifestyle experience, featuring state-of-the-art amenities, breathtaking city views, and thoughtfully crafted living spaces that cater to the discerning urban professional.",
    heroImage: "/images/developments/fairfield/hero.jpg",
    images: [
      {
        id: "fairfield-1",
        src: "/images/developments/fairfield/exterior-1.jpg",
        alt: "Fairfield Residence Exterior View",
        caption: "Modern architectural facade with premium materials",
      },
      {
        id: "fairfield-2",
        src: "/images/developments/fairfield/interior-1.jpg",
        alt: "Luxury Living Room",
        caption: "Spacious living areas with floor-to-ceiling windows",
      },
      {
        id: "fairfield-3",
        src: "/images/developments/fairfield/amenities-1.jpg",
        alt: "Rooftop Pool",
        caption: "Infinity pool with panoramic city views",
      },
      {
        id: "fairfield-4",
        src: "/images/developments/fairfield/masterplan.jpg",
        alt: "Development Master Plan",
        category: "masterplan",
        caption: "Comprehensive development layout and design",
      },
      {
        id: "fairfield-5",
        src: "/images/developments/fairfield/concept-1.jpg",
        alt: "Architectural Concept",
        category: "concept",
        caption: "Modern minimalist design philosophy",
      },
      {
        id: "fairfield-6",
        src: "/images/developments/fairfield/interior-2.jpg",
        alt: "Modern Kitchen",
        category: "interior",
        caption: "Premium kitchen with Italian fixtures",
      },
    ],
    architecturalConcept: {
      title: "Modern Minimalist Excellence",
      description:
        "Our architectural vision embraces clean lines, open spaces, and natural light integration. The design philosophy centers on creating harmonious living environments that blend functionality with aesthetic sophistication.",
      principles: [
        "Maximized natural light through floor-to-ceiling windows",
        "Open-plan layouts for seamless living experiences",
        "Premium materials including marble, glass, and steel",
        "Sustainable design elements for energy efficiency",
        "Integration of smart home technology throughout",
      ],
    },
    features: [
      {
        icon: "BuildingOfficeIcon",
        title: "Premium Architecture",
        description: "Award-winning contemporary design",
      },
      {
        icon: "HomeIcon",
        title: "Smart Living",
        description: "Integrated smart home systems",
      },
      {
        icon: "SunIcon",
        title: "Natural Light",
        description: "Floor-to-ceiling windows",
      },
      {
        icon: "MapPinIcon",
        title: "Prime Location",
        description: "Strategic urban connectivity",
      },
    ],
    amenities: [
      {
        category: "Recreation & Wellness",
        items: [
          "Infinity Swimming Pool",
          "Fitness Center",
          "Yoga Studio",
          "Spa & Wellness Center",
          "Rooftop Garden",
        ],
      },
      {
        category: "Business & Social",
        items: [
          "Business Center",
          "Conference Rooms",
          "Co-working Spaces",
          "Event Hall",
          "Library Lounge",
        ],
      },
      {
        category: "Convenience",
        items: [
          "24/7 Concierge",
          "Valet Parking",
          "Shopping Arcade",
          "Café & Restaurant",
          "Laundry Service",
        ],
      },
      {
        category: "Security & Safety",
        items: [
          "24/7 Security",
          "CCTV Surveillance",
          "Access Control",
          "Fire Safety Systems",
          "Emergency Response",
        ],
      },
    ],
    specifications: {
      totalArea: "-",
      units: "-",
      floors: "-",
      parking: "-",
      completion: "-",
      priceRange: "-",
    },
    masterPlan: {
      description:
        "The master plan integrates residential towers with comprehensive amenities, creating a self-contained urban community that promotes both privacy and social interaction.",
      highlights: [
        "Two residential towers with optimal spacing for privacy",
        "Central amenity podium connecting both towers",
        "Landscaped gardens and water features throughout",
        "Dedicated retail and commercial spaces",
        "Multi-level parking with electric vehicle charging",
      ],
    },
    sustainability: {
      title: "Green Building Excellence",
      features: [
        "LEED Gold certification target",
        "Energy-efficient LED lighting systems",
        "Rainwater harvesting and recycling",
        "Solar panels for common area power",
        "Green roof systems and vertical gardens",
      ],
    },
  },
  {
    id: "sotera-township",
    name: "Sotera Township",
    tagline: "Complete Lifestyle Destination",
    location: "Salong, Calapan City",
    status: "Design Phase",
    description:
      "A complete lifestyle destination featuring residential towers, shopping mall, luxury hotel, fine dining restaurants, and scenic hills. Live, work, shop, all in one community.",
    longDescription:
      "Sotera Township is an ambitious mixed-use development that redefines integrated living. This comprehensive township combines residential excellence with commercial vibrancy, creating a self-sustaining community where residents can live, work, shop, and play without leaving the development. The project features multiple residential towers, a world-class shopping mall, luxury hotel accommodations, and premium dining establishments, all set against the backdrop of scenic hills and meticulously landscaped grounds.",
    heroImage: "/images/developments/sotera/hero.jpg",
    images: [
      {
        id: "sotera-1",
        src: "/images/developments/sotera/township-aerial.jpg",
        alt: "Sotera Township Aerial View",
        caption: "Complete township development with integrated facilities",
      },
      {
        id: "sotera-2",
        src: "/images/developments/sotera/sotera-towers.jpg",
        alt: "Sotera Towers",
        caption: "Premium residential towers with modern amenities",
      },
      {
        id: "sotera-3",
        src: "/images/developments/sotera/sotera-hotel.jpg",
        alt: "Sotera Hotel",
        caption: "Luxury hotel with world-class accommodations",
      },
      {
        id: "sotera-4",
        src: "/images/developments/sotera/sotera-mall.jpg",
        alt: "Sotera Mall",
        caption: "Premier shopping and entertainment destination",
      },
      {
        id: "sotera-5",
        src: "/images/developments/sotera/sotera-restaurant.jpg",
        alt: "Sotera Restaurant",
        caption: "Fine dining with panoramic township views",
      },
      {
        id: "sotera-6",
        src: "/images/developments/sotera/sotera-hills.jpg",
        alt: "Sotera Hills",
        caption: "Scenic hills with premium landscaping and nature trails",
      },
      {
        id: "sotera-7",
        src: "/images/developments/sotera/concept-mixed-use.jpg",
        alt: "Mixed-Use Concept",
        caption: "Integrated live-work-play township environment",
      },
    ],
    architecturalConcept: {
      title: "Integrated Township Design",
      description:
        "The architectural concept embraces the natural topography while creating distinct zones for residential, commercial, and hospitality functions. The design promotes walkability and community interaction through interconnected spaces and shared amenities.",
      principles: [
        "Harmonious integration with natural landscape",
        "Mixed-use zoning for optimal land utilization",
        "Pedestrian-friendly pathways and connections",
        "Sustainable urban planning principles",
        "Cultural and recreational space integration",
      ],
    },
    features: [
      {
        icon: "BuildingOfficeIcon",
        title: "Mixed-Use Development",
        description: "Residential, commercial & hospitality",
      },
      {
        icon: "HomeIcon",
        title: "Integrated Living",
        description: "Live, work, shop & play",
      },
      {
        icon: "MapPinIcon",
        title: "Strategic Location",
        description: "Prime accessibility & natural beauty",
      },
      {
        icon: "SunIcon",
        title: "Scenic Environment",
        description: "Hill views & premium landscaping",
      },
    ],
    amenities: [
      {
        category: "Residential Amenities",
        items: [
          "Multiple Swimming Pools",
          "Fitness Centers",
          "Children's Playground",
          "Jogging Trails",
          "Community Gardens",
        ],
      },
      {
        category: "Commercial Facilities",
        items: [
          "Shopping Mall",
          "Supermarket",
          "Restaurants & Cafés",
          "Banking Services",
          "Medical Clinic",
        ],
      },
      {
        category: "Hospitality Services",
        items: [
          "Luxury Hotel",
          "Conference Centers",
          "Event Venues",
          "Spa Services",
          "Fine Dining Restaurants",
        ],
      },
      {
        category: "Recreation & Culture",
        items: [
          "Community Center",
          "Library",
          "Art Gallery",
          "Amphitheater",
          "Sports Complex",
        ],
      },
    ],
    specifications: {
      totalArea: "-",
      units: "-",
      floors: "-",
      parking: "-",
      completion: "-",
      priceRange: "-",
    },
    masterPlan: {
      description:
        "The master plan creates distinct districts within the township, each with its unique character while maintaining seamless connectivity and shared infrastructure.",
      highlights: [
        "Residential district with multiple tower configurations",
        "Central commercial hub with shopping and dining",
        "Hospitality zone with luxury hotel and event facilities",
        "Recreational areas with parks and sports facilities",
        "Integrated transportation and parking systems",
      ],
    },
    sustainability: {
      title: "Sustainable Township Development",
      features: [
        "Green building standards across all structures",
        "Comprehensive waste management systems",
        "Renewable energy integration",
        "Water conservation and recycling programs",
        "Biodiversity preservation and enhancement",
      ],
    },
  },
  {
    id: "lazule-resort",
    name: "Lazule Resort",
    tagline: "Paradise Redefined",
    location: "Puerto Galera",
    status: "Design Phase",
    description:
      "Escape to paradise at our exclusive resort development offering world-class amenities, private beach access, championship golf course, and breathtaking natural beauty.",
    longDescription:
      "Lazule Resort represents the ultimate in tropical luxury living, where pristine natural beauty meets world-class hospitality. This exclusive resort development offers an unparalleled escape from the ordinary, featuring private beach access, championship golf facilities, and premium accommodations set within a breathtaking tropical paradise. Every element is designed to provide guests and residents with an extraordinary experience that celebrates the natural splendor of Puerto Galera while delivering the highest standards of luxury and service.",
    heroImage: "/images/developments/lazule/hero.jpg",
    images: [
      {
        id: "lazule-1",
        src: "/images/developments/lazule/beach-resort.jpg",
        alt: "Beachfront Resort View",
        caption: "Exclusive beachfront location with pristine waters",
      },
      {
        id: "lazule-2",
        src: "/images/developments/lazule/villa-interior.jpg",
        alt: "Luxury Villa Interior",
        caption: "Premium villa accommodations with ocean views",
      },
      {
        id: "lazule-3",
        src: "/images/developments/lazule/golf-course.jpg",
        alt: "Championship Golf Course",
        caption: "18-hole championship golf course with ocean views",
      },
      {
        id: "lazule-4",
        src: "/images/developments/lazule/spa-wellness.jpg",
        alt: "Spa and Wellness Center",
        caption: "World-class spa and wellness facilities",
      },
      {
        id: "lazule-5",
        src: "/images/developments/lazule/concept-tropical.jpg",
        alt: "Tropical Resort Concept",
        caption: "Harmonious integration with natural environment",
      },
      {
        id: "lazule-6",
        src: "/images/developments/lazule/dining-oceanview.jpg",
        alt: "Ocean View Dining",
        caption: "Fine dining with spectacular ocean views",
      },
    ],
    architecturalConcept: {
      title: "Tropical Luxury Integration",
      description:
        "The architectural philosophy embraces the natural tropical environment, creating structures that complement rather than compete with the stunning landscape. Traditional Filipino design elements are seamlessly integrated with contemporary luxury standards.",
      principles: [
        "Harmony with natural tropical landscape",
        "Traditional Filipino architectural influences",
        "Sustainable materials and construction methods",
        "Maximized ocean and nature views",
        "Climate-responsive design for tropical comfort",
      ],
    },
    features: [
      {
        icon: "SunIcon",
        title: "Tropical Paradise",
        description: "Pristine beachfront & crystal waters",
      },
      {
        icon: "HomeIcon",
        title: "Luxury Accommodations",
        description: "Premium villas & world-class service",
      },
      {
        icon: "BuildingOfficeIcon",
        title: "Championship Golf",
        description: "18-hole course by renowned architects",
      },
      {
        icon: "MapPinIcon",
        title: "Exclusive Location",
        description: "Private resort in paradise",
      },
    ],
    amenities: [
      {
        category: "Beach & Water Sports",
        items: [
          "Private Beach Access",
          "Water Sports Center",
          "Diving & Snorkeling",
          "Yacht Marina",
          "Beach Clubs",
        ],
      },
      {
        category: "Golf & Recreation",
        items: [
          "18-Hole Championship Golf Course",
          "Golf Academy",
          "Tennis Courts",
          "Fitness Center",
          "Hiking Trails",
        ],
      },
      {
        category: "Wellness & Spa",
        items: [
          "Luxury Spa",
          "Wellness Center",
          "Yoga Pavilion",
          "Meditation Gardens",
          "Health Clinic",
        ],
      },
      {
        category: "Dining & Entertainment",
        items: [
          "Fine Dining Restaurants",
          "Beach Bar & Grill",
          "Poolside Café",
          "Wine Cellar",
          "Entertainment Venues",
        ],
      },
    ],
    specifications: {
      totalArea: "-",
      units: "-",
      floors: "-",
      parking: "-",
      completion: "-",
      priceRange: "-",
    },
    masterPlan: {
      description:
        "The master plan preserves the natural beauty of the site while creating distinct zones for accommodation, recreation, and conservation, ensuring minimal environmental impact.",
      highlights: [
        "Beachfront villa clusters with private access",
        "Central resort facilities and amenities",
        "Championship golf course with ocean views",
        "Conservation areas for environmental protection",
        "Sustainable infrastructure and utilities",
      ],
    },
    sustainability: {
      title: "Environmental Stewardship",
      features: [
        "Marine conservation and protection programs",
        "Renewable energy systems throughout",
        "Sustainable water management and treatment",
        "Native vegetation preservation and restoration",
        "Carbon-neutral operations target",
      ],
    },
  },
];

// Sotera Township Sub-Properties
export interface SoteraProperty {
  id: string;
  name: string;
  type: "hotel" | "mall" | "restaurant" | "towers" | "hills";
  description: string;
  detailedDescription: string;
  features: string[];
  path: string;
  icon: string;
}

export const soteraProperties: SoteraProperty[] = [
  {
    id: "sotera-hotel",
    name: "Sotera Hotel",
    type: "hotel",
    description:
      "Luxury hospitality with world-class amenities and exceptional service standards",
    detailedDescription:
      "A premier 5-star hospitality destination featuring 250 elegantly appointed rooms and suites, each designed with contemporary Filipino aesthetics and modern conveniences. The hotel offers multiple dining venues, a world-class spa, state-of-the-art conference facilities, and panoramic views of the township and surrounding hills.",
    features: [
      "250 luxury rooms and suites with panoramic views",
      "Multiple fine dining restaurants and bars",
      "Full-service spa and wellness center",
      "Modern conference and event facilities",
      "Rooftop infinity pool and fitness center",
      "24/7 concierge and room service",
      "Business center and meeting rooms",
      "Valet parking and airport transfers",
    ],
    path: "/developments/sotera-township/hotel",
    icon: "BuildingOfficeIcon",
  },
  {
    id: "sotera-mall",
    name: "Sotera Mall",
    type: "mall",
    description:
      "Premier shopping and entertainment destination with over 200 retail outlets",
    detailedDescription:
      "A vibrant 5-level shopping complex spanning 150,000 square meters, featuring an impressive mix of international brands, local boutiques, and specialty stores. The mall includes a modern cinema complex, family entertainment center, food court with diverse dining options, and anchor department stores.",
    features: [
      "200+ retail stores and boutiques",
      "8-screen cinema complex with IMAX",
      "Expansive food court with 50+ dining options",
      "Family entertainment center and arcade",
      "Major department store anchors",
      "Outdoor plaza for events and festivals",
      "Multi-level parking for 2,000 vehicles",
      "Climate-controlled shopping environment",
    ],
    path: "/developments/sotera-township/mall",
    icon: "ShoppingBagIcon",
  },
  {
    id: "sotera-restaurant",
    name: "Sotera Restaurant",
    type: "restaurant",
    description:
      "Fine dining establishments featuring contemporary Filipino and international cuisine",
    detailedDescription:
      "A collection of premium dining venues offering diverse culinary experiences, from casual bistros to elegant fine dining restaurants. Each establishment features carefully curated menus by renowned chefs, showcasing both international flavors and authentic Filipino cuisine with modern presentations.",
    features: [
      "Multiple themed restaurants and cafes",
      "Private dining rooms for special occasions",
      "Outdoor terraces with scenic township views",
      "Wine cellar with premium international selections",
      "Live cooking stations and chef's table experiences",
      "Catering services for events and functions",
      "Farm-to-table fresh ingredient sourcing",
      "Specialized dietary and allergen-friendly menus",
    ],
    path: "/developments/sotera-township/restaurant",
    icon: "SparklesIcon",
  },
  {
    id: "sotera-towers",
    name: "Sotera Towers",
    type: "towers",
    description:
      "Premium residential towers offering modern urban living with resort-style amenities",
    detailedDescription:
      "Four distinctive residential towers ranging from 25 to 40 stories, housing over 800 meticulously designed units. Each tower features different unit configurations from studio apartments to 3-bedroom penthouses, all with floor-to-ceiling windows offering breathtaking views of the township and surrounding landscape.",
    features: [
      "800+ residential units across 4 towers",
      "Studio to 3-bedroom penthouse configurations",
      "Floor-to-ceiling windows with panoramic views",
      "Multiple swimming pools and aqua lounges",
      "State-of-the-art fitness centers and yoga studios",
      "Sky gardens and rooftop recreational areas",
      "24/7 security with smart access systems",
      "Retail spaces and convenience stores at ground level",
    ],
    path: "/developments/sotera-township/towers",
    icon: "BuildingOffice2Icon",
  },
  {
    id: "sotera-hills",
    name: "Sotera Hills",
    type: "hills",
    description:
      "Exclusive hillside villas offering privacy, luxury, and stunning panoramic views",
    detailedDescription:
      "An exclusive enclave of 120 luxury villas nestled in the elevated areas of the township, offering unparalleled privacy and breathtaking views. Each villa is uniquely designed with spacious layouts, private gardens, and premium finishes, creating a perfect blend of modern luxury and natural serenity.",
    features: [
      "120 exclusive hillside villas with private gardens",
      "Panoramic views of the township and Oriental Mindoro",
      "Custom architectural designs and premium finishes",
      "Private swimming pools and outdoor entertainment areas",
      "Gated community with exclusive access roads",
      "Nature trails and scenic walking paths",
      "Clubhouse with recreational facilities",
      "24/7 security and maintenance services",
    ],
    path: "/developments/sotera-township/hills",
    icon: "HomeModernIcon",
  },
];

export function getDevelopmentById(id: string): Development | undefined {
  return developmentsData.find((dev) => dev.id === id);
}

export function getSoteraPropertyById(id: string): SoteraProperty | undefined {
  return soteraProperties.find((property) => property.id === id);
}
