export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  author: string
  role: string
  date: string
  readTime: string
  category: string
  heroImage: string
  body: { type: "heading" | "paragraph" | "list" | "callout"; content: string; items?: string[] }[]
  relatedSlugs: string[]
}

export const blogPosts: Record<string, BlogPost> = {
  "sustainable-construction-innovations": {
    slug: "sustainable-construction-innovations",
    title: "Innovations in Sustainable Construction: Building Nigeria's Future Responsibly",
    excerpt:
      "As Nigeria's construction sector continues to grow, the industry faces a critical challenge: how do we build the infrastructure a rapidly urbanising nation needs while preserving the environment for future generations?",
    author: "Engr. S.I.A. Edidi",
    role: "Managing Director, Envostructs Nigeria Limited",
    date: "March 15, 2025",
    readTime: "6 min read",
    category: "Sustainability",
    heroImage: "/swiss-international%20hotel.jpg",
    body: [
      {
        type: "paragraph",
        content:
          "As Nigeria's construction sector continues to grow at an estimated 6–8% per year, the industry faces a critical challenge: how do we build the infrastructure a rapidly urbanising nation needs — roads, bridges, hotels, schools, mosques — while preserving the environment for future generations? At Envostructs, this question sits at the heart of every project brief we receive.",
      },
      {
        type: "heading",
        content: "The Scale of the Challenge",
      },
      {
        type: "paragraph",
        content:
          "Nigeria's population is projected to reach 400 million by 2050, making it the third most populous country in the world. The Lagos metropolitan area alone is expected to grow from 25 million today to over 35 million within a generation. This growth demands enormous investment in physical infrastructure — but traditional construction practices carry real environmental costs: quarrying aggregates, burning cement clinker, clearing vegetation, and generating construction waste.",
      },
      {
        type: "paragraph",
        content:
          "In Lagos State alone, the construction sector generates an estimated 3.5 million tonnes of waste annually — most of which ends up in landfills or illegal dump sites. Every concrete pour releases CO₂. Every quarry bite removes laterite that would otherwise control groundwater recharge. The challenge is real, and it is growing.",
      },
      {
        type: "heading",
        content: "Innovations Envostructs Has Adopted",
      },
      {
        type: "list",
        content: "",
        items: [
          "Geotechnical-led design: Thorough subsoil investigations allow us to optimise foundation designs — using exactly the right depth and configuration rather than over-engineering conservatively. This reduces concrete volumes by 10–25% on typical residential and commercial projects.",
          "Locally sourced materials: On road projects including our Emuren–Ipele Road Dualization (₦12.59B) and Lekki Free Zone roads, we specify laterite subbase from local quarries wherever geotechnical tests confirm adequacy — reducing the need for imported crushed stone and cutting transport emissions.",
          "Construction waste management plans: Every Envostructs site now operates with a designated waste segregation area — concrete offcuts, formwork timber, and metal reinforcement are separated for reuse or recycling rather than mixing in skip bins.",
          "Rainwater harvesting provisions: On new residential projects including our OGUDU GRA duplexes, we include underground cistern provisions in the structural design so owners can install rainwater harvesting systems without structural alterations.",
          "Energy-efficient building orientations: Our architectural coordination always considers building orientation to maximise natural cross-ventilation and daylighting — reducing the HVAC loads that will dominate a building's lifetime energy costs.",
        ],
      },
      {
        type: "heading",
        content: "The Business Case for Sustainable Construction",
      },
      {
        type: "paragraph",
        content:
          "Sustainability in construction is not just an ethical position — it increasingly makes financial sense. The International Finance Corporation estimates that green buildings in emerging markets will represent a $24.7 trillion opportunity by 2030. Nigerian developers who build to green standards today are better positioned for institutional tenants, international hotel brands, and government clients who are increasingly imposing environmental conditions on procurement.",
      },
      {
        type: "callout",
        content:
          "Our work on the Swiss International Hotel Abeokuta — a ₦6.5 billion, 15-storey landmark — incorporated passive ventilation shafts, thermal mass specifications, and stormwater management provisions that will reduce the building's operational costs for decades. Sustainability pays.",
      },
      {
        type: "heading",
        content: "What the Future Looks Like",
      },
      {
        type: "paragraph",
        content:
          "We believe the next decade will see three major shifts in Nigerian construction: the adoption of precast concrete elements (faster, less waste), the mainstreaming of solar-ready structural provisions, and the tightening of Lagos State's environmental impact assessment requirements for large projects. Envostructs is already preparing for all three — investing in staff training, updating our standard specification library, and engaging with the Lagos State Building Control Agency on forthcoming green building guidelines.",
      },
      {
        type: "paragraph",
        content:
          "The structures we build today will still be standing in 2075. Every design decision we make now carries a 50-year consequence. That is why sustainable construction is not a trend at Envostructs — it is how we define engineering responsibility.",
      },
    ],
    relatedSlugs: ["urban-infrastructure-nigeria", "project-management-best-practices"],
  },

  "urban-infrastructure-nigeria": {
    slug: "urban-infrastructure-nigeria",
    title: "The Future of Urban Infrastructure in Nigeria: Challenges and Opportunities",
    excerpt:
      "Nigeria's cities are growing faster than their infrastructure can keep pace. From Lagos to Makurdi, the gap between urban population growth and infrastructure investment is widening — but the engineering profession has both the tools and the responsibility to close it.",
    author: "Engr. A.D. Onitilo",
    role: "Principal Civil Engineer, Envostructs Nigeria Limited",
    date: "February 8, 2025",
    readTime: "7 min read",
    category: "Infrastructure",
    heroImage: "/lekki%20free%20zone.jpg",
    body: [
      {
        type: "paragraph",
        content:
          "Nigeria's cities are growing faster than their infrastructure can keep pace. Lagos already handles more road traffic than its network was designed for. Makurdi — where we completed the Swiss Spirit Hotel — faces chronic flooding from inadequate urban drainage. Port Harcourt's road network cannot absorb the volume of oil-sector traffic. From the Atlantic coast to the Middle Belt, the gap between urban population growth and infrastructure investment is widening. But the engineering profession has both the tools and the responsibility to close it.",
      },
      {
        type: "heading",
        content: "The Scale of Nigeria's Infrastructure Deficit",
      },
      {
        type: "paragraph",
        content:
          "The Nigerian Infrastructure Advisory Facility estimates the country's infrastructure deficit at $100–150 billion. Roads account for over 60% of freight movement, yet fewer than 30% of federal roads are in good condition. Lagos handles an estimated 21 million vehicle trips per day on a network designed for a fraction of that volume. Power supply remains the single largest constraint on manufacturing and construction productivity — most construction sites run entirely on diesel generators.",
      },
      {
        type: "paragraph",
        content:
          "Yet within this deficit lies opportunity. The World Bank's Lagos Free Zone Road projects — which Envostructs supervised — demonstrate the multiplier effect of well-targeted infrastructure: a ₦464 million investment in two internal roads (N5 and E6A) unlocked billions in industrial investment from companies that could not previously access the zone efficiently.",
      },
      {
        type: "heading",
        content: "Five Critical Infrastructure Priorities",
      },
      {
        type: "list",
        content: "",
        items: [
          "Urban road rehabilitation: Nigeria has 195,000 km of roads, but only 60,000 km are paved. The immediate priority should be maintenance of existing paved roads before they deteriorate beyond cost-effective rehabilitation — the approach we applied on the Mile 12–Ikorodu World Bank rehabilitation project.",
          "Flood management and drainage: Lagos receives 1,500mm of rainfall annually, much of it in concentrated bursts. Inadequate drainage costs Lagos billions in property damage and lost productivity every wet season. Every major road project should include a drainage masterplan.",
          "Port access roads: Nigeria's port access infrastructure is chronically under-invested. The Apapa gridlock costs the Nigerian economy an estimated $5 billion annually in delayed goods. Dedicated port access corridors and weighbridge enforcement would transform logistics.",
          "Bridge and culvert inventory: Many of Nigeria's bridges were designed in the 1970s for much lower vehicle loads. A systematic national bridge inventory and load assessment programme would identify critical replacements before failures occur.",
          "Pedestrian infrastructure: Nigerian cities consistently under-invest in walkways, pedestrian crossings, and cycle paths — infrastructure that serves the majority of urban residents who do not own vehicles. Integrating pedestrian provisions into all road projects should be mandatory.",
        ],
      },
      {
        type: "heading",
        content: "The Role of the Consulting Engineer",
      },
      {
        type: "paragraph",
        content:
          "The consulting engineer in Nigeria occupies a uniquely important position in infrastructure delivery. Unlike in more mature markets where institutional clients have sophisticated in-house project management, Nigerian government ministries frequently depend on their consulting engineers for quality assurance, site supervision, and even procurement guidance. This places a premium on professional integrity and technical independence.",
      },
      {
        type: "callout",
        content:
          "On the Emuren–Ipele Road Dualization — our ₦12.59 billion flagship road project — our resident engineering team functions as the independent quality guarantee for the Ondo State government. Every layer of laterite, every culvert headwall, every metre of asphalt surface is checked and certified before the state accepts it. This is what COREN-licensed consultancy delivers.",
      },
      {
        type: "heading",
        content: "Opportunities for the Decade Ahead",
      },
      {
        type: "paragraph",
        content:
          "The Infrastructure Corporation of Nigeria (InfraCorp), Sukuk bonds, and the World Bank's Resilient Infrastructure programme all signal growing institutional appetite for Nigerian infrastructure financing. For consulting engineers, this means more projects with international quality standards, longer maintenance contracts, and performance-based procurement — all areas where firms like Envostructs with genuine technical depth will outcompete less capable competitors.",
      },
      {
        type: "paragraph",
        content:
          "The challenge is real. But so is the opportunity. Nigeria's infrastructure deficit is, from an engineering perspective, a generation of meaningful work.",
      },
    ],
    relatedSlugs: ["sustainable-construction-innovations", "geotechnical-investigations-crucial"],
  },

  "geotechnical-investigations-crucial": {
    slug: "geotechnical-investigations-crucial",
    title: "Geotechnical Investigations: Why They Are Non-Negotiable for Every Construction Project",
    excerpt:
      "Every year in Nigeria, buildings sink, crack, or collapse because developers skipped the geotechnical investigation. It is the most under-invested and most consequential step in the entire construction process.",
    author: "Engr. Opeoluwa Ezekiel Oloyede",
    role: "Principal Geotechnical Engineer, Envostructs Nigeria Limited",
    date: "January 20, 2025",
    readTime: "8 min read",
    category: "Geotechnical",
    heroImage: "/lekki%20freezone%20subsoil.png",
    body: [
      {
        type: "paragraph",
        content:
          "Every year in Nigeria, buildings sink, tilt, crack, or collapse catastrophically because developers or contractors skipped — or cut corners on — the geotechnical investigation. It is the most under-invested and most consequential step in the entire construction process. At Envostructs, geotechnical services form the bedrock of our practice, and after 16 years of subsoil investigations across Lagos, Ogun, Ondo, and Benue States, we have seen every kind of foundation failure that cost-cutting on site investigation can produce.",
      },
      {
        type: "heading",
        content: "What Is a Geotechnical Investigation?",
      },
      {
        type: "paragraph",
        content:
          "A geotechnical investigation is the systematic process of characterising the subsurface conditions beneath a construction site. It typically involves: drilling boreholes (to depths of 10–25 metres for most building projects), collecting soil and rock samples at regular intervals, conducting in-situ tests (Standard Penetration Tests, plate bearing tests), laboratory testing of samples (particle size analysis, Atterberg limits, consolidation tests), and interpreting results in a geotechnical report that specifies the appropriate foundation type, depth, and dimensions.",
      },
      {
        type: "paragraph",
        content:
          "The full investigation for a typical 3–5 storey residential building in Lagos costs between ₦800,000 and ₦2,500,000 — roughly 0.5–1% of a ₦150–200 million building budget. The cost of a foundation failure that requires underpinning, structural repair, or complete demolition can exceed ₦50 million. The maths is clear.",
      },
      {
        type: "heading",
        content: "Lagos Soil: Why It Is Particularly Unforgiving",
      },
      {
        type: "paragraph",
        content:
          "Lagos sits on a complex geology shaped by centuries of coastal deposition, river delta activity, and human land reclamation. The result is extraordinary soil variability over very short distances. In the Lekki Free Zone — where we conducted subsoil investigations for the development company — we encountered soft alluvial deposits alternating with medium-dense sands within the same 100-metre stretch. On Lagos Island (where we built the Onilegbale Palace), the subsurface includes historical fill overlying marine clays that can consolidate under load for decades.",
      },
      {
        type: "list",
        content: "The specific hazards our investigations routinely identify in Lagos include:",
        items: [
          "Soft marine clays: High compressibility, potential for differential settlement under uneven loading",
          "Historical fill: Variable composition (often containing demolition debris, organic material, or imported fill), unpredictable strength and compressibility",
          "Loose coastal sands: Susceptible to liquefaction under dynamic loading, poor bearing capacity",
          "Shallow groundwater: Complicates foundation construction, requires dewatering, increases corrosion risk for reinforcement",
          "Artesian conditions on Lagos Island: Upward groundwater pressure that can destabilise excavations and cause heave",
        ],
      },
      {
        type: "heading",
        content: "Real Cases: What Happens Without Proper Investigation",
      },
      {
        type: "paragraph",
        content:
          "We are frequently called to assess buildings that are cracking or settling after construction. The causes, almost invariably, trace back to inadequate site investigation. A common scenario: a developer builds a 4-storey residential building on strip foundations in a Lagos suburb. No boreholes were drilled. The foundation sits on a layer of compacted fill that overlies 4 metres of soft, organic-rich clay. Within 2 years of occupation, differential settlement causes diagonal cracking in the walls, door frames rack out of square, and floor slabs crack. The remediation cost exceeds the original geotechnical investigation cost by 20 to 1.",
      },
      {
        type: "callout",
        content:
          "For the NASFAT Bored Pile Foundation project in Isolo, our pre-investigation revealed soft alluvial soil to 8 metres depth — conditions that would have caused severe settlement on conventional strip or pad foundations. Our bored pile solution transferred all loads to firm strata at 12 metres depth. The mosque has performed perfectly since completion.",
      },
      {
        type: "heading",
        content: "Our Recommendation: Investigate Before You Commit",
      },
      {
        type: "paragraph",
        content:
          "The geotechnical investigation should be commissioned before the architectural design is finalised — not after. The subsurface conditions determine the appropriate structural system, foundation depth, and sometimes the feasibility of the project at all. A developer who commissions architectural drawings, gets building approval, and then discovers their plot sits on 10 metres of uncompacted fill has wasted money and time that a ₦1 million investigation would have saved at the outset.",
      },
      {
        type: "paragraph",
        content:
          "Envostructs provides full geotechnical investigation services across Nigeria, from borehole drilling and laboratory testing to comprehensive geotechnical reports with specific foundation recommendations. If you are planning any construction project — residential, commercial, industrial, or infrastructure — please contact us before you begin design. The ground beneath your project is the most important variable in your entire construction budget.",
      },
    ],
    relatedSlugs: ["sustainable-construction-innovations", "project-management-best-practices"],
  },

  "project-management-best-practices": {
    slug: "project-management-best-practices",
    title: "Project Management Best Practices for Large-Scale Construction in Nigeria",
    excerpt:
      "Managing a ₦1 billion+ construction project in Nigeria requires a different skill set from anywhere else in the world. Supply chain volatility, regulatory complexity, and contractor coordination all demand a disciplined, adaptive approach.",
    author: "Engr. S.I.A. Edidi",
    role: "Managing Director, Envostructs Nigeria Limited",
    date: "December 5, 2024",
    readTime: "7 min read",
    category: "Project Management",
    heroImage: "/community%20bridge%20project.jpg",
    body: [
      {
        type: "paragraph",
        content:
          "Managing a ₦1 billion+ construction project in Nigeria requires a different skill set from anywhere else in the world. Supply chain volatility, foreign exchange pressures on imported materials, regulatory complexity across federal, state, and local government layers, and contractor coordination in a market where labour and materials availability fluctuates week-to-week — all of these demand a disciplined, adaptive project management approach. After 16 years and over ₦30 billion in projects managed across Nigeria, here are the practices that consistently distinguish successful deliveries from troubled ones.",
      },
      {
        type: "heading",
        content: "1. Front-Load the Planning",
      },
      {
        type: "paragraph",
        content:
          "The single most common cause of large construction project overruns in Nigeria is inadequate planning before mobilisation. Contractors mobilise to site, start excavation, and then discover they haven't secured the imported steel supply, the structural drawings aren't fully coordinated, or the planning approval has a condition they haven't met. Every week of construction delay has a carrying cost — site establishment, supervision staff, equipment hire, and client finance charges. A project that spends 3 months on thorough pre-construction planning before touching the site typically finishes earlier and cheaper than one that mobilises immediately.",
      },
      {
        type: "list",
        content: "Pre-construction planning checklist Envostructs requires on all major projects:",
        items: [
          "Complete design package — all structural, architectural, MEP drawings coordinated and checked",
          "Full bill of quantities priced and reconciled with the budget",
          "Long-lead material procurement list with confirmed suppliers and delivery schedules",
          "Statutory approvals — building approval, EIA (if applicable), utility diversions",
          "Site logistics plan — access, compound layout, batching plant location, concrete pour sequence",
          "Cash flow projection — monthly draw-down schedule matched to client's payment capability",
          "Risk register — top 10 project risks identified with mitigation plans",
        ],
      },
      {
        type: "heading",
        content: "2. Resident Engineering: The Non-Negotiable Quality Control",
      },
      {
        type: "paragraph",
        content:
          "On every Envostructs project, we assign a resident engineer whose full-time role is quality control and progress monitoring on site. This is not optional. A structural drawing can specify Grade 40 reinforcement at 200mm centres, but without someone on site checking the bar diameters and spacing before every pour, the contractor will substitute Grade 25 bars at 250mm centres and the deviation will be buried in concrete forever. The resident engineer is the client's eyes and ears on site, and their daily reports provide the documentary record that protects all parties.",
      },
      {
        type: "heading",
        content: "3. Materials Testing: Budget for It, Do It Every Time",
      },
      {
        type: "paragraph",
        content:
          "Nigeria's construction materials market has significant quality variability. Cement bags have been found to contain filler. Reinforcement bars from some local rolling mills have lower yield strengths than marked. Aggregate from different quarries can vary dramatically in gradation and absorption. Every large Envostructs project includes a materials testing budget — concrete cube tests at every pour, reinforcement tensile tests at delivery, aggregate gradation tests per batch. The cost is typically 0.2–0.5% of the construction budget. The alternative — discovering a structural deficiency after the building is complete — costs orders of magnitude more.",
      },
      {
        type: "callout",
        content:
          "On the World Bank-funded Mile 12–Ikorodu Road project, our supervision team conducted over 300 material tests across the 18-month construction period — pavement cores, CBR tests on subbase, bitumen extraction tests, and density measurements. Not one test failure went unaddressed. The road passed the World Bank's final inspection with zero defects.",
      },
      {
        type: "heading",
        content: "4. Stakeholder Communication: Frequent, Honest, and Documented",
      },
      {
        type: "paragraph",
        content:
          "Large projects in Nigeria involve multiple stakeholders with different priorities: the client wants delivery on time and budget; the contractor wants payment certainty and variation approval; the supervising engineer needs technical compliance; government agencies want regulatory adherence. Managing these relationships requires regular, structured communication. Envostructs conducts weekly site progress meetings with all parties present, monthly progress reports to the client, and immediate written notification of any event that could affect cost, time, or quality.",
      },
      {
        type: "heading",
        content: "5. Managing the Nigerian Supply Chain",
      },
      {
        type: "paragraph",
        content:
          "The Nigerian construction supply chain is characterised by two features that project managers must plan around: price volatility and delivery unreliability. Cement prices can move 20% in a month during shortages. Imported materials (structural steel, specialist fittings, HVAC equipment) are subject to foreign exchange rate movements and port delays. The best mitigation strategies are early procurement of long-lead items at fixed prices, maintaining 3–4 weeks of critical materials buffer stock on site, and including provisional sums in contracts for materials where price cannot be fixed at tender.",
      },
      {
        type: "paragraph",
        content:
          "Project management in Nigerian construction is not just a technical discipline — it is part technical, part logistics, part diplomacy, and part financial management. The firms that consistently deliver are those that understand all four dimensions and plan for the specifically Nigerian versions of each challenge. That is what 16 years of Nigerian project delivery teaches you.",
      },
    ],
    relatedSlugs: ["urban-infrastructure-nigeria", "sustainable-construction-innovations"],
  },
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug]
}

export function getAllBlogPosts(): BlogPost[] {
  return Object.values(blogPosts)
}
