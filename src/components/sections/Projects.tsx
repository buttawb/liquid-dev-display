import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye, Folder } from "lucide-react";

const projects = [
  {
    title: "AI-UX",
    description: "An innovative AI-powered user experience platform that leverages machine learning to enhance user interactions and provide personalized experiences.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    tech: ["React", "Python", "TensorFlow", "Node.js", "MongoDB"],
    github: "https://github.com/buttawb/AI-UX",
    live: "#",
    featured: true
  },
  {
    title: "Transporter Management System",
    description: "A comprehensive system for managing transportation logistics, including vehicle tracking, route optimization, and fleet management capabilities.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    tech: ["React", "Express.js", "MySQL", "Socket.io", "Google Maps API"],
    github: "https://github.com/buttawb/Transporter-Management-System",
    live: "#"
  },
  {
    title: "Heavy Vehicle Safety Companion",
    description: "A mobile application designed to enhance safety for heavy vehicle operators with real-time monitoring, alerts, and safety protocols.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop",
    tech: ["React Native", "Firebase", "IoT Integration", "Real-time Analytics"],
    github: "https://github.com/buttawb/Heavy-Vehicle-Safety-Companion",
    live: "#"
  },
  {
    title: "Makkhimeter-FYP",
    description: "Final Year Project: An advanced measurement and monitoring system with IoT integration for industrial applications.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    tech: ["Arduino", "React", "Node.js", "IoT", "Data Visualization"],
    github: "https://github.com/buttawb/Makkhimeter-FYP",
    live: "#"
  }
];

export function Projects() {
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

        {/* Featured Project */}
        <div className="mb-16">
          <Card className="neo-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative overflow-hidden order-2 lg:order-1">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
                    {projects[0].title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {projects[0].description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="glass-card">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="glass-button" asChild>
                    <a href={projects[0].github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button className="gradient-green text-white border-0" asChild>
                    <a href={projects[0].live} target="_blank" rel="noopener noreferrer">
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
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="glass-button flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gradient-green text-white border-0 flex-1" asChild>
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
