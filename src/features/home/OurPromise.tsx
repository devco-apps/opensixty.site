import Image from "next/image";

import { Section } from "@/components/layout/Section";

const promises = [
  {
    id: "pr-1",
    name: "Customer Satisfaction",
    image: "/images/home/dedicated-star.webp",
    description:
      "Your needs are our priority; your success is our standard. Through transparency and unwavering reliability, we don't just meet expectations — we exceed them.",
  },
  {
    id: "pr-2",
    name: "Operational Excellence",
    link: "/services/transport",
    image: "/images/home/dedicated-badge.webp",
    description:
      "We deliver expert industrial services for construction and logistics. By merging technical support with seamless integration, we ensure your operations are fully optimized for excellence.",
  },
  {
    id: "pr-3",
    name: "Blueprint for Resilient Growth",
    link: "/services/Commodities",
    image: "/images/home/dedicated-graph.webp",
    description:
      "We build lasting partnerships via sustainable practices, risk-aware strategies & operational excellence, enabling businesses to grow confidently across Africa's dynamic & evolving markets.",
  },
];

const OurPromise = () => {
  // start

  return (
    <Section variant="wide">
      <Section>
        <div className="pb-15 font-sans font-bold text-4xl uppercase leading-tight">
          <p className="text-secondary/25">Dedicated to Our Promise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise) => (
            <div key={promise.id} className="p-5">
              <div className="relative w-[250px] h-[250px] mb-4 mx-auto">
                <Image
                  src={promise.image}
                  alt={promise.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-xl text-secondary font-heading font-semibold mb-2 ">
                  {promise.name}
                </h3>

                <p className="text-md text-gray-500">{promise.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Section>
  );
};

export default OurPromise;
