interface PriceRange {
  min: number;
  max: number;
}

interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  image: string;
  pricing: PriceRange;
}

interface ServiceDetailsMap {
  [key: string]: ServiceDetail;
}

export const serviceDetails: ServiceDetailsMap = {
  resumeDesigning: {
    title: "Professional Resume Design",
    description: "Stand out with ATS-friendly and creative resume designs tailored to your career goals.",
    features: [
      "Chronological Resume - Perfect for consistent career progression",
      "Functional Resume - Ideal for career changers",
      "Combination Resume - Best for experienced professionals",
      "Infographic Resume - Great for creative fields",
      "Targeted Resume - Customized for specific job applications",
      "Minimalist Resume - Clean and professional design",
      "Portfolio Resume - Showcase your work samples",
      "Video Resume - Modern multimedia presentation"
    ],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3",
    pricing: { min: 75, max: 250 }
  },
  portfolioCreation: {
    title: "Portfolio Development",
    description: "Create a stunning portfolio that showcases your work and attracts potential clients or employers.",
    features: [
      "LinkedIn Portfolio - Professional networking showcase",
      "GitHub Portfolio - Technical project display",
      "PDF Portfolio - Downloadable presentation",
      "Social Media Portfolio - Cross-platform presence",
      "Cloud-Based Portfolio - Always accessible online"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    pricing: { min: 250, max: 500 }
  },
  linkedinOptimization: {
    title: "LinkedIn Profile Optimization",
    description: "Enhance your professional presence and network effectively on LinkedIn.",
    features: [
      "Profile Optimization - Professional headline and summary",
      "Network Optimization - Strategic connection building",
      "Content Optimization - Engaging posts and articles",
      "Skill Endorsements and Recommendations",
      "SEO Optimization - Keyword optimization",
      "Activity Optimization - Engagement strategy",
      "Portfolio/Media Optimization",
      "Job Search Optimization",
      "Analytics Optimization"
    ],
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3",
    pricing: { min: 350, max: 500 }
  },
  projectSelling: {
    title: "Custom Project Development",
    description: "High-quality, tailored projects across various domains of technology.",
    features: [
      "Web Development - E-Commerce, Online Bookstore",
      "App Development - Language Translator, Slides Remote",
      "Cybersecurity - SpyGen, Web Scraping",
      "AI/ML - Pong AI Game",
      "Chatbot Development",
      "Java Projects - Bus Ticketing System",
      "Management Systems - School, Library, Attendance",
      "Health Systems - HealthPlus, Train Booking"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    pricing: { min: 750, max: 4000 }
  },
  domainHosting: {
    title: "Domain & Hosting Services",
    description: "Professional domain registration and hosting solutions for your online presence.",
    features: [
      "Domain Name Registration",
      "Web Hosting Services",
      "SSL Certificate Installation",
      "Email Hosting",
      "24/7 Technical Support",
      "Regular Backups",
      "Security Monitoring",
      "Performance Optimization"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3",
    pricing: { min: 300, max: 500 }
  }
};