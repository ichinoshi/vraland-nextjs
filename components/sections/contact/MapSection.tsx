"use client";

export default function MapSection() {
  return (
    <section className="relative h-96 w-full">
      <div className="absolute inset-0 bg-gray-200">
        {/* Replace with your actual map embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.1681029744195!2d121.18252930000001!3d13.401915700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bce8b9a1d1a561%3A0x96fa0f68bd3ab2dd!2sVRA%20Finance%20Co.%2C%20Inc.!5e0!3m2!1sen!2sph!4v1757567570828!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>
    </section>
  );
}
