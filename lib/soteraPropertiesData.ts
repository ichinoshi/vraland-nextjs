import { soteraProperties } from "./developmentsData";

export interface SoteraPropertyForSlider {
  id: string;
  name: string;
  tagline: string;
  location: string;
  description: string;
  heroImage: string;
  path: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  highlights: string[];
  specifications: {
    units?: string;
    size?: string;
    floors?: string;
    completion?: string;
  };
  priceRange: {
    from: string;
    to?: string;
    currency: string;
  };
  type: string;
}

// Enhanced property-specific features with better icons and descriptions
const getPropertyFeatures = (propertyId: string) => {
  switch (propertyId) {
    case "sotera-hotel":
      return [
        {
          icon: "HomeIcon",
          title: "Luxury Suites",
          description:
            "250 elegantly appointed rooms and suites with panoramic views",
        },
        {
          icon: "SunIcon",
          title: "Spa & Wellness",
          description:
            "Full-service spa and wellness center with premium treatments",
        },
        {
          icon: "BuildingOfficeIcon",
          title: "Conference",
          description:
            "State-of-the-art conference facilities and event venues",
        },
        {
          icon: "MapPinIcon",
          title: "Fine Dining",
          description:
            "Multiple restaurants featuring contemporary Filipino cuisine",
        },
      ];

    case "sotera-mall":
      return [
        {
          icon: "BuildingOfficeIcon",
          title: "Retail Stores",
          description: "200+ premium retail outlets and international brands",
        },
        {
          icon: "SunIcon",
          title: "Cinema Complex",
          description:
            "8-screen cinema with IMAX and premium viewing experience",
        },
        {
          icon: "HomeIcon",
          title: "Food Court",
          description:
            "Expansive dining area with 50+ diverse culinary options",
        },
        {
          icon: "MapPinIcon",
          title: "Entertainment",
          description: "Family entertainment center with arcade and activities",
        },
      ];

    case "sotera-restaurant":
      return [
        {
          icon: "SunIcon",
          title: "Fine Dining",
          description:
            "Contemporary Filipino and international cuisine experiences",
        },
        {
          icon: "HomeIcon",
          title: "Private Rooms",
          description: "Exclusive private dining rooms for special occasions",
        },
        {
          icon: "BuildingOfficeIcon",
          title: "Wine Cellar",
          description:
            "Premium international wine collection and sommelier service",
        },
        {
          icon: "MapPinIcon",
          title: "Scenic Views",
          description:
            "Outdoor terraces with panoramic township and hill views",
        },
      ];

    case "sotera-towers":
      return [
        {
          icon: "HomeIcon",
          title: "Residential",
          description: "800+ modern units from studios to 3-bedroom penthouses",
        },
        {
          icon: "SunIcon",
          title: "Sky Gardens",
          description:
            "Rooftop recreational areas and infinity pools with city views",
        },
        {
          icon: "BuildingOfficeIcon",
          title: "Smart Living",
          description: "Advanced home automation and security systems",
        },
        {
          icon: "MapPinIcon",
          title: "Amenities",
          description: "Fitness centers, yoga studios, and retail spaces",
        },
      ];

    case "sotera-hills":
      return [
        {
          icon: "HomeIcon",
          title: "Luxury Villas",
          description: "120 exclusive hillside villas with private gardens",
        },
        {
          icon: "SunIcon",
          title: "Panoramic Views",
          description:
            "Breathtaking views of township and Oriental Mindoro landscape",
        },
        {
          icon: "BuildingOfficeIcon",
          title: "Private Pools",
          description:
            "Individual swimming pools and outdoor entertainment areas",
        },
        {
          icon: "MapPinIcon",
          title: "Gated Community",
          description: "Exclusive access with 24/7 security and nature trails",
        },
      ];

    default:
      return [
        {
          icon: "BuildingOfficeIcon",
          title: "Premium",
          description: "World-class amenities and facilities",
        },
        {
          icon: "HomeIcon",
          title: "Modern",
          description: "Contemporary design and architecture",
        },
        {
          icon: "SunIcon",
          title: "Lifestyle",
          description: "Enhanced living experience",
        },
        {
          icon: "MapPinIcon",
          title: "Location",
          description: "Prime township location",
        },
      ];
  }
};

