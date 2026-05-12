const Marquee = () => {
  const items = [
    "Offline AI",
    "Voice Powered",
    "Privacy Focused",
    "Does All Your Work",
    "On-Device AI Assistant",
    "Text Summarization",
    "Translation",
  ];

  const repeatedItems = [...items, ...items];

  return (
    <section className="arch-border-y bg-ink py-6 overflow-hidden relative">
      <div className="flex w-[200%] animate-[marquee_30s_linear_infinite] font-serif italic text-3xl md:text-4xl tracking-wide text-bone whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex-1 flex justify-around items-center">
            <span>{item}</span>
            <span className="font-sans text-klein-blue text-sm px-4">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;