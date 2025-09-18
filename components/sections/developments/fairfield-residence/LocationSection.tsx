"use client";

import { motion } from "framer-motion";

interface LocationSectionProps {
  developmentName: string;
  mapEmbedUrl: string;
}

export default function LocationSection({
  developmentName,
  mapEmbedUrl,
}: LocationSectionProps) {
  return (
    <section className="bg-background-primary">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-background-secondary overflow-hidden"
        >
          <div className="relative w-full h-96 lg:h-[500px]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${developmentName} Location Map`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
