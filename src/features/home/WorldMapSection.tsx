import React from "react";
import Image from "next/image";
import AnimatedBorderBox from "@/components/ui/AnimatedBorderBox";

const WorldMapSection = () => {
  return (
    <div className="my-30">
      <AnimatedBorderBox
        borderWidth={3}
        borderRadius={20}
        accentColor="#0b1136"
        trailSize={15}
        animationSpeed={10}
        noPadding
      >
        <div className="relative w-full h-125 rounded-2xl overflow-clip">
          <Image
            src="/images/home/home-world-map.svg"
            alt="World map showing OpenSixty's global reach"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-8 left-8 max-w-sm p-6 bg-white/70 text-gray-900 rounded-xl shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-2">
              Connecting Continents. Delivering Success.
            </h3>
            <p className="text-sm">
              From local logistics to global trade, OpenSixty is the engine
              driving your business forward. Our integrated network spans the
              globe, ensuring your success is not just planned, but delivered.
            </p>
          </div>
        </div>
      </AnimatedBorderBox>
    </div>
  );
};

export default WorldMapSection;
