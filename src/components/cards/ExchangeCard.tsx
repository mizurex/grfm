import DashboardCard from "../DashboardCard";
import { useState } from "react";

export default function ExchangeRateCard() {
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isTargetCurrencyOpen, setIsTargetCurrencyOpen] = useState(false);

  const toggleCurrencyDropdown = () => {
    setIsCurrencyOpen((prev) => !prev);
  };

  const toggleTargetCurrencyDropdown = () => {
    setIsTargetCurrencyOpen((prev) => !prev);
  };
  const activities = [
    {
      id: 1,
      icon: <CheckIcon />,
      bgColor: "bg-green-100 dark:bg-green-900/20",
      iconColor: "text-green-600",
      title: "Payment received",
      description: "$2,400 from John Smith",
      time: "2 hours ago",
    },
    {
      id: 2,
      icon: <UserIcon />,
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      iconColor: "text-blue-600",
      title: "New user registered",
      description: "Sarah Johnson joined",
      time: "4 hours ago",
    },
    {
      id: 3,
      icon: <DocumentIcon />,
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      iconColor: "text-purple-600",
      title: "Invoice generated",
      description: "INV-2024-001 created",
      time: "6 hours ago",
    },
    {
      id: 4,
      icon: <ClockIcon />,
      bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
      iconColor: "text-yellow-600",
      title: "Payment pending",
      description: "$1,200 awaiting approval",
      time: "8 hours ago",
    },
  ];

  return (
    <DashboardCard className="w-full lg:w-[352px] h-auto lg:h-[380px] rounded-[16px] p-[16px] font-sans border border-primary/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.1167 5.18971C7.7498 3.7746 9.83909 2.99699 12 3.00001C16.9707 3.00001 21 7.02931 21 12C21 13.9224 20.397 15.7044 19.371 17.166L16.5 12H19.2C19.2001 10.5885 18.7853 9.20803 18.0072 8.03034C17.2291 6.85265 16.1219 5.92965 14.8235 5.37612C13.525 4.82259 12.0924 4.66294 10.704 4.91702C9.31548 5.17111 8.03231 5.82772 7.014 6.80521L6.1167 5.18971ZM17.8833 18.8103C16.2502 20.2254 14.1609 21.003 12 21C7.0293 21 3 16.9707 3 12C3 10.0776 3.603 8.29561 4.629 6.83401L7.5 12H4.8C4.79988 13.4115 5.21468 14.792 5.9928 15.9697C6.77093 17.1474 7.87806 18.0704 9.17654 18.6239C10.475 19.1774 11.9076 19.3371 13.296 19.083C14.6845 18.8289 15.9677 18.1723 16.986 17.1948L17.8833 18.8103Z"
                fill="#525866"
              />
            </svg>
          </span>
          <span className="text-sm text-foreground font-medium">Exchange</span>
        </div>
        <div className="text-xs border border-primary/20 rounded-[8px] px-[6px] py-[4px] ">
          <span className="text-sm text-muted-foreground font-medium">
            Currencies
          </span>
        </div>
      </div>

      <div className="mt-[12px] border border-primary/20 rounded-[12px]">
        <div className="border-b border-primary/10">
          <div className="flex items-center justify-between py-[3px] px-[16px]">
            <div className="relative">
              <div className="flex items-center gap-2 justify-around">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2008_343)">
                      <path
                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M7.65222 8.00002H16C16 7.27796 15.9038 6.57846 15.7244 5.91306H7.65222V8.00002Z"
                        fill="#D80027"
                      />
                      <path
                        d="M7.65222 3.8261H14.8258C14.3361 3.02698 13.71 2.32064 12.9799 1.73914H7.65222V3.8261Z"
                        fill="#D80027"
                      />
                      <path
                        d="M8.00002 16C9.8828 16 11.6133 15.3493 12.9799 14.2609H3.02014C4.3867 15.3493 6.11724 16 8.00002 16Z"
                        fill="#D80027"
                      />
                      <path
                        d="M1.17423 12.1739H14.8259C15.219 11.5324 15.5239 10.8311 15.7244 10.0869H0.275635C0.476166 10.8311 0.781072 11.5324 1.17423 12.1739Z"
                        fill="#D80027"
                      />
                      <path
                        d="M3.70575 1.24931H4.43478L3.75666 1.74197L4.01569 2.53912L3.33759 2.04647L2.6595 2.53912L2.88325 1.85047C2.28619 2.34781 1.76287 2.9305 1.33162 3.57975H1.56522L1.13356 3.89334C1.06631 4.00553 1.00181 4.1195 0.94 4.23516L1.14612 4.86956L0.761563 4.59016C0.665969 4.79269 0.578531 4.99978 0.499938 5.21119L0.727031 5.91019H1.56522L0.887094 6.40284L1.14612 7.2L0.468031 6.70734L0.0618437 7.00247C0.0211875 7.32928 0 7.66216 0 8H8C8 3.58175 8 3.06087 8 0C6.41963 0 4.94641 0.458438 3.70575 1.24931ZM4.01569 7.2L3.33759 6.70734L2.6595 7.2L2.91853 6.40284L2.24041 5.91019H3.07859L3.33759 5.11303L3.59659 5.91019H4.43478L3.75666 6.40284L4.01569 7.2ZM3.75666 4.07241L4.01569 4.86956L3.33759 4.37691L2.6595 4.86956L2.91853 4.07241L2.24041 3.57975H3.07859L3.33759 2.78259L3.59659 3.57975H4.43478L3.75666 4.07241ZM6.88525 7.2L6.20716 6.70734L5.52906 7.2L5.78809 6.40284L5.10997 5.91019H5.94816L6.20716 5.11303L6.46616 5.91019H7.30434L6.62622 6.40284L6.88525 7.2ZM6.62622 4.07241L6.88525 4.86956L6.20716 4.37691L5.52906 4.86956L5.78809 4.07241L5.10997 3.57975H5.94816L6.20716 2.78259L6.46616 3.57975H7.30434L6.62622 4.07241ZM6.62622 1.74197L6.88525 2.53912L6.20716 2.04647L5.52906 2.53912L5.78809 1.74197L5.10997 1.24931H5.94816L6.20716 0.452156L6.46616 1.24931H7.30434L6.62622 1.74197Z"
                        fill="#0052B4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2008_343">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span>USD</span>

                <button
                  type="button"
                  className="border border-2 rounded-full px-[0px] py-[0px] border-primary/10 cursor-pointer hover:bg-primary/10 transition-all "
                  onClick={toggleCurrencyDropdown}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.00005 9.79111L12.3413 6.44986L13.2957 7.40431L9.00005 11.7L4.70435 7.40431L5.6588 6.44986L9.00005 9.79111Z"
                      fill="#525866"
                    />
                  </svg>
                </button>
              </div>

              {/* mock */}
              <div
                className={`pointer-events-none absolute left-0 top-full mt-[6px] w-[160px] rounded-[16px] border border-primary/10 bg-background shadow-lg z-10 overflow-hidden transition-all duration-300  ${
                  isCurrencyOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-3 py-2 text-sm flex items-center gap-2">
                  <span className="truncate">USD - United States</span>
                </div>
                <div className="px-3 py-2 text-sm flex items-center gap-2 border-t border-primary/10">
                  <span className="truncate">EUR - Eurozone</span>
                </div>
                <div className="px-3 py-2 text-sm flex items-center gap-2 border-t border-primary/10">
                  <span className="truncate">GBP - United Kingdom</span>
                </div>
              </div>
            </div>
            <div className="border-r border-l border-primary/20 px-[18px] py-[4px]">
              <span className="">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0375 10.0375L16.75 13.75L13.0375 17.4625L11.977 16.402L13.879 14.4993L4 14.5V13H13.879L11.977 11.098L13.0375 10.0375ZM6.9625 2.53751L8.023 3.59801L6.121 5.50001H16V7.00001H6.121L8.023 8.90201L6.9625 9.96251L3.25 6.25001L6.9625 2.53751Z"
                    fill="#525866"
                  />
                </svg>
              </span>
            </div>

            <div className="flex items-center gap-2 justify-around">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2022_372)">
                    <path
                      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M8.00002 3.13043L8.25905 3.92759H9.09718L8.41908 4.42024L8.67811 5.2174L8.00002 4.72471L7.32189 5.2174L7.58093 4.42024L6.90283 3.92759H7.74099L8.00002 3.13043Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M4.5567 4.55667L5.30357 4.93717L5.89623 4.34454L5.76507 5.17236L6.51192 5.55289L5.68407 5.68401L5.55295 6.51189L5.17242 5.76504L4.3446 5.8962L4.93726 5.30354L4.5567 4.55667Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M3.13049 7.99999L3.92765 7.74096V6.9028L4.42027 7.58093L5.21746 7.3219L4.72474 7.99999L5.21746 8.67808L4.42027 8.41908L3.92765 9.09718V8.25902L3.13049 7.99999Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M4.5567 11.4433L4.93723 10.6964L4.3446 10.1038L5.17245 10.235L5.55292 9.48813L5.68407 10.316L6.51189 10.4471L5.76514 10.8276L5.89623 11.6554L5.30357 11.0628L4.5567 11.4433Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M8.00002 12.8696L7.74096 12.0724H6.90283L7.58096 11.5797L7.32189 10.7827L8.00002 11.2753L8.67811 10.7827L8.41908 11.5797L9.09718 12.0724H8.25902L8.00002 12.8696Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M11.4433 11.4433L10.6965 11.0628L10.1038 11.6555L10.2349 10.8276L9.48816 10.4471L10.316 10.316L10.4471 9.48813L10.8276 10.235L11.6554 10.1038L11.0628 10.6965L11.4433 11.4433Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M12.8696 7.99999L12.0725 8.25902V9.09718L11.5798 8.41905L10.7827 8.67808L11.2754 7.99999L10.7827 7.3219L11.5798 7.58093L12.0725 6.9028V7.74099L12.8696 7.99999Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M11.4433 4.55667L11.0628 5.30354L11.6554 5.8962L10.8276 5.76501L10.4471 6.51186L10.316 5.68401L9.48816 5.55286L10.2349 5.17236L10.1038 4.34457L10.6965 4.9372L11.4433 4.55667Z"
                      fill="#FFDA44"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2022_372">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>EUR</span>
              <span className="border border-2 rounded-full px-[0px] py-[0px] border-primary/10">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00005 9.79111L12.3413 6.44986L13.2957 7.40431L9.00005 11.7L4.70435 7.40431L5.6588 6.44986L9.00005 9.79111Z"
                    fill="#525866"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between py-[18px]">
          <div>
            <span className="text-3xl font-medium">$100.00</span>
          </div>
          <span className="text-sm text-muted-foreground pt-[2px]">
            Available :{" "}
            <span className="text-foreground font-medium">$16,058.98</span>
          </span>
        </div>

        <div className="border-t border-primary/20 text-center bg-muted rounded-b-[12px]">
          <span className="text-sm text-muted-foreground ">
            1 USD ={" "}
            <span className="text-foreground font-medium">0.94 EUR</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-[6px] mt-[16px] ">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Tax {"(2%)"}</span>
          <span className="text-sm font-medium">$2.00</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Exchange Fee {"(1%)"}
          </span>
          <span className="text-sm font-medium">$2.00</span>
        </div>{" "}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Total Amount</span>
          <span className="text-sm font-medium">€90.7</span>
        </div>
        <div className="flex items-center gap-2 justify-center border border-primary/20 rounded-[8px] px-[12px] py-[8px] mt-[16px]">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.09725 4.32476C6.45817 3.1455 8.19924 2.4975 10 2.50001C14.1423 2.50001 17.5 5.85776 17.5 10C17.5 11.602 16.9975 13.087 16.1425 14.305L13.75 10H16C16.0001 8.82373 15.6544 7.67336 15.006 6.69195C14.3576 5.71054 13.4349 4.94138 12.3529 4.4801C11.2708 4.01882 10.077 3.88578 8.91997 4.09752C7.7629 4.30926 6.69359 4.85643 5.845 5.67101L5.09725 4.32476ZM14.9028 15.6753C13.5418 16.8545 11.8008 17.5025 10 17.5C5.85775 17.5 2.5 14.1423 2.5 10C2.5 8.39801 3.0025 6.91301 3.8575 5.69501L6.25 10H4C3.9999 11.1763 4.34556 12.3267 4.994 13.3081C5.64244 14.2895 6.56505 15.0586 7.64712 15.5199C8.72918 15.9812 9.92296 16.1142 11.08 15.9025C12.2371 15.6908 13.3064 15.1436 14.155 14.329L14.9028 15.6753Z"
                fill="#525866"
              />
            </svg>
          </span>
          <span>Exchange</span>
        </div>
      </div>
    </DashboardCard>
  );
}

interface ActivityItemProps {
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  title: string;
  description: string;
  time: string;
}

function ActivityItem({
  icon,
  bgColor,
  iconColor,
  title,
  description,
  time,
}: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${bgColor}`}
      >
        <div className={iconColor}>{icon}</div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {title}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <p className="mt-1 text-xs text-gray-400">{time}</p>
      </div>
    </div>
  );
}

// Icon Components
function CheckIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
