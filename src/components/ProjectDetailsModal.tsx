
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Eye, 
  Github, 
  ExternalLink, 
  Calendar, 
  Target, 
  Code, 
  ChevronLeft, 
  ChevronRight,
  Play,
  X
} from "lucide-react";

interface ProjectDetailsModalProps {
  project: {
    title: string;
    description: string;
    fullDescription?: string;
    images?: string[];
    image?: string;
    videos?: string[];
    tech: string[];
    github: string;
    live: string;
    developedDate?: string;
    purpose?: string;
    features?: string[];
    challenges?: string[];
  };
  children: React.ReactNode;
}

export function ProjectDetailsModal({ project, children }: ProjectDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const allImages = project.images || (project.image ? [project.image] : []);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const defaultFeatures = [
    "Responsive Design",
    "Modern UI/UX",
    "Cross-platform Compatibility",
    "Performance Optimized"
  ];

  const defaultChallenges = [
    "Complex state management",
    "Performance optimization",
    "User experience design",
    "Technical architecture"
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0 glass-card">
        <div className="relative">
          {/* Header with gradient */}
          <div className="gradient-green p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
              <p className="text-lg opacity-90 max-w-3xl">
                {project.fullDescription || project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 glass-button px-3 py-1 rounded-full">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{project.developedDate || "2024"}</span>
                </div>
                <div className="flex items-center gap-2 glass-button px-3 py-1 rounded-full">
                  <Target className="h-4 w-4" />
                  <span className="text-sm">{project.purpose || "Learning & Innovation"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Media Section */}
            {allImages.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Eye className="h-6 w-6 text-emerald-500" />
                  Project Gallery
                </h3>
                
                {/* Main Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={allImages[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {allImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 glass-button p-3 rounded-full hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 glass-button p-3 rounded-full hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Image Thumbnails */}
                  {allImages.length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                      {allImages.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            index === currentImageIndex 
                              ? 'border-emerald-500 scale-105' 
                              : 'border-transparent hover:border-emerald-300'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Videos Section */}
            {project.videos && project.videos.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Play className="h-6 w-6 text-emerald-500" />
                  Demo Videos
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.videos.map((video, index) => (
                    <div key={index} className="relative rounded-xl overflow-hidden bg-black/5">
                      <video
                        controls
                        className="w-full h-48 object-cover"
                        poster={allImages[0]}
                      >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Code className="h-6 w-6 text-emerald-500" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <Badge key={tech} className="gradient-green text-white px-4 py-2 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features & Challenges */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features */}
              <Card className="neo-card p-6">
                <h4 className="text-xl font-semibold mb-4 text-emerald-600">Key Features</h4>
                <ul className="space-y-3">
                  {(project.features || defaultFeatures).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Challenges */}
              <Card className="neo-card p-6">
                <h4 className="text-xl font-semibold mb-4 text-blue-600">Challenges Solved</h4>
                <ul className="space-y-3">
                  {(project.challenges || defaultChallenges).map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="gradient-green text-white border-0 px-6" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" className="glass-button px-6" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
