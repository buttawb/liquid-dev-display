
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye, Folder, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { ProjectDetailsModal } from "@/components/ProjectDetailsModal";

const projects = [
  {
    title: "AI-UX",
    description: "An innovative AI-powered user experience platform that leverages machine learning to enhance user interactions and provide personalized experiences.",
    fullDescription: "AI-UX is a comprehensive platform that combines artificial intelligence with user experience design to create intuitive and personalized digital experiences. The system analyzes user behavior patterns, preferences, and interactions to dynamically adapt interfaces and content delivery.",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop"
    ],
    tech: ["React", "Python", "TensorFlow", "Node.js", "MongoDB"],
    github: "https://github.com/buttawb/AI-UX",
    live: "#",
    featured: true,
    developedDate: "2024",
    purpose: "Enhance user experience through AI",
    features: [
      "AI-powered personalization",
      "Real-time user behavior analysis",
      "Dynamic interface adaptation",
      "Machine learning recommendations",
      "Advanced analytics dashboard"
    ],
    challenges: [
      "Complex AI model integration",
      "Real-time data processing",
      "Scalable architecture design",
      "User privacy considerations"
    ]
  },
  {
    title: "Transporter Management System",
    description: "A comprehensive system for managing transportation logistics, including vehicle tracking, route optimization, and fleet management capabilities.",
    fullDescription: "A complete transportation management solution that streamlines logistics operations for freight companies. Features real-time tracking, route optimization, and comprehensive fleet management tools.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    tech: ["React", "Express.js", "MySQL", "Socket.io", "Google Maps API"],
    github: "https://github.com/buttawb/Transporter-Management-System",
    live: "#",
    developedDate: "2023",
    purpose: "Optimize transportation logistics",
    features: [
      "Real-time vehicle tracking",
      "Route optimization algorithms",
      "Fleet management dashboard",
      "Automated scheduling system"
    ]
  },
  {
    title: "Heavy Vehicle Safety Companion",
    description: "A mobile application designed to enhance safety for heavy vehicle operators with real-time monitoring, alerts, and safety protocols.",
    fullDescription: "A comprehensive safety application for heavy vehicle operators featuring real-time monitoring, fatigue detection, emergency alerts, and compliance tracking.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop",
    tech: ["React Native", "Firebase", "IoT Integration", "Real-time Analytics"],
    github: "https://github.com/buttawb/Heavy-Vehicle-Safety-Companion",
    live: "#",
    developedDate: "2023",
    purpose: "Improve heavy vehicle safety",
    features: [
      "Fatigue detection system",
      "Emergency alert system",
      "Compliance monitoring",
      "Real-time safety analytics"
    ]
  },
  {
    title: "Makkhimeter-FYP",
    description: "Final Year Project: An advanced measurement and monitoring system with IoT integration for industrial applications.",
    fullDescription: "An IoT-based industrial monitoring system that provides real-time measurements and data analytics for manufacturing environments.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    tech: ["Arduino", "React", "Node.js", "IoT", "Data Visualization"],
    github: "https://github.com/buttawb/Makkhimeter-FYP",
    live: "#",
    developedDate: "2022",
    purpose: "Industrial IoT monitoring",
    features: [
      "Real-time sensor monitoring",
      "Data visualization dashboard",
      "IoT device management",
      "Automated alert system"
    ]
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
    }, 4000); // Change image every 4 seconds

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
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Folder className="h-4 w-4 text-emerald-500" />
            <span>My Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        {/* Featured Project with Image Slider */}
        <div className="mb-16">
          <Card className="neo-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden">
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 glass-button p-2 rounded-full hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 glass-button p-2 rounded-full hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                    <Button size="sm" variant="secondary" className="glass-button">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 lg:p-12 space-y-6 order-1 lg:order-2">
                <div className="space-y-4">
                  <Badge className="gradient-green text-white border-0">Featured Project</Badge>
                  <h3 className="text-3xl font-bold group-hover:gradient-text transition-all duration-300">
                    {featuredProject.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="glass-card">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <ProjectDetailsModal project={featuredProject}>
                    <Button variant="outline" className="glass-button">
                      <Info className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </ProjectDetailsModal>
                  <Button variant="outline" className="glass-button" asChild>
                    <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button className="gradient-green text-white border-0" asChild>
                    <a href={featuredProject.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="glass-button text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
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
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <ProjectDetailsModal project={project}>
                    <Button variant="outline" size="sm" className="glass-button flex-1">
                      <Info className="h-3 w-3 mr-1" />
                      Details
                    </Button>
                  </ProjectDetailsModal>
                  <Button variant="outline" size="sm" className="glass-button" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gradient-green text-white border-0" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
