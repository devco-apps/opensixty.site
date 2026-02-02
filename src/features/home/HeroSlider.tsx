"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import { motion, AnimatePresence, Variants } from "framer-motion";
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
    description: "Building the foundation for tomorrow.",
    color: "bg-blue-900",
    link: "/services/construction-infrastructure",
    duration: 2.1,
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
    color: "bg-blue-900",
    link: "/services/transport-logistics",
    duration: 1.7,
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
    color: "bg-blue-900",
    link: "/services/commodity-broking",
    duration: 1.3,
    images: [
      "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558583055-d7ac00b1adca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=1000&auto=format&fit=crop",
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

  useEffect(() => {
    // Cycle categories every 6 seconds
    const interval = setInterval(() => {
      setTargetCategoryIndex((prev) => (prev + 1) % SLIDER_DATA.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
      className="w-full h-[100dvh] md:h-[60vh] min-h-[500px] flex flex-col md:flex-row overflow-hidden bg-black"
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
                  <div className="absolute inset-0 bg-black/30 z-10" />{" "}
                  {/* Darken for text readability */}
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
                    <div className="h-1 w-20 bg-white/80 mb-4" />
                  </h2>
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
    </motion.div>
  );
};

export default HeroSlider;
