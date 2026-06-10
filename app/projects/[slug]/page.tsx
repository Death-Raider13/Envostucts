import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowLeft, ArrowRight, Clock, Award, CheckCircle, AlertTriangle, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Reveal } from "@/components/Reveal"
import { ProjectGallery } from "@/components/project-gallery"

const PROJECT_IMGS = {
  hotelA: "/swiss-international%20hotel.jpg",
  hostelA: "/soiless-farm-hostel.jpg",
  bridgeA: "/community%20bridge%20project.jpg",
  hotelB: "/swiss%20hotel.jpg",
  hotelC: "/swiss.jpg",
  hotelD: "/swiss2.jpg",
  hostelB: "/soiless-farm.jpg",
  hostelC: "/soiless.jpg",
  hostelD: "/soiless-farm-hostel.jpg",
  bridgeB: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80",
  bridgeC: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  bridgeD: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80",
  palaceA: "/onilegbale.jpg",
  palaceB: "/onilegbale2.jpg",
  palaceC: "/onilegbale3.jpg",
  palaceD: "/onilegbale.jpg",
  roadDualization: "/dualization%20of%20ipele.jpg",
  runway: "/airport%20runway.png",
  classrooms: "/block-of-classrrom(poly).jpg",
  church: "/celestial-church.png",
  diamondBank: "/diamond%20bank%20herbert%20macaulay.jpg",
  firstBank: "/first-bank%20designs.png",
  jetty: "/igbologun%20jetty.jpg",
  lekkiZone1: "/lekki%20free%20zone.jpg",
  lekkiZone2: "/lekki%20free%20zone%202.jpg",
  nasfat: "/nasfat-building.jpg",
  nationalTheatre: "/national-theather-multiparks.jpg",
  oguduGra: "/ogudu%20GRA%20four%20bedroom.jpeg",
  owoIyere: "/owo%20iyere%20road.jpg",
  roadConstruction: "/oyo-ogbomoso-road%20construction.jpg",
  arepoMosque: "/arepo%20central%20mosque.png",
  ikoroduRoad: "/lagos-ikorodu(worldbank).png",
  roadFill1: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  roadFill2: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80",
  roadFill3: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  hotelFill1: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  hotelFill2: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
  hotelFill3: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  mosqueFill1: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
  mosqueFill2: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80",
  mosqueFill3: "https://images.unsplash.com/photo-1572625839501-cff0e1e5c7a5?auto=format&fit=crop&w=800&q=80",
  eduFill1: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
  eduFill2: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
  resFill1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  resFill2: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  resFill3: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  comFill1: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80",
  comFill2: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
  churchFill1: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
  continentHotel0: "/continent-hotel.jpg",
  continentHotel1: "/continent-hotel1.jpg",
  continentHotel2: "/continent-hotel2.jpg",
  continentHotel3: "/continent-hotel3.jpg",
}

