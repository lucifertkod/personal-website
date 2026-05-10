"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  WifiOff,
  Mic,
  Shield,
  Cpu,
  Smartphone,
  FileText,
  Languages,
  HelpCircle,
  AppWindow,
  Globe,
  Gamepad2,
  Image,
  Video,
  MonitorSmartphone,
  Eye,
  ScanText,
  Clapperboard,
  MessageCircleQuestion,
  X,
  Download,
} from "lucide-react";

const features = [
  { icon: WifiOff, label: "Offline AI", color: "#3b82f6" },
  { icon: Mic, label: "Voice Powered", color: "#8b5cf6" },
  { icon: Shield, label: "Privacy Focused", color: "#10b981" },
  { icon: Cpu, label: "Does All Your Work", color: "#f59e0b" },
  { icon: Smartphone, label: "On-Device AI Assistant", color: "#06b6d4" },
  { icon: FileText, label: "Text Summarization", color: "#ec4899" },
  { icon: Languages, label: "Translation", color: "#14b8a6" },
  { icon: HelpCircle, label: "Question Answering", color: "#f97316" },
  { icon: AppWindow, label: "Generate Apps from Text", color: "#6366f1" },
  { icon: Globe, label: "Generate Websites from Text", color: "#0ea5e9" },
  { icon: Gamepad2, label: "Generate Games from Text", color: "#a855f7" },
  { icon: Image, label: "Generate Images from Text", color: "#e11d48" },
  { icon: Video, label: "Generate Video from Text", color: "#64748b" },
  { icon: MonitorSmartphone, label: "Generate Website from Screenshots", color: "#22d3ee" },
  { icon: Eye, label: "Image Understanding", color: "#a78bfa" },
  { icon: ScanText, label: "Read Text from Images", color: "#34d399" },
  { icon: Clapperboard, label: "Video Clip Understanding", color: "#fb7185" },
  { icon: MessageCircleQuestion, label: "Visual Question Answering", color: "#fbbf24" },
];

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000" />
    <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none">
    <defs>
      <radialGradient id="ig-grad-r" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad-r)" />
    <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="#fff" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="#000">
    <rect width="24" height="24" rx="4" fill="#fff" />
    <path d="M16.99 3.51h2.72l-5.95 6.8 7 9.18h-5.48l-4.29-5.61-4.91 5.61H3.36l6.36-7.27-6.71-8.71h5.62l3.88 5.13zm-.96 14.37h1.51L8.07 5.07H6.44z" fill="#000" />
  </svg>
);

export default function DeploymentCard() {
  const [socialPopup, setSocialPopup] = useState<string | null>(null);
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

  const socialLinks: Record<string, string> = {
    YouTube: "https://youtube.com/@luciferthetechnicalgamerz8278?si=GvIwGOsEepSICqlA",
    Instagram: "https://www.instagram.com/abhinavanand8608?igshid=YmMyMTA2M2Y%3D",
    X: "https://x.com/Anonomus090806",
  };

  /* ── Replace "#" with your actual download URLs ── */
  const downloadLinks = {
    pro: "#",       // e.g. "https://example.com/download/pro"
  };

  const scrollToDonation = (e: React.MouseEvent) => {
    e.preventDefault();
    const donationSection = document.getElementById("donation-section");
    if (donationSection) {
      donationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`w-full px-4 sm:px-6 pb-6 sm:pb-10 flex flex-col items-center gap-4 sm:gap-6 max-w-5xl mx-auto min-w-0 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'
        }`}
    >
      {/* Features label */}
      <div className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-4 min-h-[40px] sm:min-h-[46px] px-2">
        <div className="shrink min-w-0 flex-1 max-w-[80px] sm:max-w-[180px] md:max-w-[272px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <span className="mx-1 sm:mx-4 shrink-0 text-xs sm:text-sm font-medium text-zinc-400">
          All the features of ArcIntelligence
        </span>
        <div className="shrink min-w-0 flex-1 max-w-[80px] sm:max-w-[180px] md:max-w-[272px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-4 sm:p-6 md:p-8 relative overflow-hidden">
        {/* Sparkle dots */}
        <div className="absolute top-3 right-3 size-1.5 rounded-full bg-white/20 animate-pulse" />
        <div className="absolute top-6 right-8 size-1 rounded-full bg-white/15 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-4 left-5 size-1 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors relative"
              >
                <Icon className="size-4" style={{ color: f.color }} />
                <span className="text-xs sm:text-sm text-zinc-300 font-medium">{f.label}</span>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {(f as any).comingSoon && (
                  <span className="ml-auto text-[10px] font-semibold text-yellow-400 bg-yellow-400/10 px-1.5 py-0.5 rounded">
                    COMING SOON
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
          {[
            { name: "YouTube", icon: <YouTubeIcon /> },
            { name: "Instagram", icon: <InstagramIcon /> },
            { name: "X", icon: <XIcon /> },
          ].map((s) => (
            <button
              key={s.name}
              onClick={() => setSocialPopup(s.name)}
              className="w-full sm:flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-colors text-sm text-zinc-300 font-medium"
            >
              {s.icon}
              {s.name}
            </button>
          ))}
        </div>

        {/* Social Popup */}
        {socialPopup && (
          <div className="mb-6 p-4 rounded-xl border border-white/10 bg-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-sm text-zinc-300 font-medium">
              Connect us on {socialPopup}
            </span>
            <div className="flex items-center gap-2">
              <a
                href={socialLinks[socialPopup]}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
              >
                Open {socialPopup}
              </a>
              <button
                onClick={() => setSocialPopup(null)}
                className="p-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors text-zinc-400"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        )}

        {/* Download Section */}
        <div className="flex flex-col gap-3">
          {/* After Donation — Deep Crimson Red */}
          <a
            href="#donation-section"
            onClick={scrollToDonation}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl text-sm sm:text-base text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(220,38,38,0.4)] border border-red-500/40 bg-gradient-to-r from-red-700/30 via-red-600/20 to-rose-700/30 backdrop-blur-sm no-underline"
          >
            <Download className="size-4" />
            Download ArcIntelligence after donation
          </a>
          {/* Without Donation — Dark / Black */}
          <a
            href={downloadLinks.pro}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl text-sm sm:text-base text-zinc-300 font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] border border-white/15 bg-gradient-to-r from-zinc-800/50 via-neutral-900/60 to-zinc-800/50 backdrop-blur-sm no-underline hover:border-white/25"
          >
            <Download className="size-4" />
            Download ArcIntelligence without donation
          </a>
        </div>
      </div>
    </section>
  );
}
