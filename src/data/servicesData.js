export const CATEGORIES = [
  {
    id: "dental",
    title: "Dental",
    tagline: "Smile correction and dental care.",
    headline: "Your smile deserves thoughtful care.",
    description: "Confidence begins with a healthy, natural-looking smile. We combine modern cosmetic and restorative dental approaches tailored to your individual anatomy.",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
    quote: "Confidence begins with your smile.",
    path: "/dental",
  },
  {
    id: "skin",
    title: "Skin",
    tagline: "Skin health, pigmentation, acne & aesthetic care.",
    headline: "Skin care, considered differently.",
    description: "Healthy-looking skin starts with understanding it. Our skin care approaches address acne, texture, pigmentation, and rejuvenation with evidence-led care.",
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    quote: "Healthy-looking skin starts with understanding it.",
    path: "/skin",
  },
  {
    id: "hair",
    title: "Hair",
    tagline: "Hair health, hair fall & aesthetic hair treatments.",
    headline: "Healthy-looking hair starts with the right care.",
    description: "Care for your hair. Care for your confidence. We offer targeted hair fall consultations, growth support, and scalp nourishment planned around your needs.",
    heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    quote: "Care for your hair. Care for your confidence.",
    path: "/hair",
  }
];

export const SERVICES = [
  // DENTAL
  {
    id: "smile-correction",
    category: "dental",
    num: "01",
    name: "Smile Correction",
    shortDescription: "Tailored alignment and aesthetic smile evaluation to restore harmony and natural proportion.",
    fullDescription: "Smile correction at Evara Aesthetics focuses on enhancing harmony between your teeth, gums, and facial features. Whether addressing misalignment, spacing, or symmetry, every approach begins with an in-depth consultation.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
    path: "/dental/smile-correction",
    highlights: [
      "Digital smile evaluation",
      "Symmetry & facial alignment focus",
      "Clear aligner & aesthetic options",
      "Minimally invasive approach"
    ],
    suitability: "Suitable for individuals looking to address alignment, spacing, or overall aesthetic smile proportion following a professional assessment.",
    processSteps: [
      { step: "01", title: "Comprehensive Evaluation", text: "Visual assessment, digital imaging, and discussion of aesthetic goals." },
      { step: "02", title: "Customized Plan", text: "Detailed treatment options outlined with timelines and care expectations." },
      { step: "03", title: "Guided Care", text: "Sequential adjustments and progress monitoring with emphasis on comfort." }
    ],
    faqs: [
      { q: "How long does smile correction take?", a: "Timelines depend entirely on your starting alignment and chosen approach, discussed during your initial consultation." },
      { q: "Is a consultation required before starting?", a: "Yes. Every treatment plan is personalized following a detailed oral assessment." }
    ]
  },
  {
    id: "cosmetic-dentistry",
    category: "dental",
    num: "02",
    name: "Cosmetic Dentistry",
    shortDescription: "Veneers, teeth whitening, and aesthetic bonding for a refined, natural-looking smile.",
    fullDescription: "Cosmetic dentistry at Evara aims to accentuate your natural smile. From whitening discolored enamel to porcelain veneers and tooth-colored composite bonding, every treatment is tailored to look understated and authentic.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
    path: "/dental/cosmetic-dentistry",
    highlights: [
      "Professional enamel whitening",
      "Custom shade matching",
      "Aesthetic composite bonding",
      "Veneers & surface refinement"
    ],
    suitability: "Ideal for patients desiring to refine tooth shape, discolored enamel, or minor chipping while maintaining natural dental structure.",
    processSteps: [
      { step: "01", title: "Shade & Form Analysis", text: "Evaluating enamel condition, tooth contours, and desired lightness." },
      { step: "02", title: "Precision Application", text: "Meticulous preparation and custom fitting tailored to natural teeth." },
      { step: "03", title: "Polish & Protect", text: "Final polishing and guidance on long-term maintenance." }
    ],
    faqs: [
      { q: "Will whitening cause sensitivity?", a: "We use clinical formulas designed to minimize discomfort, with post-treatment care guidance provided." }
    ]
  },
  {
    id: "general-dentistry",
    category: "dental",
    num: "03",
    name: "General Dental Care",
    shortDescription: "Preventative check-ups, deep cleaning, scaling, and restorative oral care.",
    fullDescription: "A beautiful smile relies on a strong foundation of oral health. Our general dental care encompasses routine check-ups, ultrasonic scaling, cavity prevention, and restorative treatments designed around long-term wellness.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop",
    path: "/dental/general-dentistry",
    highlights: [
      "Preventative consultations",
      "Ultrasonic plaque scaling",
      "Tooth-colored fillings",
      "Gum wellness management"
    ],
    suitability: "Recommended for all adults seeking bi-annual routine maintenance or early management of dental concerns.",
    processSteps: [
      { step: "01", title: "Examination", text: "Detailed inspection of teeth, gums, and oral tissue health." },
      { step: "02", title: "Gentative Cleaning", text: "Ultrasonic scaling to remove buildup and polish enamel." },
      { step: "03", title: "Maintenance Plan", text: "Personalized recommendations for home care and ongoing follow-ups." }
    ],
    faqs: [
      { q: "How often should I get a dental cleaning?", a: "Routine cleanings are generally recommended every six months, as advised by your dentist." }
    ]
  },

  // SKIN
  {
    id: "acne",
    category: "skin",
    num: "04",
    name: "Acne & Scar Care",
    shortDescription: "Thoughtful management of active breakouts, congestion, and post-acne scarring.",
    fullDescription: "Acne concerns are unique to every individual. Our skin consultations evaluate skin type, inflammatory factors, and lifestyle elements to design targeted care protocols for active acne and scar texture refinement.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
    path: "/skin/acne",
    highlights: [
      "Comedone & breakout evaluation",
      "Customized chemical peel options",
      "Microneedling & scar texture support",
      "Barrier-focused home care advice"
    ],
    suitability: "Suitable for persistent acne breakouts, post-inflammatory hyperpigmentation (PIH), or pitted acne scarring.",
    processSteps: [
      { step: "01", title: "Skin Analysis", text: "Examining pore congestion, inflammation levels, and barrier strength." },
      { step: "02", title: "Treatment Mapping", text: "Combining clinical therapies with barrier-support topical routines." },
      { step: "03", title: "Progressive Care", text: "Monitoring skin response across sessions for optimal comfort." }
    ],
    faqs: [
      { q: "How many sessions are typically required?", a: "Session counts vary based on severity, skin responsiveness, and scar depth discussed during consultation." }
    ]
  },
  {
    id: "pigmentation",
    category: "skin",
    num: "05",
    name: "Pigmentation & Dark Spots",
    shortDescription: "Targeted approaches for melasma, sun spots, and uneven skin tone.",
    fullDescription: "Hyper-pigmentation requires subtle, respectful skin handling. We utilize evidence-based aesthetic solutions to help fade dark spots, even out skin tone, and restore skin radiance without compromising barrier integrity.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    path: "/skin/pigmentation",
    highlights: [
      "Tone & melanin distribution analysis",
      "Targeted brightening peels",
      "Advanced light-based therapies",
      "Sun protection & maintenance protocols"
    ],
    suitability: "Designed for individuals experiencing melasma, sun damage, dark spots, or dull skin tone.",
    processSteps: [
      { step: "01", title: "Pigment Assessment", text: "Identifying superficial vs deep pigment distribution." },
      { step: "02", title: "Gentle In-Clinic Protocol", text: "Applying calibrated clinical treatments designed for skin safety." },
      { step: "03", title: "Maintenance & Defense", text: "Establishing strict UV protection and home maintenance routines." }
    ],
    faqs: [
      { q: "Can pigmentation return?", a: "Pigmentation management relies heavily on sun protection and ongoing skin care maintenance." }
    ]
  },
  {
    id: "skin-rejuvenation",
    category: "skin",
    num: "06",
    name: "Skin Rejuvenation",
    shortDescription: "Hydrating facials, collagen support, and fine-line aesthetic care.",
    fullDescription: "Rejuvenate your skin's natural vitality with deep hydration, antioxidant infusions, and texture refinement treatments designed to support skin elasticity and healthy radiance.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1000&auto=format&fit=crop",
    path: "/skin/skin-rejuvenation",
    highlights: [
      "Medi-facials & hydra-nourishment",
      "Collagen stimulation therapies",
      "Exfoliation & texture polish",
      "Radiance restoration"
    ],
    suitability: "Perfect for tired skin, early fine lines, dehydration, or pre-event radiance boost.",
    processSteps: [
      { step: "01", title: "Hydration Mapping", text: "Assessing skin moisture retention and elasticity." },
      { step: "02", title: "Infusion Session", text: "Applying active serums, soothing masks, and targeted therapy." },
      { step: "03", title: "Glow & Protect", text: "Locking in moisture with lightweight, non-comedogenic barriers." }
    ],
    faqs: [
      { q: "Is there downtime after rejuvenation treatments?", a: "Most rejuvenation treatments require zero downtime, allowing immediate return to daily activities." }
    ]
  },
  {
    id: "laser-treatments",
    category: "skin",
    num: "07",
    name: "Laser Skin Care",
    shortDescription: "Advanced light-based technology for precision skin tone and texture enhancement.",
    fullDescription: "Modern light-based aesthetic treatments provide focused options for tone evening, redness management, and skin tightening under strict clinical protocols.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop",
    path: "/skin/laser-treatments",
    highlights: [
      "Precision light therapy",
      "Skin patch testing prior to treatment",
      "Calibrated cooling systems",
      "Tailored energy settings"
    ],
    suitability: "Suitable for candidates meeting clinical criteria following a thorough laser safety skin assessment.",
    processSteps: [
      { step: "01", title: "Safety Screening", text: "Patch testing and medical history review for light sensitivity." },
      { step: "02", title: "Calibrated Treatment", text: "Application with cooling gels and protective eyewear." },
      { step: "03", title: "Post-Laser Care", text: "Soothing topical application and post-care guidance." }
    ],
    faqs: [
      { q: "Does laser skin care require patch testing?", a: "Yes. Patch testing is conducted prior to full session treatment for optimal safety." }
    ]
  },

  // HAIR
  {
    id: "hair-fall",
    category: "hair",
    num: "08",
    name: "Hair Fall Consultation",
    shortDescription: "Scalp evaluation, root analysis, and personalized hair loss management.",
    fullDescription: "Hair thinning and excessive hair fall can stem from dietary, hormonal, stress, or genetic factors. Our consultations focus on identifying root triggers and building a realistic, structured hair care roadmap.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    path: "/hair/hair-fall",
    highlights: [
      "Trichology scalp analysis",
      "Hair density evaluation",
      "Root & follicle assessment",
      "Comprehensive care regimen"
    ],
    suitability: "Designed for men and women noticing increased hair shedding, thinning crown, or scalp tenderness.",
    processSteps: [
      { step: "01", title: "Scalp Inspection", text: "High-magnification evaluation of scalp health and follicle density." },
      { step: "02", title: "Factor Analysis", text: "Reviewing lifestyle, stress, nutrition, and systemic triggers." },
      { step: "03", title: "Custom Roadmap", text: "Structuring targeted treatments alongside home care routines." }
    ],
    faqs: [
      { q: "When should I consult for hair fall?", a: "Early consultation allows timely evaluation before significant density loss occurs." }
    ]
  },
  {
    id: "hair-growth",
    category: "hair",
    num: "09",
    name: "Hair Growth Support",
    shortDescription: "Nutritional, topical, and aesthetic protocols to nurture scalp environment and follicle strength.",
    fullDescription: "Nurture stronger, healthier-looking hair. Our hair growth support plans combine scalp nourishment, micro-nutrient therapy, and scalp circulation techniques to foster an optimal environment for growth.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop",
    path: "/hair/hair-growth",
    highlights: [
      "Scalp circulation therapy",
      "Active ingredient micro-infusions",
      "Follicle nutrition guidance",
      "Density maintenance"
    ],
    suitability: "Recommended for individuals seeking to support hair density, improve strand thickness, and enhance scalp vitality.",
    processSteps: [
      { step: "01", title: "Scalp Preparation", text: "Cleansing and exfoliating scalp to optimize absorption." },
      { step: "02", title: "Targeted Infusion", text: "Delivering clinical nourishment directly to scalp layers." },
      { step: "03", title: "Maintenance Monitoring", text: "Tracking hair shaft quality and density changes over time." }
    ],
    faqs: [
      { q: "How long before noticeable changes?", a: "Hair growth cycles require consistency; initial hair texture and scalp improvement is typically evaluated over 3 to 6 months." }
    ]
  },
  {
    id: "prp",
    category: "hair",
    num: "10",
    name: "PRP Hair Therapy",
    shortDescription: "Autologous growth factor therapy to support scalp follicle rejuvenation.",
    fullDescription: "Platelet-Rich Plasma (PRP) therapy utilizes your body's natural growth factors to stimulate dormant follicles and support scalp rejuvenation under sterile clinical administration.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop",
    path: "/hair/prp",
    highlights: [
      "Autologous growth factor application",
      "Sterile clinical procedure",
      "Targeted scalp administration",
      "Follicle vitality support"
    ],
    suitability: "Offered following clinical evaluation for suitable candidates experiencing early to moderate hair thinning.",
    processSteps: [
      { step: "01", title: "Clinical Sample Prep", text: "Preparation of autologous growth factor concentrate under sterile conditions." },
      { step: "02", title: "Precision Scalp Application", text: "Gentle targeted administration across areas of concern." },
      { step: "03", title: "Post-Therapy Guidance", text: "Simple home care instructions to ensure scalp comfort." }
    ],
    faqs: [
      { q: "Is PRP therapy painful?", a: "Topical numbing is applied prior to therapy to maximize patient comfort throughout." }
    ]
  }
];
