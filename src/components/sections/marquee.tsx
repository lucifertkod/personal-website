const Marquee = () => {
  const items = [
    "5.82B Parameters",
    "Multimodal AI",
    "1M Context Window",
    "Text Understanding",
    "Image Generation",
    "Document Parsing",
    "Audio Processing",
    "Video Analysis",
    "Speech Synthesis",
    "Independent Build",
    "Open Source Planned",
    "Crowdfunded",
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="arch-border-y bg-ink py-5 overflow-hidden">
      <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
        {repeated.map((item, index) => (
          <div key={index} className="flex items-center gap-6 px-6">
            <span className="font-serif italic text-2xl md:text-3xl text-bone/80">
              {item}
            </span>
            <span className="text-klein-blue text-xs font-sans">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
