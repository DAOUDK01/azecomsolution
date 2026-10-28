export const site = {
  name: "AZ Ecom Solution",
  shortName: "AZEcom",
  url: "https://www.azecomsolution.com",
  tagline: "Your A–Z partner for selling on every marketplace, worldwide.",
  description:
    "AZ Ecom Solution is a full-service e-commerce agency. We launch, manage and scale brands on Amazon, Walmart, eBay, Etsy, Shopify, TikTok Shop, Noon, Daraz, Flipkart and 40+ marketplaces across the globe.",
  email: "info@azecomsolution.com",
  phone: "+1 (000) 000-0000",
  whatsapp: "",
  address: "Serving clients worldwide — remote-first team",
  hours: "Mon – Sat, 24/5 support across time zones",
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    youtube: "",
  },
};

export type Service = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
  features: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "marketplace-account-management",
    title: "Marketplace Account Management",
    icon: "LayoutDashboard",
    summary: "Day-to-day management of your seller accounts on every major marketplace.",
    description:
      "A dedicated account manager runs your store end-to-end: listings, pricing, inventory sync, customer messages, performance metrics and policy compliance — so you can focus on product and growth.",
    features: [
      "Daily account health & performance monitoring",
      "Inventory planning and replenishment alerts",
      "Buyer messaging, returns and A-to-Z / dispute handling",
      "Policy compliance and suspension prevention",
      "Weekly reporting with clear KPIs",
      "Multi-channel inventory and order sync",
    ],
    deliverables: ["Dedicated account manager", "Weekly KPI report", "Monthly growth review call"],
  },
  {
    slug: "store-setup-and-launch",
    title: "Store Setup & Launch",
    icon: "Rocket",
    summary: "Seller account registration, verification and a launch plan that gets you selling fast.",
    description:
      "We handle seller registration, identity and tax verification, brand registry, shipping templates and your first catalog — then execute a launch plan built to win early reviews and rankings.",
    features: [
      "Seller account registration & KYC verification",
      "Brand Registry / trademark guidance",
      "Tax, VAT and payment setup",
      "Shipping templates and fulfilment configuration",
      "Initial catalog upload and category approvals",
      "90-day launch strategy",
    ],
    deliverables: ["Verified seller account", "Launch-ready catalog", "90-day launch roadmap"],
  },
  {
    slug: "product-research-and-sourcing",
    title: "Product Research & Sourcing",
    icon: "Search",
    summary: "Data-driven product selection and verified suppliers from China, Pakistan, India, Vietnam and beyond.",
    description:
      "We analyse demand, competition, margins and seasonality to find products worth selling, then source, negotiate and inspect with vetted manufacturers so your first order is a profitable one.",
    features: [
      "Niche & product opportunity analysis",
      "Competitor and pricing intelligence",
      "Supplier vetting, sampling and negotiation",
      "Private label & custom packaging",
      "Pre-shipment quality inspection",
      "Landed-cost and profit modelling",
    ],
    deliverables: ["Product opportunity report", "Shortlisted suppliers", "Profit & landed cost sheet"],
  },
  {
    slug: "listing-optimization-seo",
    title: "Listing Optimization & Marketplace SEO",
    icon: "FileText",
    summary: "Keyword-rich titles, bullets, descriptions and backend terms that rank and convert.",
    description:
      "Our copywriters and SEO specialists rebuild your listings around how buyers actually search — improving organic rank, click-through and conversion on every marketplace you sell on.",
    features: [
      "Deep keyword research per marketplace",
      "Conversion-focused titles, bullets & descriptions",
      "Backend search terms & attribute completion",
      "A+ Content / Enhanced Brand Content",
      "Multilingual listing translation & localisation",
      "Ongoing rank tracking",
    ],
    deliverables: ["Optimized listings", "Keyword map", "Rank tracking dashboard"],
  },
  {
    slug: "ppc-advertising",
    title: "PPC & Marketplace Advertising",
    icon: "TrendingUp",
    summary: "Profitable ad campaigns on Amazon Ads, Walmart Connect, TikTok Shop Ads and more.",
    description:
      "We build structured, data-led campaigns and optimise them daily for ACoS, TACoS and ROAS — scaling what works and cutting wasted spend.",
    features: [
      "Sponsored Products, Brands & Display",
      "Walmart Connect, eBay Promoted Listings, Etsy Ads",
      "TikTok Shop & Meta ads for marketplace traffic",
      "Bid, budget and negative keyword optimisation",
      "DSP and retargeting strategy",
      "Transparent weekly ad reports",
    ],
    deliverables: ["Campaign architecture", "Daily optimisation", "Weekly ACoS / ROAS report"],
  },
  {
    slug: "product-photography-and-creative",
    title: "Product Photography & Creative",
    icon: "Camera",
    summary: "Studio photos, lifestyle shots, infographics and video that make products sell.",
    description:
      "From white-background main images to lifestyle scenes, infographics, 3D renders and short-form video — creative built to marketplace guidelines and to convert.",
    features: [
      "White-background main images",
      "Lifestyle & in-use photography",
      "Infographics and comparison charts",
      "3D renders and AI-assisted visuals",
      "Product videos & UGC-style ads",
      "Brand Store & storefront design",
    ],
    deliverables: ["Image stack per listing", "Product video", "Brand store design"],
  },
  {
    slug: "shopify-and-website-development",
    title: "Shopify & E-commerce Website Development",
    icon: "Store",
    summary: "High-converting Shopify, WooCommerce and custom stores for your own D2C channel.",
    description:
      "We design and build fast, mobile-first online stores with the apps, payments, shipping and integrations you need — and connect them to your marketplaces for one source of truth.",
    features: [
      "Shopify, WooCommerce, BigCommerce & custom builds",
      "Theme design and conversion-rate optimisation",
      "Payment gateway & multi-currency setup",
      "Marketplace & ERP integrations",
      "Speed, SEO and Core Web Vitals",
      "Maintenance and support plans",
    ],
    deliverables: ["Launch-ready store", "Integrations configured", "Training & handover"],
  },
  {
    slug: "fulfillment-and-logistics",
    title: "Fulfilment, FBA & Global Logistics",
    icon: "Truck",
    summary: "FBA, WFS, 3PL and international freight — inventory where your customers are.",
    description:
      "We plan shipments, prep inventory and coordinate freight forwarders, customs and 3PLs so your stock reaches FBA, WFS, Noon, Flipkart and other warehouses on time and on budget.",
    features: [
      "FBA / WFS / FBN shipment planning",
      "Sea, air and express freight coordination",
      "Customs clearance & compliance documents",
      "3PL and prep-centre partnerships",
      "Inventory forecasting & storage fee control",
      "Removal, liquidation and returns handling",
    ],
    deliverables: ["Shipment plans", "Freight & customs coordination", "Inventory forecast"],
  },
  {
    slug: "brand-building-and-marketing",
    title: "Brand Building & Off-Marketplace Marketing",
    icon: "Megaphone",
    summary: "Brand identity, social media, influencers and email to build demand beyond the marketplace.",
    description:
      "Marketplaces reward brands. We create your identity, then drive external traffic with social, influencer, content and email marketing that boosts rankings and lifetime value.",
    features: [
      "Logo, brand identity & packaging design",
      "Social media management",
      "Influencer & affiliate campaigns",
      "Email & SMS marketing",
      "Google & Meta ads for D2C",
      "Review and reputation strategy",
    ],
    deliverables: ["Brand guidelines", "Content calendar", "Monthly marketing report"],
  },
  {
    slug: "account-reinstatement-and-compliance",
    title: "Account Reinstatement & Compliance",
    icon: "ShieldCheck",
    summary: "Suspension appeals, listing reinstatements and IP / policy issue resolution.",
    description:
      "Suspended account or blocked ASIN? Our compliance team writes root-cause Plans of Action, handles verification and documentation, and puts safeguards in place so it doesn't happen again.",
    features: [
      "Account suspension appeals & Plans of Action",
      "Listing and ASIN reinstatement",
      "IP complaint & counterfeit claim resolution",
      "Product compliance & certification guidance",
      "Category & brand ungating",
      "Account health audits",
    ],
    deliverables: ["Plan of Action", "Appeal submission", "Prevention checklist"],
  },
  {
    slug: "international-expansion",
    title: "International Expansion",
    icon: "Globe",
    summary: "Take your brand from one marketplace to many countries — US, UK, EU, GCC, Asia and LATAM.",
    description:
      "We plan market entry, handle VAT/EPR registrations, localise listings and set up cross-border fulfilment so you can sell in new regions without building a local team.",
    features: [
      "Market entry research & prioritisation",
      "VAT, EPR and local compliance registration",
      "Listing translation & cultural localisation",
      "Cross-border fulfilment setup",
      "Global pricing & currency strategy",
      "Regional marketplace launches",
    ],
    deliverables: ["Expansion roadmap", "Registrations completed", "Localised catalog"],
  },
  {
    slug: "ecommerce-consulting-and-training",
    title: "E-commerce Consulting & Training",
    icon: "GraduationCap",
    summary: "Strategy audits, coaching and team training for founders and in-house teams.",
    description:
      "Get an expert second opinion. We audit your channels, build a growth plan and train your team on marketplaces, advertising and operations.",
    features: [
      "Full account & channel audits",
      "Growth strategy and P&L review",
      "1:1 coaching for founders",
      "Team training & SOPs",
      "Wholesale, private label & dropshipping models",
      "Virtual assistant staffing",
    ],
    deliverables: ["Audit report", "Growth plan", "Training sessions & SOPs"],
  },
];

