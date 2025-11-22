import { cn } from "@/lib/utils";

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashboardCard({ children, className = '' }: DashboardCardProps) {
  return (
    <div className={cn("box-border  border border-gray-200 bg-white  dark:border-slate-700 dark:bg-slate-800", className)}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ReactNode;
  iconBgColor: string;
}

export function CardHeader({ title, value, change, changeType, icon, iconBgColor }: CardHeaderProps) {
  return (
    <div className="mb-4 flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
        <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{value}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm">
          <span className={changeType === 'positive' ? 'text-green-600' : 'text-red-600'}>
            {changeType === 'positive' ? '↑' : '↓'} {change}
          </span>
          <span className="text-gray-500 dark:text-gray-400">vs last month</span>
        </p>
      </div>
      <div className={`rounded-xl p-3 ${iconBgColor}`}>
        {icon}
      </div>
    </div>
  );
}

