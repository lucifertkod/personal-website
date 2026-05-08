"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Languages,
  BadgeDollarSign,
  Briefcase,
  AlarmClock,
  NotebookPen,
  Calculator,
  RotateCcw,
  Ticket,
  Search,
  Percent,
  LineChart,
  CookingPot,
  Share2,
  FileSignature,
  Target,
  Send,
  FileText,
  Video,
  Newspaper,
} from "lucide-react";

interface UseCaseTag {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const useCases: UseCaseTag[][] = [
  [
    { icon: <MessageSquare className="size-3.5" />, label: "Schedule meetings from chat" },
    { icon: <Mail className="size-3.5" />, label: "Read & summarize email" },
    { icon: <MessageSquare className="size-3.5" />, label: "Draft replies and follow-ups" },
    { icon: <Languages className="size-3.5" />, label: "Translate messages in real time" },
  ],
  [
    { icon: <BadgeDollarSign className="size-3.5" />, label: "Analyze insurance quotes" },
    { icon: <Briefcase className="size-3.5" />, label: "Manage subscriptions" },
    { icon: <AlarmClock className="size-3.5" />, label: "Remind you of deadlines" },
    { icon: <Calendar className="size-3.5" />, label: "Plan your week" },
    { icon: <NotebookPen className="size-3.5" />, label: "Take meeting notes" },
  ],
  [
    { icon: <Calculator className="size-3.5" />, label: "Automate payroll calculations" },
    { icon: <RotateCcw className="size-3.5" />, label: "Negotiate refunds" },
    { icon: <Ticket className="size-3.5" />, label: "Find coupons" },
    { icon: <Search className="size-3.5" />, label: "Find best prices online" },
    { icon: <Percent className="size-3.5" />, label: "Find discount codes" },
    { icon: <LineChart className="size-3.5" />, label: "Track crypto/stocks" },
  ],
  [
    { icon: <CookingPot className="size-3.5" />, label: "Find recipes from ingredients" },
    { icon: <Share2 className="size-3.5" />, label: "Draft social posts" },
    { icon: <FileSignature className="size-3.5" />, label: "Write contracts and NDAs" },
    { icon: <Target className="size-3.5" />, label: "Research competitors" },
    { icon: <Video className="size-3.5" />, label: "Screen interview candidates" },
  ],
  [
    { icon: <LayoutDashboard className="size-3.5" />, label: "Track OKRs and KPIs" },
    { icon: <Newspaper className="size-3.5" />, label: "Monitor news and alerts" },
    { icon: <Target className="size-3.5" />, label: "Set and track goals" },
    { icon: <Send className="size-3.5" />, label: "Screen cold outreach", className: "border-dashed" },
    { icon: <FileText className="size-3.5" />, label: "Draft job descriptions" },
  ],
];

export default function UseCaseShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section
      ref={sectionRef}
      className={`w-full px-4 sm:px-6 py-8 sm:py-12 md:py-16 flex flex-col gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto min-w-0 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'
        }`}
    >
      <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white text-center text-balance">
          What can ArcleIntelligence do for you?
        </h2>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-zinc-500 text-center text-balance">
          One assistant, thousands of use cases
        </h2>
      </div>

      <div className="flex flex-col gap-2 sm:gap-3 relative overflow-hidden">
        {/* Side fade masks */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-12 md:w-20 bg-gradient-to-r from-[#07080a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-12 md:w-20 bg-gradient-to-l from-[#07080a] to-transparent z-10 pointer-events-none" />

        {useCases.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-nowrap items-center gap-2 sm:gap-3 overflow-hidden px-2"
          >
            <div
              className="flex flex-nowrap items-center gap-2 sm:gap-3 animate-flow-row"
              style={{
                animationDuration: `${20 + rowIndex * 5}s`,
                animationDirection: rowIndex % 2 === 0 ? "normal" : "reverse",
              }}
            >
              {/* Duplicate rows for seamless loop */}
              {[...row, ...row].map((item, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-white/10 bg-[#07080a] text-zinc-400 whitespace-nowrap text-xs sm:text-sm flex-shrink-0 transition-colors duration-300 hover:text-white hover:border-white/20 capitalize cursor-default ${item.className || ""}`}
                >
                  <span className="text-zinc-500 group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                  <span className="font-normal">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs sm:text-sm text-zinc-500 italic text-center text-pretty max-w-lg mx-auto leading-relaxed mt-2">
        PS. You can add as many use cases as you want via natural language
      </p>

      <style jsx global>{`
        @keyframes flow-row {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-flow-row {
          animation: flow-row linear infinite;
        }
      `}</style>
    </section>
  );
}
