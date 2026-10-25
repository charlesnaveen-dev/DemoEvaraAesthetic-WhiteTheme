export default function OurApproach() {
  const steps = [
    {
      step: "01",
      title: "Understand",
      description: "Start with a conversation about your concerns and goals. We take time to listen, review history, and understand what matters most to you."
    },
    {
      step: "02",
      title: "Assess",
      description: "Perform thorough visual, anatomical, or digital analysis to understand what treatment approaches may be appropriate for you."
    },
    {
      step: "03",
      title: "Plan",
      description: "Build a personalized treatment approach with transparent steps, realistic timelines, and clear care expectations."
    },
    {
      step: "04",
      title: "Care",
      description: "Continue your journey with appropriate follow-up, ongoing guidance, and dedicated clinical support."
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#4E4B54] font-medium">
            THE CONSULTATION JOURNEY
          </p>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#16141A] font-normal leading-tight">
            Our Approach
          </h2>
          <p className="text-sm sm:text-base text-[#4E4B54] font-light leading-relaxed">
            A structured, step-by-step process centered on communication, comfort, and informed choice.
          </p>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((item) => (
            <div
              key={item.step}
              className="space-y-4 pt-6 border-t border-[#DCE5DF]"
            >
              <span className="font-mono text-xs text-[#7A7682] block">
                STEP {item.step}
              </span>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#16141A] font-normal">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#4E4B54] font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
