"use client";

import { motion } from "framer-motion";

type PageHeaderProps = {
  title: string;
  description: string;
};

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div
      className="bg-repeat-x py-24"
      style={{
        backgroundImage: "url('/images/backgrounds/road.webp')",
        backgroundRepeat: "repeat-x",
      }}
    >
      <div className="flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.h1
          className="text-4xl font-heading font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-xs uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};
