import { Section } from "@/components/layout/Section";
import { MapWrapper } from "@/components/maps/MapWrapper";
import TransportBanner from "@/features/home/TransportBanner";

import HeroSlider from "@/features/home/HeroSlider";
import Introduction from "@/features/home/Introduction";
import OurPromise from "@/features/home/OurPromise";
import OurServices from "@/features/home/OurServices";
import ProjectsGallery from "@/features/home/ProjectsGallery";

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Introduction Section */}
      <Introduction />

      <OurPromise />

      <TransportBanner />

      <OurServices />

      {/* Projects Gallery Section for Construction */}
      <ProjectsGallery />
    </div>
  );
}