const projectsData = {
  "onilegbale-palace-lagos-island": {
    title: "The New Onilegbale Palace",
    description: "Grand bespoke palace designed and built for Arc. Gbolahan Owodunni Oki — the Onilegbale of Lagos, First Class Akarigbere Royal Chief and Kingmaker of Lagos Island",
    value: "₦1.5 Billion",
    category: "Residential",
    status: "Completed",
    location: "Isale Eko, Lagos Island, Lagos State",
    year: "2025",
    duration: "18 months",
    client: "Arc. Gbolahan Owodunni Oki — The Onilegbale of Lagos",
    projectManager: "Engr. S.I.A. Edidi",
    video: "/THE%20NEW%20ONILEGBALE%20PALACE.%20%20DESIGN%20AND%20BUILT%20BY%20ARC%20GBOLAHAN%20OWODUNNI....mp4",
    images: [
      PROJECT_IMGS.palaceA,
      PROJECT_IMGS.palaceB,
      PROJECT_IMGS.palaceC,
      PROJECT_IMGS.palaceD,
    ],
    overview:
      "The New Onilegbale Palace stands as one of Envostructs' most prestigious heritage construction projects — a grand, bespoke palace built for Arc. Gbolahan Owodunni Oki, the Onilegbale of Lagos. The Onilegbale holds a First Class Akarigbere Royal title and sits on the council of kingmakers (Akarighere) responsible for the confirmation of the Oba of Lagos — one of the most significant traditional positions in Lagos Island's centuries-old royal hierarchy. Located in the culturally rich heartland of Isale Eko, this palace represents the convergence of traditional Yoruba architectural heritage and contemporary structural engineering. Uniquely, the palace was architecturally designed by the client himself — Arc. Gbolahan Owodunni — making it a deeply personal commission that demanded the highest fidelity of execution.",
    challenges: [
      "Construction within the dense, historic urban fabric of Isale Eko with constrained site access",
      "Integrating traditional Yoruba palace typology with modern structural engineering standards",
      "Sourcing and coordinating premium bespoke materials: marble, ornamental ironwork, and custom woodwork",
      "Executing to the personal architectural vision of the client, who is himself a qualified architect",
    ],
    solutions: [
      "Detailed construction logistics plan to manage phased materials delivery through narrow Isale Eko streets",
      "Close design-build collaboration with the architect-client to ensure every detail faithfully matched intent",
      "Engaged a curated network of specialist craftsmen for custom finishing work alongside the main construction crew",
      "Weekly design review meetings to ensure quality at every level, with zero compromise on finish standards",
    ],
    keyFeatures: [
      "Grand ceremonial entrance and formal reception forecourt",
      "Multi-storey palace structure with royal private apartments",
      "Traditional Yoruba-influenced architectural ornamentation and motifs",
      "Formal throne room and state audience chamber",
      "Premium Italian marble floors and custom-finished surfaces",
      "Imported hardwood joinery and bespoke interior millwork",
      "Landscaped palace courtyard and perimeter planting",
      "Advanced security, access control, and MEP infrastructure",
    ],
    technicalSpecs: [
      { label: "Total Floor Area", value: "~4,500 sqm" },
      { label: "Building Height", value: "3 storeys" },
      { label: "Foundation Type", value: "Raft Foundation" },
      { label: "Structural System", value: "Reinforced Concrete Frame" },
      { label: "Facade System", value: "Custom Rendered Masonry" },
      { label: "Year Completed", value: "2025" },
    ],
    timeline: [
      { phase: "Design Review & Approvals", duration: "3 months", status: "Completed" },
      { phase: "Site Preparation & Foundation", duration: "4 months", status: "Completed" },
      { phase: "Structural & Block Works", duration: "7 months", status: "Completed" },
      { phase: "Finishing & Interior Works", duration: "4 months", status: "Completed" },
    ],
  },
  "swiss-international-hotel-abeokuta": {
    title: "Swiss International Hotel Abeokuta",
    description: "15 Storey Hotel Structure — a landmark hospitality project featuring modern design and engineering excellence",
    value: "₦6.5 Billion",
    category: "Hospitality",
    status: "Completed",
    location: "Abeokuta, Ogun State",
    year: "2023",
    duration: "36 months",
    client: "Swiss International Hotels",
    projectManager: "Engr. S.I.A. Edidi",
    video: "/swiss%20hotel.mp4",
    images: [PROJECT_IMGS.hotelA, PROJECT_IMGS.hotelB, PROJECT_IMGS.hotelC, PROJECT_IMGS.hotelD],
    overview:
      "The Swiss International Hotel Abeokuta represents one of our most ambitious hospitality projects, featuring a 15-storey modern structure that has become a landmark in Abeokuta. This project showcased our expertise in high-rise construction, advanced MEP systems integration, and luxury hospitality standards.",
    challenges: [
      "Complex foundation design for high-rise structure",
      "Integration of advanced MEP systems",
      "Coordination with international hospitality standards",
      "Managing construction in urban environment",
    ],
    solutions: [
      "Deep pile foundation system with advanced geotechnical analysis",
      "Comprehensive MEP design with redundancy systems",
      "Close collaboration with Swiss International Hotels standards team",
      "Phased construction approach to minimize urban disruption",
    ],
    keyFeatures: [
      "15-storey modern hotel structure",
      "200+ luxury guest rooms and suites",
      "State-of-the-art conference facilities",
      "Advanced fire safety and security systems",
      "Energy-efficient HVAC systems",
      "Luxury spa and wellness center",
      "Multi-level parking facility",
      "Rooftop restaurant and bar",
    ],
    technicalSpecs: [
      { label: "Total Floor Area", value: "25,000 sqm" },
      { label: "Building Height", value: "60 meters" },
      { label: "Foundation Type", value: "Bored Pile Foundation" },
      { label: "Structural System", value: "Reinforced Concrete Frame" },
      { label: "Guest Rooms", value: "200+" },
      { label: "Parking Spaces", value: "150" },
    ],
    timeline: [
      { phase: "Design & Planning", duration: "6 months", status: "Completed" },
      { phase: "Foundation Work", duration: "8 months", status: "Completed" },
      { phase: "Structural Construction", duration: "18 months", status: "Completed" },
      { phase: "MEP Installation", duration: "8 months", status: "Completed" },
      { phase: "Finishing & Handover", duration: "4 months", status: "Completed" },
    ],
  },
  "soilless-farm-lab-hostel": {
    title: "Soilless Farm Lab Hostel",
    description: "12 Blocks of Hostel accommodation for agricultural research facility",
    value: "₦850 Million",
    category: "Educational",
    status: "Completed",
    location: "Awowo Village, Abeokuta",
    year: "2022",
    duration: "24 months",
    client: "Soilless Farm Laboratory",
    projectManager: "Engr. Opeoluwa Ezekiel Oloyede",
    images: [PROJECT_IMGS.hostelA, PROJECT_IMGS.hostelB, PROJECT_IMGS.hostelC, PROJECT_IMGS.hostelD],
    overview:
      "The Soilless Farm Lab Hostel project involved the construction of 12 modern hostel blocks designed to accommodate researchers and students at the agricultural research facility. This project emphasized sustainable construction practices and modern amenities suitable for academic accommodation.",
    challenges: [
      "Remote location with limited infrastructure",
      "Sustainable construction requirements",
      "Coordination with ongoing research activities",
      "Specialized utility requirements for research facility",
    ],
    solutions: [
      "Established temporary construction infrastructure",
      "Implemented eco-friendly construction materials and methods",
      "Phased construction to minimize disruption to research",
      "Custom utility design for research facility needs",
    ],
    keyFeatures: [
      "12 blocks of modern hostel accommodation",
      "400+ bed capacity with modern amenities",
      "Central dining and recreation facilities",
      "Research-friendly study spaces",
      "Sustainable water and waste management systems",
      "Solar power integration",
      "Landscaped common areas",
      "24/7 security systems",
    ],
    technicalSpecs: [
      { label: "Total Blocks", value: "12" },
      { label: "Bed Capacity", value: "400+" },
      { label: "Total Floor Area", value: "15,000 sqm" },
      { label: "Building Height", value: "3 storeys" },
      { label: "Foundation Type", value: "Strip Foundation" },
      { label: "Structural System", value: "Load Bearing Masonry" },
    ],
    timeline: [
      { phase: "Site Preparation", duration: "3 months", status: "Completed" },
      { phase: "Foundation & Structure", duration: "12 months", status: "Completed" },
      { phase: "MEP Installation", duration: "6 months", status: "Completed" },
      { phase: "Finishing Works", duration: "3 months", status: "Completed" },
    ],
  },
  "community-bridge-project": {
    title: "Community Bridge Project",
    description: "Bridge linking Ibeju Lekki Community with Iba-Oloja Community",
    value: "₦750 Million",
    category: "Infrastructure",
    status: "Design Phase",
    location: "Ibeju Lekki, Lagos State",
    year: "2024",
    duration: "18 months (projected)",
    client: "Lagos State Government",
    projectManager: "Engr. A.D. Onitilo",
    images: [PROJECT_IMGS.bridgeA, PROJECT_IMGS.bridgeB, PROJECT_IMGS.bridgeC, PROJECT_IMGS.bridgeD],
    overview:
      "The Community Bridge Project is a strategic infrastructure development aimed at connecting the Ibeju Lekki and Iba-Oloja communities. This bridge will significantly improve transportation, economic activities, and social integration between these communities while considering environmental sustainability.",
    challenges: [
      "Complex environmental impact assessment",
      "Community stakeholder management",
      "Waterway navigation requirements",
      "Sustainable design for coastal environment",
    ],
    solutions: [
      "Comprehensive environmental impact study with mitigation measures",
      "Extensive community consultation and engagement program",
      "Bridge design with adequate clearance for water traffic",
      "Corrosion-resistant materials for coastal conditions",
    ],
    keyFeatures: [
      "Strategic community connectivity solution",
      "Advanced bridge engineering design",
      "Environmental impact mitigation measures",
      "Sustainable transportation infrastructure",
      "Pedestrian and vehicle access",
      "Navigation clearance for waterway traffic",
      "Flood-resistant design",
      "Community economic development catalyst",
    ],
    technicalSpecs: [
      { label: "Bridge Length", value: "450 meters" },
      { label: "Bridge Width", value: "12 meters" },
      { label: "Design Load", value: "HS20-44" },
      { label: "Navigation Clearance", value: "15 meters" },
      { label: "Foundation Type", value: "Driven Pile" },
      { label: "Superstructure", value: "Prestressed Concrete" },
    ],
    timeline: [
      { phase: "Environmental Impact Assessment", duration: "4 months", status: "In Progress" },
      { phase: "Detailed Design", duration: "6 months", status: "Planned" },
      { phase: "Construction", duration: "12 months", status: "Planned" },
      { phase: "Testing & Commissioning", duration: "2 months", status: "Planned" },
    ],
  },

  "emuren-ipele-road-dualization": {
    title: "Emuren–Ipele Road Dualization, Ondo State",
    description: "Consultancy and project management works on the 14.85 km dualization of the Emuren–Ipele Road in Owo LGA — Envostructs' largest single active consultancy assignment",
    value: "₦12.59 Billion",
    category: "Infrastructure",
    status: "Ongoing",
    location: "Owo LGA, Ondo State",
    year: "2024",
    duration: "36 months",
    client: "Ondo State Ministry of Infrastructure & Physical Planning",
    projectManager: "Engr. A.D. Onitilo",
    images: [PROJECT_IMGS.roadDualization, PROJECT_IMGS.roadFill1, PROJECT_IMGS.roadFill2, PROJECT_IMGS.roadFill3],
    overview: "The Emuren–Ipele Road Dualization is Envostructs' largest single active consultancy assignment — a transformative 14.85 km dual carriageway project connecting Emuren (Emure) junction to Ipele in Owo Local Government Area, Ondo State. Commissioned by the Ondo State Ministry of Infrastructure & Physical Planning, this flagship road corridor opens up a key arterial route through Owo LGA, improving movement of people, agricultural produce, and commerce between communities in the Owo hinterland. Envostructs provides comprehensive consultancy services: design review, resident engineering supervision, quality control, and full project management across all work fronts. The corridor includes full road dualization, bridge and culvert construction, roadside drainage, pavement markings, signage, and street lighting along the 14.85 km alignment.",
    challenges: [
      "Managing consultancy responsibilities across a 14.85 km construction corridor with multiple simultaneous active work fronts",
      "Terrain variation through the Owo LGA hinterland requiring tailored drainage and earthworks design at each section",
      "Coordinating numerous sub-contractors and ensuring uniform quality standards across the full stretch of road",
      "Wet season construction management — preventing erosion and protecting freshly laid base courses and drainage structures",
    ],
    solutions: [
      "Resident engineering team with dedicated supervisors at each work front for continuous, real-time quality control",
      "Detailed geotechnical and terrain analysis informing drainage design at all critical slope and valley sections",
      "Comprehensive contractor coordination programme — weekly site meetings and bi-weekly quality assurance reporting",
      "Wet season protocols enforced: site drainage maintained, temporary erosion controls, and pavement curing standards applied",
    ],
    keyFeatures: [
      "14.85 km dual carriageway — Emuren junction to Ipele",
      "Full dualization with median island and paved shoulder",
      "Bridges and box culverts at all water crossing points",
      "Concrete-lined and earthen roadside drainage channels throughout",
      "Road markings, guardrails, and directional signage",
      "Street lighting at junctions and populated settlements",
      "Road safety audit and traffic management plan",
      "Resident engineering consultancy and project management",
    ],
    technicalSpecs: [
      { label: "Total Length", value: "14.85 km" },
      { label: "Road Type", value: "Dual Carriageway" },
      { label: "Carriageway Width", value: "2 × 7.3 m" },
      { label: "Design Speed", value: "80 km/h" },
      { label: "Pavement Type", value: "Asphalt over Laterite Base" },
      { label: "Project Status", value: "Ongoing" },
    ],
    timeline: [
      { phase: "Design Review & Mobilisation", duration: "3 months", status: "Completed" },
      { phase: "Earthworks & Sub-base Construction", duration: "12 months", status: "In Progress" },
      { phase: "Pavement & Drainage Works", duration: "12 months", status: "Planned" },
      { phase: "Road Furniture, Lighting & Completion", duration: "9 months", status: "Planned" },
    ],
  },

  "swiss-budget-hotel-balogun": {
    title: "Swiss Budget Hotel — Balogun, Lagos Island",
    description: "Structural conversion of a multi-storey office complex into a modern hotel in the heart of the Balogun commercial district, Lagos Island",
    value: "₦5.2 Billion",
    category: "Hospitality",
    status: "Completed",
    location: "Balogun, Lagos Island, Lagos State",
    year: "2021",
    duration: "30 months",
    client: "Swiss International Hotel Group (Nigeria)",
    projectManager: "Engr. S.I.A. Edidi",
    images: [PROJECT_IMGS.hotelFill1, PROJECT_IMGS.hotelFill2, PROJECT_IMGS.hotelFill3, PROJECT_IMGS.roadFill2],
    overview: "The Swiss Budget Hotel Balogun is one of the most complex adaptive-reuse construction projects undertaken by Envostructs — the full structural transformation of an existing multi-storey office complex into a modern hotel. Balogun, the commercial heart of Lagos Island and one of Nigeria's busiest trading districts, demanded engineering precision and logistics excellence within a constrained, densely populated environment. Envostructs handled all structural works: building re-configuration, slab strengthening, new MEP installations, and compliance upgrades to hospitality and fire safety standards. The completed hotel serves business travellers and commercial visitors to the Balogun–Idumota corridor, responding to significant accommodation demand in Lagos Island's commercial core.",
    challenges: [
      "Structural adaptation of an existing office frame to meet hospitality load requirements and hotel room layouts",
      "Working in the extremely dense Balogun market district with severely constrained site access and pedestrian traffic",
      "Full MEP upgrade from office-standard to hotel-grade systems — water supply, sewage risers, and HVAC on every floor",
      "Change-of-use compliance — fire safety, emergency egress, and building code requirements for a hotel conversion",
    ],
    solutions: [
      "Detailed structural assessment, slab and column strengthening works to accommodate hotel partitioning and fixture loading",
      "Phased construction with restricted working hours and night-time delivery windows to minimize disruption to Balogun commerce",
      "Full MEP systems redesign and installation — dedicated risers, electrical circuits, and HVAC for each floor",
      "Fire protection upgrade: sprinkler systems, fire doors, emergency lighting, and escape route reconfiguration throughout",
    ],
    keyFeatures: [
      "Full adaptive reuse — multi-storey office complex to hotel",
      "100+ guest rooms with modern amenities and en-suite bathrooms",
      "Ground-floor reception, lobby, and business lounge",
      "Hotel-grade MEP throughout — HVAC, water, electrical",
      "Fire safety compliance — sprinklers, emergency exits, detection systems",
      "Hotel services infrastructure — laundry, housekeeping, kitchen facilities",
      "Exterior refurbishment and hotel brand signage",
      "Rooftop facilities and utility plant room",
    ],
    technicalSpecs: [
      { label: "Building Type", value: "Adaptive Reuse — Office to Hotel" },
      { label: "Estimated Rooms", value: "100+" },
      { label: "Structural System", value: "Existing RC Frame (reinforced)" },
      { label: "Foundation", value: "Existing Pile Foundation (assessed)" },
      { label: "MEP", value: "Full Hotel-Grade Replacement" },
      { label: "Location", value: "Balogun, Lagos Island" },
    ],
    timeline: [
      { phase: "Structural Assessment & Design", duration: "4 months", status: "Completed" },
      { phase: "Structural Strengthening Works", duration: "8 months", status: "Completed" },
      { phase: "MEP Installation & Partitioning", duration: "12 months", status: "Completed" },
      { phase: "Finishing & Commissioning", duration: "6 months", status: "Completed" },
    ],
  },

  "swiss-spirit-hotel-makurdi": {
    title: "Swiss Spirit Hotel — Makurdi, Benue State",
    description: "Structural design and construction works for the Swiss Spirit Hotel in Makurdi — a premium hospitality development in North-Central Nigeria along the River Benue",
    value: "₦1.2 Billion",
    category: "Hospitality",
    status: "Completed",
    location: "Makurdi, Benue State",
    year: "2020",
    duration: "24 months",
    client: "Swiss International Hotel Group (Nigeria)",
    projectManager: "Engr. Opeoluwa Ezekiel Oloyede",
    images: [PROJECT_IMGS.hotelFill2, PROJECT_IMGS.hotelFill1, PROJECT_IMGS.hotelFill3, PROJECT_IMGS.roadFill3],
    overview: "The Swiss Spirit Hotel Makurdi marked Envostructs' expansion into North-Central Nigeria, delivering structural design and construction works for a new hospitality development in Makurdi — capital of Benue State and a growing commercial and administrative hub along the River Benue. The Swiss Spirit Hotel was developed to meet the region's increasing demand for quality business accommodation. Envostructs was engaged for the full structural package: from geotechnical investigation and foundation design through to structural frame completion, working to the international standards of the Swiss International Hotel Group for room layout, load specifications, and structural robustness. The project further established Envostructs' reputation for delivering quality hospitality construction across Nigeria's geopolitical zones.",
    challenges: [
      "Construction in Makurdi's alluvial plain terrain close to the River Benue floodplain — requiring careful geotechnical assessment",
      "Sourcing premium construction materials and specialist labour in Benue State, away from Envostructs' Lagos base",
      "Coordinating structural works to Swiss International Hotel Group's specifications while maintaining local supply chains",
      "Managing extended construction cycles across Benue State's wet and dry seasons",
    ],
    solutions: [
      "Comprehensive subsoil investigation with deep foundation design to manage alluvial soil conditions near River Benue",
      "Established a dedicated site procurement network in Benue and a logistics corridor from Lagos for specialist materials",
      "Close alignment with the Swiss International Hotels technical team for all structural specifications and load requirements",
      "Phased construction sequencing to protect foundations and slabs during intense wet season periods",
    ],
    keyFeatures: [
      "Multi-storey hotel structure with reinforced concrete frame",
      "Deep foundation system for River Benue alluvial conditions",
      "Swiss International Hotel Group structural standards compliance",
      "Full structural package: foundations, columns, beams, and slabs",
      "Hotel-grade load capacities for conference halls and amenity areas",
      "Coordinated MEP structural provisions throughout",
      "External works including parking and perimeter landscaping",
      "Structural certification and engineering documentation package",
    ],
    technicalSpecs: [
      { label: "Location", value: "Makurdi, Benue State" },
      { label: "Structural System", value: "Reinforced Concrete Frame" },
      { label: "Foundation Type", value: "RC Pile Foundation" },
      { label: "Design Standard", value: "BS 8110 / Eurocode" },
      { label: "Building Height", value: "Multi-storey" },
      { label: "Project Type", value: "Structural Design & Construction" },
    ],
    timeline: [
      { phase: "Geotechnical Investigation & Foundation Design", duration: "4 months", status: "Completed" },
      { phase: "Foundation Construction", duration: "5 months", status: "Completed" },
      { phase: "Structural Frame Construction", duration: "10 months", status: "Completed" },
      { phase: "Finishing Structural Works & Handover", duration: "5 months", status: "Completed" },
    ],
  },

  "lekki-free-zone-roads": {
    title: "Lekki Free Zone — Roads N5 & E6A",
    description: "Design and construction of internal roads N5 and E6A within the Lekki Free Zone — Nigeria's premier industrial and logistics hub on Lagos' eastern corridor",
    value: "₦464 Million",
    category: "Infrastructure",
    status: "Completed",
    location: "Lekki Free Zone, Ibeju-Lekki, Lagos State",
    year: "2019",
    duration: "18 months",
    client: "Lekki Free Zone Development Company (LFZDC)",
    projectManager: "Engr. A.D. Onitilo",
    video: "/lekki.mp4",
    images: [PROJECT_IMGS.lekkiZone1, PROJECT_IMGS.lekkiZone2, PROJECT_IMGS.roadFill1, PROJECT_IMGS.roadFill3],
    overview: "The Lekki Free Zone — a 16,000-hectare industrial and logistics hub on Lagos' eastern corridor — is home to Nigeria's flagship Lekki Deep-Sea Port, major manufacturing facilities, and international industrial tenants. Envostructs was engaged by the Lekki Free Zone Development Company (LFZDC) to design and construct two key internal road corridors: Road N5 and Road E6A. These roads form part of the zone's permanent internal network, serving industrial plants, warehouses, and logistics operations within the free trade zone. The roads were designed for extreme heavy-vehicle loadings — accommodating port vehicles, oversized industrial equipment, and the demanding operational environment of an active port and manufacturing estate within the Lekki peninsula's coastal reclaimed terrain.",
    challenges: [
      "Designing for extreme heavy-vehicle loadings — port vehicles, factory trucks, and oversized industrial equipment",
      "Construction on coastal reclaimed land — managing weak subgrade conditions on the Lekki peninsula's sandy/alluvial soils",
      "Coordinating construction around active industrial operations without disrupting the zone's ongoing development",
      "Drainage design adequate for Lagos' intense coastal rainfall on low-lying reclaimed land",
    ],
    solutions: [
      "Heavy-duty pavement design with deep sub-base and base course layers for port and industrial vehicle loads",
      "Ground improvement works — compaction and sub-base strengthening to stabilize the reclaimed coastal land subgrade",
      "Phased construction plan separating works zones from live industrial and logistics operations throughout",
      "Comprehensive storm drainage network designed for 1-in-25-year storm event on the coastal low-lying terrain",
    ],
    keyFeatures: [
      "Industrial-grade heavy-duty road pavement for port and factory traffic",
      "Reinforced sub-base and base course on reclaimed coastal land",
      "Roadside drainage channels and storm water outfall system",
      "Road markings, kerbs, and signage to industrial estate standards",
      "Wide carriageway for oversized industrial vehicle movements",
      "Junction design for articulated trucks and heavy goods vehicles",
      "Street lighting at key intersections and access points",
      "As-built documentation and infrastructure handover package",
    ],
    technicalSpecs: [
      { label: "Roads Constructed", value: "N5 and E6A" },
      { label: "Zone Area", value: "16,000 hectares" },
      { label: "Pavement Type", value: "Heavy-Duty Asphaltic Concrete" },
      { label: "Design Loading", value: "Heavy Industrial / Port Vehicles" },
      { label: "Client", value: "Lekki Free Zone Dev. Company" },
      { label: "Location", value: "Ibeju-Lekki, Lagos" },
    ],
    timeline: [
      { phase: "Survey, Design & BOQ Preparation", duration: "3 months", status: "Completed" },
      { phase: "Site Clearing & Earthworks", duration: "4 months", status: "Completed" },
      { phase: "Sub-base & Base Course Construction", duration: "6 months", status: "Completed" },
      { phase: "Asphalt, Drainage & Road Furniture", duration: "5 months", status: "Completed" },
    ],
  },

  "national-theatre-car-parks": {
    title: "National Theatre Multi-Car Parks — Lagos",
    description: "Design and supervision of multi-storey car parks and access roads at the iconic National Arts Theatre, Iganmu — one of Nigeria's most recognizable cultural landmarks",
    value: "₦350 Million",
    category: "Infrastructure",
    status: "Completed",
    location: "National Arts Theatre, Iganmu, Lagos",
    year: "2018",
    duration: "18 months",
    client: "National Theatre Lagos / Federal Government of Nigeria",
    projectManager: "Engr. S.I.A. Edidi",
    images: [PROJECT_IMGS.nationalTheatre, PROJECT_IMGS.comFill2, PROJECT_IMGS.roadFill1, PROJECT_IMGS.roadFill3],
    overview: "The National Arts Theatre, Iganmu — built in 1977 and modelled after the Palace of Culture and Sports in Varna, Bulgaria — is one of Nigeria's most iconic cultural landmarks and its most recognizable post-colonial architectural achievement. The theatre, which serves as the country's premier cultural and events hub, required a comprehensive parking and access infrastructure upgrade to match its growing event capacity. Now officially renamed the Wole Soyinka Centre for Culture and Creative Arts following its ₦68 billion refurbishment, the facility needed multi-storey car parks that could handle large event-day crowds. Envostructs designed and supervised construction of multi-storey car parks and associated access roads, combining structural engineering precision with sensitivity to the heritage character of this national landmark.",
    challenges: [
      "Designing new car park structures that harmonized aesthetically with the National Theatre's distinctive modernist heritage architecture",
      "Structural foundation design on Iganmu's low-lying coastal terrain with shallow groundwater table",
      "Traffic and access road design for large event-day crowd movements — the theatre hosts thousands of visitors",
      "Minimizing disruption to ongoing theatre operations and performances during construction",
    ],
    solutions: [
      "Architectural integration of car park facade to complement the National Theatre's heritage visual character",
      "Raft foundation system with drainage provisions to manage the high water table at the Iganmu site",
      "Separate entry and exit access roads with event-day traffic marshalling provisions",
      "Phased construction programme protecting the performance areas from noise and vibration",
    ],
    keyFeatures: [
      "Multi-storey car park with 500+ vehicle capacity",
      "Reinforced concrete frame with anti-carbonation protective coating",
      "Dedicated access roads and pedestrian walkways to the theatre",
      "Event-day traffic management provisions — one-way loops and marshalling",
      "Security booth and lighting for nighttime event operations",
      "Stormwater drainage and car park surface water management",
      "Disabled access ramps and designated parking provisions",
      "Structural and safety certification documentation",
    ],
    technicalSpecs: [
      { label: "Car Park Capacity", value: "500+ vehicles" },
      { label: "Structural System", value: "Reinforced Concrete Frame" },
      { label: "Foundation Type", value: "Raft Foundation" },
      { label: "Access Roads", value: "Dual Entry/Exit Lanes" },
      { label: "Location", value: "Iganmu, Lagos Island" },
      { label: "Heritage Context", value: "National Arts Theatre (1977)" },
    ],
    timeline: [
      { phase: "Survey, Design & Approvals", duration: "4 months", status: "Completed" },
      { phase: "Foundation & Ground Works", duration: "5 months", status: "Completed" },
      { phase: "Structural Frame & Deck Construction", duration: "6 months", status: "Completed" },
      { phase: "Access Roads, Finishing & Commissioning", duration: "3 months", status: "Completed" },
    ],
  },

  "ogudu-gra-duplex": {
    title: "Detached Duplex Units — OGUDU GRA",
    description: "Construction of 4 units of 5-bedroom fully detached luxury duplexes at OGUDU GRA — one of Lagos State's most prestigious residential addresses",
    value: "₦300 Million",
    category: "Residential",
    status: "Ongoing",
    location: "OGUDU GRA, Lagos State",
    year: "2024",
    duration: "24 months",
    client: "Private Client",
    projectManager: "Engr. Opeoluwa Ezekiel Oloyede",
    images: [PROJECT_IMGS.oguduGra, PROJECT_IMGS.resFill1, PROJECT_IMGS.resFill2, PROJECT_IMGS.resFill3],
    overview: "OGUDU GRA — Government Residential Area — is one of Lagos State's most prestigious residential addresses, known for its security, consistent infrastructure, and high-value property market where 5-bedroom detached duplexes command prices well above ₦400 million. Envostructs is currently constructing 4 units of fully detached luxury duplexes in the estate, each featuring 5 bedrooms, a study, a domestic staff quarters, and premium finishes throughout. As with all Envostructs residential projects, the build is being supervised to a full professional engineering standard — with independent structural inspections at every milestone — going well beyond the typical quality controls applied to residential construction in Lagos.",
    challenges: [
      "Achieving uniformly high-quality finishes across 4 simultaneous units while maintaining schedule and cost control",
      "Foundation design matched to OGUDU GRA's soil profile — lateritic overburden overlying variable sub-strata in different plot zones",
      "Sourcing premium fitting-out materials within budget while meeting the GRA's luxury specification requirements",
      "Construction within an active residential estate — noise, dust, and delivery logistics constrained by estate management rules",
    ],
    solutions: [
      "Dedicated site management per 2-unit cluster, with a single quality control engineer overseeing all 4 units",
      "Borehole investigation on each plot to confirm foundation type, with isolated pad foundations on the column-and-beam frame",
      "Bulk pre-procurement of key finishing materials to lock pricing and ensure uniformity across all 4 units",
      "Construction management plan agreed with OGUDU GRA estate management, including restricted HGV delivery windows and dust suppression protocols",
    ],
    keyFeatures: [
      "4 units of 5-bedroom fully detached luxury duplexes",
      "Each unit with study, family lounge, and domestic staff quarters",
      "Premium kitchen and bathroom finishes — Italian tiles and granite countertops",
      "Reinforced concrete framed structure with block infill walls",
      "Perimeter fence, motorized gate, and paved driveway per unit",
      "Underground water tank, overhead tank, and borehole provision",
      "Pre-installed conduit for solar panel infrastructure",
      "Luxury-specification internal and external painting",
    ],
    technicalSpecs: [
      { label: "Units", value: "4 fully detached duplexes" },
      { label: "Bedrooms per Unit", value: "5 bedrooms + BQ" },
      { label: "Structural System", value: "Reinforced Concrete Frame" },
      { label: "Foundation Type", value: "Isolated Pad Foundation" },
      { label: "Total Built Area", value: "~1,600 sqm (all units)" },
      { label: "Status", value: "Ongoing" },
    ],
    timeline: [
      { phase: "Design & Estate Approvals", duration: "2 months", status: "Completed" },
      { phase: "Foundation & Ground Floor Structure", duration: "8 months", status: "Completed" },
      { phase: "First Floor & Roof Structure", duration: "6 months", status: "In Progress" },
      { phase: "Finishing Works & Handover", duration: "8 months", status: "Planned" },
    ],
  },

  "airport-runway-resurfacing": {
    title: "Murtala Muhammed Airport — Runway Resurfacing",
    description: "Resurfacing of the tarmac runway for the Federal Airports Authority of Nigeria (FAAN) at Murtala Muhammed International Airport — Nigeria's busiest aviation hub",
    value: "₦285 Million",
    category: "Infrastructure",
    status: "Completed",
    location: "Murtala Muhammed International Airport, Lagos",
    year: "2016",
    duration: "6 months",
    client: "Federal Airports Authority of Nigeria (FAAN)",
    projectManager: "Engr. A.D. Onitilo",
    images: [PROJECT_IMGS.runway, PROJECT_IMGS.roadFill1, PROJECT_IMGS.roadFill3, PROJECT_IMGS.roadFill2],
    overview: "The Murtala Muhammed International Airport runway resurfacing project stands as one of Envostructs' most operationally critical infrastructure achievements. Commissioned by the Federal Airports Authority of Nigeria (FAAN) — the federal agency managing all commercial airports in Nigeria — the project involved resurfacing of the main tarmac runway at Nigeria's busiest airport, which handles millions of domestic and international passengers annually across its 3.9 km runways. Airport runway works demand extreme precision: all operations must be completed within defined FAAN maintenance windows to minimize flight disruptions, the pavement must meet ICAO and FAA international standards for friction, smoothness, and load capacity, and all works must pass independent airside safety validation before the runway returns to service.",
    challenges: [
      "All works within tightly scheduled FAAN maintenance windows — runway closures limited to specific overnight periods to minimize flight disruptions",
      "Pavement design to ICAO Category I standards — specific bituminous mix designs, surface texture depths, and aircraft load capacity ratings",
      "Full FAAN airside safety accreditation — coordinating with Air Traffic Control, ground handling, and airport operations throughout",
      "Independent runway surface friction testing required to meet international aviation acceptability criteria before return to service",
    ],
    solutions: [
      "Night-works programme developed with FAAN — all machinery prepositioned and tested before each curfew window opened",
      "Bituminous pavement mix designed and laboratory-tested to confirm ICAO friction and smoothness compliance",
      "Full airside safety protocol: fluorescent PPE, airside briefings, marshalling, and Foreign Object Debris (FOD) control at all times",
      "Independent friction testing by FAAN-approved agency before return-to-service certification issued",
    ],
    keyFeatures: [
      "Full tarmac runway resurfacing to ICAO and FAAN standards",
      "Night-works programme to minimize disruption to aviation operations",
      "Bituminous pavement designed for aircraft loads and jet blast resistance",
      "Surface friction and smoothness testing to international aviation standards",
      "Runway centreline and edge marking repaint following resurfacing",
      "Foreign Object Debris (FOD) management programme",
      "FAAN-approved airside safety plan",
      "Structural pavement design — levelling and surface course",
    ],
    technicalSpecs: [
      { label: "Airport", value: "Murtala Muhammed International" },
      { label: "Client", value: "FAAN — Federal Airports Authority" },
      { label: "Pavement Type", value: "Bituminous Asphalt Concrete" },
      { label: "Standard", value: "ICAO Airfield Pavement" },
      { label: "Works Mode", value: "Night-time maintenance windows" },
      { label: "Location", value: "Lagos, Nigeria" },
    ],
    timeline: [
      { phase: "Mix Design, Design & FAAN Approvals", duration: "6 weeks", status: "Completed" },
      { phase: "Milling & Surface Preparation", duration: "4 weeks", status: "Completed" },
      { phase: "Levelling Course & Surface Course", duration: "8 weeks", status: "Completed" },
      { phase: "Markings, Testing & Return to Service", duration: "6 weeks", status: "Completed" },
    ],
  },

  "mile12-ikorodu-road": {
    title: "Mile 12 – Ikorodu Road (World Bank)",
    description: "Independent quality control and safety supervision on the World Bank-funded rehabilitation of the critical Mile 12 to Ikorodu arterial corridor in Lagos State",
    value: "₦215 Million",
    category: "Infrastructure",
    status: "Completed",
    location: "Mile 12 to Ikorodu, Lagos State",
    year: "2017",
    duration: "18 months",
    client: "Lagos State Ministry of Works — World Bank LFZRP",
    projectManager: "Engr. A.D. Onitilo",
    images: [PROJECT_IMGS.ikoroduRoad, PROJECT_IMGS.roadFill1, PROJECT_IMGS.roadFill2, PROJECT_IMGS.roadFill3],
    overview: "The Mile 12–Ikorodu Road is one of Lagos State's most heavily trafficked arterial corridors, connecting the iconic Mile 12 International Market — one of West Africa's largest commodity markets for food and agricultural produce — through the northern Lagos mainland to Ikorodu town. The road serves millions of daily commuters and is a critical supply route for produce traders. Envostructs was engaged to provide independent quality control and safety supervision on the World Bank-funded rehabilitation works, ensuring the contractor's outputs met international standards before drawdown of World Bank financing. World Bank-funded projects carry stringent procurement, QA, and Environmental and Social Safeguards requirements, all of which Envostructs managed through its resident supervision team.",
    challenges: [
      "Supervising works on one of Lagos' busiest roads while managing extremely high traffic volumes and pedestrian exposure",
      "World Bank quality and procurement standards — all materials, testing, and reporting required to meet the Bank's fiduciary requirements",
      "Environmental and social safeguards compliance including dust suppression, noise management, and protection of roadside traders",
      "Multiple simultaneous contractor work fronts along the extended urban corridor",
    ],
    solutions: [
      "Resident supervision team with lane-by-lane traffic management plan — safe construction zones maintained alongside live traffic",
      "World Bank-compliant quality assurance system — all materials tested at accredited Lagos laboratories before site use",
      "Environmental and Social Management Plan supervision — weekly compliance checks and reporting to the World Bank coordination unit",
      "Multiple resident engineer checkpoints along the corridor, with daily reports to the Ministry of Works PMU",
    ],
    keyFeatures: [
      "World Bank-funded road rehabilitation and independent supervision",
      "Quality control on all pavement materials and construction works",
      "Environmental and Social Safeguards monitoring and reporting",
      "Traffic management for high-density urban corridor",
      "Drainage reconstruction and culvert rehabilitation supervision",
      "World Bank fiduciary compliance — procurement and financial reporting",
      "Pavement condition survey before and after construction",
      "Completion and compliance report to Ministry of Works and World Bank",
    ],
    technicalSpecs: [
      { label: "Corridor", value: "Mile 12 to Ikorodu, Lagos" },
      { label: "Funding", value: "World Bank LFZRP" },
      { label: "Client", value: "Lagos State Ministry of Works" },
      { label: "Role", value: "Quality Control Supervision" },
      { label: "Road Classification", value: "Major Arterial State Road" },
      { label: "Location", value: "Northern Lagos Mainland" },
    ],
    timeline: [
      { phase: "Baseline Survey & Supervision Mobilisation", duration: "2 months", status: "Completed" },
      { phase: "Earthworks & Drainage Supervision", duration: "6 months", status: "Completed" },
      { phase: "Pavement Works Quality Control", duration: "7 months", status: "Completed" },
      { phase: "Completion Inspection & World Bank Reporting", duration: "3 months", status: "Completed" },
    ],
  },

  "owo-iyere-road": {
    title: "Owo – Iyere Road, Ondo State",
    description: "Design and supervision of road construction on the Owo–Iyere corridor in Ondo State — part of Governor Akeredolu's state-wide urban road expansion programme",
    value: "₦175 Million",
    category: "Infrastructure",
    status: "Completed",
    location: "Owo, Ondo State",
    year: "2019",
    duration: "15 months",
    client: "Ondo State Ministry of Infrastructure & Physical Planning",
    projectManager: "Engr. A.D. Onitilo",
    images: [PROJECT_IMGS.owoIyere, PROJECT_IMGS.roadFill1, PROJECT_IMGS.roadFill2, PROJECT_IMGS.roadFill3],
    overview: "The Owo–Iyere Road was part of Governor Arakunrin Rotimi Akeredolu's major urban road expansion programme for Ondo State, which delivered over 45 kilometres of roads across the state. Owo — one of Ondo State's most historically significant towns, home to the Kingdom of Owo and one of the largest palaces in Africa — required improved road infrastructure connecting its urban core to the Iyere district. Envostructs provided design and resident engineering supervision, ensuring the road was constructed to specification. The completed road forms part of the principal dual carriageway serving Owo town's northern and western expansion areas, confirmed as the Okeogun-Uka Junction–Iyere arterial corridor — the state's newly constructed two-lane dual carriageway in the Owo axis.",
    challenges: [
      "Owo's hilly terrain required cut-and-fill earthworks to maintain acceptable road grades across undulating ground",
      "Drainage design to manage concentrated run-off from surrounding hillsides during Ondo State's intense rainy season",
      "Supervising road construction across an active urban corridor with residents and commercial activities alongside construction",
      "Maintaining schedule against the state government's ambitious multi-corridor road delivery programme",
    ],
    solutions: [
      "Terrain analysis and earthworks design minimizing cut-and-fill volumes while keeping grades within acceptable limits",
      "Catch-drain and deep side-drain system designed to intercept hillside run-off before it reached the carriageway",
      "Phased construction with alternating single-lane traffic management, allowing continuous resident and commercial access",
      "Weekly site progress reviews with the Ondo State Ministry of Works PMU to ensure schedule adherence",
    ],
    keyFeatures: [
      "Full road pavement — sub-base, base course, and asphaltic concrete surface",
      "Earthworks — cut-and-fill for grade control through hilly terrain",
      "Concrete-lined side drains and cross-drainage structures throughout",
      "Road markings, kerbs, and signage to state highway standards",
      "Resident engineering supervision throughout construction",
      "Materials testing and quality control reporting",
      "Traffic management during construction in active urban area",
      "Completion and as-built report to Ondo State Ministry of Works",
    ],
    technicalSpecs: [
      { label: "Corridor", value: "Owo Urban to Iyere" },
      { label: "Road Type", value: "Urban Arterial / Dual Carriageway" },
      { label: "Pavement Type", value: "Asphaltic Concrete" },
      { label: "Drainage", value: "Concrete-lined side drains" },
      { label: "Client", value: "Ondo State Ministry of Works" },
      { label: "Role", value: "Design & Resident Supervision" },
    ],
    timeline: [
      { phase: "Topographic Survey & Road Design", duration: "2 months", status: "Completed" },
      { phase: "Site Clearing & Earthworks", duration: "4 months", status: "Completed" },
      { phase: "Sub-base, Base Course & Pavement Works", duration: "6 months", status: "Completed" },
      { phase: "Drainage, Road Furniture & Completion", duration: "3 months", status: "Completed" },
    ],
  },

  "lagos-poly-classrooms": {
    title: "Block of Classrooms — Lagos State Polytechnic",
    description: "Construction of a new block of classrooms for the Department of Insurance at Lagos State Polytechnic (now LASUSTECH), Ikorodu campus",
    value: "₦110 Million",
    category: "Educational",
    status: "Completed",
    location: "Ikorodu Campus, Lagos State Polytechnic",
    year: "2018",
    duration: "12 months",
    client: "Lagos State Polytechnic (now LASUSTECH)",
    projectManager: "Engr. Opeoluwa Ezekiel Oloyede",
    images: [PROJECT_IMGS.classrooms, PROJECT_IMGS.eduFill1, PROJECT_IMGS.eduFill2, PROJECT_IMGS.roadFill3],
    overview: "Lagos State Polytechnic — now rebranded as Lagos State University of Science and Technology (LASUSTECH) — is one of Lagos State's foremost technical and vocational higher education institutions, with its Ikorodu campus serving thousands of students annually. Envostructs was contracted to construct a new block of classrooms for the Department of Insurance, addressing the chronic shortage of lecture and tutorial space at the Ikorodu campus. The project required working within an active campus environment where lectures and examinations continued through the construction period. The completed block provides modern, well-ventilated classrooms with good natural lighting — a significant upgrade to the learning environment for Insurance Department students.",
    challenges: [
      "Active campus environment — lectures and examinations continued throughout the construction period",
      "Compliance with Lagos State Public Works standards for government educational buildings",
      "Delivering on a constrained public sector budget while maintaining structural integrity and quality",
      "Managing construction logistics through campus access points without disrupting institutional operations",
    ],
    solutions: [
      "Construction programme designed around the academic calendar — intensive work during vacation periods and reduced activity during examinations",
      "Lagos State Ministry of Works specifications strictly adhered to — all materials tested against the government standard schedule of rates",
      "Value engineering on non-structural elements to stay within budget while maintaining full structural and safety compliance",
      "Dedicated campus liaison with the Polytechnic's Estates Department for deliveries, parking, and site access coordination",
    ],
    keyFeatures: [
      "Multi-level block of lecture halls and tutorial rooms",
      "Good natural lighting and cross-ventilation for Lagos tropical climate",
      "Reinforced concrete framed structure with block infill walls",
      "Terrazzo floors and louvred windows to polytechnic standards",
      "Blackboards, chalk rails, and furniture provisions in each room",
      "Covered walkways connecting to existing campus infrastructure",
      "Disability access provisions at ground floor level",
      "External painting and campus-standard landscaping",
    ],
    technicalSpecs: [
      { label: "Building Type", value: "Block of Classrooms" },
      { label: "Structural System", value: "Reinforced Concrete Frame" },
      { label: "Foundation Type", value: "Pad Foundation on Laterite" },
      { label: "Storeys", value: "2 storeys" },
      { label: "Client", value: "Lagos State Polytechnic (LASUSTECH)" },
      { label: "Location", value: "Ikorodu, Lagos" },
    ],
    timeline: [
      { phase: "Design & Bill of Quantities", duration: "2 months", status: "Completed" },
      { phase: "Foundation & Ground Floor Structure", duration: "4 months", status: "Completed" },
      { phase: "First Floor Structure & Roofing", duration: "3 months", status: "Completed" },
      { phase: "Finishing, Fittings & Handover", duration: "3 months", status: "Completed" },
    ],
  },

  "first-bank-branch-designs": {
    title: "First Bank Nigeria — Multi-Branch Structural Designs",
    description: "Structural design package for multiple First Bank Nigeria branch buildings across Nigeria — serving the oldest bank in Africa with 820+ business locations nationwide",
    value: "₦95 Million",
    category: "Commercial",
    status: "Completed",
    location: "Multiple States, Nigeria",
    year: "2017",
    duration: "18 months",
    client: "First Bank of Nigeria Limited",
    projectManager: "Engr. S.I.A. Edidi",
    images: [PROJECT_IMGS.firstBank, PROJECT_IMGS.comFill1, PROJECT_IMGS.comFill2, PROJECT_IMGS.roadFill3],
    overview: "First Bank of Nigeria — founded in 1894 and the oldest and largest commercial bank in Nigeria — operates one of the most extensive branch networks in Africa, with over 820 business locations. As part of a branch expansion and upgrade programme, Envostructs was engaged to provide structural engineering designs for multiple new branch buildings across Nigerian states. Working to First Bank's architectural and space planning standards, Envostructs produced structural drawings, calculations, and specifications for each branch — covering foundations, columns, beams, slabs, and roof structures — used by local contractors at each location for construction. The engagement demonstrated Envostructs' ability to manage a multi-site structural design programme across varied ground conditions, local regulations, and geographies.",
    challenges: [
      "Designing structures for multiple sites simultaneously — each with different soil conditions, plot sizes, and LGA planning requirements",
      "Coordinating structural designs to First Bank's standardized architectural layouts while adapting to site-specific constraints",
      "Fast-track design timeline required by First Bank's branch opening programme",
      "Ensuring designs were buildable by local contractors at each state without specialist equipment or imported materials",
    ],
    solutions: [
      "Standardised structural design template keyed to First Bank branch typologies, adapted with site-specific foundation modifications",
      "Engaged local geotechnical firms for borehole investigations at each site, informing foundation design with site-specific data",
      "Dedicated design team with weekly progress reviews and shared drawing register to track all deliverables",
      "Designed for locally available materials — standard rebar sizes and concrete mixes appropriate to each region",
    ],
    keyFeatures: [
      "Structural design for multiple branch buildings nationwide",
      "Foundation designs adapted to each site's geotechnical conditions",
      "Standardised structural frame designs keyed to First Bank typologies",
      "Structural drawings, calculations, and specs for contractor use",
      "Bank-specific structural provisions — vault rooms, counter areas, ATM platforms",
      "Roof structure designs appropriate to each branch configuration",
      "Structural coordination with First Bank's architectural drawings",
      "Multi-site design programme management",
    ],
    technicalSpecs: [
      { label: "Client", value: "First Bank of Nigeria Limited" },
      { label: "Service", value: "Structural Design" },
      { label: "Design Standard", value: "BS 8110 / Nigerian Standards" },
      { label: "Structure Type", value: "Reinforced Concrete Frame" },
      { label: "Scope", value: "Multi-state branch programme" },
      { label: "Bank Founded", value: "1894 — oldest bank in Nigeria" },
    ],
    timeline: [
      { phase: "Programme Setup & Design Brief", duration: "2 months", status: "Completed" },
      { phase: "Site Investigations & Foundation Designs", duration: "5 months", status: "Completed" },
      { phase: "Structural Frame Designs & Drawings", duration: "7 months", status: "Completed" },
      { phase: "Client Review, Revision & Issue for Construction", duration: "4 months", status: "Completed" },
    ],
  },

  "akanro-road-ilasa": {
    title: "Akanro Road Rehabilitation — Ilasa, Lagos",
    description: "Design and supervision of road rehabilitation on Akanro Street, Ilasa Bustop, Yaba — the very street where Envostructs' head office stands at No. 51",
    value: "₦85 Million",
    category: "Infrastructure",
    status: "Completed",
    location: "Ilasa Bustop, Yaba, Lagos",
    year: "2020",
    duration: "8 months",
    client: "Lagos State Ministry of Works",
    projectManager: "Engr. S.I.A. Edidi",
    images: [PROJECT_IMGS.roadConstruction, PROJECT_IMGS.roadFill1, PROJECT_IMGS.roadFill2, PROJECT_IMGS.roadFill3],
    overview: "Akanro Street, Ilasa Bustop, Yaba — where Envostructs is headquartered at No. 51 — was included in a Lagos State Ministry of Works road rehabilitation programme to restore deteriorated urban roads in the Yaba-Ilasa corridor. This project carried special significance: Envostructs delivered engineering excellence to the streets of its own home community, improving access, drainage, and road safety for the residents and businesses of Ilasa. The project covered pavement condition survey, rehabilitation design, and resident engineering supervision of reconstruction works — including carriageway resurfacing, drainage repair, and road markings — on one of Ilasa's busiest local streets.",
    challenges: [
      "Active urban road in a densely populated residential and commercial neighbourhood — Ilasa Bustop is a busy transit junction",
      "Diagnosing root causes of pavement deterioration to ensure rehabilitation addressed underlying drainage and structural failures",
      "Construction in close proximity to open drains and utility infrastructure typical of older Lagos urban streets",
      "Traffic management on a busy local road serving market traders, bus operations, and commuters",
    ],
    solutions: [
      "Pavement condition survey identified localised base course failures and inadequate cross-drainage as primary deterioration causes",
      "Rehabilitation design addressed root causes — drainage repair first, then full-depth reclamation at failed sections before overlay",
      "Traffic management plan with lane control and pedestrian diversion, in cooperation with local area council",
      "Community engagement with Ilasa Bustop market traders to agree construction hours and access arrangements",
    ],
    keyFeatures: [
      "Full pavement condition survey and rehabilitation design",
      "Full-depth reclamation and reconstruction at failed sections",
      "Asphaltic concrete overlay on stable pavement sections",
      "Drainage repair — reconstruction of failed invert channels",
      "Road markings and pedestrian crossing provisions",
      "Resident engineering supervision throughout construction",
      "Traffic management plan implementation",
      "As-built documentation to Lagos State Ministry of Works",
    ],
    technicalSpecs: [
      { label: "Location", value: "Akanro Street, Ilasa, Lagos" },
      { label: "Note", value: "Envostructs HQ at 51 Akanro Street" },
      { label: "Works Type", value: "Road Rehabilitation" },
      { label: "Pavement Design", value: "Asphaltic Concrete Overlay" },
      { label: "Client", value: "Lagos State Ministry of Works" },
      { label: "Role", value: "Design & Supervision" },
    ],
    timeline: [
      { phase: "Pavement Survey & Rehabilitation Design", duration: "1 month", status: "Completed" },
      { phase: "Drainage Repair & Preparation", duration: "2 months", status: "Completed" },
      { phase: "Full-Depth Reclamation & Overlay Works", duration: "3 months", status: "Completed" },
      { phase: "Road Markings, Finishing & Handover", duration: "2 months", status: "Completed" },
    ],
  },

  "nasfat-central-mosque": {
    title: "NASFAT Central Mosque — Isolo, Lagos",
    description: "Construction of the NASFAT central mosque complex at Isolo — for the Nasrul-Lahi-l-Fatih Society of Nigeria, one of the largest Islamic organisations in West Africa",
    value: "₦80 Million",
    category: "Religious",
    status: "Completed",
    location: "Isolo, Lagos State",
    year: "2017",
    duration: "14 months",
    client: "Nasrul-Lahi-l-Fatih Society of Nigeria (NASFAT)",
    projectManager: "Engr. Opeoluwa Ezekiel Oloyede",
    images: [PROJECT_IMGS.nasfat, PROJECT_IMGS.mosqueFill1, PROJECT_IMGS.mosqueFill2, PROJECT_IMGS.mosqueFill3],
    overview: "The Nasrul-Lahi-l-Fatih Society of Nigeria (NASFAT) — one of the largest and most progressive Islamic organisations in Nigeria and West Africa — engaged Envostructs to construct its central mosque complex at Isolo, Lagos. Known for its emphasis on Islamic education, community service, and progressive values, NASFAT required a mosque that reflected both religious dignity and organizational standing. The Isolo mosque serves as the primary gathering point for NASFAT members in the district, hosting daily prayers, Islamic education programmes, and the Society's community activities. The complex includes the main prayer hall, ablution facilities, and an administrative block.",
    challenges: [
      "Designing a dignified Islamic prayer space that met NASFAT's standards within the available project budget",
      "Prayer hall quality — natural ventilation, acoustics for Quranic recitation, and appropriate floor finish for prayer",
      "Phased construction to allow partial use of the ablution block while the prayer hall was being completed",
      "Foundation design on the Isolo plot, which had variable fill material from prior site use",
    ],
    solutions: [
      "Close collaboration with NASFAT's building committee, incorporating traditional Islamic architectural elements within the budget framework",
      "Prayer hall optimized for cross-ventilation, acoustics, and Italian tile floor finish appropriate for prayer",
      "Phased programme with early ablution block handover to enable use while prayer hall construction continued",
      "Trial pits to map fill conditions, with pad foundations designed conservatively on confirmed bearing material",
    ],
    keyFeatures: [
      "Main prayer hall accommodating 500+ worshippers",
      "Traditional Islamic architectural detailing — arches, geometric patterns, and minaret",
      "Natural ventilation and daylighting design for Lagos tropical climate",
      "Dedicated ablution facility — separate male and female sections",
      "NASFAT administrative block within the complex",
      "Paved mosque compound with drainage",
      "PA and loudspeaker system provisions",
      "External lighting for evening prayers and night programmes",
    ],
    technicalSpecs: [
      { label: "Prayer Hall Capacity", value: "500+ worshippers" },
      { label: "Structural System", value: "Reinforced Concrete Frame" },
      { label: "Foundation Type", value: "Pad Foundation" },
      { label: "Roof Type", value: "Concrete Dome + Pitched Roof" },
      { label: "Client", value: "NASFAT Society of Nigeria" },
      { label: "Location", value: "Isolo, Lagos" },
    ],
    timeline: [
      { phase: "Design & Building Approval", duration: "2 months", status: "Completed" },
      { phase: "Foundation & Substructure", duration: "3 months", status: "Completed" },
      { phase: "Superstructure — Prayer Hall & Blocks", duration: "6 months", status: "Completed" },
      { phase: "Finishing, External Works & Handover", duration: "3 months", status: "Completed" },
    ],
  },

  "celestial-church-headquarters": {
    title: "Celestial Church of Christ Headquarters — Imeko",
    description: "Completion of construction at the Holy City headquarters of the Celestial Church of Christ in Imeko, Ogun State — the spiritual Jerusalem for millions of Celestial Christians worldwide",
    value: "₦50 Million",
    category: "Religious",
    status: "Completed",
    location: "Imeko, Imeko Afon LGA, Ogun State",
    year: "2016",
    duration: "10 months",
    client: "Celestial Church of Christ Worldwide",
    projectManager: "Engr. Opeoluwa Ezekiel Oloyede",
    images: [PROJECT_IMGS.church, PROJECT_IMGS.churchFill1, PROJECT_IMGS.mosqueFill2, PROJECT_IMGS.roadFill3],
    overview: "Imeko — a town in Imeko Afon LGA near the Ogun State–Benin Republic border — holds extraordinary spiritual significance for millions of Celestials worldwide. Known within the Celestial Church of Christ as the 'Celestial City' and likened to Jerusalem, Imeko is the prophetically designated Holy City and global headquarters of the CCC, initiated in 1983 by the church's founder Prophet Samuel Oshoffa. The CCC was founded in 1947 in Dahomey (now Benin) and has spread across West Africa, Europe, and North America. Every December, the Celestial City hosts the international Imeko Convocation — drawing tens of thousands of pilgrims from Nigeria, Benin, the UK, and the United States. Envostructs completed outstanding construction works at the Celestial City complex, contributing to the ongoing development of the church's global spiritual home.",
    challenges: [
      "Remote site logistics — Imeko's location near the Benin border required advance planning for materials delivery and labour accommodation",
      "Working within a living place of worship — the Celestial City receives pilgrims year-round, requiring respectful construction protocols",
      "CCC's specific spiritual requirements for the character of spaces at the Holy City required close liaison with church leadership",
      "Construction timeline aligned with the CCC events calendar to complete before the major December Imeko Convocation",
    ],
    solutions: [
      "Materials pre-staged at Imeko during dry season when access roads were most reliable, reducing mid-project supply disruptions",
      "Construction hours and activities agreed with the CCC Celestial City management to respect worship schedules",
      "Regular consultation with the CCC Worldwide Building Committee to ensure works conformed to the Holy City's spiritual character",
      "Accelerated programme during off-pilgrimage months to deliver completed works well ahead of the December Convocation",
    ],
    keyFeatures: [
      "Construction completion works at the CCC Celestial City world headquarters",
      "Structural works to the highest standard for a global religious HQ",
      "Works designed to complement and respect the existing Celestial City architecture",
      "Remote site logistics — materials delivery managed to Imeko",
      "Construction aligned with CCC pilgrimage and international events calendar",
      "External works — drainage, paving, and landscape improvements",
      "Coordination with CCC Worldwide Building Committee throughout",
      "Completion certification and handover documentation",
    ],
    technicalSpecs: [
      { label: "Location", value: "Imeko, Imeko Afon LGA, Ogun State" },
      { label: "Client", value: "Celestial Church of Christ Worldwide" },
      { label: "Site Significance", value: "CCC World Holy City — 'Jerusalem'" },
      { label: "Annual Pilgrims", value: "Tens of thousands (December)" },
      { label: "CCC Founded", value: "1947 — Prophet Samuel Oshoffa" },
      { label: "Works Type", value: "Completion of Existing Structures" },
    ],
    timeline: [
      { phase: "Site Survey & Construction Programme", duration: "1 month", status: "Completed" },
      { phase: "Structural Completion Works", duration: "4 months", status: "Completed" },
      { phase: "Finishing & External Works", duration: "4 months", status: "Completed" },
      { phase: "Inspection & Handover to CCC", duration: "1 month", status: "Completed" },
    ],
  },

  "diamond-bank-herbert-macaulay": {
    title: "Diamond Bank — Herbert Macaulay Way, Lagos",
    description: "Structural design and engineering for the Diamond Bank branch at 238 Herbert Macaulay Way, Yaba — now operating as Access Bank following the 2019 merger",
    value: "₦48 Million",
    category: "Commercial",
    status: "Completed",
    location: "Herbert Macaulay Way, Yaba, Lagos",
    year: "2015",
    duration: "8 months",
    client: "Diamond Bank Nigeria PLC (now Access Bank PLC)",
    projectManager: "Engr. S.I.A. Edidi",
    images: [PROJECT_IMGS.diamondBank, PROJECT_IMGS.comFill1, PROJECT_IMGS.comFill2, PROJECT_IMGS.roadFill3],
    overview: "Diamond Bank Nigeria PLC — which merged with Access Bank PLC in April 2019 to create one of Africa's largest banks — engaged Envostructs for the structural design and engineering of its branch at 238 Herbert Macaulay Way, Adekunle, Yaba. Herbert Macaulay Way is one of Lagos mainland's primary commercial and banking corridors, running from Ebute Metta through Yaba. Envostructs provided a complete structural engineering package: subsoil investigation, foundation design, structural frame design, and construction supervision — ensuring the building met banking industry standards for structural security, fire resistance, and operational robustness. The branch now operates as Access Bank following the Diamond Bank acquisition.",
    challenges: [
      "Bank branch structural requirements — vault room security, structural security, and banking industry load specifications",
      "Foundation design on Yaba's variable urban fill and alluvial soils of the Lagos mainland",
      "Construction within the constraints of an existing commercial plot on busy Herbert Macaulay Way",
      "Delivering design and construction within Diamond Bank's branch opening programme timeline",
    ],
    solutions: [
      "Borehole investigation confirming foundation depth, with isolated pad foundations on firm bearing strata",
      "Vault room structural design — reinforced concrete walls with heavy-duty floor slab to banking security specs",
      "Construction staging plan to manage materials delivery and operations on the narrow Herbert Macaulay Way frontage",
      "Fast-track design with early structural drawings issued for foundation construction in parallel with superstructure design",
    ],
    keyFeatures: [
      "Full structural design for Diamond Bank branch building",
      "Subsoil investigation and bespoke foundation design",
      "Bank vault room — RC structure to security specification",
      "Reinforced concrete frame — columns, beams, and slabs",
      "Structural provisions for ATM vestibule and counter areas",
      "Roof structure design and structural detailing",
      "Construction supervision and quality control",
      "Structural completion certificate and as-built documentation",
    ],
    technicalSpecs: [
      { label: "Location", value: "238 Herbert Macaulay Way, Yaba" },
      { label: "Client", value: "Diamond Bank (now Access Bank PLC)" },
      { label: "Service", value: "Structural Design & Supervision" },
      { label: "Structural System", value: "Reinforced Concrete Frame" },
      { label: "Foundation", value: "Isolated Pad Foundation" },
      { label: "Special Feature", value: "Bank Vault RC Structure" },
    ],
    timeline: [
      { phase: "Borehole Investigation & Foundation Design", duration: "2 months", status: "Completed" },
      { phase: "Structural Frame Design & Drawings", duration: "2 months", status: "Completed" },
      { phase: "Construction Supervision — Foundation to Roof", duration: "3 months", status: "Completed" },
      { phase: "Finishing Structural Works & Certification", duration: "1 month", status: "Completed" },
    ],
  },

  "arepo-central-mosque": {
    title: "Arepo Central Mosque — Arepo, Ogun State",
    description: "Design and construction of the Arepo community central mosque, providing a dignified Islamic worship centre for the rapidly growing Arepo community on the Lagos–Ibadan corridor",
    value: "₦42 Million",
    category: "Religious",
    status: "Completed",
    location: "Arepo, Ogun State",
    year: "2018",
    duration: "10 months",
    client: "Arepo Community Muslim Society",
    projectManager: "Engr. Opeoluwa Ezekiel Oloyede",
    images: [PROJECT_IMGS.arepoMosque, PROJECT_IMGS.mosqueFill1, PROJECT_IMGS.mosqueFill2, PROJECT_IMGS.mosqueFill3],
    overview: "Arepo, a rapidly growing peri-urban community on the Lagos–Ibadan Expressway in Ogun State, has experienced significant population growth driven by proximity to Lagos and the presence of industrial facilities and residential estates along the corridor. As the community expanded, the need for a properly constructed central mosque became urgent. The Arepo Community Muslim Society engaged Envostructs to design and construct the Arepo Central Mosque — a community-funded project combining professional engineering with grassroots construction. The completed mosque serves as the primary Friday prayer and Eid gathering point for the Arepo Muslim community, providing a dignified, well-ventilated, and permanent worship space.",
    challenges: [
      "Community-funded project — careful cost management required to deliver a dignified mosque within fundraising capacity",
      "Designing a mosque that felt worthy and Islamic in character on a community budget",
      "Foundation design on Arepo's lateritic soil — variable in depth and bearing capacity across the plot",
      "Coordinating construction with the community's contribution schedule and voluntary labour",
    ],
    solutions: [
      "Value-engineered design maximising prayer space, natural light, and Islamic character within the community's fundraising capacity",
      "Traditional Islamic elements — arched openings, minaret, and dome — incorporated using locally available materials",
      "Trial pits to identify consistent bearing strata, with strip foundation selected for buildability",
      "Transparent weekly cost reporting to the mosque building committee throughout construction",
    ],
    keyFeatures: [
      "Central mosque with main prayer hall for 300+ worshippers",
      "Traditional Islamic character — arched openings and minaret",
      "Separate male and female prayer areas",
      "Dedicated ablution facility — wudu points and wet rooms",
      "Natural cross-ventilation with louvred openings for Lagos climate",
      "Imam's office and committee room within the complex",
      "External paved courtyard for overflow prayers and Eid",
      "Perimeter wall and entrance gate",
    ],
    technicalSpecs: [
      { label: "Prayer Hall Capacity", value: "300+ worshippers" },
      { label: "Structural System", value: "Reinforced Concrete Frame" },
      { label: "Foundation", value: "Strip Foundation" },
      { label: "Roof Type", value: "Concrete Dome + Metal Roof" },
      { label: "Client", value: "Arepo Community Muslim Society" },
      { label: "Location", value: "Arepo, Ogun State" },
    ],
    timeline: [
      { phase: "Design, Approvals & Community Review", duration: "2 months", status: "Completed" },
      { phase: "Foundation & Substructure Works", duration: "2 months", status: "Completed" },
      { phase: "Superstructure & Dome Construction", duration: "4 months", status: "Completed" },
      { phase: "Finishing, Ablution Block & Handover", duration: "2 months", status: "Completed" },
    ],
  },

  "continent-hotel-akure": {
    title: "Continent Hotel Akure — Full Remodelling",
    description: "Complete internal and external remodelling of the Continent Hotel Akure — a 4-star Turkish international hotel brand and the first international hotel to open in Akure, Ondo State",
    value: "₦1.2 Billion",
    category: "Hospitality",
    status: "Completed",
    location: "Igbatoro Road, Alagbaka Extension, Akure, Ondo State",
    year: "2024",
    duration: "12 months",
    client: "Continent Hotel Akure (Continent International)",
    projectManager: "Engr. S.I.A. Edidi",
    video: "/continent%20hotel.mp4",
    images: [
      PROJECT_IMGS.continentHotel0,
      PROJECT_IMGS.continentHotel1,
      PROJECT_IMGS.continentHotel2,
      PROJECT_IMGS.continentHotel3,
    ],
    overview:
      "The Continent Hotel Akure — located on Igbatoro Road, Alagbaka Extension in the heart of Akure, Ondo State — holds a unique distinction as the first international hotel brand to establish itself in Akure, opening in May 2021 under the Turkish-owned Continent International group. The 4-star property, winner of the 'Most Exciting Brand of the Year Nigeria 2021' award by African Travel Times and ranked #1 hotel in Akure on TripAdvisor, engaged Envostructs to carry out a comprehensive remodelling programme covering the hotel's interiors, public areas, guestrooms, and facilities. The objective was to refresh and upgrade the hotel to meet its guests' evolving expectations and reinforce its position as Ondo State's premier hospitality destination for business and leisure travellers.",
    challenges: [
      "Executing comprehensive remodelling works within an operational hotel — minimising disruption to paying guests and live hotel functions",
      "Coordinating phased room-by-room refurbishment to keep a portion of the 70-room inventory available throughout the works",
      "Sourcing and matching premium interior finishes to the existing hotel aesthetic while delivering a perceptible quality upgrade",
      "MEP upgrades — electrical, plumbing, and air conditioning systems — within existing ceiling and wall voids without structural damage",
    ],
    solutions: [
      "Floor-by-floor phased programme agreed with hotel management — floors taken offline in sequence, minimising revenue impact",
      "Night-works shift introduced for noisy demolition and screed works to protect guest experience during daytime hotel operations",
      "Premium materials — including Italian-format tiles, engineered wood flooring, and custom joinery — selected to match and elevate the existing brand standards",
      "MEP works coordinated with specialist subcontractors, with pressure testing of all plumbing and load-testing of electrical upgrades before room reinstatement",
    ],
    keyFeatures: [
      "Full guestroom remodelling — all 70 rooms across Deluxe, Super Deluxe, Executive Deluxe, Diplomatic, and Business Suite categories",
      "New premium floor finishes — Italian-format tiles and engineered wood in key areas",
      "Upgraded bathroom wet rooms — new sanitary ware, frameless shower enclosures, and feature tiling",
      "Reception and lobby area redesign — new front desk, feature walls, ceiling, and lighting scheme",
      "Restaurant and dining area refurbishment — new furniture, bar counter, and acoustic treatment",
      "Conference and event facilities upgrade — new AV provisions, carpet, and ceiling works",
      "Outdoor pool deck and leisure area works",
      "MEP upgrades throughout — electrical, plumbing, and air conditioning systems",
    ],
    technicalSpecs: [
      { label: "Hotel Category", value: "4-Star International" },
      { label: "Rooms", value: "70 rooms (5 categories)" },
      { label: "Brand", value: "Continent International (Turkish)" },
      { label: "Works Type", value: "Full Interior Remodelling" },
      { label: "Location", value: "Alagbaka, Akure, Ondo State" },
      { label: "Award", value: "Most Exciting Brand — Nigeria 2021" },
    ],
    timeline: [
      { phase: "Survey, Design & Programme Approval", duration: "6 weeks", status: "Completed" },
      { phase: "Ground Floor & Public Areas Remodelling", duration: "3 months", status: "Completed" },
      { phase: "Guestroom Phased Refurbishment (F1–F3)", duration: "5 months", status: "Completed" },
      { phase: "MEP Upgrades, Snagging & Handover", duration: "2 months", status: "Completed" },
    ],
  },
}

