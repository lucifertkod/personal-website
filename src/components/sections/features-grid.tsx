const FeaturesGrid = () => {
  const categories = [
    {
      title: "Comms & Admin",
      icon: "01",
      items: [
        "Schedule meetings from chat",
        "Read & summarize email",
        "Draft replies and follow-ups",
        "Translate messages real time",
        "Take meeting notes",
      ],
    },
    {
      title: "Life Operations",
      icon: "02",
      items: [
        "Analyze insurance quotes",
        "Manage subscriptions",
        "Remind you of deadlines",
        "Plan your week",
        "Find recipes from ingredients",
      ],
    },
    {
      title: "Finance & Markets",
      icon: "03",
      items: [
        "Automate payroll calculations",
        "Negotiate refunds",
        "Find best prices online",
        "Find discount codes",
        "Track crypto & stocks",
      ],
    },
    {
      title: "Business Strategy",
      icon: "04",
      items: [
        "Draft social posts",
        "Write contracts and NDAs",
        "Research competitors",
        "Screen candidates",
        "Track OKRs and KPIs",
      ],
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 arch-border-b pb-8">
          <div className="md:col-span-7">
            <p className="font-label text-klein-blue mb-4">
              Fig. 02 — Operations
            </p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9]">
              One Node.
              <br />
              <span className="font-serif italic font-light text-ink/60 lowercase">
                Thousands of uses.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 md:flex md:items-end">
            <div className="font-label arch-border px-4 py-2.5 inline-block hover:bg-ink hover:text-bone transition-colors duration-300 cursor-default">
              + Add via Natural Language
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 arch-border">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 card-hover group ${
                index > 0 ? "md:arch-border-l" : ""
              } ${index >= 2 ? "lg:arch-border-t md:arch-border-t lg:arch-border-t-0" : ""} ${
                index === 1 ? "lg:arch-border-t-0" : ""
              }`}
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-sans font-bold text-sm uppercase tracking-wider group-hover:text-bone transition-colors">
                  {category.title}
                </h3>
                <span className="font-mono text-[10px] text-ink/20 card-hover-accent transition-colors">
                  {category.icon}
                </span>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="font-mono text-xs text-ink/60 group-hover:text-bone/80 transition-colors flex items-start gap-2"
                  >
                    <span className="text-klein-blue group-hover:text-bone transition-colors mt-0.5 shrink-0">
                      ↬
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Media suite banner */}
        <div className="mt-8 arch-border bg-card p-6 md:p-8 text-center">
          <p className="font-label text-klein-blue mb-2">
            Advanced Media Suite
          </p>
          <p className="font-serif text-lg md:text-xl italic text-ink/70">
            Generate Websites, Apps, and Games from Text &middot; Image &amp; Video Generation &middot; Deep Understanding
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
