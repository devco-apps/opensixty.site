interface IProps {
  text: string;
  backText?: string;
}

const WatermarkHeader = ({ text, backText = "" }: IProps) => {
  return (
    <div>
      <div
        className="absolute lg:-top-5 lg:-left-8 font-black text-secondary/10 uppercase text-[3rem] -z-10 pointer-events-none leading-none whitespace-nowrap lg:text-[5rem]"
        aria-hidden="true"
      >
        {backText}
      </div>

      <div className="mb-8 relative">
        <h2
          id="introduction-heading"
          className="text-[2rem] font-black uppercase text-secondary leading-[1.1] inline-block lg:text-[2.5rem]"
        >
          <span className="inline-block relative top-2.5 z-10 after:content-[''] after:absolute after:bottom-[5px] after:left-0 after:w-full after:h-[8px] after:bg-primary after:-z-10">
            {text}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default WatermarkHeader;
