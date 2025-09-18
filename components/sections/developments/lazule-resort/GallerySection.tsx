"use client";

import { motion } from "framer-motion";
import ImageGallery from "@/components/gallery/ImageGallery";

interface Image {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

interface GallerySectionProps {
  images: Image[];
}

export default function GallerySection({ images }: GallerySectionProps) {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Resort <span className="text-accent-600">Gallery</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover the breathtaking beauty and luxury amenities of our tropical paradise
          </p>
        </motion.div>

        <ImageGallery images={images} />
      </div>
    </section>
  );
}
