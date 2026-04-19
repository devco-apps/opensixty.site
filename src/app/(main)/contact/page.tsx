"use client";

import { Section } from "@/components/layout/Section";
import WatermarkHeader from "@/components/typography/WatermarkHeader";

import ContactForm from "@/features/contact/ContactForm";
import ContactInfo from "@/features/contact/ContactInfo";
import dynamic from "next/dynamic";

const InteractiveMap = dynamic(
  () => import("@/features/contact/InteractiveMap"),
  {
    ssr: false,
  },
);

export default function ContactPage() {
  return (
    <div className="bg-white">
      <Section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <WatermarkHeader text="Today" backText="Get in touch" />

            <p className="mt-2 text-lg leading-8 text-gray-600">
              Construction is the process of planning, designing, and building
              infrastructure such as residential homes, commercial and
              industrial facilities.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8">
              <ContactInfo />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
      <div className="h-96 lg:h-160">
        <InteractiveMap />
      </div>
    </div>
  );
}
