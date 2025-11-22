"use client";
import { useState, useEffect} from "react";
import DashboardCard from "@/components/DashboardCard";

interface Response {
  status?: string;
  echo?: string;
  error?: string;
};

export default function DemoPage() {
  const [queue, setQueue] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [responses, setResponses] = useState<Response | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [error, setError] = useState(false);
  const [statusBadge, setStatusBadge] = useState<"success" | "failed" | null>(
    null
  );

  useEffect(() => {
    if (!isProcessing && queue > 0) {
      processNextJob();
    }
  }, [queue, isProcessing]);


  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const addJob = () => {
    setQueue((prev) => prev + 1);
  };

  const processNextJob = async () => {
    if (queue === 0) {
      setIsProcessing(false);
      return;
    }

    setIsProcessing(true);
    setError(false);
    setStatusBadge(null);

    try {
      const res = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({ message: "Send money request" }),
        headers: { "Content-Type": "application/json" },
      });

      let data: Response;
      if (!res.ok) {
        const text = await res.text();
        data = text ? JSON.parse(text) : { error: `Status: ${res.status}` };
        setError(true);
        setStatusBadge("failed");
      } else {
        const text = await res.text();
        data = text ? JSON.parse(text) : { error: "Empty response" };

        if (data.error) {
          setError(true);
          setStatusBadge("failed");
        } else {
          setError(false);
          setStatusBadge(null);
        }
      }

      setResponses(data);
      setShowTooltip(true);
    } catch (err: any) {
      setResponses({ error: err.message || "Network error" });
      setError(true);
      setShowTooltip(true);

      setStatusBadge("failed");
    }

    setQueue((prev) => prev - 1);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8 font-sans">
      <div className="w-full max-w-md">
        <DashboardCard className="rounded-[16px] p-[16px] border border-primary/20">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="border border-primary/20 rounded-full p-[8px] flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16ZM10.75 6.5V9.25H13.5V10.75H10.75V13.5H9.25V10.75H6.5V9.25H9.25V6.5H10.75Z"
                    fill="#525866"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-foreground font-medium text-sm">
                  Send Money
                </h3>
                <p className="text-muted-foreground text-xs mt-[2px] font-inter font-medium">
                  {isProcessing ? "Processing..." : "Click to add queues"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="h-[22px] flex items-center">
                {statusBadge === "failed" && (
                  <div className="px-2 py-1 rounded-[6px] text-xs font-medium bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 whitespace-nowrap">
                    Failed
                  </div>
                )}
              </div>

           
              <div className="relative">
                <button
                  onClick={addJob}
                  className="px-4 py-2 bg-primary cursor-pointer  text-primary-foreground rounded-[8px] text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Send
                </button>
                {(queue > 0 || isProcessing) && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {queue}
                  </div>
                )}
              </div>
            </div>
          </div>
        </DashboardCard>
        {showTooltip && responses && (
          <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 fade-in-0 duration-600">
            <div className="rounded-lg border border-border bg-card  p-4 min-w-[320px] max-w-md">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 space-y-1">
                  <div className="text-sm text-muted-foreground">
                    {responses.error ? (
                      <span className="text-sm font-medium text-destructive">
                        {responses.error}
                      </span>
                    ) : responses.echo ? (
                      <span className="text-sm font-medium text-foreground">
                        Message: {responses.echo}
                      </span>
                    ) : null}
                  </div>
                </div>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors  cursor-pointer rounded-sm p-1 hover:bg-muted"
                  aria-label="Close"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L4 12M4 4L12 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
