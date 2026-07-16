import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CameraIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
  SparklesIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

export const servicesData = [
  {
    id: "software-development",
    name: "Software Development",
    description:
      "We build scalable and high-performance software systems using Laravel, .NET, Node.js, and Python — tailored for startups and enterprises at a fraction of global market rates. From dashboards to automation tools, we code reliable solutions that grow with your business.",
    icon: CodeBracketIcon,
    gradient: "from-blue-500/20 to-cyan-500/20",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    portfolioCategories: ["Web Applications"],
    customFields: [
      { id: "techStack", label: "Preferred Tech Stack", type: "select", options: ["Any / Not Sure", "React & Node.js", "Laravel / PHP", ".NET / C#", "Python / Django"] },
      { id: "projectType", label: "Project Type", type: "select", options: ["Internal Dashboard", "SaaS Platform", "API Development", "Enterprise Software", "Other"] }
    ]
  },
  {
    id: "full-stack-web",
    name: "Full-Stack Web Development",
    description:
      "NexoVate specializes in modern, responsive, and SEO-friendly websites using React, Next.js, Angular, and TailwindCSS. Whether it's a landing page or a full enterprise system — we deliver fast, secure, and futuristic digital platforms.",
    icon: GlobeAltIcon,
    gradient: "from-purple-500/20 to-pink-500/20",
    bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    portfolioCategories: ["Web Applications", "Professional Websites"],
    customFields: [
      { id: "websiteType", label: "Website Type", type: "select", options: ["Business/Corporate", "E-Commerce", "Landing Page", "Web Portal", "Other"] },
      { id: "cmsPreference", label: "CMS Preference", type: "select", options: ["Custom Code (React/Next.js)", "WordPress", "Webflow", "Not Sure"] }
    ]
  },
  {
    id: "mobile-app-dev",
    name: "Mobile App Development (iOS & Android)",
    description:
      "We design and develop mobile apps using Flutter and React Native — with seamless UI, smooth performance, and cloud-powered backends.",
    icon: DevicePhoneMobileIcon,
    gradient: "from-green-500/20 to-emerald-500/20",
    bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    portfolioCategories: ["Mobile Applications"],
    customFields: [
      { id: "platform", label: "Target Platform", type: "select", options: ["iOS & Android (Cross-platform)", "iOS Native", "Android Native"] },
      { id: "appStage", label: "Current Stage", type: "select", options: ["Just an Idea", "Designs Ready", "Need App Redevelopment", "Maintenance"] }
    ]
  },
  {
    id: "graphic-vector",
    name: "Graphic & Vector Design",
    description:
      "From branding kits to vector illustrations, our designers craft visuals that define your brand identity.",
    icon: PaintBrushIcon,
    gradient: "from-orange-500/20 to-yellow-500/20",
    bgImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    portfolioCategories: ["Graphic Design & Branding"],
    customFields: [
      { id: "designFocus", label: "Design Focus", type: "select", options: ["Logo & Branding", "Marketing Materials", "Social Media Graphics", "Vector Illustrations", "Other"] }
    ]
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    description:
      "We design sleek, user-friendly, and conversion-optimized interfaces backed by user research.",
    icon: SparklesIcon,
    gradient: "from-pink-500/20 to-rose-500/20",
    bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    portfolioCategories: ["Graphic Design & Branding"],
    customFields: [
      { id: "uxFocus", label: "Design Target", type: "select", options: ["Web Application", "Mobile App", "Corporate Website", "SaaS Dashboard"] },
      { id: "numberOfScreens", label: "Estimated Screens", type: "select", options: ["1-5 Screens", "5-15 Screens", "15+ Screens", "Not Sure"] }
    ]
  },
  {
    id: "photo-editing",
    name: "Photo Editing",
    description:
      "Professional retouching, lighting fixes, and color correction for clean & branded visuals.",
    icon: CameraIcon,
    gradient: "from-indigo-500/20 to-violet-500/20",
    bgImage: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2076&auto=format&fit=crop",
    portfolioCategories: ["Photo Editing"],
    customFields: [
      { id: "editingVolume", label: "Estimated Volume", type: "select", options: ["1-10 Photos", "10-50 Photos", "50+ Photos", "Ongoing Retainer"] }
    ]
  },
  {
    id: "video-editing",
    name: "Video Editing",
    description:
      "From social media clips to cinematic edits — smooth transitions, effects, and full production.",
    icon: CameraIcon,
    gradient: "from-red-500/20 to-orange-500/20",
    bgImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    portfolioCategories: ["Video Editing"],
    customFields: [
      { id: "videoType", label: "Video Type", type: "select", options: ["YouTube Videos", "Shorts/Reels/TikToks", "Corporate Videos", "Ads/Promos", "Other"] },
      { id: "videoLength", label: "Average Length", type: "select", options: ["Under 1 minute", "1-5 minutes", "5-15 minutes", "15+ minutes"] }
    ]
  },
  {
    id: "seo-services",
    name: "SEO Services",
    description:
      "Keyword research, backlinks, on-page optimization, and SEO strategies that deliver real ranking results.",
    icon: MagnifyingGlassIcon,
    gradient: "from-teal-500/20 to-cyan-500/20",
    bgImage: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1974&auto=format&fit=crop",
    portfolioCategories: ["SEO & Marketing Campaigns"],
    customFields: [
      { id: "seoGoal", label: "Primary Goal", type: "select", options: ["Increase Organic Traffic", "Local SEO / Google My Business", "Technical SEO Audit", "Link Building"] }
    ]
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description:
      "We handle social media growth, ad campaigns, content marketing, and brand management.",
    icon: GlobeAltIcon,
    gradient: "from-amber-500/20 to-orange-500/20",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    portfolioCategories: ["SEO & Marketing Campaigns"],
    customFields: [
      { id: "marketingChannel", label: "Primary Channel", type: "select", options: ["Social Media Management", "Facebook/Insta Ads", "Google Ads (PPC)", "Email Marketing", "Full Multi-Channel Strategy"] },
      { id: "monthlyAdBudget", label: "Monthly Ad Budget", type: "select", options: ["No Ad Budget / Organic Only", "< $1,000", "$1,000 - $5,000", "$5,000+"] }
    ]
  },
  {
    id: "website-maintenance",
    name: "Website Maintenance & Support",
    description:
      "Updates, security patches, and performance optimization to keep your site running smoothly.",
    icon: WrenchScrewdriverIcon,
    gradient: "from-slate-500/20 to-gray-500/20",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    portfolioCategories: ["Professional Websites", "Web Applications"],
    customFields: [
      { id: "maintenanceNeeds", label: "Main Requirement", type: "select", options: ["Bug Fixes & Troubleshooting", "Performance/Speed Optimization", "Security & Updates", "Content Updates", "Ongoing Support Retainer"] }
    ]
  },
  {
    id: "shopify-store",
    name: "Shopify Store Development",
    description:
      "We build premium, high-converting Shopify stores — custom themes, product setup, payment integrations, Shopify apps, and full store automation.",
    icon: ShoppingBagIcon,
    gradient: "from-lime-500/20 to-green-500/20",
    bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    portfolioCategories: ["Professional Websites", "Web Applications"],
    customFields: [
      { id: "storeStage", label: "Store Status", type: "select", options: ["Starting from Scratch", "Redesigning Existing Store", "Migrating to Shopify from another platform"] },
      { id: "productCatalog", label: "Catalog Size", type: "select", options: ["1-10 Products", "10-100 Products", "100+ Products", "Dropshipping"] }
    ]
  },
];

