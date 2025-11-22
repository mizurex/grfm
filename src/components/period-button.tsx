import { cn } from "@/lib/utils";

interface PeriodButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export default function PeriodButton({ children, isActive, onClick, className }: PeriodButtonProps) {
  return (
    <button
      className={cn(
        "flex-1 px-4 py-[2px] cursor-pointer transition text-sm font-medium border-r last:border-r-0",
        isActive
          ? "bg-gray-100 text-foreground"
          : "bg-transparent hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-100",
        className
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

