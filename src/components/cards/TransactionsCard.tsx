import DashboardCard, { CardHeader } from '../DashboardCard';
import { motion } from "motion/react";


export default function TransactionsCard() {
  const stats = [
    { label: 'Completed', percentage: 85, color: 'bg-green-500' },
    { label: 'Pending', percentage: 10, color: 'bg-yellow-500' },
    { label: 'Failed', percentage: 5, color: 'bg-red-500' },
  ];
  const radius = 45;
  const semiCircumference = Math.PI * radius;   
  const segment1 = 0.3;                         
  const segment2 = 0.6;   
  return (
    <DashboardCard className="w-full lg:w-[352px] h-auto lg:h-[380px] rounded-[16px] border border-primary/20 p-[16px] font-inter">
<div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18C4.0293 18 0 13.9707 0 9C0 4.9698 2.6487 1.5588 6.3 0.4122V2.3238C4.75283 2.95204 3.47202 4.09834 2.67665 5.5666C1.88129 7.03487 1.62079 8.73388 1.93973 10.373C2.25866 12.0121 3.13721 13.4895 4.42509 14.5524C5.71297 15.6153 7.33015 16.1977 9 16.2C10.4344 16.2 11.8361 15.7716 13.0256 14.9699C14.215 14.1682 15.138 13.0296 15.6762 11.7H17.5878C16.4412 15.3513 13.0302 18 9 18ZM17.955 9.9H8.1V0.045C8.3961 0.0153 8.6967 0 9 0C13.9707 0 18 4.0293 18 9C18 9.3033 17.9847 9.6039 17.955 9.9ZM9.9 1.8558V8.1H16.1442C15.9439 6.51385 15.2216 5.0394 14.0911 3.90891C12.9606 2.77842 11.4862 2.05613 9.9 1.8558Z" fill="#525866"/>
</svg>
 <span className='text-foreground font-medium '>
    Spending Summary
 </span>
    </div>

    <div className="flex items-center  border border-primary/20 rounded-[8px] px-[6px] py-[2px]">
  <span className='text-foreground'>
    Last Week
  </span>
  <span className="pt-[3px]">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99999 10.879L13.7125 7.1665L14.773 8.227L9.99999 13L5.22699 8.227L6.28749 7.1665L9.99999 10.879Z" fill="#525866"/>
</svg>
  </span>


    </div>
</div>

<div className="mx-auto border-b border-t py-[16px] relative mt-[20px] flex justify-center">
  {/* Gauge wrapper */}
  <div className="relative h-[120px] w-full max-w-[240px]">
    {/* One SVG with 3 stacked arcs */}
    <motion.svg
      className="absolute inset-0"
      viewBox="0 0 100 50" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}    
    >
      {/* Grey track (100%) */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="#E1E4EA"
        strokeWidth="8"
      />

      {/* Dark blue 30% segment */}
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="#335CFF"
        strokeWidth="8"
    
        strokeDasharray={`${semiCircumference * segment1} ${semiCircumference}`}
        strokeDashoffset={0}
        transform="rotate(180 50 50)" 
        variants={{ 
          hidden: { strokeDashoffset: semiCircumference },
          visible: { strokeDashoffset: 0,
            transition: {
              delay: 0.5,
              duration: 0.5,
              ease: "easeOut",
            },
           },
        }}
      />

      {/* Sky blue 50% segment, stacked on top */}
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="#47C2FF"
        strokeWidth="8"
        strokeDasharray={`${semiCircumference * segment2} ${semiCircumference}`}
        strokeDashoffset={-semiCircumference * segment1} // starts after first 30%
        transform="rotate(-200 50 50)"
        variants={{
            hidden: { strokeDashoffset: semiCircumference },
            visible: {
              strokeDashoffset: -semiCircumference * segment1,
              transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
            },
          }}
      />
    </motion.svg>

    {/* Center label – uses relative/absolute stacking */}
    <div className="pointer-events-none absolute left-1/2 top-18 flex -translate-x-1/2 -translate-y-1/4 flex-col items-center">
      <span className="text-xs tracking-[0.18em] text-muted-foreground uppercase font-medium">
        Spend
      </span>
      <span className="text-[25px] font-semibold text-foreground">
        $1,800.00
      </span>
    </div>
  </div>
</div>



<div className='flex items-center justify-between px-[10px] my-[12px]'>
    <div className='border-r pr-[20px]'>
     <div className='flex justify-center mb-[12px]'>
     <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#EBF1FF"/>
<path d="M11.875 8.5H20.125C20.2414 8.5 20.3563 8.52711 20.4604 8.57918C20.5646 8.63125 20.6551 8.70685 20.725 8.8L22.75 11.5V22.75C22.75 22.9489 22.671 23.1397 22.5303 23.2803C22.3897 23.421 22.1989 23.5 22 23.5H10C9.80109 23.5 9.61032 23.421 9.46967 23.2803C9.32902 23.1397 9.25 22.9489 9.25 22.75V11.5L11.275 8.8C11.3449 8.70685 11.4354 8.63125 11.5396 8.57918C11.6437 8.52711 11.7586 8.5 11.875 8.5ZM21.25 13H10.75V22H21.25V13ZM20.875 11.5L19.75 10H12.25L11.125 11.5H20.875ZM13.75 14.5V16C13.75 16.5967 13.9871 17.169 14.409 17.591C14.831 18.0129 15.4033 18.25 16 18.25C16.5967 18.25 17.169 18.0129 17.591 17.591C18.0129 17.169 18.25 16.5967 18.25 16V14.5H19.75V16C19.75 16.9946 19.3549 17.9484 18.6517 18.6517C17.9484 19.3549 16.9946 19.75 16 19.75C15.0054 19.75 14.0516 19.3549 13.3484 18.6517C12.6451 17.9484 12.25 16.9946 12.25 16V14.5H13.75Z" fill="#335CFF"/>
</svg>


     </div>
     <div className='flex flex-col text-center'>
     <span className='text-sm text-[#525866] font-inter' style={{fontWeight: '400'}}>
        Shopping
    </span>
    <span className='text-foreground font-medium'>
        $900.00
    </span>
   </div>
    </div>


    <div className='border-r pr-[29px]'>
    <div className='flex justify-center mb-[12px]'>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#EBF8FF"/>
<path d="M22 23.5H10C9.80109 23.5 9.61032 23.421 9.46967 23.2803C9.32902 23.1397 9.25 22.9489 9.25 22.75V9.25C9.25 9.05109 9.32902 8.86032 9.46967 8.71967C9.61032 8.57902 9.80109 8.5 10 8.5H22C22.1989 8.5 22.3897 8.57902 22.5303 8.71967C22.671 8.86032 22.75 9.05109 22.75 9.25V22.75C22.75 22.9489 22.671 23.1397 22.5303 23.2803C22.3897 23.421 22.1989 23.5 22 23.5ZM21.25 22V10H10.75V22H21.25ZM13 12.25H19V13.75H13V12.25ZM13 15.25H19V16.75H13V15.25ZM13 18.25H19V19.75H13V18.25Z" fill="#47C2FF"/>
</svg>


     </div>
     <div className='flex flex-col text-center'>
     <span className='text-sm text-[#525866] font-inter' style={{fontWeight: '400'}}>
        Utilities
    </span>
    <span className='text-foreground font-medium'>
        $600.00
    </span>
   </div>
    </div>
    <div>
    <div className='flex justify-center mb-[12px]'>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#F2F5F8"/>
<path d="M16 23.5C11.8578 23.5 8.5 20.1423 8.5 16C8.5 11.8578 11.8578 8.5 16 8.5C20.1423 8.5 23.5 11.8578 23.5 16C23.5 20.1423 20.1423 23.5 16 23.5ZM16 22C17.5913 22 19.1174 21.3679 20.2426 20.2426C21.3679 19.1174 22 17.5913 22 16C22 14.4087 21.3679 12.8826 20.2426 11.7574C19.1174 10.6321 17.5913 10 16 10C14.4087 10 12.8826 10.6321 11.7574 11.7574C10.6321 12.8826 10 14.4087 10 16C10 17.5913 10.6321 19.1174 11.7574 20.2426C12.8826 21.3679 14.4087 22 16 22ZM13.375 17.5H17.5C17.5995 17.5 17.6948 17.4605 17.7652 17.3902C17.8355 17.3198 17.875 17.2245 17.875 17.125C17.875 17.0255 17.8355 16.9302 17.7652 16.8598C17.6948 16.7895 17.5995 16.75 17.5 16.75H14.5C14.0027 16.75 13.5258 16.5525 13.1742 16.2008C12.8225 15.8492 12.625 15.3723 12.625 14.875C12.625 14.3777 12.8225 13.9008 13.1742 13.5492C13.5258 13.1975 14.0027 13 14.5 13H15.25V11.5H16.75V13H18.625V14.5H14.5C14.4005 14.5 14.3052 14.5395 14.2348 14.6098C14.1645 14.6802 14.125 14.7755 14.125 14.875C14.125 14.9745 14.1645 15.0698 14.2348 15.1402C14.3052 15.2105 14.4005 15.25 14.5 15.25H17.5C17.9973 15.25 18.4742 15.4475 18.8258 15.7992C19.1775 16.1508 19.375 16.6277 19.375 17.125C19.375 17.6223 19.1775 18.0992 18.8258 18.4508C18.4742 18.8025 17.9973 19 17.5 19H16.75V20.5H15.25V19H13.375V17.5Z" fill="#525866"/>
</svg>


     </div>
   <div className='flex flex-col text-center'>
    <span className='text-sm text-[#525866] font-inter' style={{fontWeight: '400'}}>
        Others
    </span>
    <span className='text-foreground font-medium'>
        $200.00
    </span>
   </div>
    </div>
</div>


  <div className='flex gap-4 items-center justify-between border border-primary/20 rounded-[8px] pl-[10px] pr-[4px] py-[3px] mt-[20px]'>
    <span className='text-sm text-muted-foreground'>
        Your weekly spending limit is <span className='text-muted-foreground font-medium'> $20000. </span>
    </span>
    <span className=' pr-[2px]'>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10ZM5.89268 7.56686L5.97252 7.24048C5.93119 7.25989 5.86456 7.28206 5.77319 7.30731C5.68157 7.33256 5.59912 7.34541 5.52665 7.34541C5.37229 7.34541 5.26362 7.32011 5.20052 7.26926C5.13789 7.2184 5.10665 7.12274 5.10665 6.98262C5.10665 6.9271 5.11607 6.84434 5.13579 6.73602C5.15489 6.62699 5.17686 6.53009 5.20129 6.44533L5.49935 5.39007C5.52855 5.29322 5.54857 5.18675 5.55933 5.07055C5.57034 4.9546 5.57546 4.87348 5.57546 4.82744C5.57546 4.60491 5.49746 4.42433 5.34141 4.28503C5.18536 4.14583 4.96315 4.07623 4.67517 4.07623C4.51492 4.07623 4.34551 4.10471 4.16621 4.1616C3.98691 4.21835 3.79946 4.28672 3.60337 4.36656L3.52332 4.6932C3.58175 4.67159 3.65135 4.64834 3.73278 4.62427C3.81386 4.6003 3.89339 4.58791 3.97078 4.58791C4.12877 4.58791 4.23519 4.61485 4.29096 4.6679C4.34674 4.72112 4.37475 4.81576 4.37475 4.95107C4.37475 5.02589 4.36589 5.10901 4.3475 5.19935C4.32937 5.29025 4.30674 5.38638 4.28011 5.48784L3.98076 6.54735C3.95413 6.65869 3.93467 6.7583 3.92243 6.84675C3.91029 6.93509 3.90445 7.02179 3.90445 7.10609C3.90445 7.32385 3.98491 7.50336 4.14577 7.64502C4.30664 7.78611 4.53218 7.85714 4.82215 7.85714C5.01098 7.85714 5.17671 7.83246 5.31934 7.78283C5.46181 7.73336 5.65315 7.6614 5.89268 7.56686ZM5.83957 3.28016C5.97882 3.15105 6.04811 2.99403 6.04811 2.81017C6.04811 2.62673 5.97892 2.4694 5.83957 2.33865C5.70068 2.20826 5.53326 2.14286 5.33752 2.14286C5.14116 2.14286 4.97308 2.2081 4.83286 2.33865C4.69263 2.4694 4.62237 2.62667 4.62237 2.81017C4.62237 2.99403 4.69263 3.151 4.83286 3.28016C4.97334 3.40973 5.14111 3.47457 5.33752 3.47457C5.53331 3.47457 5.70068 3.40973 5.83957 3.28016Z" fill="#CACFD8"/>
</svg>

    </span>
  </div>
    </DashboardCard>
  );
}

function TransactionIcon() {
  return (
    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  );
}

