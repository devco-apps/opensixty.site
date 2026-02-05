import { Section } from "@/components/layout/Section";
import { MapWrapper } from "@/components/maps/MapWrapper";
import TransportBanner from "@/features/home/TransportBanner";

import HeroSlider from "@/features/home/HeroSlider";
import Introduction from "@/features/home/Introduction";
import OurPromise from "@/features/home/OurPromise";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Introduction Section */}
      <Introduction />

      <TransportBanner />

      <OurPromise />

      {/* Feature Section to enable scrolling */}
      <Section variant="wide" className="bg-gray-50 py-20">
        <Section>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg mb-4 flex items-center justify-center text-secondary font-bold">
                  {i}
                </div>
                <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </Section>
      </Section>

      <Section className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
        <MapWrapper className="h-[500px]" />
      </Section>

      <Section className="py-20">
        <h2 className="text-3xl font-bold mb-8">More Content</h2>
        <p className="text-lg text-gray-600 mb-6">
          This section exists to ensure the page is long enough to test the
          scroll-to-top functionality and the sticky navbar behavior.
        </p>
        <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
          Placeholder Content
        </div>
      </Section>
    </div>
  );
}