// Enhanced descriptions for each property
const getEnhancedDescription = (
  propertyId: string,
  originalDescription: string
) => {
  switch (propertyId) {
    case "sotera-hotel":
      return "Experience luxury hospitality at its finest with world-class amenities, exceptional service standards, and breathtaking township views in our premier 5-star hotel destination.";

    case "sotera-mall":
      return "Discover the ultimate shopping and entertainment destination featuring over 200 premium retail outlets, dining experiences, and family entertainment in a modern climate-controlled environment.";

    case "sotera-restaurant":
      return "Indulge in exceptional culinary experiences featuring contemporary Filipino and international cuisine, with multiple themed restaurants, private dining, and scenic outdoor terraces.";

    case "sotera-towers":
      return "Embrace modern urban living in our premium residential towers offering sophisticated amenities, smart home technology, and resort-style facilities with stunning panoramic views.";

    case "sotera-hills":
      return "Retreat to exclusive hillside luxury in our gated villa community, featuring custom-designed homes, private pools, and unparalleled privacy with breathtaking natural surroundings.";

    default:
      return originalDescription;
  }
};

// Get enhanced property data with all new fields
const getEnhancedPropertyData = (propertyId: string) => {
  const baseData = {
    highlights: [] as string[],
    specifications: {},
    priceRange: { from: "N/A", currency: "₱" },
  };

  switch (propertyId) {
    case "sotera-hotel":
      return {
        ...baseData,
        highlights: [
          "250 luxury rooms and suites with panoramic views",
          "Full-service spa and wellness center",
          "Multiple fine dining restaurants",
          "State-of-the-art conference facilities"
        ],
        specifications: {
          units: "N/A",
          completion: "N/A",
          size: "12,000 sqm"
        },
        priceRange: {
          from: "N/A",
          to: "N/A",
          currency: "₱"
        }
      };

    case "sotera-mall":
      return {
        ...baseData,
        highlights: [
          "200+ premium retail outlets and international brands",
          "8-screen cinema complex with IMAX technology",
          "50+ diverse dining options in food court",
          "Family entertainment center with arcade"
        ],
        specifications: {
          units: "N/A",
          completion: "N/A",
          size: "45,000 sqm"
        },
        priceRange: {
          from: "N/A",
          to: "N/A",
          currency: "₱"
        }
      };

    case "sotera-restaurant":
      return {
        ...baseData,
        highlights: [
          "Contemporary Filipino and international cuisine",
          "Private dining rooms for special occasions",
          "Premium wine cellar with sommelier service",
          "Scenic outdoor terraces with panoramic views"
        ],
        specifications: {
          units: "N/A",
          completion: "N/A",
          size: "2,500 sqm"
        },
        priceRange: {
          from: "N/A",
          to: "N/A",
          currency: "₱"
        }
      };

    case "sotera-towers":
      return {
        ...baseData,
        highlights: [
          "800+ modern units from studios to 3-bedroom penthouses",
          "Rooftop infinity pools with city views",
          "Advanced home automation and security systems",
          "Fitness centers, yoga studios, and retail spaces"
        ],
        specifications: {
          units: "N/A",
          completion: "N/A",
          size: "25-120 sqm"
        },
        priceRange: {
          from: "N/A",
          to: "N/A",
          currency: "₱"
        }
      };

    case "sotera-hills":
      return {
        ...baseData,
        highlights: [
          "120 exclusive hillside villas with private gardens",
          "Breathtaking views of township and Oriental Mindoro",
          "Individual swimming pools and entertainment areas",
          "24/7 gated community security with nature trails"
        ],
        specifications: {
          units: "N/A",
          completion: "N/A",
          size: "200-500 sqm"
        },
        priceRange: {
          from: "N/A",
          to: "N/A",
          currency: "₱"
        }
      };

    default:
      return baseData;
  }
};

// Transform Sotera properties for slider use
export const getSoteraPropertiesForSlider = (): SoteraPropertyForSlider[] => {
  return soteraProperties.map((property) => {
    const enhancedData = getEnhancedPropertyData(property.id);
    return {
      id: property.id,
      name: property.name,
      tagline: `${
        property.type.charAt(0).toUpperCase() + property.type.slice(1)
      } Experience`,
      location: "Salong, Calapan City",
      description: getEnhancedDescription(property.id, property.description),
      heroImage: `/images/developments/sotera/sotera-${property.type}.jpg`,
      path: property.path,
      features: getPropertyFeatures(property.id),
      type: property.type,
      ...enhancedData,
    };
  });
};

// Export individual properties for easy access
export const soteraHotel = getSoteraPropertiesForSlider().find(
  (p) => p.id === "sotera-hotel"
);
export const soteraMall = getSoteraPropertiesForSlider().find(
  (p) => p.id === "sotera-mall"
);
export const soteraRestaurant = getSoteraPropertiesForSlider().find(
  (p) => p.id === "sotera-restaurant"
);
export const soteraTowers = getSoteraPropertiesForSlider().find(
  (p) => p.id === "sotera-towers"
);
export const soteraHills = getSoteraPropertiesForSlider().find(
  (p) => p.id === "sotera-hills"
);

// Export all properties
export const allSoteraProperties = getSoteraPropertiesForSlider();
