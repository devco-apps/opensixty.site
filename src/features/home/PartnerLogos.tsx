"use client";

import Image from "next/image";
import WatermarkHeader from "@/components/typography/WatermarkHeader";

interface PartnerLogosProps {
  logoPaths: string[];
}

const PartnerLogos = ({ logoPaths }: PartnerLogosProps) => {
  if (!logoPaths || logoPaths.length === 0) {
    return null;
  }

  return (
    <div className="bg-white py-36">
      <div className="flex flex-col items-center justify-center gap-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <WatermarkHeader text="Partners" backText="Our Valued" />

        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          We are proud to collaborate with a diverse range of industry leaders.
          These strong partnerships enable us to deliver exceptional solutions
          and drive mutual success.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logoPaths.map((logoPath) => {
            const logoName = logoPath.split("-").pop()?.split(".")[0] || "";
            const altText = `${logoName
              .charAt(0)
              .toUpperCase()}${logoName.slice(1)} Logo`;

            return (
              <div key={logoPath} className="flex justify-center">
                <Image
                  src={`/images/home/${logoPath}`}
                  alt={altText}
                  width={120}
                  height={50}
                  className="object-contain"
                  style={{ maxHeight: "200px", height: "auto" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