const CATEGORY_COLORS: Record<string, string> = {
  Hospitality: "bg-purple-500/20 text-purple-300 border border-purple-500/40",
  Educational: "bg-blue-500/20 text-blue-300 border border-blue-500/40",
  Infrastructure: "bg-orange-500/20 text-orange-300 border border-orange-500/40",
  Residential: "bg-green-500/20 text-green-300 border border-green-500/40",
  Commercial: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40",
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} — Envostructs Nigeria Limited`,
    description: project.description,
  }
}

type ProjectData = (typeof projectsData)[keyof typeof projectsData]

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData] as ProjectData & { video?: string }
  if (!project) notFound()

  const categoryColor = CATEGORY_COLORS[project.category] ?? "bg-gray-500/20 text-gray-300 border border-gray-500/40"
  const isCompleted = project.status === "Completed"

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section
        className="relative text-white"
        style={{
          minHeight: "70vh",
          backgroundImage: `linear-gradient(to bottom, rgba(1,15,41,0.85) 0%, rgba(0,30,80,0.75) 60%, rgba(0,0,0,0.95) 100%), url('${project.images[0]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#001529",
        }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col justify-end" style={{ minHeight: "70vh" }}>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-white/80">{project.title}</span>
          </nav>

          <div className="max-w-4xl">
            {/* Category + Status */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${categoryColor}`}>
                {project.category}
              </span>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${isCompleted ? "bg-amber-500/20 text-amber-300 border-amber-500/40" : "bg-white/10 text-white/70 border-white/20"}`}>
                {project.status}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">{project.title}</h1>
            <p className="text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">{project.description}</p>

            {/* Meta strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/15 pt-8">
              {[
                { icon: <span className="text-amber-400 text-base font-black">₦</span>, label: "Project Value", value: project.value },
                { icon: <MapPin className="w-4 h-4 text-amber-400" />, label: "Location", value: project.location },
                { icon: <Clock className="w-4 h-4 text-amber-400" />, label: "Duration", value: project.duration },
                { icon: <Calendar className="w-4 h-4 text-amber-400" />, label: "Year", value: project.year },
              ].map(({ icon, label, value }) => (
                <div key={label}>
                  <div className="flex items-center gap-1.5 text-white/40 text-xs mb-1">{icon}{label}</div>
                  <p className="text-white font-bold text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#003366] text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* ── LEFT MAIN ── */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <Reveal direction="up">
                <div>
                  <span className="section-label">Overview</span>
                  <h2 className="section-title mb-5">Project Overview</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{project.overview}</p>
                </div>
              </Reveal>

              {/* Video (if available) */}
              {project.video && (
                <Reveal direction="up" delay={80}>
                  <div>
                    <span className="section-label">Project Video</span>
                    <h2 className="section-title mb-6">See The Work</h2>
                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
                      <video
                        src={project.video}
                        controls
                        className="w-full"
                        poster={project.images[0]}
                        preload="metadata"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <p className="text-gray-400 text-xs mt-3 text-center">
                      Construction footage — The New Onilegbale Palace, Lagos Island (2025)
                    </p>
                  </div>
                </Reveal>
              )}

              {/* Gallery */}
              <Reveal direction="up" delay={100}>
                <div>
                  <span className="section-label">Gallery</span>
                  <h2 className="section-title mb-6">Project Gallery</h2>
                  <ProjectGallery images={project.images} title={project.title} />
                 
                </div>
              </Reveal>

              {/* Challenges + Solutions */}
              <Reveal direction="up" delay={60}>
                <div>
                  <span className="section-label">Engineering</span>
                  <h2 className="section-title mb-6">Challenges &amp; Solutions</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Challenges */}
                    <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-amber-500">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                        <h3 className="font-bold text-gray-900 text-base">Challenges</h3>
                      </div>
                      <ul className="space-y-3">
                        {project.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                            <span className="text-gray-600 text-sm leading-relaxed">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Solutions */}
                    <div className="bg-amber-50 rounded-2xl p-6 border-l-4 border-amber-500">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-amber-600" />
                        <h3 className="font-bold text-gray-900 text-base">Our Solutions</h3>
                      </div>
                      <ul className="space-y-3">
                        {project.solutions.map((s, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            <span className="text-gray-600 text-sm leading-relaxed">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Key Features */}
              <Reveal direction="up" delay={60}>
                <div>
                  <span className="section-label">Deliverables</span>
                  <h2 className="section-title mb-6">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-amber-50 transition-colors group">
                        <Award className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-8">

              {/* Project Info */}
              <Reveal direction="left">
                <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-[#003366] px-6 py-4">
                    <h3 className="text-white font-bold text-sm tracking-widest uppercase">Project Information</h3>
                  </div>
                  <div className="p-6 space-y-5">
                    {[
                      { label: "Client", value: project.client },
                      { label: "Project Manager", value: project.projectManager },
                      { label: "Duration", value: project.duration },
                      { label: "Completion Year", value: project.year },
                    ].map(({ label, value }) => (
                      <div key={label} className="border-b border-gray-50 pb-4 last:border-b-0 last:pb-0">
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{label}</p>
                        <p className="text-gray-900 font-semibold text-sm">{value}</p>
                      </div>
                    ))}
                    <div className="pt-2">
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Status</p>
                      <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full ${isCompleted ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Technical Specs */}
              <Reveal direction="left" delay={80}>
                <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-[#0a0e1a] px-6 py-4">
                    <h3 className="text-white font-bold text-sm tracking-widest uppercase">Technical Specifications</h3>
                  </div>
                  <div className="p-6">
                    {project.technicalSpecs.map((spec, i) => (
                      <div key={i} className="py-3 group">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-gray-500 text-xs uppercase tracking-wider">{spec.label}</span>
                          <span className="text-gray-900 font-bold text-sm">{spec.value}</span>
                        </div>
                        <div className="h-px w-full bg-gray-100 relative overflow-hidden">
                          <div className="absolute inset-0 bg-amber-400/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Timeline */}
              <Reveal direction="left" delay={120}>
                <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-[#003366] px-6 py-4">
                    <h3 className="text-white font-bold text-sm tracking-widest uppercase">Project Timeline</h3>
                  </div>
                  <div className="p-6">
                    <div className="relative">
                      {/* Vertical connector line */}
                      <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gray-100" />
                      <div className="space-y-6">
                        {project.timeline.map((phase, i) => {
                          const isActive = phase.status === "In Progress"
                          const isDone = phase.status === "Completed"
                          return (
                            <div key={i} className="relative flex items-start gap-4 pl-7">
                              {/* Dot */}
                              <div className="absolute left-0 top-0.5">
                                {isActive ? (
                                  <span className="relative flex h-6 w-6 -translate-x-1/2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                                    <span className="relative inline-flex rounded-full h-6 w-6 bg-amber-500 items-center justify-center">
                                      <span className="w-2 h-2 bg-white rounded-full" />
                                    </span>
                                  </span>
                                ) : isDone ? (
                                  <span className="flex h-6 w-6 -translate-x-1/2 rounded-full bg-amber-500 items-center justify-center">
                                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                                  </span>
                                ) : (
                                  <span className="flex h-6 w-6 -translate-x-1/2 rounded-full border-2 border-gray-200 bg-white items-center justify-center">
                                    <span className="w-2 h-2 bg-gray-300 rounded-full" />
                                  </span>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-gray-900 text-sm leading-snug">{phase.phase}</p>
                                <p className="text-gray-400 text-xs mt-0.5">{phase.duration}</p>
                                <span className={`inline-block text-xs font-medium mt-1.5 px-2 py-0.5 rounded-full ${isDone ? "bg-amber-50 text-amber-700" : isActive ? "bg-blue-50 text-blue-700" : "bg-gray-50 text-gray-500"}`}>
                                  {phase.status}
                                </span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* ── CTA DARK ── */}
      <section className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <div>
              <span className="section-label">Start Today</span>
              <h2 className="section-title-light mb-5">Interested in a Similar Project?</h2>
              <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life. Our team is ready to help you achieve engineering excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full px-8 hover:scale-105 transition-all duration-300">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+2348034770098">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent rounded-full px-8">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Now
                  </Button>
                </a>
                <a href="https://wa.me/2348034770098" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="rounded-full px-8 font-bold border-0 hover:scale-105 transition-all duration-300"
                    style={{ backgroundColor: "#25D366", color: "#fff" }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
              <div className="mt-10 pt-8 border-t border-white/10">
                <Link href="/projects" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm">
                  <ArrowLeft className="w-4 h-4" />
                  Back to all projects
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
