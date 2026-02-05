import Image from "next/image";

import { Section } from "@/components/layout/Section";

const TransportBanner = () => {
  return (
    <Section
      variant="wide"
      className="bg-primary py-20 bg-[url('/images/home/tyre-tracks.svg')] bg-repeat-x bg-fixed"
    >
      <Section>
        <div className="w-full max-w-[700px] mx-auto flex items-center justify-center">
          <Image
            src="/images/home/osh-logo-full-fff.svg"
            alt="Open Sixty (Pvt) Ltd"
            width={200}
            height={600}
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full h-auto max-h-[200px] object-contain"
          />
        </div>
      </Section>
    </Section>
  );
};

export default TransportBanner;
