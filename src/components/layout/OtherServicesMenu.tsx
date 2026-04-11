import Link from "next/link";
import { services } from "@/lib/services";

interface OtherServicesMenuProps {
  currentSlug: string;
}

export default function OtherServicesMenu({
  currentSlug,
}: OtherServicesMenuProps) {
  const otherServices = services.filter(
    (service) => service.slug !== currentSlug,
  );

  return (
    <aside className="w-full md:w-1/4 md:p-4 md:mt-9">
      <h3 className="text-sm font-bold mb-4 uppercase">Other Services</h3>
      <ul>
        {otherServices.map((service) => (
          <li key={service.slug} className="mb-2">
            <Link
              href={`/services/${service.slug}`}
              className="text-primary hover:underline"
            >
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
