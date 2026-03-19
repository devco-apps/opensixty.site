"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import Button from "@/components/buttons/Button";

const CallToAction: React.FC = () => {
  return (
    <Section variant="wide">
      <div className="relative bg-primary bg-cover bg-bottom md:bg-center text-white pt-24 pb-48 md:py-24 md:h-125 bg-[url('/images/home/cta-b.webp')] md:bg-[url('/images/home/cta.webp')]">
        <div className="relative container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
            {/* Right side: Description and Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left md:col-start-2"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
              >
                <h2 className="text-4xl md:text-6xl font-bold leading-tight uppercase font-heading">
                  Let&apos;s work <br /> together
                </h2>
              </motion.div>

              <p className="text-lg mb-8">
                Have a project in mind? We&apos;d love to hear about it. <br />
                Schedule a free consultation with our team to discuss your
                needs.
              </p>
              <Button
                text="Schedule a Consultation"
                link="/contact"
                variant="secondary"
                aria-label="Schedule a consultation to discuss your project"
              />
            </motion.div>

            <div className="md:row-start-1" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CallToAction;