export type Marketplace = { name: string; region: string; countries: string };

export const marketplaces: Marketplace[] = [
  { name: "Amazon", region: "Global", countries: "US, CA, MX, UK, DE, FR, IT, ES, NL, SE, PL, AE, SA, IN, JP, AU, SG" },
  { name: "Walmart", region: "North America", countries: "US, CA, MX" },
  { name: "eBay", region: "Global", countries: "US, UK, DE, AU, CA, IT, FR" },
  { name: "Etsy", region: "Global", countries: "Worldwide" },
  { name: "Shopify", region: "Global", countries: "Worldwide D2C" },
  { name: "TikTok Shop", region: "Global", countries: "US, UK, SEA" },
  { name: "Target Plus", region: "North America", countries: "US" },
  { name: "Best Buy", region: "North America", countries: "US, CA" },
  { name: "Wayfair", region: "North America", countries: "US, CA, UK" },
  { name: "Newegg", region: "North America", countries: "US, CA" },
  { name: "Mercado Libre", region: "Latin America", countries: "MX, BR, AR, CL, CO" },
  { name: "Zalando", region: "Europe", countries: "DE, FR, NL, PL + 20" },
  { name: "Otto", region: "Europe", countries: "DE" },
  { name: "Cdiscount", region: "Europe", countries: "FR" },
  { name: "Allegro", region: "Europe", countries: "PL, CZ, SK" },
  { name: "Bol.com", region: "Europe", countries: "NL, BE" },
  { name: "Kaufland", region: "Europe", countries: "DE, CZ, SK, PL" },
  { name: "Fruugo", region: "Europe", countries: "UK + 40 countries" },
  { name: "OnBuy", region: "Europe", countries: "UK" },
  { name: "Noon", region: "Middle East", countries: "AE, SA, EG" },
  { name: "Amazon.ae / .sa", region: "Middle East", countries: "AE, SA" },
  { name: "Trendyol", region: "Middle East", countries: "TR, GCC" },
  { name: "Daraz", region: "South Asia", countries: "PK, BD, LK, NP" },
  { name: "Flipkart", region: "South Asia", countries: "IN" },
  { name: "Meesho", region: "South Asia", countries: "IN" },
  { name: "Shopee", region: "Asia Pacific", countries: "SG, MY, TH, PH, VN, ID, TW" },
  { name: "Lazada", region: "Asia Pacific", countries: "SG, MY, TH, PH, VN, ID" },
  { name: "Rakuten", region: "Asia Pacific", countries: "JP" },
  { name: "AliExpress", region: "Global", countries: "Worldwide" },
  { name: "Alibaba.com", region: "Global", countries: "B2B worldwide" },
  { name: "Temu", region: "Global", countries: "US, EU, UK" },
  { name: "Catch / Kogan", region: "Asia Pacific", countries: "AU" },
  { name: "Jumia", region: "Africa", countries: "NG, KE, EG, MA" },
  { name: "Takealot", region: "Africa", countries: "ZA" },
  { name: "WooCommerce", region: "Global", countries: "Worldwide D2C" },
  { name: "BigCommerce", region: "Global", countries: "Worldwide D2C" },
];

