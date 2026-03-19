import clsx from "clsx";

interface IProps {
  text: string;
  backText?: string;
  contrastOnDark?: boolean;
}

const WatermarkHeader = ({
  text,
  backText = "",
  contrastOnDark = false,
}: IProps) => {
  return (
    <div className="relative flex items-center justify-center py-6 mb-8 w-full">
      {/* Watermark Background */}
      <div
        className={clsx(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-heading uppercase text-[12vw] md:text-[7rem] leading-none whitespace-nowrap pointer-events-none select-none z-0",
          contrastOnDark ? "text-white/10" : "text-secondary/10",
        )}
        aria-hidden="true"
      >
        {backText}
      </div>

      {/* Primary Text */}
      <h2
        id="introduction-heading"
        className={clsx(
          "relative top-4 md:top-8 z-10 text-[2rem] md:text-[3rem] leading-tight font-heading",
          contrastOnDark ? "text-white" : "text-secondary",
        )}
      >
        <span className="relative inline-block z-10">
          {text}
          <span className="absolute bottom-1 left-0 w-full h-2 bg-primary -z-10" />
        </span>
      </h2>
    </div>
  );
};

export default WatermarkHeader;
