import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  children: React.ReactNode;
  variant?: "paid" | "expiring" | "paused";
  className?: string;
}

export default function StatusBadge({ children, variant = "paid", className }: StatusBadgeProps) {
  const variants = {
    paid: "text-xs text-green-500 bg-green-100 rounded-full px-[8px] py-[2px]",
    expiring: "text-xs text-neutral-500 bg-neutral-100 rounded-full px-[8px] py-[2px]",
    paused: "text-xs text-red-500 bg-red-100 rounded-full px-[8px] py-[2px]",
  };

  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  );
}

