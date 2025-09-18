import { motion } from "framer-motion";
import {
  HomeIcon,
  BuildingOfficeIcon,
  MapIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: <HomeIcon className="w-8 h-8 text-accent-600" />,
    title: "Residential",
    description: "Luxury living spaces designed for modern lifestyles",
  },
  {
    icon: <BuildingOfficeIcon className="w-8 h-8 text-accent-600" />,
    title: "Commercial",
    description: "Premium office spaces for businesses of all sizes",
  },
  {
    icon: <MapIcon className="w-8 h-8 text-accent-600" />,
    title: "Location",
    description:
      "Prime locations in Calapan City's most desirable neighborhoods",
  },
  {
    icon: <BuildingStorefrontIcon className="w-8 h-8 text-accent-600" />,
    title: "Amenities",
    description: "World-class amenities for a complete living experience",
  },
];

export default function ProjectFeatures() {
  return (
    <section className="relative z-10 -mt-16 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex text-accent-700 justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
