import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye, Folder, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { ProjectDetailsModal } from "@/components/ProjectDetailsModal";

const projects = [
  {
    title: "AI-UX",
    description: "AI-powered UX analysis & design iteration tool integrating Figma, OpenAI & GEMINI for instant heatmaps, user journeys, and design improvements.",
    fullDescription: "AI-UX Tester is an intelligent, modular platform designed to empower designers and product teams with real-time, data-driven UX insights and automated design iteration workflows. It bridges the gap between static designs and real user behavior by leveraging cutting-edge AI models and Figma integration. Built over 3 intense days for a hackathon, AI-UX Tester consists of three powerful modules: UX Analysis (heatmaps, finger reach zones, drop-off identification), User Journey (AI-driven simulation of user task completion), and Design Iteration (AI-powered image generation for improved design frames).",
    images: [
      "https://github.com/user-attachments/assets/e4418d7f-233c-483f-ac26-48a5499a2979",
      "https://github.com/user-attachments/assets/75a50934-eaeb-4c32-85c9-6889307052c1",
      "https://github.com/user-attachments/assets/199d5364-e92a-4575-b5dd-285d77eaf3f9",
      "https://github.com/user-attachments/assets/56468bf4-6015-463e-9081-03305a86093f"
    ],
    tech: ["Django REST Framework", "Python 3.10", "HTML", "CSS", "jQuery", "Heatmap.js", "OpenAI GPT-4o-mini", "GEMINI", "Figma REST API"],
    github: "https://github.com/buttawb/AI-UX",
    live: "#",
    featured: true,
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
    ]
  },
  {
    title: "Transporter Management System",
    description: "A comprehensive system for managing transportation logistics with real-time tracking capabilities.",
    fullDescription: "A complete transportation management solution that streamlines logistics operations for freight companies. Features real-time tracking, route optimization, and comprehensive fleet management tools.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop"
    ],
    tech: ["React", "Express.js", "MySQL", "Socket.io", "Google Maps API"],
    github: "https://github.com/buttawb/Transporter-Management-System",
    live: "#",
    developedDate: "2023",
    purpose: "Optimize transportation logistics",
    teamSize: "2 Developers",
    duration: "3 months",
    role: "Lead Full-Stack Developer"
  },
  {
    title: "Heavy Vehicle Safety Companion",
    description: "A mobile application designed to enhance safety for heavy vehicle operators with real-time monitoring.",
    fullDescription: "A comprehensive safety application for heavy vehicle operators featuring real-time monitoring, fatigue detection, emergency alerts, and compliance tracking.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop"
    ],
    tech: ["React Native", "Firebase", "IoT Integration", "Real-time Analytics"],
    github: "https://github.com/buttawb/Heavy-Vehicle-Safety-Companion",
    live: "#",
    developedDate: "2023",
    purpose: "Improve heavy vehicle safety",
    teamSize: "Solo Developer",
    duration: "2 months",
    role: "Mobile App Developer"
  },
  {
    title: "Makkhimeter-FYP",
    description: "Final Year Project: An advanced measurement and monitoring system with IoT integration.",
    fullDescription: "An IoT-based industrial monitoring system that provides real-time measurements and data analytics for manufacturing environments.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop"
    ],
    tech: ["Arduino", "React", "Node.js", "IoT", "Data Visualization"],
    github: "https://github.com/buttawb/Makkhimeter-FYP",
    live: "#",
    developedDate: "2022",
    purpose: "Industrial IoT monitoring",
    teamSize: "3 Developers",
    duration: "6 months",
    role: "IoT Developer & Frontend Lead"
  }
];

export function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const featuredProject = projects[0];

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
            A showcase of my technical skills and creative problem-solving abilities
          </p>
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
                  <Badge className="gradient-green text-white border-0">Featured Project</Badge>
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
                  <ProjectDetailsModal project={featuredProject}>
                    <Button variant="outline" size="sm" className="glass-button">
                      <Info className="h-3 w-3 mr-1" />
                      Details
                    </Button>
                  </ProjectDetailsModal>
                  <Button variant="outline" size="sm" className="glass-button" asChild>
                    <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  {/* <Button size="sm" className="gradient-green text-white border-0" asChild>
                    <a href={featuredProject.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </a>
                  </Button> */}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.slice(1).map((project, index) => (
            <Card 
              key={index} 
              className="neo-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden"
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
              <div className="p-5 space-y-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1">
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
                <div className="flex gap-2 pt-2">
                  <ProjectDetailsModal project={project}>
                    <Button variant="outline" size="sm" className="glass-button flex-1">
                      <Info className="h-3 w-3 mr-1" />
                      Details
                    </Button>
                  </ProjectDetailsModal>
                  <Button variant="outline" size="sm" className="glass-button" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </a>
                  </Button>
                  {/* <Button size="sm" className="gradient-green text-white border-0" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button> */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
