"use client";

import { useRouter } from "next/navigation";

interface IProps {
  text: string;
  link?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button = ({ text, link, variant = "primary" }: IProps) => {
  const route = useRouter();

  const baseClasses =
    "inline-block py-3 px-10 border-2 font-extrabold text-sm uppercase cursor-pointer transition-all duration-300 mt-4 relative tracking-wider hover:-translate-y-1";

  const variantClasses: Record<string, string> = {
    primary:
      "border-secondary text-secondary bg-transparent after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-primary after:transition-all after:duration-300 hover:after:-bottom-2.5",
    secondary:
      "bg-white text-primary border-white hover:bg-transparent hover:text-white",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={() => route.push(link || "")}
    >
      {text}
    </button>
  );
};

export default Button;
