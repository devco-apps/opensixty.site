"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { usePathname } from "next/navigation";

const pageInfoMap: Record<string, { title: string; description: string }> = {
  "/about": {
    title: "About Us",
    description: "Learn more about our company and our mission.",
  },
  "/contact": {
    title: "Contact Us",
    description: "Get in touch with us.",
  },
  "/gallery": {
    title: "Gallery",
    description: "Check out our gallery.",
  },
  "/projects": {
    title: "Projects",
    description: "Our recent projects.",
  },
  "/services": {
    title: "Services",
    description: "Services we offer.",
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pageInfo = pageInfoMap[pathname] || {
    title: "OpenSixty",
    description: "Welcome to OpenSixty",
  };

  return (
    <>
      <PageHeader title={pageInfo.title} description={pageInfo.description} />
      {children}
    </>
  );
}
