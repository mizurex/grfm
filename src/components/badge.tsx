import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <div className={cn("border border-gray-200 flex items-center justify-center rounded-[8px] px-[6px] py-[4px]", className)}>
      <span className="text-xs font-inter text-[#525866] font-medium">
        {children}
      </span>
    </div>
  );
}

