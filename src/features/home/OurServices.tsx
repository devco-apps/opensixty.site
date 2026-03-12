"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Section } from "@/components/layout/Section";
import WatermarkHeader from "@/components/typography/WatermarkHeader";

import {
  Building2,
  HardHat,
  Ruler,
  Warehouse,
  ShieldCheck,
  Leaf,
  Truck,
  Package,
  Ship,
  TrainFront,
  LocateFixed,
  Workflow,
  Wheat,
  Droplets,
  Flame,
  Gem,
  Scale,
} from "lucide-react";

import clsx from "clsx";

type ServiceCategory = "Construction" | "Transport" | "Commodities";

const servicesData: Record<
  ServiceCategory,
  { id: string; title: string; description: string; icon: React.ReactNode }[]
> = {
  Construction: [
    {
      id: "c1",
      title: "Commercial Building",
      description:
        "Expert construction of commercial properties with durable materials.",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      id: "c2",
      title: "Project Management",
      description:
        "Comprehensive management of construction projects from start to finish.",
      icon: <HardHat className="w-6 h-6" />,
    },
    {
      id: "c3",
      title: "Civil Engineering",
      description:
        "Infrastructure development including roads, bridges, and public works.",
      icon: <Ruler className="w-6 h-6" />,
    },
    {
      id: "c4",
      title: "Renovation",
      description:
        "High-quality renovation and remodeling services for existing structures.",
      icon: <Warehouse className="w-6 h-6" />,
    },
    {
      id: "c5",
      title: "Safety Assurance",
      description:
        "Strict adherence to safety protocols to ensure zero-harm environments.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      id: "c6",
      title: "Sustainable Building",
      description:
        "Eco-friendly construction practices using green building materials.",
      icon: <Leaf className="w-6 h-6" />,
    },
  ],
  Transport: [
    {
      id: "t1",
      title: "Freight Logistics",
      description:
        "Efficient overland freight and logistics solutions across regions.",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      id: "t2",
      title: "Supply Chain",
      description:
        "End-to-end supply chain management tailored to industry needs.",
      icon: <Package className="w-6 h-6" />,
    },
    {
      id: "t3",
      title: "Maritime Shipping",
      description:
        "Reliable overseas shipping and container transport services.",
      icon: <Ship className="w-6 h-6" />,
    },
    {
      id: "t4",
      title: "Rail Transport",
      description: "High-capacity rail transport for bulk materials and goods.",
      icon: <TrainFront className="w-6 h-6" />,
    },
    {
      id: "t5",
      title: "Live Tracking",
      description:
        "Secure storage and warehousing facilities with digital tracking.",
      icon: <LocateFixed className="w-6 h-6" />,
    },
    {
      id: "t6",
      title: "Distribution Network",
      description:
        "Monitored and secure transit for high-value industrial goods.",
      icon: <Workflow className="w-6 h-6" />,
    },
  ],
  Commodities: [
    {
      id: "co1",
      title: "Agricultural Products",
      description: "Sourcing and trading of premium agricultural commodities.",
      icon: <Wheat className="w-6 h-6" />,
    },
    {
      id: "co2",
      title: "Liquid Bulk",
      description: "Safe handling and transport of liquid commodities.",
      icon: <Droplets className="w-6 h-6" />,
    },
    {
      id: "co3",
      title: "Energy Materials",
      description:
        "Trading in essential energy materials for industrial power.",
      icon: <Flame className="w-6 h-6" />,
    },
    {
      id: "co4",
      title: "Mineral Extraction",
      description: "Responsible sourcing of raw minerals and precious metals.",
      icon: <Gem className="w-6 h-6" />,
    },
    {
      id: "co5",
      title: "Quality Assurance",
      description:
        "Rigorous quality testing and certification for all traded items.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      id: "co6",
      title: "Trade Regulation",
      description:
        "Expertise in international trade regulations and compliance.",
      icon: <Scale className="w-6 h-6" />,
    },
  ],
};

const OurServices = () => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("Construction");

  const categories: ServiceCategory[] = [
    "Construction",
    "Transport",
    "Commodities",
  ];

  return (
    <Section variant="wide" className="bg-secondary/1 py-20">
      <Section>
        {/* Header */}
        <div className="text-center mb-12">
          <WatermarkHeader text="Expertise" backText="Our Services" />

          <p className="text-gray-500 mt-4 mx-auto text-lg">
            Discover tailored industrial solutions across our core sectors.{" "}
            <br />
            Select a service category below to explore our capabilities in
            detail.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={clsx(
                "relative overflow-hidden px-10 py-4 text-base font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer",
                activeTab === category
                  ? "tab-btn-active hover:scale-105"
                  : "bg-white text-gray-500 border border-gray-300 hover:scale-105 hover:shadow-md",
              )}
            >
              <span
                className={clsx(activeTab === category ? "tab-btn-text" : "")}
              >
                {category}
              </span>
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {servicesData[activeTab].map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white p-8 flex flex-col items-start border border-gray-200 border-b-[1px] border-b-primary hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-6 text-secondary transform group-hover:-translate-y-1 transition-transform duration-300 [&>svg]:!w-14 [&>svg]:!h-14 [&>svg]:!stroke-1">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary text-left w-full">
                  {service.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed mb-6 text-left w-full">
                  {service.description}
                </p>
                <div className="mt-auto pt-2 w-full text-left">
                  <span className="inline-block text-sm font-bold text-secondary uppercase tracking-widest border-b-[2.5px] border-primary pb-[2px] group-hover:text-primary transition-colors">
                    Read More
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </Section>
  );
};

export default OurServices;
