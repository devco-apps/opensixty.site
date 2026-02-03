"use client";

import { useRouter } from "next/navigation";

interface IProps {
  text: string;
  link: string;
}

const WireButton = ({ text, link }: IProps) => {
  const route = useRouter();

  return (
    <button
      className="border border-white px-5 py-2 text-white z-100 w-30 text-xs cursor-pointer"
      onClick={() => route.push(link)}
    >
      {text}
    </button>
  );
};

export default WireButton;
