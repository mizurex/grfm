import DashboardCard, { CardHeader } from "../DashboardCard";
import { motion } from "motion/react";
import { useState } from "react";
import PeriodButton from "../period-button";

export default function RevenueCard() {
  const [period, setPeriod] = useState<"daily" | "weekly" | "monthly">(
    "weekly"
  );

  const circumference = 2 * Math.PI * 19;

  const { amount, unit, progress } =
    period === "daily"
      ? { amount: "$300.00", unit: "day", progress: 0.35 }
      : period === "weekly"
      ? { amount: "$1,500.00", unit: "week", progress: 0.75 }
      : { amount: "$6,000.00", unit: "month", progress: 0.55 };

  return (
    <DashboardCard className="w-full lg:w-[352px] h-auto lg:h-[380px] rounded-[16px] p-[16px] border border-primary/20 font-sans">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.9 3.9H20.1C20.3387 3.9 20.5676 3.99482 20.7364 4.16361C20.9052 4.33239 21 4.56131 21 4.8V19.2C21 19.4387 20.9052 19.6676 20.7364 19.8364C20.5676 20.0052 20.3387 20.1 20.1 20.1H3.9C3.66131 20.1 3.43239 20.0052 3.2636 19.8364C3.09482 19.6676 3 19.4387 3 19.2V4.8C3 4.56131 3.09482 4.33239 3.2636 4.16361C3.43239 3.99482 3.66131 3.9 3.9 3.9ZM19.2 11.1H4.8V18.3H19.2V11.1ZM19.2 9.3V5.7H4.8V9.3H19.2ZM13.8 14.7H17.4V16.5H13.8V14.7Z"
              fill="#525866"
            />
          </svg>
          <span className="text-sm text-foreground font-medium"> My Cards</span>
        </div>
        <div className="flex items-center gap-2 border border-primary/20 rounded-[8px] px-[8px] py-[4px]">
        <span className="pt-[2px]">

            <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
              fill="#525866"
            />
          </svg>
        </span>
        

          <span className="text-sm text-muted-foreground font-medium">
            {" "}
            Add Card
          </span>
        </div>
      </div>

      <div className="border border-primary/20 relative rounded-[16px] mt-[16px] pt-[20px] pb-[16px] px-[20px] ">
        <div className="absolute right-0 top-0">
          <svg
            width="86"
            height="68"
            viewBox="0 0 86 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M129.193 -140.5H288.862C296.814 -140.5 301.727 -131.827 297.64 -125.006L188.407 57.3086C184.619 63.6307 177.789 67.5 170.419 67.5H10.7504C2.79848 67.4998 -2.11493 58.8272 1.97205 52.0059L111.205 -130.309C114.993 -136.631 121.823 -140.5 129.193 -140.5Z"
              stroke="#E1E4EA"
            />
          </svg>
        </div>

        <div className="absolute right-0 top-0">
          <svg
            width="48"
            height="129"
            viewBox="0 0 48 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M129.193 -79.5H288.862C296.814 -79.4998 301.727 -70.8272 297.64 -64.0059L188.407 118.309C184.619 124.631 177.789 128.5 170.419 128.5H10.7504C2.79848 128.5 -2.11493 119.827 1.97205 113.006L111.205 -69.3086C114.993 -75.6307 121.823 -79.5 129.193 -79.5Z"
              stroke="#E1E4EA"
            />
          </svg>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                  fill="#335CFF"
                />
                <path
                  opacity="0.48"
                  d="M12.3395 20.2554C12.0441 20.2554 11.768 20.4021 11.6027 20.647L9.73545 23.4139C9.33702 24.0042 9.76001 24.8 10.4722 24.8H19.609C19.9044 24.8 20.1805 24.6532 20.3458 24.4083L27.0645 14.4528C27.4629 13.8624 27.04 13.0667 26.3277 13.0667H20.146C19.8506 13.0667 19.5745 13.2134 19.4092 13.4583L15.4828 19.2763C15.0697 19.8884 14.3794 20.2554 13.6408 20.2554H12.3395Z"
                  fill="url(#paint0_linear_2001_238)"
                />
                <path
                  d="M10.9333 8.0242C11.2595 7.51091 11.8255 7.2 12.4337 7.2H19.9818C20.683 7.2 21.1081 7.97389 20.732 8.56567L14.6667 18.1091C14.3405 18.6224 13.7745 18.9333 13.1663 18.9333H5.61814C4.91696 18.9333 4.49184 18.1594 4.86794 17.5677L10.9333 8.0242Z"
                  fill="url(#paint1_linear_2001_238)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2001_238"
                    x1="18.4"
                    y1="13.0667"
                    x2="18.4"
                    y2="30.8585"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.313079" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2001_238"
                    x1="12.8001"
                    y1="7.2"
                    x2="12.8001"
                    y2="22.7155"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.38239" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <motion.svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <path
                  d="M12.6027 -1.57244e-07C14.9352 2.87918 16.2055 6.47356 16.2 10.179C16.2 14.0355 14.8527 17.577 12.6027 20.358L11.2023 19.2276C13.2758 16.6682 14.405 13.4729 14.4 10.179C14.4 6.7509 13.203 3.6036 11.2023 1.1304L12.6027 -1.57244e-07ZM9.10169 2.8269C10.7865 4.90644 11.704 7.50262 11.7 10.179C11.7 12.9636 10.7271 15.5214 9.10259 17.5311L7.70219 16.3998C9.1275 14.6402 9.90358 12.4435 9.89999 10.179C9.89999 7.8228 9.07649 5.6583 7.70219 3.9582L9.10259 2.8269L9.10169 2.8269ZM5.60069 5.6547C6.63759 6.93436 7.20233 8.53198 7.19999 10.179C7.19999 11.8926 6.60149 13.4667 5.60159 14.7033L4.20119 13.572C4.97859 12.6122 5.40191 11.4141 5.39999 10.179C5.39999 8.8938 4.95089 7.713 4.20119 6.786L5.60159 5.6547L5.60069 5.6547ZM2.09969 8.4825C2.48875 8.96224 2.70073 9.56133 2.69999 10.179C2.69999 10.8216 2.47499 11.412 2.10059 11.8755L-6.16698e-06 10.179L2.10059 8.4825L2.09969 8.4825Z"
                  fill="#99A0AE"
                />
              </motion.svg>
            </div>

            <div className="flex items-center gap-[4px] border border-primary/20 rounded-[6px] pl-[4px] pr-[8px] ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 14C4.6862 14 2 11.3138 2 8C2 4.6862 4.6862 2 8 2C11.3138 2 14 4.6862 14 8C14 11.3138 11.3138 14 8 14ZM7.4018 10.4L11.6438 6.1574L10.7954 5.309L7.4018 8.7032L5.7044 7.0058L4.856 7.8542L7.4018 10.4Z"
                  fill="#1FC16B"
                />
              </svg>
              <span className="text-sm text-muted-foreground pb-[2px]">
                Active
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 relative">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10.4" cy="16.0004" r="8.4" fill="#E80B26" />
              <circle cx="21.6" cy="16.0004" r="8.4" fill="#F59D31" />
              <path
                d="M16 22.2621C17.7186 20.724 18.8 18.4889 18.8 16.0011C18.8 13.5132 17.7186 11.2781 16 9.74004C14.2815 11.2781 13.2 13.5132 13.2 16.0011C13.2 18.4889 14.2815 20.724 16 22.2621Z"
                fill="#FC6020"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-[22px] mt-[16px] ">
          <span className="text-sm text-muted-foreground py-[18px] ">
            Savings Card
          </span>

          <div className="absolute bottom-4">
            <span
              className="text-3xl font-inter size-[32px]"
              style={{ fontWeight: "500", letterSpacing: "0.5px" }}
            >
              $16,058.94
            </span>
          </div>
        </div>

        <div className="flex justify-end items-center gap-2 ">
          <div className=" flex border border-primary/20 rounded-[6px] px-[4px] py-[2px] ">
            <div className="border-r">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.36349 7.9994L10.3335 10.9694L9.48509 11.8178L5.66669 7.9994L9.48509 4.181L10.3335 5.0294L7.36349 7.9994Z"
                  fill="#0E121B"
                />
              </svg>
            </div>

            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.63669 7.9994L5.66669 5.0294L6.51509 4.181L10.3335 7.9994L6.51509 11.8178L5.66669 10.9694L8.63669 7.9994Z"
                  fill="#0E121B"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="p-[2px]">
        <div className="flex items-center justify-between border border-gray-200 rounded-[6px] mt-[12px] overflow-hidden">
          <PeriodButton
            isActive={period === "daily"}
            onClick={() => setPeriod("daily")}
          >
            Daily
          </PeriodButton>
          <PeriodButton
            isActive={period === "weekly"}
            onClick={() => setPeriod("weekly")}
          >
            Weekly
          </PeriodButton>
          <PeriodButton
            isActive={period === "monthly"}
            onClick={() => setPeriod("monthly")}
          >
            Monthly
          </PeriodButton>
        </div>
        <div className="flex items-center justify-between gap-2 mt-[20px]">
          <div className="flex items-center gap-[12px]">
            {/** Animated circular progress - value depends on selected period */}
            <motion.svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Track */}
              <circle
                cx="24"
                cy="24"
                r="19"
                stroke="#E1E4EA"
                strokeWidth="6"
                fill="none"
              />
              {/* Animated progress */}
              <motion.circle
                cx="24"
                cy="24"
                r="19"
                stroke="#335CFF"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: circumference * (1 - progress) }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </motion.svg>
            <div>
              <div>
                <span className="text-sm text-muted-foreground font-medium">
                  Spending Limit
                </span>
              </div>
              <div className=" text-foreground font-medium text-lg">
                {amount}{" "}
                <span className="text-muted-foreground text-sm">/ {unit}</span>
              </div>
            </div>
          </div>

          <div className="hover:cursor-pointer ">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2001_320)">
                <path
                  d="M2 7C2 3.68629 4.68629 1 8 1H20C23.3137 1 26 3.68629 26 7V19C26 22.3137 23.3137 25 20 25H8C4.68629 25 2 22.3137 2 19V7Z"
                  fill="white"
                />
                <path
                  d="M8 1.5H20C23.0376 1.5 25.5 3.96243 25.5 7V19C25.5 22.0376 23.0376 24.5 20 24.5H8C4.96243 24.5 2.5 22.0376 2.5 19V7C2.5 3.96243 4.96243 1.5 8 1.5Z"
                  stroke="#E1E4EA"
                />
                <path
                  d="M14.7958 12.9992L11.0833 9.28673L12.1438 8.22623L16.9168 12.9992L12.1438 17.7722L11.0833 16.7117L14.7958 12.9992Z"
                  fill="#525866"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2001_320"
                  x="0"
                  y="0"
                  width="28"
                  height="28"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0784314 0 0 0 0.03 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2001_320"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2001_320"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}

function DollarIcon() {
  return (
    <svg
      className="h-6 w-6 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
