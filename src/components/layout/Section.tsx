import { cn } from "@/lib/utils";
import { ElementType, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  variant?: "wide" | "contained";
  className?: string;
  as?: ElementType;
  id?: string;
}

export function Section({
  children,
  variant = "contained",
  className,
  as: Component = "section",
  id,
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        variant === "contained" && "max-w-7xl mx-auto px-4",
        variant === "wide" && "w-full",
        className,
      )}
    >
      {children}
    </Component>
  );
}
