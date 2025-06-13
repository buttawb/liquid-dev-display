
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";

const projects = [
  {
    title: "AI-UX",
    description: "An innovative AI-powered user experience platform that leverages machine learning to enhance user interactions and provide personalized experiences.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    tech: ["React", "Python", "TensorFlow", "Node.js", "MongoDB"],
    github: "https://github.com/buttawb/AI-UX",
    live: "#",
    featured: true
  },
  {
    title: "Transporter Management System",
    description: "A comprehensive system for managing transportation logistics, including vehicle tracking, route optimization, and fleet management capabilities.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    tech: ["React", "Express.js", "MySQL", "Socket.io", "Google Maps API"],
    github: "https://github.com/buttawb/Transporter-Management-System",
    live: "#"
  },
  {
    title: "Heavy Vehicle Safety Companion",
    description: "A mobile application designed to enhance safety for heavy vehicle operators with real-time monitoring, alerts, and safety protocols.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
    tech: ["React Native", "Firebase", "IoT Integration", "Real-time Analytics"],
    github: "https://github.com/buttawb/Heavy-Vehicle-Safety-Companion",
    live: "#"
  },
  {
    title: "Makkhimeter-FYP",
    description: "Final Year Project: An advanced measurement and monitoring system with IoT integration for industrial applications.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    tech: ["Arduino", "React", "Node.js", "IoT", "Data Visualization"],
    github: "https://github.com/buttawb/Makkhimeter-FYP",
    live: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`glass-card group hover:scale-[1.02] transition-all duration-300 overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="glass-button">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="glass-button" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="glass-button bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
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
