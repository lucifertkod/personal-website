const FeaturesGrid = () => {
  const categories = [
    {
      title: "Comms & Admin",
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
      items: [
        "Automate payroll calculations",
        "Negotiate refunds",
        "Find best prices online",
        "Find discount codes",
        "Track crypto/stocks",
      ],
    },
    {
      title: "Business Strategy",
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
    <section id="features" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto scroll-mt-20">
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end arch-border-b pb-8">
        <div>
          <h2 className="font-mono text-sm uppercase tracking-widest text-klein-blue mb-4">
            Fig. 2 — Operations
          </h2>
          <h3 className="font-sans font-bold text-4xl md:text-6xl uppercase tracking-tighter">
            One Node.
            <br />
            <span className="font-serif italic font-normal text-ink/70">Thousands of Uses.</span>
          </h3>
        </div>
        <div className="justify-self-start md:justify-self-end">
          <div className="font-mono text-xs uppercase tracking-widest border border-ink px-4 py-2 hover:bg-ink hover:text-bone transition-colors cursor-default">
            + Add via Natural Language
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-ink gap-px border border-ink">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-bone p-8 flex flex-col group hover:bg-klein-blue transition-colors duration-500"
          >
            <h4 className="font-sans font-bold uppercase text-lg mb-6 group-hover:text-bone transition-colors">
              {category.title}
            </h4>
            <ul className="font-mono text-sm space-y-4 text-ink/70 group-hover:text-bone/80 transition-colors">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2">
                  <span className="text-klein-blue group-hover:text-bone">↬</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 arch-border p-6 bg-white text-center font-serif text-xl md:text-2xl italic text-ink/80 shadow-md">
        <span className="font-sans font-bold not-italic uppercase text-sm tracking-widest text-klein-blue block mb-2">
          Advanced Media Suite
        </span>
        Generate Websites, Apps, and Games from Text • Image & Video Generation • Deep Image &amp; Video Understanding
      </div>
    </section>
  );
};

export default FeaturesGrid;