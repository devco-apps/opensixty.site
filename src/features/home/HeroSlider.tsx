"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WireButton from "@/components/buttons/WireButton";

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
    description: "Expert infrastructure developers.",
    color: "bg-blue-900",
    link: "/services/construction-infrastructure",
    duration: 2.1,
    images: [
      "/images/slider/construct-1.webp",
      "/images/slider/construct-2.webp",
      "/images/slider/construct-3.webp",
    ],
  },
  {
    id: "transport",
    title: "TRANSPORT",
    description: "Reliable, efficient and professional.",
    color: "bg-blue-900",
    link: "/services/transport-logistics",
    duration: 1.7,
    images: [
      "/images/slider/transport-1.webp",
      "/images/slider/transport-2.webp",
      "/images/slider/transport-3.webp",
    ],
  },
  {
    id: "commodities",
    title: "COMMODITIES",
    description: "Your partner for sustainable growth.",
    color: "bg-blue-900",
    link: "/services/commodity-broking",
    duration: 1.3,
    images: [
      "/images/slider/commodity-1.webp",
      "/images/slider/commodity-2.webp",
      "/images/slider/commodity-3.webp",
    ],
  },
];

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

const HeroSlider = () => {
  // Main driver for the category cycle (Construction -> Transport -> Commodities)
  const [targetCategoryIndex, setTargetCategoryIndex] = useState(0);

  // Individual column states (to allow staggering the transition)
  // Each number represents the category index that column is currently showing
  const [columnCategoryIndices, setColumnCategoryIndices] = useState([0, 0, 0]);

  // Navigation Handlers
  const handleNext = () => {
    setTargetCategoryIndex((prev) => (prev + 1) % SLIDER_DATA.length);
  };

  const handlePrev = () => {
    setTargetCategoryIndex(
      (prev) => (prev - 1 + SLIDER_DATA.length) % SLIDER_DATA.length,
    );
  };

  useEffect(() => {
    // Cycle categories every 6 seconds
    const interval = setInterval(() => {
      setTargetCategoryIndex((prev) => (prev + 1) % SLIDER_DATA.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [targetCategoryIndex]); // Reset timer on user interaction

  useEffect(() => {
    // When target category changes, update columns sequentially with a stagger delay
    const delays = [0, 200, 400]; // Stagger delays in ms
    const timeouts: NodeJS.Timeout[] = [];

    delays.forEach((delay, colIndex) => {
      const timeout = setTimeout(() => {
        setColumnCategoryIndices((prev) => {
          const next = [...prev];
          // Only update if it's different to avoid unnecessary renders
          if (next[colIndex] !== targetCategoryIndex) {
            next[colIndex] = targetCategoryIndex;
            return next;
          }
          return prev;
        });
      }, delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [targetCategoryIndex]);

  return (
    <motion.div
      className="w-full h-dvh md:h-[60vh] min-h-[500px] flex flex-col md:flex-row overflow-hidden bg-black relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {[0, 1, 2].map((colIndex) => {
        const categoryIndex = columnCategoryIndices[colIndex];
        const category = SLIDER_DATA[categoryIndex];
        // Use the image corresponding to the column index
        // Ensure we handle cases where images array might be shorter than 3 safely
        const imageSrc =
          category.images[colIndex % category.images.length] ||
          category.images[0];

        return (
          <motion.div
            key={colIndex} // Stable key for the column structure
            className="relative flex-1 w-full md:w-auto md:h-full group overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-white/10 last:border-0"
            variants={sectionVariants}
          >
            {/* Background Images with Crossfade */}
            <div className="absolute inset-0 w-full h-full">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`${category.id}-${colIndex}`} // Key changes when category changes
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }} // Standard transition duration
                  className="absolute inset-0 w-full h-full"
                >
                  <div
                    className={`absolute inset-0 ${category.color} opacity-40 mix-blend-multiply z-10`}
                  />
                  {/* Darken for text readability */}
                  <div className="absolute inset-0 bg-black/45 z-10" />{" "}
                  <Image
                    src={imageSrc}
                    alt={category.title}
                    fill
                    className="object-cover"
                    priority // Prioritize all hero images
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Overlay - Only visible for the first segment */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12 pb-20">
              {colIndex === 0 && (
                <motion.div
                  key={`${category.id}-text`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 uppercase">
                    {category.title}
                  </h2>
                  <div className="h-1 w-20 bg-primary/80 mb-4" />
                  <p className="text-white/90 text-lg font-medium max-w-xs mb-8">
                    {category.description}
                  </p>
                  <WireButton text="Read More" link={category.link} />
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-30 flex items-center gap-6 text-white">
        {/* Arrow Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            // className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-secondary transition-colors duration-300 cursor-pointer"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/80 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/80 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-4 font-mono text-lg font-medium tracking-widest text-white">
          <span>0{targetCategoryIndex + 1}</span>
          <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden relative">
            <motion.div
              key={targetCategoryIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="h-full bg-primary"
            />
          </div>
          <span className="">0{SLIDER_DATA.length}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSlider;
