import { motion } from "motion/react";
import DashboardCard from "../DashboardCard";
import Badge from "../badge";

export default function CreditScoreCard() {
  const services = [
    {
      id: 1,
      name: "API Services",
      status: "operational" as const,
      statusColor: "bg-green-500",
      statusText: "Operational",
      statusTextColor: "text-green-600",
    },
    {
      id: 2,
      name: "Database",
      status: "operational" as const,
      statusColor: "bg-green-500",
      statusText: "Operational",
      statusTextColor: "text-green-600",
    },
    {
      id: 3,
      name: "Payment Gateway",
      status: "degraded" as const,
      statusColor: "bg-yellow-500",
      statusText: "Slow Response",
      statusTextColor: "text-yellow-600",
    },
  ];

  return (
    <DashboardCard className="w-full lg:w-[352px] h-auto lg:h-[178px] rounded-[16px] p-[16px] font-inter border border-primary/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3 8.49389C15.3 10.3703 14.5389 12.069 13.3084 13.2988L14.5104 14.5C16.0486 12.9629 17 10.8394 17 8.49389C17 3.80284 13.1944 0 8.5 0C3.80558 0 0 3.80284 0 8.49389C0 10.8394 0.951396 12.9629 2.48959 14.5L3.69168 13.2988C2.46112 12.069 1.7 10.3703 1.7 8.49389C1.7 4.74105 4.74446 1.69878 8.5 1.69878C12.2556 1.69878 15.3 4.74105 15.3 8.49389ZM11.2991 4.49579L7.47405 8.31806L8.67612 9.51927L12.5011 5.697L11.2991 4.49579Z"
              fill="#525866"
            />
          </svg>
          <span>Credit Score</span>
        </div>
        <Badge>Details</Badge>
      </div>
      <div className="border-b border-primary/10  h-[px] w-full mt-[12px]" />
      <div className="flex items-center justify-between mt-[12px] ">
        <div className="">
          <span className="text-sm text-muted-foreground mt-[16px]">
            Your{" "}
            <strong className="text-foreground font-medium ">
              credit score{" "}
            </strong>{" "}
            is <strong className="text-foreground font-medium">750</strong>
          </span>
          <div className="mt-[4px]">
            <span className="text-xs text-muted-foreground">
              This is considered to be excellent.
            </span>
          </div>
        </div>
        <div className=" rounded-full bg-[#fff1eb] px-[12px] py-[12px]">
          <span>😎</span>
        </div>
      </div>
      <div className="mt-[12px]">
        <motion.svg
          width="100%"
          height="22"
          viewBox="0 0 320 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {[
            0, 9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135,
            144, 153, 162, 171, 180, 189, 198, 207, 216, 225, 234, 243, 252,
          ].map((x, index) => (
            <motion.rect
              key={x}
              x={x}
              width="5"
              height="22"
              fill={index <= 24 ? "#1FC16B" : "#E1E4EA"}
              variants={{
                hidden: { opacity: 0, scaleX: 0 },
                visible: {
                  opacity: 1,
                  scaleX: 1,
                  transition: {
                    delay: index * 0.03,
                  },
                },
              }}
              style={{ originX: 0 }}
            />
          ))}
        </motion.svg>
      </div>
    </DashboardCard>
  );
}

interface ServiceStatusProps {
  name: string;
  statusColor: string;
  statusText: string;
  statusTextColor: string;
}
