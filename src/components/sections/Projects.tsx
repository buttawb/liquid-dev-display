import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Folder, ChevronLeft, ChevronRight, Eye, Cpu, Microscope } from "lucide-react";

const projects = [
  {
    id: "ai-ux",
    title: "AI-UX Platform",
    description: "AI-powered Figma design analysis tool using GPT-4 and Gemini for automated UX flaw detection, heatmap generation, and design improvement suggestions",
    images: ["/ux1.png", "/ux2.png", "/ux3.png", "/ux4.png"],
    tech: ["Django", "GPT-4", "Gemini API", "Figma API", "REST APIs"],
    highlights: [
      "Automated UX analysis with AI-driven insights",
      "Heatmap generation and user journey simulation",
      "Video walkthrough generation",
      "Design iteration suggestions",
    ],
    tags: ["AI/ML", "Design Tools", "API Integration"],
    github: "https://github.com/buttawb/AI-UX",
    icon: Cpu,
  },
  {
    id: "drosometer",
    title: "MakkhiMeter",
    description: "Deep learning platform for automated Drosophila species classification using wing pattern analysis and genetic mutation detection",
    images: [
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/8a600cd4-2530-4dd7-8eed-f31c6877094d",
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/56714ef8-9e18-4c21-a523-dcee34661c59",
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "Django", "Image Processing"],
    highlights: [
      "92% classification accuracy",
      "Reduced manual research time by 60%",
      "Processed 5,000+ specimens",
      "Used by 15+ researchers",
    ],
    tags: ["Machine Learning", "Research", "Computer Vision"],
    github: "https://github.com/buttawb/Makkhimeter-FYP",
    icon: Microscope,
  },
];

export function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newState = { ...prev };
        projects.forEach(project => {
          const currentIdx = prev[project.id] || 0;
          newState[project.id] = (currentIdx + 1) % project.images.length;
        });
        return newState;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: prev[projectId] === 0 ? totalImages - 1 : (prev[projectId] || 0) - 1
    }));
  };

  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Folder className="h-4 w-4 text-primary" />
            <span>My Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing backend engineering and AI integration expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const currentIdx = currentImageIndex[project.id] || 0;
            
            return (
              <Card 
                key={project.id}
                className="neo-card overflow-hidden glow-hover group"
              >
                {/* Project Image Slider */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.images[currentIdx]}
                    alt={`${project.title} - Image ${currentIdx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Navigation Arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(project.id, project.images.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 glass-button p-2 rounded-full hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      
                      <button
                        onClick={() => nextImage(project.id, project.images.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 glass-button p-2 rounded-full hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }))}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              index === currentIdx 
                                ? 'bg-primary' 
                                : 'bg-primary/30 hover:bg-primary/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Project Icon */}
                  <div className="absolute top-3 right-3 p-2 rounded-xl gradient-primary">
                    <project.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs glass-card">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="glass-button flex-1" asChild>
                      <Link to={`/project/${project.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="glass-button" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
