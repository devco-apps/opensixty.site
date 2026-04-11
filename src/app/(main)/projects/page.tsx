import { Section } from "@/components/layout/Section";

import WatermarkHeader from "@/components/typography/WatermarkHeader";
import Gallery from "@/features/projects/Gallery";

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <Section className="space-y-12">
        <div className="text-center">
          <WatermarkHeader text="Our Projects" backText="Here to Serve" />

          <p className="text-lg text-gray-600">
            Explore our portfolio of past work and initiatives.
          </p>
        </div>

        <Gallery />
      </Section>
    </div>
  );
}
