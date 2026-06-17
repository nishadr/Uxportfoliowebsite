export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  role: string;
  duration: string;
  challenge: string;
  solution: string;
  impact: string[];
  processes: string[];
}

export const projects: Project[] = [
  {
    id: "mobile-banking-app",
    title: "Mobile Banking Redesign",
    category: "Financial Services",
    description: "A complete redesign of a mobile banking app focused on simplifying complex financial transactions and improving user trust.",
    image: "https://images.unsplash.com/photo-1599202875854-23b7cd490ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc4MTU4NjU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile Design", "FinTech", "User Research", "Usability Testing"],
    year: "2025",
    role: "Lead UX Designer",
    duration: "6 months",
    challenge: "Users found the existing app overwhelming with complex navigation, leading to a 45% task abandonment rate. Security features were unclear, creating trust issues.",
    solution: "Conducted extensive user research with 50+ participants, created journey maps, and redesigned the information architecture. Implemented a card-based interface with clear visual hierarchy and progressive disclosure to reduce cognitive load.",
    impact: [
      "Reduced task completion time by 60%",
      "Increased daily active users by 35%",
      "Improved user satisfaction score from 3.2 to 4.6/5",
      "Decreased customer support calls by 40%"
    ],
    processes: [
      "User Interviews & Surveys",
      "Competitive Analysis",
      "User Journey Mapping",
      "Wireframing & Prototyping",
      "Usability Testing (5 rounds)",
      "Accessibility Audit",
      "Design System Creation"
    ]
  },
  {
    id: "healthconnect",
    title: "HealthConnect",
    category: "Healthcare",
    description: "A telemedicine platform connecting patients with healthcare providers through an intuitive, HIPAA-compliant interface.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3ODE1ODY1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Healthcare", "Web App", "Accessibility", "Service Design"],
    year: "2025",
    role: "UX Lead",
    duration: "8 months",
    challenge: "Healthcare providers needed a platform that would work for diverse patient demographics, including elderly users with varying tech literacy. Compliance and privacy were paramount.",
    solution: "Led a cross-functional team through a human-centered design process. Created personas representing different patient demographics and designed with accessibility-first principles (WCAG AA compliance). Developed a flexible scheduling system with multiple communication channels.",
    impact: [
      "Onboarded 2,000+ patients in first 3 months",
      "98% appointment completion rate",
      "4.8/5 patient satisfaction rating",
      "WCAG 2.1 AA compliant across all features"
    ],
    processes: [
      "Stakeholder Workshops",
      "Ethnographic Research",
      "Persona Development",
      "Service Blueprinting",
      "Interactive Prototyping",
      "Accessibility Testing",
      "Healthcare Provider Interviews"
    ]
  },
  {
    id: "shopease",
    title: "ShopEase",
    category: "E-commerce",
    description: "Reimagining the online shopping experience with AI-powered recommendations and streamlined checkout process.",
    image: "https://images.unsplash.com/photo-1674027392887-751d6396b710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3ODE1MzU0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["E-commerce", "Mobile & Web", "AI/ML", "Conversion Optimization"],
    year: "2024",
    role: "Senior UX Designer",
    duration: "5 months",
    challenge: "High cart abandonment rate (68%) and low conversion on mobile devices. Users struggled with product discovery and were frustrated by lengthy checkout process.",
    solution: "Implemented a one-page checkout, designed personalized product discovery with AI recommendations, and created a visual search feature. Conducted A/B testing on 12 different checkout variations.",
    impact: [
      "Reduced cart abandonment by 42%",
      "Increased mobile conversion rate by 55%",
      "Boosted average order value by 28%",
      "Improved time-to-checkout by 65%"
    ],
    processes: [
      "Analytics & Heatmap Analysis",
      "User Flow Optimization",
      "A/B Testing",
      "Rapid Prototyping",
      "Mobile-First Design",
      "Checkout Funnel Analysis",
      "Micro-interaction Design"
    ]
  },
  {
    id: "fittrack",
    title: "FitTrack",
    category: "Health & Fitness",
    description: "A comprehensive fitness tracking app that gamifies workout routines and provides personalized coaching.",
    image: "https://images.unsplash.com/photo-1580983693000-5654250f64d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGFwcHxlbnwxfHx8fDE3ODE1ODY1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile App", "Gamification", "Data Visualization", "Behavioral Design"],
    year: "2024",
    role: "Lead UX Designer",
    duration: "7 months",
    challenge: "Users struggled with motivation and consistency in their fitness journey. Existing apps were either too complex for beginners or too simple for advanced users.",
    solution: "Designed an adaptive experience that grows with the user. Implemented gamification elements (streaks, achievements, challenges) and created clear data visualizations. Built a progressive onboarding that personalizes the experience based on fitness level.",
    impact: [
      "30-day retention rate of 78%",
      "Average session duration increased 3x",
      "85% of users completed first 30-day challenge",
      "Featured in App Store in 15 countries"
    ],
    processes: [
      "Behavioral Research",
      "Competitive Benchmarking",
      "Gamification Framework Design",
      "Data Visualization Design",
      "Onboarding Flow Testing",
      "User Habit Analysis",
      "Motion Design Collaboration"
    ]
  },
  {
    id: "fooddash",
    title: "FoodDash",
    category: "Food Delivery",
    description: "A food delivery service focusing on local restaurants and sustainable practices with real-time order tracking.",
    image: "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzgxNTg2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile App", "Real-time Data", "Location Services", "Multi-sided Platform"],
    year: "2024",
    role: "UX Designer",
    duration: "6 months",
    challenge: "Balancing the needs of three user groups (customers, restaurants, and delivery drivers) while maintaining a consistent brand experience. Order accuracy and delivery time visibility were major pain points.",
    solution: "Created separate but connected experiences for each user type. Designed an interactive map-based tracking system and implemented smart filtering for dietary preferences. Developed a restaurant dashboard that simplified order management.",
    impact: [
      "Achieved 4.7/5 app store rating",
      "Reduced wrong order complaints by 70%",
      "Increased repeat orders by 45%",
      "Partnered with 500+ local restaurants"
    ],
    processes: [
      "Multi-stakeholder Research",
      "Service Design Mapping",
      "Real-time UX Patterns",
      "Map Interface Design",
      "Three-sided Platform Design",
      "Restaurant Partner Interviews",
      "Driver Experience Testing"
    ]
  },
  {
    id: "wanderwise",
    title: "WanderWise",
    category: "Travel",
    description: "An AI-powered travel planning platform that creates personalized itineraries and handles all booking needs.",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwcGxhdGZvcm18ZW58MXx8fHwxNzgxNTg2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Web & Mobile", "AI Integration", "Complex Workflows", "Content Strategy"],
    year: "2023",
    role: "UX Designer",
    duration: "9 months",
    challenge: "Travel planning involves coordinating multiple services (flights, hotels, activities) and managing complex itineraries. Users felt overwhelmed by choice and lacked personalized recommendations.",
    solution: "Designed an AI assistant that asks contextual questions to understand travel preferences. Created a unified timeline view of trips and implemented smart bundling of services. Developed a collaborative planning feature for group trips.",
    impact: [
      "90% user task success rate",
      "Average itinerary creation time: 12 minutes",
      "65% of users book within 24 hours",
      "Named 'Best New Travel App' 2023"
    ],
    processes: [
      "Travel Behavior Research",
      "AI Conversation Design",
      "Complex Data Architecture",
      "Timeline Interface Design",
      "Collaborative Features Design",
      "Multi-device Experience",
      "Content Personalization Strategy"
    ]
  }
];
