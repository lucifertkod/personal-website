"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, callback: () => void) => void;
    };
  }
}

const plans = [
  {
    id: "supporter",
    name: "SUPPORTER",
    price: "$9.99",
    badgeClass: "bg-[#52525b] text-[#f4f4f5]",
    cardStyle: {
      background: "linear-gradient(180deg, rgba(40,40,45,1) 0%, rgba(10,10,10,1) 50%, rgba(10,10,10,1) 100%)",
      boxShadow: "inset 0px 4px 20px rgba(255,255,255,0.05)",
    },
    buttonClass: "border border-zinc-500 text-white hover:bg-zinc-800",
    amountPaise: 99900,
  },
  {
    id: "champion",
    name: "CHAMPION",
    price: "$19.99",
    badgeClass: "bg-[#8b5cf6] text-white",
    cardStyle: {
      background: "linear-gradient(180deg, rgba(76,29,149,1) 0%, rgba(20,5,40,1) 50%, rgba(10,10,10,1) 100%)",
      boxShadow: "inset 0px 10px 30px rgba(139,92,246,0.3)",
    },
    buttonClass: "border border-zinc-400 text-white hover:bg-purple-900/50",
    amountPaise: 199900,
  },
  {
    id: "legendary",
    name: "LEGENDARY",
    price: "$39.99",
    badgeClass: "bg-[#7dd3fc] text-[#0f172a]",
    cardStyle: {
      background: "linear-gradient(180deg, rgba(13,148,136,1) 0%, rgba(5,30,40,1) 50%, rgba(10,10,10,1) 100%)",
      boxShadow: "inset 0px 10px 30px rgba(45,212,191,0.3)",
    },
    buttonClass: "border border-zinc-400 text-white hover:bg-teal-900/50",
    amountPaise: 399900,
  },
  {
    id: "elite",
    name: "ELITE",
    price: "$69.99",
    badgeClass: "bg-[#fb923c] text-white",
    cardStyle: {
      background: "linear-gradient(180deg, rgba(234,88,12,0.8) 0%, rgba(88,28,135,0.8) 35%, rgba(10,5,20,1) 70%, rgba(10,5,20,1) 100%)",
      boxShadow: "inset 0px 10px 30px rgba(251,146,60,0.4)",
    },
    buttonClass: "bg-white text-[#312e81] hover:bg-zinc-200",
    amountPaise: 699900,
  },
];

/* ── Non-blocking toast notification ── */
function Toast({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[99999] px-6 py-3.5 rounded-2xl shadow-2xl backdrop-blur-xl border text-sm font-semibold tracking-wide transition-all duration-500 animate-[fadeSlideIn_0.4s_ease-out_both] ${type === "success"
        ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-300"
        : "bg-red-500/20 border-red-500/30 text-red-300"
        }`}
    >
      <div className="flex items-center gap-3">
        <span>{type === "success" ? "✅" : "⚠️"}</span>
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-white/50 hover:text-white/80 transition-colors">✕</button>
      </div>
    </div>
  );
}

export default function PricingTable() {
  const [loading, setLoading] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showToast = useCallback((message: string, type: "success" | "error") => {
    setToast({ message, type });
  }, []);

  const handleSubscribe = async (plan: (typeof plans)[0]) => {
    if (plan.amountPaise === 0) return;

    setLoading(plan.id);

    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: plan.amountPaise,
          currency: "INR",
          receipt: `receipt_${plan.name}_${Date.now()}`,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const order = await res.json();

      if (!order || !order.id) {
        throw new Error("Invalid order response from server");
      }

      if (!window.Razorpay) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Failed to load Razorpay"));
          document.head.appendChild(script);
        });
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency || "INR",
        name: "ArcleIntelligence",
        description: `${plan.name} Plan Donation`,
        order_id: order.id,
        handler: function () {
          setLoading(null);
          showToast("Payment successful! Your donation is confirmed. Thank you! 🎉", "success");
        },
        modal: {
          ondismiss: function () {
            setLoading(null);
          },
          escape: true,
          animation: true,
          backdropclose: true,
        },
        prefill: {
          name: "",
          email: "",
        },
        theme: {
          color: "#dc2626",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function () {
        setLoading(null);
        showToast("Payment failed. Please try again.", "error");
      });
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
      setLoading(null);
      showToast("Could not initiate payment. Please try again.", "error");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <section
        id="donation-section"
        ref={sectionRef}
        className={`w-full px-4 sm:px-6 py-10 sm:py-20 flex flex-col items-center max-w-7xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'
          }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Donate for ArcleIntelligence Development
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Support ArcleIntelligence development. Every contribution helps us build better AI.
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-6 md:gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="relative w-full max-w-[240px] pt-4">
              {/* Badge */}
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest z-10 ${plan.badgeClass}`}
              >
                {plan.name}
              </div>

              {/* Card Body */}
              <div
                className="flex flex-col items-center justify-center px-6 py-10 pb-8 rounded-[40px] border border-white/5 relative overflow-hidden transition-transform duration-300 hover:scale-105 h-full"
                style={plan.cardStyle}
              >
                <span className="text-4xl sm:text-5xl font-bold text-white mb-6 mt-4 tracking-tight drop-shadow-md">
                  {plan.price}
                </span>

                <div className="mt-auto w-full pt-4">
                  <button
                    onClick={() => handleSubscribe(plan)}
                    disabled={loading === plan.id}
                    className={`w-full py-3.5 rounded-full text-[11px] font-bold tracking-[0.15em] transition-all ${plan.buttonClass} disabled:opacity-50 flex items-center justify-center`}
                  >
                    {loading === plan.id ? (
                      <span className="flex items-center gap-2">
                        <span className="size-4 border-2 border-white/30 border-t-current rounded-full animate-spin" />
                        PROCESSING
                      </span>
                    ) : (
                      "DONATE"
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
