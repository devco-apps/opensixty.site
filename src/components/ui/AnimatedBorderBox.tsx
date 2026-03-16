import React from "react";
import styles from "./AnimatedBorderBox.module.css";

interface CustomCSSProperties extends React.CSSProperties {
  [key: `--${string}`]: string | number | undefined;
}

interface AnimatedBorderBoxProps {
  children: React.ReactNode;
  accentColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  trailSize?: number;
  animationSpeed?: number;
  backgroundImageSrc?: string;
  noPadding?: boolean; // Re-add the missing prop
}

const AnimatedBorderBox: React.FC<AnimatedBorderBoxProps> = ({
  children,
  accentColor = "#FF0000",
  borderRadius = 24,
  borderWidth = 3,
  trailSize = 25,
  animationSpeed = 6,
  backgroundImageSrc,
  noPadding = false, // Re-add the missing prop
}) => {
  // Style for the main container. Holds the background image and CSS variables.
  const containerStyle: CustomCSSProperties = {
    "--accent": accentColor,
    "--border-radius": `${borderRadius}px`,
    "--border-width": `${borderWidth}px`,
    "--trail-size": trailSize,
    "--speed": `${animationSpeed}s`,
    position: "relative", // Needed for absolute children
  };
  if (backgroundImageSrc) {
    containerStyle.backgroundImage = `url(${backgroundImageSrc})`;
    containerStyle.backgroundSize = "cover";
    containerStyle.backgroundPosition = "center";
  }

  // Style for the element that provides the static border track.
  const borderTrackStyle: React.CSSProperties = {
    borderRadius: "var(--border-radius)",
    clipPath: "inset(0 0 0 0 round var(--border-radius))",
    overflow: "hidden", // Prevents animation artifacts
    background: !backgroundImageSrc
      ? "color-mix(in lch, #FFFFFF, #232D39 10%)"
      : "transparent",
  };

  // The content wrapper has a transparent border to make space for the border track.
  const contentWrapperStyle: React.CSSProperties = {
    border: "var(--border-width) solid transparent",
    borderRadius: "var(--border-radius)",
    background: "linear-gradient(white, white) padding-box, transparent",
  };

  // The main container's classes. It gets a white background only if there's no image.
  const containerClassName = `w-11/12 max-w-6xl relative ${
    !backgroundImageSrc ? "bg-white" : ""
  } container-type-inline-size`;

  // Conditionally set padding on the content wrapper
  const contentWrapperClassName = `grid relative z-30 gap-[clamp(1rem,3vmin+1rem,4rem)] ${
    !noPadding ? "p-[clamp(1rem,3vmin+1rem,6rem)]" : ""
  }`;

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className={containerClassName} style={containerStyle}>
        {/* Universal Overlay: provides a consistent fade for the background image. */}
        {backgroundImageSrc && (
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: "var(--border-radius)",
            }}
          />
        )}

        {/* Border & Trail Container: sits on top of the overlay. */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={borderTrackStyle}
        >
          <div className={styles.trail}></div>
        </div>

        {/* Content Container: sits on top of everything. */}
        <div className={contentWrapperClassName} style={contentWrapperStyle}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBorderBox;
