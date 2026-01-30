"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

/**
 * HeroSlider Component
 *
 * To update the content of this slider:
 * 1. Modify the `SLIDER_DATA` array below.
 * 2. Each object represents a column/section.
 * 3. `images` array should contain valid image URLs.
 * 4. `color` is a fallback/overlay tailwind class.
 * 5. Ensure external image domains are added to `next.config.ts`.
 */

// Data structure for the slider content
const SLIDER_DATA = [
  {
    id: "construction",
    title: "CONSTRUCTION",
    description: "Building the foundation for tomorrow.",
    color: "bg-red-600", // Fallback/Overlay color
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590986475596-51e0692afc75?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: "transport",
    title: "TRANSPORT",
    description: "Moving the world forward efficiently.",
    color: "bg-green-600",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: "commodities",
    title: "COMMODITIES",
    description: "Essential resources for global growth.",
    color: "bg-blue-600",
    images: [
      "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558583055-d7ac00b1adca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=1000&auto=format&fit=crop",
    ],
  },
];

const HeroSlider = () => {
  // State to track current image index for each section independently
  // We use an array where index matches SLIDER_DATA index
  const [currentIndices, setCurrentIndices] = useState([0, 0, 0]);

  useEffect(() => {
    // Set up independent intervals for each section to cycle images
    // We offset them slightly so they don't all change exactly at the same time for a more dynamic feel
    const intervals = SLIDER_DATA.map((_, sectionIndex) => {
      const delay = 4000 + sectionIndex * 1000; // 4s, 5s, 6s intervals

      return setInterval(() => {
        setCurrentIndices((prev) => {
          const newIndices = [...prev];
          newIndices[sectionIndex] =
            (newIndices[sectionIndex] + 1) %
            SLIDER_DATA[sectionIndex].images.length;
          return newIndices;
        });
      }, delay);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  // Container variants for staggering the entrance of the 3 sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Section variants for sliding in/fading in
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="w-full h-[80vh] min-h-[600px] flex flex-col md:flex-row overflow-hidden bg-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {SLIDER_DATA.map((section, sectionIndex) => (
        <motion.div
          key={section.id}
          className="relative flex-1 h-full min-h-[33vh] md:min-h-full group overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-white/10 last:border-0"
          variants={sectionVariants}
        >
          {/* Background Images with Crossfade */}
          <div className="absolute inset-0 w-full h-full">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`${section.id}-${currentIndices[sectionIndex]}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 w-full h-full"
              >
                <div
                  className={`absolute inset-0 ${section.color} opacity-40 mix-blend-multiply z-10`}
                />
                <div className="absolute inset-0 bg-black/30 z-10" />{" "}
                {/* Darken for text readability */}
                <Image
                  src={section.images[currentIndices[sectionIndex]]}
                  alt={section.title}
                  fill
                  className="object-cover"
                  priority={sectionIndex === 0} // Prioritize first section images
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12 pb-20">
            <motion.div
              key={`${section.id}-text-${currentIndices[sectionIndex]}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 uppercase">
                {section.title}
              </h2>
              <div className="h-1 w-20 bg-white/80 mb-4" />
              <p className="text-white/90 text-lg font-medium max-w-xs">
                {section.description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroSlider;
