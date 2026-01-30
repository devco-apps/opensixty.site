"use client";

import dynamic from "next/dynamic";
import { ComponentProps } from "react";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center text-gray-400">
      Loading Map...
    </div>
  ),
});

export function MapWrapper(props: ComponentProps<typeof Map>) {
  return <Map {...props} />;
}
