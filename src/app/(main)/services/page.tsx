import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/services";

import { Section } from "@/components/layout/Section";
import { ChevronRight } from "lucide-react";
import WatermarkHeader from "@/components/typography/WatermarkHeader";

export default function ServicesPage() {
  return (
    <div className="py-20">
      <Section className="space-y-12">
        <div className="text-center">
          <WatermarkHeader text="Seamless Execution" backText="Here to Serve" />

          <div className="flex justify-center">
            <p className="mt-4 max-w-3xl text-center text-lg text-gray-600 p-6">
              Open Sixty delivers end-to-end solutions across commodity trading,
              logistics and business support—designed to simplify complex
              operations and unlock new market opportunities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col overflow-hidden shadow-lg"
            >
              <div className="relative h-48 shrink-0">
                <Image
                  className="object-cover"
                  src={service.image}
                  alt={service.title}
                  fill
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <h3 className="text-xl font-heading text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-xs font-bold shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Learn More
                    <ChevronRight className="-mr-1 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
