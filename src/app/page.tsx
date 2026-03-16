import HeroSlider from "@/features/home/HeroSlider";
import Introduction from "@/features/home/Introduction";
import OurPromise from "@/features/home/OurPromise";
import OurServices from "@/features/home/OurServices";
import ProjectsGallery from "@/features/home/ProjectsGallery";
import TransportService from "@/features/home/TransportService";
import TransportBanner from "@/features/home/TransportBanner";
import WorldMapSection from "@/features/home/WorldMapSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Introduction Section */}
      <Introduction />

      <OurPromise />

      <TransportBanner />

      <OurServices />

      {/* Projects Gallery Section for Construction */}
      <ProjectsGallery />

      <WorldMapSection />

      {/* Transport Service Section */}
      <TransportService />
    </div>
  );
}
