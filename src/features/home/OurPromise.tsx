import Image from "next/image";

import { Section } from "@/components/layout/Section";
import WatermarkHeader from "@/components/typography/WatermarkHeader";

const promises = [
  {
    id: "pr-1",
    name: "Customer Satisfaction",
    image: "",
    description:
      "Your needs are our priority; your success is our standard. Through transparency and unwavering reliability, we don't just meet expectations — we exceed them.",
  },
  {
    id: "pr-2",
    name: "Operational Excellence",
    link: "/services/transport",
    image: "",
    description:
      "We provide precision equipment engineered for construction, agriculture, and logistics. Combining world-class hardware with expertise, we ensure your operations are fully optimized for excellence.",
  },
  {
    id: "pr-3",
    name: "Blueprint for Resilient Growth",
    link: "/services/Commodities",
    image: "",
    description:
      "We build lasting partnerships via sustainable practices, risk-aware strategies & operational excellence, enabling businesses to grow confidently across Africa's dynamic & evolving markets.",
  },
];

const OurPromise = () => {
  // start

  return (
    <Section variant="wide">
      <Section>
        {/* <WatermarkHeader text="Our Promise" backText="Dedicated to" /> */}
        <div className="pb-15 font-sans font-bold text-5xl uppercase leading-tight">
          <p className="text-secondary/25">Dedicated to Our Promise</p>

          {/* <div className="w-[108] h-1 bg-primary" /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((department) => (
            <div
              key={department.id}
              className="bg-white hover:shadow-lg border border-secondary/10"
            >
              <div className="relative h-30 bg-accent/20 mb-4 flex items-center justify-center text-secondary font-bold">
                <Image
                  src="/images/slider/construct-1.webp"
                  alt={department.name}
                  fill
                />
                {department.id}
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-xl text-secondary font-semibold mb-2">
                  {department.name}
                </h3>

                <p className="text-md text-gray-500">
                  {department.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Section>
  );
};

export default OurPromise;
