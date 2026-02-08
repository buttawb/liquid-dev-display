import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye, Folder, ChevronLeft, ChevronRight, Info, Play, Filter } from "lucide-react";

const filterTags = ["All", "Django", "Next.js", "Flutter", "Python", "AWS"];

const projects = [
  {
    id: "oilflow",
    title: "Oil & Gas SaaS Platform",
    description: "Backend and some frontend work on a big platform for oil and gas companies. Handles fuel distribution, fleet management, and a bunch of operational stuff.",
    fullDescription: "A multi-module platform for oil and gas industry operations. I worked mainly on the backend: Django REST APIs, Celery tasks, database optimization. Also helped with the Next.js dashboard and coordinated with the mobile team (Flutter). The platform handles fuel distribution tracking, fleet management, contractor coordination, and reporting. It's multi-tenant so different companies have their own isolated data.",
    images: [
      "/oilflow1.png",
      "/oilflow2.png",
    ],
    tech: ["Django", "Next.js", "Flutter", "PostgreSQL", "AWS", "Redis", "Celery", "WebSockets"],
    github: "#",
    live: "#",
    featured: true,
    hideCodeButton: true,
    developedDate: "2024-2025",
    purpose: "Managing oil & gas operations",
    teamSize: "8 Engineers",
    duration: "Ongoing",
    role: "Software Engineer",
    features: [
      "Multi-tenant architecture with data isolation",
      "Mobile apps for iOS and Android",
      "Real-time dashboards",
      "Role-based access control",
      "Automated reports",
      "Third-party integrations",
      "Offline mode for field workers",
      "English and Arabic support"
    ],
    challenges: [
      "Handling lots of concurrent users",
      "Making mobile work offline in remote areas",
      "Keeping data consistent across services",
      "Security and compliance requirements"
    ],
    outcome: "Platform is live and being used by several companies. Learned a lot about building systems that need to be reliable and handle real business operations."
  },
  {
    id: "ai-ux",
    title: "AI-UX",
    description: "AI-powered UX analysis & design iteration tool integrating Figma, OpenAI & GEMINI for instant heatmaps, user journeys, and design improvements.",
    fullDescription: "AI-UX Tester is an intelligent, modular platform designed to empower designers and product teams with real-time, data-driven UX insights and automated design iteration workflows. It bridges the gap between static designs and real user behavior by leveraging cutting-edge AI models and Figma integration. Built over 3 intense days for a hackathon, AI-UX Tester consists of three powerful modules: UX Analysis (heatmaps, finger reach zones, drop-off identification), User Journey (AI-driven simulation of user task completion), and Design Iteration (AI-powered image generation for improved design frames).",
    images: [
      "/ux1.png",
      "/ux2.png",
      "/ux3.png",
      "/ux4.png"
    ],
    tech: ["Django REST Framework", "Python 3.10", "HTML", "CSS", "jQuery", "Heatmap.js", "OpenAI GPT-4o-mini", "GEMINI", "Figma REST API"],
    github: "https://github.com/buttawb/AI-UX",
    live: "#",
    featured: true,
    hideCodeButton: true,
    developedDate: "2025",
    purpose: "Revolutionizing design validation with AI-powered UX insights",
    teamSize: "2 Engineers",
    duration: "3 days (Hackathon)",
    role: "Full-Stack Developer & AI Engineer",
    features: [
      "UX Analysis with heatmaps and finger reach zones",
      "AI-driven user journey simulation",
      "Design iteration with AI-powered image generation",
      "Figma file import via Project ID, Design URL, or .fig upload",
      "Interactive heatmap visualizations with markers and tooltips",
      "Real-time UX feedback from complex Figma files",
      "Automated generation of interactive user journey videos",
      "Seamless AI-driven design enhancement"
    ],
    challenges: [
      "Integrating multiple AI models (OpenAI & GEMINI)",
      "Figma API integration and file processing",
      "Real-time UX analysis and visualization",
      "AI-powered image generation for design iteration",
      "Building modular architecture for three distinct modules",
      "Hackathon time constraints (3 days development)"
    ],
    outcome: "Successfully completed the hackathon project at Avialdo Solutions, demonstrating strong technical skills, creativity, and ability to build innovative solutions under time constraints. The project showcased collaborative teamwork and rapid prototyping capabilities, integrating multiple AI models and Figma API to create a comprehensive UX analysis platform."
  },
  {
    id: "tms",
    title: "Transporter Management System",
    description: "A comprehensive system designed to streamline transport operations for HGGC Transporters, managing fuel procurement and distribution nationwide.",
    fullDescription: "The Transporter Management System is designed to streamline transport operations for HGGC Transporters. This system facilitates the logistical requirements of procuring fuel from various oil marketing companies such as Total Parco, Go, and others, and distributing it to pumps nationwide. The primary focus of the project includes managing drivers, vehicles, oil marketing companies, vehicle manufacturers, trip records, and expenses.",
    image: "/tms6.png",
    images: [
      "/tms6.png",
      "/tms1.png",
      "/tms2.png",
      "/tms3.png",
      "/tms4.png",
      "/tms5.png"
    ],
    tech: ["Django", "MySQL", "HTML", "CSS", "JavaScript", "Git"],
    github: "https://github.com/buttawb/HGGC-WebApp",
    live: "#",
    developedDate: "2024",
    purpose: "Streamline transport operations and fuel distribution",
    teamSize: "Solo Developer",
    duration: "3 months",
    role: "Full-Stack Developer",
    features: [
      "Driver Management with comprehensive information tracking",
      "Vehicle Management including maintenance records",
      "Oil Marketing Companies integration (Total Parco, Go, etc.)",
      "Vehicle Makers database management",
      "Trip Records logging and management",
      "Expense Management for transportation operations",
      "User authentication and authorization",
      "Database-driven architecture with MySQL"
    ],
    challenges: [
      "Complex logistics management system design",
      "Integration with multiple oil marketing companies",
      "Database design for comprehensive transport operations",
      "User interface for non-technical users",
      "Data integrity and validation across multiple modules",
      "Scalable architecture for nationwide operations"
    ],
    outcome: "Successfully delivered a comprehensive transport management system that streamlined HGGC's nationwide fuel distribution operations. The system improved operational efficiency by 40% and provided better tracking and management of drivers, vehicles, and fuel procurement processes."
  },
  {
    id: "driver-handbook",
    title: "Driver Handbook (Android App)",
    description: "Android app for heavy vehicle drivers, featuring video player, PDF reader, and text-to-speech for road safety.",
    fullDescription: "Explore my latest venture into the mobile world with an Android app designed for heavy vehicle drivers at HGGC. Stepping outside my primary domain of web development, I developed this native app using Java, Kotlin, and XML. It features a video player, PDF reader, and text-to-speech functionalities, all within a user-friendly interface. The app is a private tool for HGGC, enhancing safety, productivity, and compliance on the road.",
    image: "/hggc1.jpeg",
    images: [
      "/hggc1.jpeg",
      "/hggc2.jpeg",
      "/hggc3.jpeg",
      "/hggc4.jpeg"
    ],
    tech: ["Java", "Kotlin", "XML", "Android SDK"],
    github: "https://github.com/buttawb/HGGC-AndroidApp",
    live: "https://play.google.com/store/apps/details?id=com.hggc.driverapp",
    developedDate: "2023",
    purpose: "Enhance road safety for heavy vehicle drivers",
    teamSize: "Solo Developer",
    duration: "2 months",
    role: "Android App Developer",
    features: [
      "Video Player for safety and training materials",
      "PDF Reader for manuals and guides",
      "Text-to-Speech for hands-free information",
      "User-friendly and distraction-free interface",
      "Private tool tailored for HGGC drivers",
      "Stay informed and compliant with latest guidelines"
    ],
    challenges: [
      "Developing a native Android app outside primary web domain",
      "Integrating video, PDF, and TTS in a seamless UI",
      "Ensuring usability for non-technical users",
      "Maintaining security and privacy for a private tool"
    ],
    outcome: "Successfully developed and deployed a native Android application that enhanced road safety for HGGC's heavy vehicle drivers. The app improved driver compliance and safety awareness through accessible training materials and hands-free information delivery."
  },
  {
    id: "drosometer",
    title: "Drosometer (MakkhiMeter)",
    description: "Automated Django-based system for rapid analysis and classification of Drosophila melanogaster (fruit fly) wing and eye features, revolutionizing genetic research.",
    fullDescription: `Drosophila melanogaster, or the fruit fly, is a key model for genetic studies due to its short life span and close genetic relationship to humans. Traditionally, classifying new species and calculating their features is a manual, time-consuming process.\nMakkhiMeter solves this by providing a decision-based system that classifies the fly's family and calculates its features with just one click, enhancing efficiency and accuracy in genetic research.\nThe system allows for manual fine-tuning of wing vein structures, visualizes wing regions, enables bristle counting, and provides eye color analysis with pie charts.`,
    image: "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/8a600cd4-2530-4dd7-8eed-f31c6877094d",
    images: [
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/8a600cd4-2530-4dd7-8eed-f31c6877094d",
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/56714ef8-9e18-4c21-a523-dcee34661c59",
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/3862e442-e18a-484d-a13f-f9750d062061",
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/6bc614c3-926a-4825-b625-761831caf9f4"
    ],
    tech: ["Django", "Python", "OpenCV", "Data Visualization", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/buttawb/Makkhimeter-FYP",
    live: "#",
    developedDate: "2023",
    purpose: "Revolutionize genetic research with rapid analysis of fruit fly.",
    teamSize: "3 Developers",
    duration: "6 months",
    role: "Full-Stack Developer & Research Collaborator",
    features: [
      "Automated classification of fruit fly species",
      "One-click feature calculation",
      "Manual fine-tuning of wing vein structure",
      "Visual region labeling on wing images",
      "Bristle counting with adjustable on-screen box",
      "Eye color analysis with pie chart visualization",
      "Generates insightful reports in minutes"
    ],
    challenges: [
      "Automating complex image analysis",
      "Ensuring accuracy in biological feature extraction",
      "User-friendly manual adjustment tools",
      "Data visualization for scientific reporting"
    ],
    outcome: "Successfully developed an automated system that revolutionized genetic research by reducing manual analysis time from hours to minutes. The project demonstrated the potential of AI and computer vision in scientific research, providing researchers with accurate, rapid, and user-friendly tools for Drosophila melanogaster analysis."
  }
];

export function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(p =>
      p.tech.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
    );
  }, [activeFilter]);

  const featuredProject = filteredProjects[0] || projects[0];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % featuredProject.images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [featuredProject.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % featuredProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? featuredProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Folder className="h-4 w-4 text-emerald-500" />
            <span>My Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Some stuff I've built
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === tag
                    ? "gradient-green text-white"
                    : "glass-button hover:scale-105"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project with Image Slider */}
        <div className="mb-12">
          <Card className="neo-card group hover:scale-[1.01] transition-all duration-500 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image Slider */}
              <div className="relative overflow-hidden order-2 lg:order-1">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredProject.images[currentImageIndex]}
                    alt={`${featuredProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 glass-button p-2 rounded-full hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 glass-button p-2 rounded-full hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                    {featuredProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex 
                            ? 'bg-white' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8 space-y-5 order-1 lg:order-2">
                <div className="space-y-3">
                  {/* <Badge className="gradient-green text-white border-0">Featured Project</Badge> */}
                  <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                    {featuredProject.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {featuredProject.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="glass-card text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-2 pt-3">
                  <Button variant="outline" size="sm" className="glass-button" asChild>
                    <Link to={`/project/${featuredProject.id}`}>
                      <Info className="h-3 w-3 mr-1" />
                      View Details
                    </Link>
                  </Button>
                  {!featuredProject.hideCodeButton && (
                    <Button variant="outline" size="sm" className="glass-button" asChild>
                      <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {featuredProject.live && featuredProject.live !== "#" && (
                    <Button size="sm" className="glass-button" asChild>
                      <a href={featuredProject.live} target="_blank" rel="noopener noreferrer">
                        <Play className="h-3 w-3 mr-1" />
                        Get App
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.slice(1).map((project, index) => (
            <Card 
              key={index} 
              className="neo-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mt-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs glass-card">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs glass-card">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-2 pt-2 mt-auto">
                  <Button variant="outline" size="sm" className="glass-button flex-1" asChild>
                    <Link to={`/project/${project.id}`}>
                      <Info className="h-3 w-3 mr-1" />
                      View Details
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="glass-button" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </a>
                  </Button>
                  {project.live && project.live !== "#" && (
                    <Button variant="outline" size="sm" className="glass-button" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Play className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
