import DashboardCard from "../DashboardCard";
import { motion } from "motion/react";
import IconContainer from "../icon-container";
export default function TotalExpenseCard() {
  return (
    <DashboardCard className="w-full lg:w-[352px] h-auto lg:h-[178px] rounded-[16px] p-[16px] border border-primary/20">
      <div className="flex items-center justify-between">
        <IconContainer size="md">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.94173 11.98L13.505 5.41666L14.5833 6.49492L8.01999 13.0582H13.8047V14.5833H5.41663V6.19523H6.94173V11.9792V11.98Z"
              fill="#525866"
            />
          </svg>
        </IconContainer>
        <div className="pt-[20px]">
          <motion.svg
            width="120"
            height="42"
            viewBox="0 0 120 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.78909 40.5789H0.210526C0.0942557 40.5789 0 40.6732 0 40.7895C0 40.9057 0.0942557 41 0.210526 41H100C111.046 41 120 32.0457 120 21V5.60082C120 3.05986 117.94 1 115.399 1C113.931 1 112.55 1.70103 111.684 2.88683L99.7604 19.2087C98.929 20.3468 97.6043 21.0196 96.1949 21.0196C94.454 21.0196 92.8756 19.9966 92.1645 18.4076L86.2023 5.08353C85.0906 2.59922 82.623 1 79.9013 1C77.0127 1 74.4295 2.79851 73.4271 5.5076L69.9199 14.9864C68.5782 18.6124 66.3417 21.0196 62.4755 21.0196C59.0509 21.0196 54.6863 22.9137 53.086 25.9413L49.3331 33.0411C48.5833 34.4597 47.1103 35.3472 45.5057 35.3472C43.892 35.3472 42.4123 34.4498 41.6665 33.0188L36.8549 23.7857C35.9689 22.0857 34.2111 21.0196 32.2942 21.0196C30.1294 21.0196 28.1963 19.664 27.4589 17.6286L22.8366 4.8708C21.9948 2.54746 19.7883 1 17.3171 1C14.6021 1 12.2412 2.86182 11.6083 5.5021L3.52889 39.2069C3.33601 40.0115 2.61653 40.5789 1.78909 40.5789Z"
              fill="url(#paint0_linear_2001_77)"
              fill-opacity="0.06"
            />
            <motion.path
              d="M0 41C1.87567 41 3.50564 39.7114 3.93851 37.8864L11.6196 5.50226C12.2456 2.86328 14.6025 1 17.3147 1C19.7857 1 21.9905 2.55179 22.8244 4.87784L27.4711 17.8395C28.2007 19.8748 30.1299 21.2326 32.292 21.2326C34.2089 21.2326 35.9653 22.303 36.8439 24.0068L41.6767 33.379C42.4157 34.8122 43.8932 35.7126 45.5056 35.7126C47.1091 35.7126 48.58 34.8221 49.3231 33.4012L53.1057 26.169C54.6928 23.1345 59.056 21.2326 62.4804 21.2326C66.3419 21.2326 68.5703 18.8213 69.8979 15.1953L73.4431 5.51188C74.4353 2.802 77.014 1 79.8998 1C82.6205 1 85.0853 2.60429 86.1868 5.09206L92.1758 18.6182C92.8795 20.2076 94.4543 21.2326 96.1925 21.2326C97.6024 21.2326 98.9267 20.5558 99.7527 19.4131L108.998 6.62243C111.551 3.09134 115.643 1 120 1"
              stroke="#335CFF"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <defs>
              <linearGradient
                id="paint0_linear_2001_77"
                x1="60"
                y1="16.1064"
                x2="60"
                y2="41"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CFD1D3" />
                <stop offset="1" stop-color="#E4E5E7" stop-opacity="0" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </div>
      <div className="h-[60px] mt-[14px]">
        <div>
          <span className="text-sm  text-[#525866]">Total Expense</span>
        </div>
        <div className=" flex items-center gap-2">
          <span className="text-[32px] font-medium">$6,219.29</span>
          <span className="text-xs text-red-800 bg-red-200 rounded-full px-[6px] py-[1px]">
            -6%
          </span>
        </div>
      </div>
    </DashboardCard>
  );
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  iconColor: string;
}

function ActionButton({ icon, label, bgColor, iconColor }: ActionButtonProps) {
  return (
    <button
      className={`flex flex-col items-center gap-2 rounded-xl p-3 transition-colors ${bgColor}`}
    >
      <div className={iconColor}>{icon}</div>
      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
        {label}
      </span>
    </button>
  );
}

function PlusIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}

function InvoiceIcon() {
  return (
    <svg
      className="h-6 w-6"
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
