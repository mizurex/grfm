import { cn } from "@/lib/utils";

interface IconContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  bgColor?: string;
  className?: string;
}

export default function IconContainer({ children, size = "md", bgColor, className }: IconContainerProps) {
  const sizes = {
    sm: "p-[6px]",
    md: "p-[8px]",
    lg: "p-[10px]",
  };

  return (
    <span className={cn("border border-primary/20 rounded-full", sizes[size], bgColor, className)}>
      {children}
    </span>
  );
}

