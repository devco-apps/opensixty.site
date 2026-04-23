"use client";

import { useState, useEffect, useCallback } from "react";

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
 * 3. `images` array should contain valid image URLs (3 recommended — one per column).
 * 4. `color` is a fallback/overlay tailwind class.
 * 5. Ensure external image domains are added to `next.config.ts`.
 *
 * Responsive behaviour:
 * - Mobile  (<md): Single full-screen slide, swipe/tap arrows to cycle categories.
 *                  Only the active category is shown — no stacked panels.
 * - Desktop (≥md): Three side-by-side columns, each showing a different image of
 *                  the active category with a staggered crossfade transition.
 */

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const SLIDER_DATA = [
  {
    id: "construction",
    title: "CONSTRUCTION",
    description: "Expert infrastructure developers.",
    color: "bg-blue-900",
    link: "/services/construction-infrastructure",
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
    images: [
      "/images/slider/commodity-1.webp",
      "/images/slider/commodity-2.webp",
      "/images/slider/commodity-3.webp",
    ],
  },
];

const AUTOPLAY_INTERVAL = 6000; // ms

// ---------------------------------------------------------------------------
// Framer Motion variants
// ---------------------------------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const HeroSlider = () => {
  /** Index of the category the user/autoplay is targeting */
  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * Per-column displayed category index.
   * Each column transitions independently with a stagger delay on desktop.
   */
  const [columnIndices, setColumnIndices] = useState([0, 0, 0]);

  // -------------------------------------------------------------------------
  // Navigation helpers
  // -------------------------------------------------------------------------
  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SLIDER_DATA.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + SLIDER_DATA.length) % SLIDER_DATA.length,
    );
  }, []);

  // -------------------------------------------------------------------------
  // Autoplay — resets whenever the user navigates manually (activeIndex dep)
  // -------------------------------------------------------------------------
  useEffect(() => {
    const id = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [activeIndex, goNext]);

  // -------------------------------------------------------------------------
  // Staggered column updates
  // -------------------------------------------------------------------------
  useEffect(() => {
    const staggerDelays = [0, 180, 360]; // ms per column
    const timers = staggerDelays.map((delay, colIdx) =>
      setTimeout(() => {
        setColumnIndices((prev) => {
          if (prev[colIdx] === activeIndex) return prev; // no-op
          const next = [...prev];
          next[colIdx] = activeIndex;
          return next;
        });
      }, delay),
    );
    return () => timers.forEach(clearTimeout);
  }, [activeIndex]);

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------
  return (
    <motion.section
      aria-label="Hero image slider"
      className="
        w-full
        /* Mobile: full viewport height, single column */
        h-dvh
        /* Desktop: constrained height, three columns side-by-side */
        md:h-[65vh] md:min-h-[520px]
        flex flex-col md:flex-row
        overflow-hidden bg-black relative
      "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Three image columns                                                   */}
      {/* ------------------------------------------------------------------ */}
      {[0, 1, 2].map((colIdx) => {
        const catIdx = columnIndices[colIdx];
        const category = SLIDER_DATA[catIdx];
        const imageSrc =
          category.images[colIdx % category.images.length] ??
          category.images[0];

        /**
         * On mobile we only render one "meaningful" column at a time to avoid
         * stacking three dark image panels.  We hide columns 1 & 2 on mobile
         * and make column 0 take up the full height.
         */
        const mobileVisibility = colIdx === 0 ? "flex" : "hidden md:flex";

        return (
          <motion.div
            key={colIdx}
            className={`
              ${mobileVisibility}
              flex-1 relative w-full md:w-auto md:h-full
              overflow-hidden
              /* Dividers — horizontal on mobile (unused since only 1 col), vertical on desktop */
              border-r border-white/10 last:border-r-0
            `}
            variants={columnVariants}
          >
            {/* Background image with crossfade */}
            <div className="absolute inset-0">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`${category.id}-col${colIdx}`}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.4 }}
                  className="absolute inset-0"
                >
                  {/* Category colour overlay */}
                  <div
                    className={`absolute inset-0 ${category.color} opacity-30 mix-blend-multiply z-10`}
                  />
                  {/* Darkness overlay for text readability */}
                  <div className="absolute inset-0 bg-black/50 z-10" />
                  <Image
                    src={imageSrc}
                    alt={`${category.title} hero image ${colIdx + 1}`}
                    fill
                    className="object-cover"
                    priority={colIdx === 0}
                    sizes="(max-width: 768px) 100%, 33vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Content overlay                                                  */}
            {/* Only the first column carries the text label on desktop.         */}
            {/* On mobile the single visible column always shows the label.      */}
            {/* ---------------------------------------------------------------- */}
            {colIdx === 0 && (
              <div
                className="
                  absolute inset-0 z-20
                  flex flex-col justify-end
                  /* Generous padding — larger on desktop */
                  p-7 pb-24
                  sm:p-10 sm:pb-28
                  md:p-12 md:pb-20
                  lg:p-14
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${category.id}-text`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                  >
                    <h2
                      className="
                        text-3xl sm:text-4xl md:text-4xl
                        font-bold font-heading text-white tracking-tighter
                        mb-3 uppercase
                      "
                    >
                      {category.title}
                    </h2>
                    <div className="h-[3px] w-16 bg-primary/80 mb-4" />
                    <p
                      className="
                        text-white/85 text-base sm:text-lg
                        font-medium max-w-xs mb-8
                      "
                    >
                      {category.description}
                    </p>
                    <WireButton text="Read More" link={category.link} />
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        );
      })}

      {/* ------------------------------------------------------------------ */}
      {/* Mobile category indicator pills (visible only on mobile)            */}
      {/* Shows which category panel is active                                */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="
          absolute top-5 left-1/2 -translate-x-1/2
          flex gap-2 z-30
          md:hidden
        "
        aria-label="Slide indicators"
      >
        {SLIDER_DATA.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to ${item.title}`}
            aria-current={i === activeIndex ? "true" : undefined}
            className={`
              h-1 rounded-full transition-all duration-500 cursor-pointer
              ${i === activeIndex ? "w-8 bg-primary" : "w-3 bg-white/40"}
            `}
          />
        ))}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Navigation controls                                                  */}
      {/* Positioned bottom-right on both mobile and desktop                  */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="
          absolute z-30 flex items-center gap-4 sm:gap-6 text-white
          /* Mobile: centred at the bottom */
          bottom-6 left-1/2 -translate-x-1/2
          /* Desktop: anchored to bottom-right */
          md:left-auto md:translate-x-0 md:right-10 md:bottom-10
          lg:right-14 lg:bottom-12
        "
      >
        {/* Prev / Next arrows */}
        <div className="flex gap-3">
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="
              w-10 h-10 md:w-11 md:h-11
              rounded-full border border-white/70
              flex items-center justify-center
              hover:bg-white hover:text-black
              transition-colors duration-300
              backdrop-blur-sm cursor-pointer
            "
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="
              w-10 h-10 md:w-11 md:h-11
              rounded-full border border-white/70
              flex items-center justify-center
              hover:bg-white hover:text-black
              transition-colors duration-300
              backdrop-blur-sm cursor-pointer
            "
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Progress counter + bar */}
        <div className="flex items-center gap-3 font-mono text-sm sm:text-base font-medium tracking-widest text-white">
          <span>0{activeIndex + 1}</span>
          <div className="w-16 sm:w-20 h-[2px] bg-white/30 rounded-full overflow-hidden relative">
            <motion.div
              key={activeIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: AUTOPLAY_INTERVAL / 1000,
                ease: "linear",
              }}
              className="h-full bg-primary absolute top-0 left-0"
            />
          </div>
          <span>0{SLIDER_DATA.length}</span>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSlider;
