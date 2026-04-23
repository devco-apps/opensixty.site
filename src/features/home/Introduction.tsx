"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { Section } from "@/components/layout/Section";
import WatermarkHeader from "@/components/typography/WatermarkHeader";
import Button from "@/components/buttons/Button";

const Introduction: React.FC = () => {
  return (
    <Section
      className="pt-20 text-foreground overflow-hidden font-sans"
      aria-labelledby="introduction-heading"
    >
      <div className="mx-auto grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Watermark Background Text */}
          <WatermarkHeader text="Open Sixty" backText="Introducing" />

          <div className="text-gray-500 leading-7 mb-6 text-base text-justify">
            <p className="mb-4">
              We are an integrated industrial solutions company, dedicated to
              delivering reliable products and services across key sectors
              including construction, transport and commodity trading.
            </p>
            <p>
              Our comprehensive approach combines robust supply chains, expert
              technical support and proactive risk management strategies. This
              enables our clients to operate efficiently, sustainably and at
              scale throughout Zimbabwe and the broader region.
            </p>
          </div>

          <Button text="Read More" link="/about" />
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="relative w-full h-[400px] mt-20 overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            // src="/images/drum-roller.webp"
            src="/images/home/intro-wheeler.webp"
            alt="Construction machinery operating on a road"
            fill
            className="object-contain object-bottom w-full h-full z-20"
            sizes="(max-width: 800px) 100%, 50vw"
            priority={false}
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Introduction;
