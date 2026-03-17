"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TransportService = () => {
  return (
    <>
      <section className="relative w-full bg-[#f9f9f9] overflow-hidden">
        {/* Layer 1: Split Backgrounds at exactly 50/50 */}
        <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full">
          {/* Left Faded Background */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full opacity-15 grayscale">
            <Image
              src="/images/home/project-f.webp"
              alt="Transport texture"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right Solid Background */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
            <Image
              src="/images/home/transport-trucks.webp"
              alt="Heavy Haulage Truck"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Layer 2: Main Content Overlay */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-8 py-0 flex flex-col md:flex-row">
          {/* Left Column constrained to container width */}
          <div className="w-full md:w-1/2 flex pt-12 pb-12 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#0b1136] text-white p-12 lg:p-16 xl:p-20 w-full shadow-lg"
            >
              <p className="text-primary text-sm uppercase font-semibold tracking-widest mb-4">
                Our Core Services
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Reliable Freight <br className="hidden md:block" /> Transport
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 font-light">
                Freight transport offers great value to most businesses and
                contractors, considering that it guarantees a more efficient
                supply chain than other options and is very resilient to extreme
                logistical challenges. Whether you need bulk materials moved or
                heavy machinery hauled.
              </p>
              <Link
                href="/services"
                className="inline-block bg-white text-[#0b1136] font-bold text-sm tracking-widest py-4 px-10 uppercase hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Find More
              </Link>
            </motion.div>
          </div>

          {/* Right empty column layout spacer */}
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      </section>
    </>
  );
};

export default TransportService;
