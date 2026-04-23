import Image from "next/image";

import { Award, Layers, Users, Globe } from "lucide-react";

const metrics = [
  {
    icon: <Award size={48} />,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: <Layers size={48} />,
    value: "50+",
    label: "Projects Delivered",
  },
  {
    icon: <Users size={48} />,
    value: "80+",
    label: "Clients Across Industries",
  },
  {
    icon: <Globe size={48} />,
    value: "5",
    label: "Regional Markets",
  },
];

const CompanyMetrics = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="rounded-lg p-8 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to top, rgba(255, 135, 9, 0.2) 0%, transparent 70%)",
              }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="text-gray-900">{metric.icon}</div>
                <p className="text-5xl font-heading text-gray-900 ml-4">
                  {metric.value}
                </p>
              </div>

              <p className="text-gray-600 font-semibold text-lg pb-15">
                {metric.label}
              </p>

              <Image
                src="/images/glass-bar.png"
                alt="Glass bar"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute bottom-0 left-0 w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyMetrics;
