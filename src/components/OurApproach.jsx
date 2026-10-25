import { Sparkles, ArrowRight } from 'lucide-react';

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
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF9FC] border-t border-[#E6E2ED]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF]">
            <Sparkles className="w-3 h-3 text-[#4A1571]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#4A1571] font-semibold">
              THE CONSULTATION JOURNEY
            </span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-normal leading-tight">
            Our Approach
          </h2>
          <p className="text-sm sm:text-base text-[#5B5566] font-light max-w-xl mx-auto leading-relaxed">
            A structured, step-by-step process centered on communication, comfort, and informed choice.
          </p>
        </div>

        {/* 4 Steps Horizontal Storytelling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="bg-white border border-[#E6E2ED] rounded-3xl p-7 sm:p-8 space-y-6 flex flex-col justify-between hover:border-[#4A1571]/50 transition-all duration-300 relative group shadow-sm hover:shadow-xl hover:shadow-purple-950/5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E6E2ED] pb-3.5">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#4A1571] font-semibold">
                    {item.step}
                  </span>
                  <span className="font-serif-luxury text-2xl text-[#797285] font-light">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#14101A] font-normal group-hover:text-[#4A1571] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5B5566] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E2ED] flex items-center justify-between text-[10px] uppercase tracking-widest text-[#797285] group-hover:text-[#0284C7] transition-colors font-medium">
                <span>CLINICAL PROTOCOL</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#0284C7]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
