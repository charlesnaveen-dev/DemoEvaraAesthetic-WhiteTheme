export default function OurApproach() {
  const steps = [
    {
      step: "STEP 01",
      title: "Understand",
      description: "Start with a conversation about your concerns and goals. We take time to listen, review history, and understand what matters most to you."
    },
    {
      step: "STEP 02",
      title: "Assess",
      description: "Perform thorough visual, anatomical, or digital analysis to understand what treatment approaches may be appropriate for you."
    },
    {
      step: "STEP 03",
      title: "Plan",
      description: "Build a personalized treatment approach with transparent steps, realistic timelines, and clear care expectations."
    },
    {
      step: "STEP 04",
      title: "Care",
      description: "Continue your journey with appropriate follow-up, ongoing guidance, and dedicated clinical support."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-t border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
            THE CONSULTATION JOURNEY
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#111111] font-normal">
            Our Approach
          </h2>
          <p className="text-sm text-[#555555] font-light">
            A structured, step-by-step process centered on communication, comfort, and informed choice.
          </p>
        </div>

        {/* 4 Steps Horizontal Storytelling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="bg-[#FFFFFF] border border-[#E5E3DC] p-8 space-y-6 flex flex-col justify-between hover:border-[#B89B5E]/50 transition-all duration-300 relative group shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E5E3DC] pb-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B89B5E] font-semibold">
                    {item.step}
                  </span>
                  <span className="text-xs font-mono text-[#555555]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-3xl text-[#111111] font-normal group-hover:text-[#B89B5E] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#555555] group-hover:text-[#111111] transition-colors">
                <span>STRICT CLINICAL PROTOCOL</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
