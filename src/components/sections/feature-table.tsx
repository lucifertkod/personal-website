"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';

const featureData = [
    { feature: 'Free', pro: { type: 'check', text: '(forever)' }, lite: { type: 'check', text: '(forever)' }, automate: { type: 'check', text: '(forever)' } },
    { feature: 'Offline', pro: { type: 'check' }, lite: { type: 'check' }, automate: { type: 'check' } },
    { feature: 'Ondevice', pro: { type: 'check' }, lite: { type: 'check' }, automate: { type: 'check' } },
    { feature: 'Privacy focused', pro: { type: 'check' }, lite: { type: 'check' }, automate: { type: 'check' } },
    { feature: 'Latency free', pro: { type: 'check' }, lite: { type: 'check' }, automate: { type: 'check' } },
    { feature: 'Automation', pro: { type: 'check' }, lite: { type: 'check' }, automate: { type: 'check' } },
    { feature: 'LLM related work', pro: { type: 'check' }, lite: { type: 'check' }, automate: { type: 'check' } },
    { feature: 'Text & Image', pro: { type: 'check' }, lite: { type: 'check' }, automate: { type: 'x' } },
    { feature: 'Text to Video', pro: { type: 'check' }, lite: { type: 'x' }, automate: { type: 'x' } },
    { feature: 'Understand Images & Video', pro: { type: 'check' }, lite: { type: 'x' }, automate: { type: 'x' } },
    { feature: 'Image 2 Code', pro: { type: 'check' }, lite: { type: 'x' }, automate: { type: 'x' } },
    { feature: 'Android compatibility', pro: { type: 'check' }, lite: { type: 'check' }, automate: { type: 'check' } },
    { feature: 'iOS compatibility', pro: { type: 'x' }, lite: { type: 'x' }, automate: { type: 'x' } },
];

const FeatureIcon = ({ data }: { data: { type: string; text?: string } }) => (
    <div className="flex flex-col items-center justify-center gap-1">
        {data.type === 'check' ? (
            <div className="flex items-center justify-center size-5 sm:size-7 bg-[#84cc16] rounded-md shadow-[0_0_10px_rgba(132,204,22,0.3)]">
                <Check strokeWidth={4} className="size-3.5 sm:size-4 text-white" />
            </div>
        ) : (
            <div className="flex items-center justify-center size-5 sm:size-7 rounded-md">
                <X strokeWidth={4} className="size-4 sm:size-6 text-[#ef4444]" />
            </div>
        )}
        {data.text && (
            <span className="text-[10px] sm:text-xs text-emerald-400/80 italic text-center whitespace-pre-wrap max-w-[100px] leading-snug mt-0.5">
                {data.text}
            </span>
        )}
    </div>
);

export default function FeatureTable() {
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
            className={`w-full px-4 sm:px-6 py-10 sm:py-16 flex flex-col gap-3 max-w-6xl mx-auto min-w-0 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'
                }`}
        >
            {/* Label */}
            <div className="w-full max-w-full flex flex-wrap items-center justify-center gap-2 sm:gap-4 min-h-[40px] sm:min-h-[46px] px-2 mb-2">
                <div className="shrink min-w-0 flex-1 max-w-[80px] sm:max-w-[180px] md:max-w-[272px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="mx-1 sm:mx-4 shrink-0 text-xs sm:text-sm font-medium text-zinc-400 uppercase tracking-widest">
                    Features
                </span>
                <div className="shrink min-w-0 flex-1 max-w-[80px] sm:max-w-[180px] md:max-w-[272px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight text-center mb-8 sm:mb-12 md:mb-16 text-balance">
                ArcleIntelligence Feature Comparison
            </h2>

            <div className="w-full overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] p-2 shadow-2xl backdrop-blur-sm">
                <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                        <tr>
                            <th className="py-6 px-6 text-left font-sans text-base sm:text-lg text-white font-semibold border-b border-white/10 w-[34%]">
                                Feature
                            </th>
                            <th className="py-6 px-4 text-center font-sans text-sm sm:text-base text-white font-semibold border-b border-white/10 w-[22%]">
                                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Pro</span>
                            </th>
                            <th className="py-6 px-4 text-center font-sans text-sm sm:text-base text-white font-semibold border-b border-white/10 w-[22%]">
                                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Lite</span>
                            </th>
                            <th className="py-6 px-4 text-center font-sans text-sm sm:text-base text-white font-semibold border-b border-white/10 w-[22%]">
                                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Automate</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {featureData.map((row, idx) => (
                            <tr
                                key={idx}
                                className={`transition-colors duration-200 hover:bg-white/[0.04] ${idx !== featureData.length - 1 ? 'border-b border-white/5' : ''
                                    }`}
                                style={{
                                    animationDelay: `${idx * 50}ms`,
                                }}
                            >
                                <td className="py-5 px-6 text-left font-sans text-sm sm:text-base text-zinc-300 font-medium tracking-wide">
                                    {row.feature}
                                </td>
                                <td className="py-5 px-4 align-middle">
                                    <FeatureIcon data={row.pro} />
                                </td>
                                <td className="py-5 px-4 align-middle">
                                    <FeatureIcon data={row.lite} />
                                </td>
                                <td className="py-5 px-4 align-middle">
                                    <FeatureIcon data={row.automate} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
