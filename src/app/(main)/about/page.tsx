import { Section } from "@/components/layout/Section";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We are Energetic Company We do the best of the best
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We do the best of the best lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