export const regions = [
  "Global",
  "North America",
  "Latin America",
  "Europe",
  "Middle East",
  "South Asia",
  "Asia Pacific",
  "Africa",
];

export const stats = [
  { value: "40+", label: "Marketplaces supported" },
  { value: "30+", label: "Countries served" },
  { value: "12", label: "Core service lines" },
  { value: "24/5", label: "Support across time zones" },
];

export const process = [
  { title: "Discovery call", text: "We learn your products, goals, budget and target markets." },
  { title: "Audit & strategy", text: "A clear plan: which marketplaces, which products, what it takes to win." },
  { title: "Setup & launch", text: "Accounts, listings, creative, logistics and ads — executed by specialists." },
  { title: "Scale & report", text: "Daily optimisation, transparent reporting and expansion to new channels." },
];

export const plans = [
  {
    name: "Starter",
    price: "From $299",
    period: "/month",
    description: "For new sellers launching on one marketplace.",
    features: [
      "1 marketplace",
      "Up to 25 SKUs managed",
      "Listing optimisation",
      "Inventory & order monitoring",
      "Monthly report",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "From $799",
    period: "/month",
    description: "For established brands ready to scale ads and channels.",
    features: [
      "Up to 3 marketplaces",
      "Up to 150 SKUs managed",
      "PPC management included",
      "A+ Content & creative refresh",
      "Dedicated account manager",
      "Weekly reports & calls",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For multi-brand and multi-country operations.",
    features: [
      "Unlimited marketplaces & regions",
      "Unlimited SKUs",
      "Full-funnel advertising",
      "International expansion & compliance",
      "Logistics & sourcing coordination",
      "Priority 24/5 support",
    ],
    highlight: false,
  },
];

export const audiences = [
  {
    title: "New sellers & startups",
    text: "Starting from zero? We research products, source suppliers, open your seller accounts and run your launch.",
  },
  {
    title: "Established brands",
    text: "Already selling? We optimise listings and ads, protect account health and add new marketplaces and countries.",
  },
  {
    title: "Manufacturers & wholesalers",
    text: "Turn factory capacity into a direct-to-consumer business with private label, Brand Registry and global fulfilment.",
  },
];

export const faqs = [
  {
    q: "Which marketplaces do you work with?",
    a: "Amazon (all regions), Walmart, eBay, Etsy, TikTok Shop, Shopify, Noon, Daraz, Flipkart, Shopee, Lazada, Mercado Libre, Zalando, Temu and 40+ more. If a marketplace sells online, we can help you sell on it.",
  },
  {
    q: "Do you work with clients outside the US?",
    a: "Yes. We are a remote-first agency serving sellers and brands worldwide, including North America, Europe, the Middle East, South Asia, Asia Pacific, Latin America and Africa.",
  },
  {
    q: "I'm just starting out. Can you help me from scratch?",
    a: "Absolutely. We handle product research, sourcing, account registration, listings, creative, logistics and launch — a complete A to Z setup.",
  },
  {
    q: "How do contracts and pricing work?",
    a: "We offer monthly management plans and one-time project pricing. Most plans are month-to-month after an initial onboarding period. Contact us for a tailored quote.",
  },
  {
    q: "Can you fix a suspended account?",
    a: "Our compliance team specialises in suspension appeals, ASIN reinstatement and IP complaint resolution, and we put prevention measures in place afterwards.",
  },
  {
    q: "How will I know what you're doing?",
    a: "You get a dedicated point of contact, regular KPI reports and scheduled review calls. Everything is transparent — you always own your accounts and data.",
  },
];
