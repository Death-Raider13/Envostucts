export type ServiceData = {
  slug: string
  title: string
  tagline: string
  heroImage: string
  icon: string
  overview: string
  whatWeDeliver: string[]
  process: { step: string; title: string; description: string }[]
  projectExamples: { title: string; value: string; slug?: string; description: string }[]
  faqs: { q: string; a: string }[]
}

export const servicesData: Record<string, ServiceData> = {
  "geotechnical-services": {
    slug: "geotechnical-services",
    title: "Geotechnical Services",
    tagline: "Know your ground before you build on it",
    heroImage: "/lekki%20freezone%20subsoil.png",
    icon: "FlaskConical",
    overview:
      "Every structure is only as strong as the ground beneath it. Envostructs' geotechnical team provides the subsurface intelligence that underpins every safe, cost-effective foundation decision. From borehole drilling and laboratory testing to full geotechnical reports with foundation recommendations, we have investigated ground conditions across Lagos, Ogun, Ondo, Benue, and Abuja — and every Nigerian soil type holds its secrets for the engineer who knows how to read them.",
    whatWeDeliver: [
      "Subsoil investigations: borehole drilling from 10–30m depth",
      "Standard Penetration Tests (SPT) and in-situ soil testing",
      "Laboratory analysis: particle size, Atterberg limits, consolidation, shear strength",
      "Geotechnical engineering reports with specific foundation recommendations",
      "Deep foundation design: bored piles, driven piles, micro-piles",
      "Settlement analysis and differential settlement predictions",
      "Slope stability assessment for cut slopes and embankments",
      "Ground improvement recommendations for weak soils",
      "Foundation inspection and supervision during construction",
      "Expert witness and dispute investigation services",
    ],
    process: [
      { step: "01", title: "Site Reconnaissance", description: "Desktop study of available geological maps, aerial imagery, and site visit to identify visible features and access constraints." },
      { step: "02", title: "Borehole Drilling", description: "Drilling to the required depth at planned locations, with soil sampling at regular intervals and in-situ SPT testing." },
      { step: "03", title: "Laboratory Testing", description: "All samples tested at accredited Lagos laboratories for particle size, plasticity, compressibility and shear strength." },
      { step: "04", title: "Analysis & Report", description: "Comprehensive geotechnical report: soil profile, bearing capacity, foundation type recommendation, settlement estimates." },
      { step: "05", title: "Foundation Supervision", description: "Optional inspection of excavations and piling works to confirm actual conditions match the investigation findings." },
    ],
    projectExamples: [
      { title: "NASFAT Bored Pile Foundation, Isolo", value: "₦12 Million", slug: "nasfat-central-mosque", description: "Subsoil investigation revealed 8m of soft alluvial soil, leading to bored pile design to 12m depth." },
      { title: "Lagos Free Zone Subsoil Investigation", value: "₦2.1 Million", description: "Multi-borehole investigation across coastal reclaimed land for infrastructure planning." },
      { title: "Micropile for Billboard, Surulere", value: "₦5.4 Million", description: "Specialist micropile foundation for a major LED billboard on a constrained urban site." },
      { title: "Swiss International Hotel, Abeokuta", value: "₦6.5 Billion", slug: "swiss-international-hotel-abeokuta", description: "Deep foundation design for 15-storey hotel structure." },
    ],
    faqs: [
      { q: "Do I need a geotechnical investigation for a residential building?", a: "Yes. Any building of 2 storeys or more in Lagos and South-West Nigeria requires a geotechnical investigation to determine the appropriate foundation type and depth. The cost is typically 0.3–0.8% of the building value — the cheapest insurance you will ever buy." },
      { q: "How long does a borehole investigation take?", a: "For a typical residential or commercial plot, field drilling takes 2–5 days. Laboratory testing takes 7–14 days. The full geotechnical report is typically delivered within 3–4 weeks of site work completion." },
      { q: "What is the difference between strip foundations and pile foundations?", a: "Strip and pad foundations are suitable where firm bearing strata are within 1.5–3m of the surface. Pile foundations are needed when soft or compressible soils extend deeper, requiring loads to be transferred to a firmer stratum at depth. Our investigation will tell you exactly which applies to your site." },
      { q: "Can you investigate sites outside Lagos?", a: "Yes. We have investigated sites in Lagos, Ogun, Ondo, Benue, Abuja, and other states. We mobilise a drilling team to wherever the project requires." },
    ],
  },

  "design-documentation": {
    slug: "design-documentation",
    title: "Design & Documentation",
    tagline: "Precision engineering drawings that builders can trust",
    heroImage: "/first-bank%20designs.png",
    icon: "Pencil",
    overview:
      "A building is only as good as its design. Envostructs produces structural engineering drawings, calculations, and specifications that contractors can build from with confidence and that regulatory bodies will approve without hesitation. Our design team — covering structural, civil, and geotechnical disciplines — has produced design packages for 15-storey hotels, royal palaces, mosques, classrooms, bank branches, and road infrastructure across Nigeria.",
    whatWeDeliver: [
      "Structural design for all building types: residential, commercial, hospitality, religious, educational",
      "Reinforced concrete frame design to BS 8110 and Eurocode standards",
      "Steel frame design and connection detailing",
      "Foundation design: strip, pad, raft, piled and combined systems",
      "Civil engineering design: road pavement, drainage, culverts",
      "Bill of Quantities (BOQ) preparation",
      "Technical specifications and materials schedules",
      "Building plan drawings for LASG and other state regulatory approval",
      "Coordination with architectural and MEP consultants",
      "Structural inspections and as-built documentation",
    ],
    process: [
      { step: "01", title: "Design Brief", description: "Client meeting to establish structural requirements, architectural parameters, budget constraints, and regulatory context." },
      { step: "02", title: "Conceptual Design", description: "Structural concept agreed with the client and architect — frame type, foundation approach, span arrangements." },
      { step: "03", title: "Detailed Design & Calculations", description: "Full structural analysis using industry-standard software. All elements sized and verified against BS/Eurocode." },
      { step: "04", title: "Drawing Production", description: "Detailed structural drawings produced: foundation layout, column and beam schedule, slab and staircase details, roof structure." },
      { step: "05", title: "Issue & Approval Support", description: "Drawings issued for construction. Envostructs provides responses to regulatory queries and revision rounds as needed." },
    ],
    projectExamples: [
      { title: "Swiss International Hotel (15-storey)", value: "₦6.5 Billion", slug: "swiss-international-hotel-abeokuta", description: "Full structural design for 15-storey reinforced concrete hotel frame." },
      { title: "First Bank Nigeria — Multi-Branch Designs", value: "₦95 Million", slug: "first-bank-branch-designs", description: "Structural design programme for multiple branch buildings across Nigeria." },
      { title: "The New Onilegbale Palace", value: "₦1.5 Billion", slug: "onilegbale-palace-lagos-island", description: "Bespoke structural design for multi-storey royal palace, Isale Eko." },
      { title: "Lagos State Polytechnic Classrooms", value: "₦110 Million", slug: "lagos-poly-classrooms", description: "Structural design and supervision for new classroom block, Ikorodu campus." },
    ],
    faqs: [
      { q: "What structural standards do you design to?", a: "We design to BS 8110 (British Standard for structural concrete), BS 5950 (steel structures), and the Eurocodes where specified by international clients. All designs are also verified for compliance with Nigerian building regulations and LASG requirements." },
      { q: "Can you design a building from an architect's sketch?", a: "Yes. We regularly work from architectural concepts and produce the complete structural design package. We can also recommend structural systems that optimise the architecture within the budget." },
      { q: "Do you provide building approval drawings?", a: "Yes. We produce all drawings in the formats required by LASG Building Control and equivalent state agencies — including the site plan, floor plans, elevations, sections, and structural drawings." },
      { q: "How long does a structural design take?", a: "For a 2–4 storey residential building, typically 4–6 weeks from brief to final drawings. Larger commercial or multi-storey projects take 8–16 weeks depending on complexity." },
    ],
  },

  "construction-works": {
    slug: "construction-works",
    title: "Construction Works",
    tagline: "From foundation to finishing — built to last",
    heroImage: "/swiss-international%20hotel.jpg",
    icon: "HardHat",
    overview:
      "Envostructs is a full-service construction firm — not just a consultant. We self-deliver construction works on residential, hospitality, religious, and infrastructure projects across Nigeria, combining professional engineering management with hands-on site execution. Our construction team is directly supervised by COREN-licensed engineers at all times, ensuring the quality of every concrete pour, every reinforcement placement, and every finishing trade meets specification.",
    whatWeDeliver: [
      "Residential construction: duplexes, apartments, estate housing",
      "Hospitality construction: hotels, lodges, serviced apartments",
      "Religious building construction: mosques, churches",
      "Educational building construction: classrooms, halls, offices",
      "Commercial building construction: offices, banks, retail",
      "Foundation works: excavation, pad, strip, raft, and pile cap construction",
      "Concrete frame construction: columns, beams, slabs",
      "Masonry, rendering, and external finishes",
      "Roofing: long-span, concrete flat roof, trussed systems",
      "Internal finishing: screeding, tiling, plumbing, electrical coordination",
    ],
    process: [
      { step: "01", title: "Pre-Construction Planning", description: "Site logistics, procurement schedule, subcontractor selection, and construction programme prepared before mobilisation." },
      { step: "02", title: "Foundation Works", description: "Excavation, geotechnical inspection, blinding, reinforcement, and foundation concrete poured under resident engineer supervision." },
      { step: "03", title: "Structural Frame", description: "Columns, beams, and slabs constructed floor-by-floor with cube tests at every pour. Drawings verified before each formwork setup." },
      { step: "04", title: "Services & Finishing", description: "Roofing, blockwork, plastering, tiling, and all finishing trades coordinated and supervised to specification." },
      { step: "05", title: "Handover & Certification", description: "Snagging inspection, defects rectification, structural completion certificate, and keys-in-hand handover to client." },
    ],
    projectExamples: [
      { title: "The New Onilegbale Palace", value: "₦1.5 Billion", slug: "onilegbale-palace-lagos-island", description: "Full construction of grand royal palace, Isale Eko, Lagos Island." },
      { title: "NASFAT Central Mosque, Isolo", value: "₦80 Million", slug: "nasfat-central-mosque", description: "Full construction of mosque complex for 500+ worshippers." },
      { title: "Arepo Central Mosque", value: "₦42 Million", slug: "arepo-central-mosque", description: "Community mosque construction, Arepo, Ogun State." },
      { title: "OGUDU GRA Duplexes", value: "₦300 Million", slug: "ogudu-gra-duplex", description: "4 units of 5-bedroom fully detached luxury duplexes, ongoing." },
    ],
    faqs: [
      { q: "Do you both design and build?", a: "Yes. Envostructs is a full design-and-build firm. We can take a project from geotechnical investigation through structural design to full construction. We also do construction-only for client-supplied designs." },
      { q: "What is your minimum project size?", a: "We take residential projects from ₦30 million upward, and commercial/infrastructure from ₦80 million. For smaller works we may recommend local contractors we can supervise on your behalf." },
      { q: "How do you ensure quality on site?", a: "Every Envostructs construction site has a resident engineer present daily. We conduct concrete cube tests at every pour, reinforcement checks before each pour, and weekly photographic progress reports to the client." },
      { q: "Do you provide a structural completion certificate?", a: "Yes. All Envostructs-constructed buildings receive a structural completion certificate signed by a COREN-licensed engineer, which is required by LASG and insurers." },
    ],
  },

  "project-management": {
    slug: "project-management",
    title: "Project Management",
    tagline: "Professional oversight from brief to handover",
    heroImage: "/community%20bridge%20project.jpg",
    icon: "BarChart3",
    overview:
      "Large construction projects fail not because the engineering is wrong — they fail because of poor planning, inadequate supervision, and weak contractor management. Envostructs provides professional project management and resident engineering supervision that protects clients' interests throughout the construction process — ensuring the contractor delivers what the drawings specify, on the programme agreed, within the budget authorised.",
    whatWeDeliver: [
      "Project management consultancy from inception to handover",
      "Resident engineering supervision on construction sites",
      "Contractor procurement: tender documents, evaluation, and recommendation",
      "Construction programme development and monitoring",
      "Cost control: budgets, valuations, variation assessments",
      "Quality assurance: materials testing, workmanship inspections",
      "Monthly progress and financial reports to client",
      "Contractual advice and dispute avoidance",
      "World Bank, AfDB, and FGN procurement-compliant supervision",
      "Handover documentation: as-built drawings, O&M manuals, completion certificates",
    ],
    process: [
      { step: "01", title: "Project Setup", description: "Project execution plan, stakeholder matrix, reporting templates, and communication protocols established before site mobilisation." },
      { step: "02", title: "Procurement Oversight", description: "Tender documents prepared, contractors pre-qualified, bids evaluated, and contracts awarded under transparent procedures." },
      { step: "03", title: "Construction Supervision", description: "Resident engineer on site daily. Progress measured, quality verified, issues logged, and corrective actions enforced." },
      { step: "04", title: "Financial Control", description: "Monthly interim payment valuations, variation assessments, and budget-to-actual reconciliations reported to client." },
      { step: "05", title: "Completion & Handover", description: "Snagging and defects inspection, contractor final account, completion certificate, and full handover documentation." },
    ],
    projectExamples: [
      { title: "Emuren–Ipele Road Dualization", value: "₦12.59 Billion", slug: "emuren-ipele-road-dualization", description: "Full resident engineering consultancy on 14.85km dual carriageway." },
      { title: "Mile 12–Ikorodu Road (World Bank)", value: "₦215 Million", slug: "mile12-ikorodu-road", description: "World Bank-compliant quality control supervision." },
      { title: "Swiss International Hotel Abeokuta", value: "₦6.5 Billion", slug: "swiss-international-hotel-abeokuta", description: "Full project management on 15-storey hotel development." },
      { title: "Lekki Free Zone Roads", value: "₦464 Million", slug: "lekki-free-zone-roads", description: "Design and construction management for industrial estate roads." },
    ],
    faqs: [
      { q: "Why do I need an independent project manager if I already have a contractor?", a: "The contractor's interest is to complete the work as profitably as possible. An independent project manager works for you — verifying that quantities are correct, materials meet specification, and the contractor delivers what the contract requires." },
      { q: "What does a resident engineer actually do on site?", a: "The resident engineer checks all work before it is concealed — reinforcement before concreting, pipe bedding before backfilling. They conduct materials tests, maintain daily site diaries, and issue Non-Conformance Reports when the contractor deviates from specification." },
      { q: "Can you manage projects in states outside Lagos?", a: "Yes. We have managed projects in Lagos, Ogun, Ondo, and Benue states. For projects outside Lagos, we mobilise a site-based team and coordinate with Envostructs' Lagos office." },
      { q: "Do you work with World Bank and government-funded projects?", a: "Yes. We have extensive experience with World Bank and FGN-funded infrastructure projects, including procurement under World Bank guidelines (IBRD/IDA), Environmental and Social Safeguards compliance, and audit-ready reporting." },
    ],
  },

  "highway-design": {
    slug: "highway-design",
    title: "Highway & Road Design",
    tagline: "Engineering roads that move Nigeria forward",
    heroImage: "/dualization%20of%20ipele.jpg",
    icon: "Route",
    overview:
      "Roads are the arteries of the Nigerian economy. Envostructs has designed, supervised, and managed road projects ranging from local street rehabilitation to 14.85km state highway dualization — with a total road infrastructure portfolio exceeding ₦14 billion. Our highway engineers are experienced in tropical pavement design, laterite subbase assessment, and the specific challenges of construction in Nigeria's wet season.",
    whatWeDeliver: [
      "Road geometric design: horizontal and vertical alignment",
      "Pavement design: flexible and rigid pavement to FMWH and AASHTO standards",
      "Drainage design: side drains, cross culverts, scour protection",
      "Bridge and box culvert design",
      "Road safety audit and traffic impact assessment",
      "Highway supervision and resident engineering",
      "Quality control: pavement testing, compaction testing, CBR",
      "World Bank-compliant road supervision and reporting",
      "Topographic survey and road condition assessment",
      "As-built documentation and road asset management",
    ],
    process: [
      { step: "01", title: "Survey & Assessment", description: "Topographic survey, pavement condition survey, traffic count, and terrain analysis along the proposed alignment." },
      { step: "02", title: "Geometric Design", description: "Horizontal and vertical alignment design to accommodate design speed, terrain, and sight distance requirements." },
      { step: "03", title: "Pavement & Drainage Design", description: "Pavement thickness design based on traffic loading and subgrade CBR. Full drainage network designed for peak storm events." },
      { step: "04", title: "Drawings & BOQ", description: "Full road design drawing set produced. Bill of Quantities prepared for procurement." },
      { step: "05", title: "Construction Supervision", description: "Resident engineering team on site to verify earthworks, pavement layers, drainage, and finishing meet specification." },
    ],
    projectExamples: [
      { title: "Emuren–Ipele Road Dualization", value: "₦12.59 Billion", slug: "emuren-ipele-road-dualization", description: "14.85km dual carriageway, Owo LGA, Ondo State — largest active assignment." },
      { title: "Lekki Free Zone Roads N5 & E6A", value: "₦464 Million", slug: "lekki-free-zone-roads", description: "Heavy-duty industrial roads for Lekki port and manufacturing estate." },
      { title: "Mile 12–Ikorodu Road", value: "₦215 Million", slug: "mile12-ikorodu-road", description: "World Bank-funded road rehabilitation supervision." },
      { title: "Murtala Muhammed Airport Runway", value: "₦285 Million", slug: "airport-runway-resurfacing", description: "ICAO-standard runway resurfacing for FAAN." },
    ],
    faqs: [
      { q: "What pavement design standards do you use?", a: "We design to FMWH (Federal Ministry of Works and Housing) road standards, AASHTO flexible pavement design, and the Road Note 31 methods. For airport pavements, we apply ICAO airfield pavement standards." },
      { q: "Can you design roads for both urban and rural environments?", a: "Yes. We design urban roads (with kerbs, drainage channels, street lighting provisions), rural arterial roads, and farm access tracks — each to the appropriate standard for the traffic and environment." },
      { q: "What is a road safety audit?", a: "A road safety audit is an independent check of a road design or existing road for features that could contribute to accidents. It is now required on all World Bank and major state government road projects in Nigeria." },
      { q: "Do you do topographic surveys?", a: "We commission topographic surveys as part of road design projects. We work with licensed surveyors and GPS/total station survey teams." },
    ],
  },

  "water-environmental": {
    slug: "water-environmental",
    title: "Water & Environmental Engineering",
    tagline: "Sustainable water infrastructure for communities and industry",
    heroImage: "/igbologun%20jetty.jpg",
    icon: "Droplets",
    overview:
      "Water is infrastructure. Nigeria's water sector — from community water supply and sanitation to coastal structures, jetties, and environmental impact assessments — presents engineering challenges that demand both technical rigour and environmental sensitivity. Envostructs' water and environmental engineering team has delivered jetties for coastal fishing communities, subsoil investigations for waterfront developments, and environmental compliance advice for major infrastructure projects.",
    whatWeDeliver: [
      "Jetty design and construction for coastal and riverine communities",
      "Environmental Impact Assessment (EIA) support",
      "Drainage masterplanning for estates and urban areas",
      "Storm water management design",
      "Waterfront and marine structure design",
      "Borehole and water supply infrastructure",
      "Environmental and Social Management Plan (ESMP) preparation",
      "Erosion control and slope stabilisation",
      "Sanitation infrastructure design",
      "World Bank Environmental and Social Safeguards compliance",
    ],
    process: [
      { step: "01", title: "Environmental Baseline Survey", description: "Assessment of existing environmental conditions: hydrology, drainage patterns, ecological features, community sensitivities." },
      { step: "02", title: "Impact Assessment", description: "Identification and assessment of project impacts on water resources, land, air quality, and affected communities." },
      { step: "03", title: "Design", description: "Engineering design of water infrastructure or environmental mitigation measures to the required standard." },
      { step: "04", title: "Regulatory Approval", description: "Preparation and submission of environmental documents to NESREA, Lagos SEPA, or relevant state agencies." },
      { step: "05", title: "Construction & Monitoring", description: "Construction supervision of water or environmental works, with ongoing environmental monitoring and compliance reporting." },
    ],
    projectExamples: [
      { title: "Igbologun Community Jetty, Snake Island", value: "₦4.1 Million", description: "Design and construction of community jetty for fishing community." },
      { title: "Residential Jetties, Lekki", value: "₦6 Million", description: "Private residential jetty structures, Lekki waterfront." },
      { title: "Lagos Free Zone Subsoil Investigation", value: "₦2.1 Million", description: "Coastal reclaimed land investigation for infrastructure planning." },
      { title: "Lekki Free Zone Roads", value: "₦464 Million", slug: "lekki-free-zone-roads", description: "Stormwater drainage design for coastal industrial estate roads." },
    ],
    faqs: [
      { q: "Do you carry out Environmental Impact Assessments?", a: "We support EIA preparation — baseline surveys, impact assessment matrices, and mitigation plans. We work with NESREA-registered EIA practitioners where a full statutory EIA is required." },
      { q: "Can you design jetties and waterfront structures?", a: "Yes. We have designed and constructed jetties in Lagos coastal and inland waterway locations. Our designs account for wave action, tidal variation, boat loading, and fender systems." },
      { q: "What is an Environmental and Social Management Plan (ESMP)?", a: "An ESMP is the document required by the World Bank, AfDB, and many state governments on infrastructure projects — it specifies how environmental and social impacts will be managed during and after construction. We prepare ESMPs to meet international financier requirements." },
      { q: "Do you design drainage systems for residential estates?", a: "Yes. Estate drainage masterplanning — surface water collection, channel sizing, outfall design, and connection to Lagos LASG drainage infrastructure — is a service we provide for developers and estate managers." },
    ],
  },
}

export function getService(slug: string): ServiceData | undefined {
  return servicesData[slug]
}

export function getAllServices(): ServiceData[] {
  return Object.values(servicesData)
}
