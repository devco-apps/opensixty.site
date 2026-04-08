import Image from "next/image";
import MeterComponent from "@/components/MeterComponent";
import { CheckIcon } from "lucide-react";

const features = [
  "Customized Strategy Solutions",
  "Industry-Specific Insights",
  "Startup & Enterprise Support",
  "Global Expansion Planning",
];

const offerings = [
  { name: "Logistics & Supply Chain", value: 95 },
  { name: "Core Construction", value: 90 },
  { name: "Technical & Trade", value: 75 },
];

const Introduction = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Left Column - Text Content */}
          <div className="xs:w-full md:w-1/2 lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="text-left">
              <p className="text-gray-500 font-semibold tracking-widest uppercase mb-2">
                ABOUT OPENSIXTY
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Strong Foundations For Better Tomorrow
              </h2>
              <p className="text-gray-600 mb-8 text-base">
                Construction is the process of planning, designing, and building
                infrastructure such as residential homes, commercial buildings,
                roads, bridges, and industrial facilities. It involves the
                coordination of skilled labor.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <CheckIcon />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <MeterComponent offeringsData={offerings} />
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              <Image
                src="/images/about/intro-truck.webp"
                alt="Construction Team"
                width={600}
                height={600}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
