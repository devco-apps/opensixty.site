import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { services } from "@/lib/services";

import { Section } from "@/components/layout/Section";
import OtherServicesMenu from "@/components/layout/OtherServicesMenu";

import CallToAction from "@/features/home/CallToAction";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <Section className="space-y-6 py-20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <Link
              href="/services"
              className="text-gray-500 hover:text-gray-700 mb-4 inline-block"
            >
              &larr; Back to Services
            </Link>

            <div className="relative w-full h-96 mt-4">
              <Image
                src={service.image}
                alt={service.title}
                fill
                objectFit="cover"
              />
            </div>

            <div className="pt-5">
              <h1 className="text-4xl font-heading tracking-tight">
                {service.title}
              </h1>
            </div>

            <div className="prose max-w-none mt-8">
              {service.paragraphs.map((paragraph, index) => (
                <p key={index} className="pb-10 text-lg text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <OtherServicesMenu currentSlug={resolvedParams.slug} />
        </div>
      </Section>

      <CallToAction />
    </div>
  );
}
