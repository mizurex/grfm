import { cn } from "@/lib/utils";

interface TabButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export default function TabButton({ children, isActive, onClick, className }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-[6px] px-[6px] py-[4px] transition-all duration-300 cursor-pointer",
        isActive ? "bg-muted shadow-lg" : "bg-transparent shadow-none",
        className
      )}
    >
      <span className={cn(isActive ? "text-foreground font-medium" : "text-muted-foreground font-medium")}>
        {children}
      </span>
    </button>
  );
}

