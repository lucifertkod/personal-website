"use client";

import React, { useEffect, useRef, useState } from 'react';

const deviceSpecsData = [
    {
        spec: 'Processor needed',
        pro: 'Dimensity 7200',
        lite: 'SD 6 Gen 3',
        automate: 'SD 4 Gen 2',
    },
    {
        spec: 'RAM needed',
        pro: '8GB',
        lite: '6GB',
        automate: '4GB',
    },
    {
        spec: 'Storage needed',
        pro: '6GB',
        lite: '3GB',
        automate: '2GB',
    },
    {
        spec: 'Internet required',
        pro: '8GB',
        proNote: '(required only when installing/downloading)',
        lite: '7GB',
        liteNote: '(required only when installing/downloading)',
        automate: '3GB',
        automateNote: '(required only when installing/downloading)',
    },
];

export default function DeviceSpecsTable() {
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
                    Device Requirements
                </span>
                <div className="shrink min-w-0 flex-1 max-w-[80px] sm:max-w-[180px] md:max-w-[272px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight text-center mb-8 sm:mb-12 md:mb-16 text-balance">
                Minimum Device Specifications
            </h2>

            <div className="w-full overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] p-2 shadow-2xl backdrop-blur-sm">
                <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                        <tr>
                            <th className="py-6 px-6 text-left font-sans text-base sm:text-lg text-white font-semibold border-b border-white/10 w-[28%]">
                                Device Specs
                            </th>
                            <th className="py-6 px-4 text-center font-sans text-sm sm:text-base text-white font-semibold border-b border-white/10 w-[24%]">
                                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Pro</span>
                            </th>
                            <th className="py-6 px-4 text-center font-sans text-sm sm:text-base text-white font-semibold border-b border-white/10 w-[24%]">
                                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Lite</span>
                            </th>
                            <th className="py-6 px-4 text-center font-sans text-sm sm:text-base text-white font-semibold border-b border-white/10 w-[24%]">
                                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Automate</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {deviceSpecsData.map((row, idx) => (
                            <tr
                                key={idx}
                                className={`transition-colors duration-200 hover:bg-white/[0.04] ${idx !== deviceSpecsData.length - 1 ? 'border-b border-white/5' : ''
                                    }`}
                            >
                                <td className="py-5 px-6 text-left font-sans text-sm sm:text-base text-zinc-300 font-medium tracking-wide">
                                    {row.spec}
                                </td>
                                <td className="py-5 px-4 text-center font-sans text-sm sm:text-base text-zinc-200">
                                    <span className="font-semibold">{row.pro}</span>
                                    {row.proNote && (
                                        <span className="block text-[10px] sm:text-xs text-zinc-500 italic mt-1 leading-snug">
                                            {row.proNote}
                                        </span>
                                    )}
                                </td>
                                <td className="py-5 px-4 text-center font-sans text-sm sm:text-base text-zinc-200">
                                    <span className="font-semibold">{row.lite}</span>
                                    {row.liteNote && (
                                        <span className="block text-[10px] sm:text-xs text-zinc-500 italic mt-1 leading-snug">
                                            {row.liteNote}
                                        </span>
                                    )}
                                </td>
                                <td className="py-5 px-4 text-center font-sans text-sm sm:text-base text-zinc-200">
                                    <span className="font-semibold">{row.automate}</span>
                                    {row.automateNote && (
                                        <span className="block text-[10px] sm:text-xs text-zinc-500 italic mt-1 leading-snug">
                                            {row.automateNote}
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
