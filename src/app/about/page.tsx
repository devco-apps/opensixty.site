import { Section } from "@/components/layout/Section";

export default function AboutPage() {
  return (
    <div className="py-20">
      <Section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
        <p className="text-lg text-gray-600">
          Learn more about our organization and mission.
        </p>
      </Section>
    </div>
  );
}
