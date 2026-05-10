const FeatureTable = () => {
  const features = [
    {
      feature: "Free trial",
      openclaw: "Yes",
      arc: "100% Free Forever",
      legacy: "Limited",
    },
    {
      feature: "Execution Environment",
      openclaw: "Cloud",
      arc: "On-Device",
      legacy: "Cloud",
    },
    {
      feature: "Network Dependency",
      openclaw: "Internet required",
      arc: "True Offline",
      legacy: "Internet required",
    },
    {
      feature: "API Dependencies",
      openclaw: "API needed",
      arc: "Zero Dependencies",
      legacy: "API needed",
    },
    {
      feature: "Hardware Constraints",
      openclaw: "Basic client",
      arc: "Powerful System Req.",
      legacy: "Basic client",
    },
    {
      feature: "Operational Limits",
      openclaw: "API limit",
      arc: "No Limitations",
      legacy: "Monthly Caps",
    },
    {
      feature: "App/Web/Game Gen.",
      openclaw: "No",
      arc: "Native Generation",
      legacy: "Varies",
    },
    {
      feature: "Media Generation",
      openclaw: "API needed",
      arc: "Full Suite Native",
      legacy: "Partial",
    },
  ];

  return (
    <section id="matrix" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto scroll-mt-20">
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end arch-border-b pb-8">
        <div>
          <h2 className="font-mono text-sm uppercase tracking-widest text-klein-blue mb-4">
            Fig. 1 — Data Matrix
          </h2>
          <h3 className="font-sans font-bold text-4xl md:text-6xl uppercase tracking-tighter">
            System
            <br />
            <span className="font-serif italic font-normal text-ink/70">Comparison</span>
          </h3>
        </div>
        <div className="font-mono text-sm text-ink/60 md:max-w-xs md:justify-self-end">
          Architectural differences between ArcIntelligence and legacy cloud-dependent models.
        </div>
      </div>

      <div className="overflow-x-auto arch-border bg-white shadow-xl shadow-ink/5">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="font-mono text-xs uppercase tracking-widest bg-bone">
              <th className="p-6 arch-border-r arch-border-b w-1/4 font-semibold text-ink">
                Feature Matrix
              </th>
              <th className="p-6 arch-border-r arch-border-b w-[22%] text-ink/60 font-normal">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center shadow-lg overflow-hidden relative p-1">
                    <img
                      src="/logos/openclaw-dark.svg"
                      alt="OpenClaw"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-noise opacity-20"></div>
                  </div>
                  <span className="font-bold">OpenClaw</span>
                </div>
              </th>
              <th className="p-6 arch-border-r arch-border-b w-[22%] bg-klein-blue text-bone font-bold relative overflow-hidden">
                <div className="flex flex-col items-center gap-2 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/20 border-2 border-white/30 flex items-center justify-center shadow-lg overflow-hidden relative p-1">
                    <img
                      src="/logos/arc-intelligence.png"
                      alt="ArcIntelligence"
                      className="w-full h-full object-contain brightness-0 invert"
                    />
                    <div className="absolute inset-0 bg-noise opacity-20"></div>
                  </div>
                  <span>ArcIntelligence</span>
                </div>
              </th>
              <th className="p-6 arch-border-b w-[22%] text-ink/60 font-normal">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center shadow-lg overflow-hidden relative p-1">
                    <img
                      src="/logos/arcee-color.svg"
                      alt="Legacy Models"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-noise opacity-20"></div>
                  </div>
                  <span className="font-bold">Legacy Models</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="font-sans text-sm">
            {features.map((row, index) => (
              <tr
                key={index}
                className={`arch-border-b hover-invert group ${index === features.length - 1 ? "" : ""}`}
              >
                <td className="p-6 arch-border-r font-medium group-hover:border-r-klein-blue transition-colors">
                  {row.feature}
                </td>
                <td className="p-6 arch-border-r text-ink/60 group-hover:text-bone/70 group-hover:border-r-klein-blue transition-colors">
                  {row.openclaw}
                </td>
                <td className="p-6 arch-border-r bg-klein-blue/5 text-klein-blue font-bold group-hover:bg-transparent group-hover:text-bone transition-colors">
                  {row.arc}
                </td>
                <td className="p-6 text-ink/60 group-hover:text-bone/70 transition-colors">
                  {row.legacy}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FeatureTable;