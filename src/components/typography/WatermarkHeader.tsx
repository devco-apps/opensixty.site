interface IProps {
  text: string;
  backText?: string;
}

const WatermarkHeader = ({ text, backText = "" }: IProps) => {
  return (
    <div className="relative flex items-center justify-center py-6 mb-8 w-full">
      {/* Watermark Background */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-heading text-secondary/10 uppercase text-[15vw] md:text-[8rem] lg:text-[8rem] leading-none whitespace-nowrap pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        {backText}
      </div>

      {/* Primary Text */}
      <h2
        id="introduction-heading"
        className="relative top-8 z-10 text-[2rem] md:text-[3rem] text-secondary leading-tight font-heading"
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
