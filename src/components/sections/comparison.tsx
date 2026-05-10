"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';

const comparisonData = [
  { feature: 'Free trial', openclaw: { type: 'x' }, simpleclaw: { type: 'x' }, arc: { type: 'check' }, other: { type: 'check' } },
  { feature: 'On-Device', openclaw: { type: 'x' }, simpleclaw: { type: 'x' }, arc: { type: 'check' }, other: { type: 'x' } },
  { feature: 'Internet required', openclaw: { type: 'check' }, simpleclaw: { type: 'check' }, arc: { type: 'x' }, other: { type: 'check' } },
  { feature: 'API needed', openclaw: { type: 'check' }, simpleclaw: { type: 'check' }, arc: { type: 'x' }, other: { type: 'check' } },
  { feature: 'Offline', openclaw: { type: 'x' }, simpleclaw: { type: 'x' }, arc: { type: 'check' }, other: { type: 'x' } },
  { feature: 'Powerful system required', openclaw: { type: 'check' }, simpleclaw: { type: 'check' }, arc: { type: 'x' }, other: { type: 'check' } },
  { feature: 'Supporting apps needed', openclaw: { type: 'check' }, simpleclaw: { type: 'check' }, arc: { type: 'x' }, other: { type: 'check' } },
  { feature: 'Latency', openclaw: { type: 'check' }, simpleclaw: { type: 'check' }, arc: { type: 'x' }, other: { type: 'check' } },
  { feature: 'Any limit', openclaw: { type: 'check', text: '(APIs limit)' }, simpleclaw: { type: 'check', text: '(APIs limit)' }, arc: { type: 'x' }, other: { type: 'check' } },
  { feature: 'Any monthly cap', openclaw: { type: 'check', text: '(APIs limit)' }, simpleclaw: { type: 'check', text: '(APIs limit)' }, arc: { type: 'x' }, other: { type: 'x' } },
  { feature: 'Can create apps', openclaw: { type: 'x' }, simpleclaw: { type: 'x' }, arc: { type: 'check' }, other: { type: 'check' } },
  { feature: 'Can create website', openclaw: { type: 'x' }, simpleclaw: { type: 'x' }, arc: { type: 'check' }, other: { type: 'check' } },
  { feature: 'Create games', openclaw: { type: 'x' }, simpleclaw: { type: 'x' }, arc: { type: 'check' }, other: { type: 'check' } },
  { feature: 'Text to image', openclaw: { type: 'x', text: '(APIs needed)' }, simpleclaw: { type: 'x', text: '(APIs needed)' }, arc: { type: 'check' }, other: { type: 'check' } },
  { feature: 'Text to video', openclaw: { type: 'x', text: '(APIs needed)' }, simpleclaw: { type: 'x', text: '(APIs needed)' }, arc: { type: 'check' }, other: { type: 'x', text: '(some models can\ncreate)' } }
];

const ComparisonIcon = ({ data }: { data: { type: string, text?: string } }) => {
  return (
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
        <span className="text-[10px] sm:text-xs text-zinc-400 italic text-center whitespace-pre-wrap max-w-[100px] leading-snug mt-1">
          {data.text}
        </span>
      )}
    </div>
  );
};

const Comparison = () => {
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
      className={`w-full px-4 sm:px-6 py-10 sm:py-16 md:py-32 flex flex-col gap-3 max-w-6xl mx-auto min-w-0 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'
        }`}
    >
      {/* Label/Header with horizontal lines */}
      <div className="w-full max-w-full flex flex-wrap items-center justify-center gap-2 sm:gap-4 min-h-[40px] sm:min-h-[46px] px-2 mb-2">
        <div className="shrink min-w-0 flex-1 max-w-[80px] sm:max-w-[180px] md:max-w-[272px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <span className="mx-1 sm:mx-4 shrink-0 text-xs sm:text-sm font-medium text-zinc-400 uppercase tracking-widest">Comparison</span>
        <div className="shrink min-w-0 flex-1 max-w-[80px] sm:max-w-[180px] md:max-w-[272px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight text-center mb-8 sm:mb-12 md:mb-16 text-balance">
        OpenClaw vs SimpleClaw vs ArcIntelligence vs Other Traditional AI Models
      </h2>

      <div className="w-full overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] p-2 shadow-2xl backdrop-blur-sm">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr>
              <th className="py-6 px-6 text-left font-sans text-base sm:text-lg text-white font-semibold border-b border-white/10 w-[24%]">
                Feature
              </th>
              <th className="py-6 px-4 text-center font-sans text-sm sm:text-base text-white font-semibold border-b border-white/10 w-[19%]">
                Openclaw
              </th>
              <th className="py-6 px-4 text-center font-sans text-sm sm:text-base text-white font-semibold border-b border-white/10 w-[19%]">
                Simpleclaw
              </th>
              <th className="py-6 px-4 text-center font-sans text-sm sm:text-base text-white font-semibold border-b border-white/10 w-[19%]">
                Arcintelligence
              </th>
              <th className="py-6 px-4 text-center font-sans text-sm sm:text-base text-white font-semibold border-b border-white/10 w-[19%]">
                Other AI models
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-colors duration-200 hover:bg-white/[0.04] ${idx !== comparisonData.length - 1 ? 'border-b border-white/5' : ''
                  }`}
              >
                <td className="py-5 px-6 text-left font-sans text-sm sm:text-base text-zinc-300 font-medium tracking-wide">
                  {row.feature}
                </td>
                <td className="py-5 px-4 align-middle">
                  <ComparisonIcon data={row.openclaw} />
                </td>
                <td className="py-5 px-4 align-middle">
                  <ComparisonIcon data={row.simpleclaw} />
                </td>
                <td className="py-5 px-4 align-middle">
                  <ComparisonIcon data={row.arc} />
                </td>
                <td className="py-5 px-4 align-middle">
                  <ComparisonIcon data={row.other} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Comparison;
