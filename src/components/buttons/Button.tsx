"use client";

import { useRouter } from "next/navigation";

interface IProps {
  text: string;
  link?: string;
  onClick?: () => void;
}

const Button = ({ text, link }: IProps) => {
  const route = useRouter();

  return (
    <button
      className="inline-block py-3 px-10 border-2 border-secondary text-secondary font-extrabold text-sm uppercase bg-transparent cursor-pointer transition-all duration-300 mt-4 relative tracking-wider hover:-translate-y-1 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-primary after:transition-all after:duration-300 hover:after:-bottom-2.5"
      onClick={() => route.push(link || "")}
    >
      {text}
    </button>
  );
};

export default Button;
