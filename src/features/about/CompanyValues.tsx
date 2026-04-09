"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import WatermarkHeader from "@/components/typography/WatermarkHeader";

import {
  Award,
  ShieldCheck,
  ThumbsUp,
  Leaf,
  Lightbulb,
  Siren,
  Users,
  UserCheck,
  ClipboardCheck,
} from "lucide-react";

const values = [
  {
    id: "v1",
    name: "Excellence",
    icon: <Award className="w-6 h-6" />,
    description:
      "We are committed to delivering high-quality products and services that consistently meet and exceed industry standards.",
  },
  {
    id: "v2",
    name: "Integrity",
    icon: <ShieldCheck className="w-6 h-6" />,
    description:
      "We operate with honesty, transparency, and accountability, building trust with our clients, partners, and stakeholders.",
  },
  {
    id: "v3",
    name: "Reliability",
    icon: <ThumbsUp className="w-6 h-6" />,
    description:
      "We deliver on our promises through dependable service, timely execution, and consistent performance across all operations.",
  },
  {
    id: "v4",
    name: "Sustainability",
    icon: <Leaf className="w-6 h-6" />,
    description:
      "We promote environmentally responsible practices that support long-term industrial growth and protect future generations.",
  },
  {
    id: "v5",
    name: "Innovation",
    icon: <Lightbulb className="w-6 h-6" />,
    description:
      "We embrace forward-thinking solutions and continuously improve our processes to meet the evolving needs of our clients.",
  },
  {
    id: "v6",
    name: "Safety",
    icon: <Siren className="w-6 h-6" />,
    description:
      "We prioritize the safety of our people, clients, and environments in every project and operation we undertake.",
  },
  {
    id: "v7",
    name: "Collaboration",
    icon: <Users className="w-6 h-6" />,
    description:
      "We build strong partnerships and work closely with stakeholders to create shared value across the entire supply chain.",
  },
  {
    id: "v8",
    name: "Customer Focus",
    icon: <UserCheck className="w-6 h-6" />,
    description:
      "We place our clients at the center of everything we do, delivering tailored solutions that address their unique needs and drive measurable value",
  },
  {
    id: "v9",
    name: "Accountability",
    icon: <ClipboardCheck className="w-6 h-6" />,
    description:
      "We take responsibility for our actions and outcomes, ensuring disciplined execution and continuous improvement in all our operations.",
  },
];

const CompanyValues = () => {
  return (
    <Section variant="wide" className="bg-secondary/5 py-20">
      <Section>
        {/* Header */}
        <div className="text-center mb-12">
          <WatermarkHeader text="What We Stand For" backText="Core Values" />

          <p className="text-gray-500 mt-4 mx-auto text-lg">
            Our core principles guide every decision and action we take. <br />
            These values define who we are and how we serve our clients.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white p-8 flex flex-col items-start border border-gray-200 border-b border-b-primary hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-6 text-primary transform group-hover:-translate-y-1 transition-transform duration-300 [&>svg]:w-14! [&>svg]:h-14! [&>svg]:stroke-1!">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary text-left w-full font-heading">
                {value.name}
              </h3>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-6 text-left w-full">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </Section>
  );
};

export default CompanyValues;
