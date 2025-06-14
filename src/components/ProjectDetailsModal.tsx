
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
  X,
  User,
  Clock,
  CheckCircle,
  AlertTriangle
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
    teamSize?: string;
    duration?: string;
    role?: string;
    outcome?: string;
  };
  children: React.ReactNode;
}

export function ProjectDetailsModal({ project, children }: ProjectDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'technical'>('overview');
  
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
    "Performance Optimized",
    "Scalable Architecture",
    "User Authentication"
  ];

  const defaultChallenges = [
    "Complex state management",
    "Performance optimization",
    "User experience design",
    "Technical architecture",
    "Data synchronization",
    "Security implementation"
  ];

  const projectInfo = [
    { label: "Team Size", value: project.teamSize || "Solo Developer", icon: User },
    { label: "Duration", value: project.duration || "3-4 months", icon: Clock },
    { label: "Role", value: project.role || "Full-Stack Developer", icon: Target },
    { label: "Year", value: project.developedDate || "2024", icon: Calendar },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0 glass-card">
        <div className="relative">
          {/* Header Section */}
          <div className="relative overflow-hidden">
            <div className="gradient-green p-6 text-white relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                    <p className="text-lg opacity-90 max-w-2xl">
                      {project.fullDescription || project.description}
                    </p>
                  </div>
                  <Badge className="bg-white/20 text-white border-white/30">
                    {project.purpose || "Innovation Project"}
                  </Badge>
                </div>
                
                {/* Project Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {projectInfo.map((info, index) => (
                    <div key={index} className="glass-button p-3 rounded-lg text-center">
                      <info.icon className="h-4 w-4 mx-auto mb-1 opacity-80" />
                      <p className="text-xs opacity-70">{info.label}</p>
                      <p className="text-sm font-semibold">{info.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b bg-background/50 backdrop-blur-sm sticky top-0 z-20">
            <div className="flex p-4 gap-2">
              {[
                { id: 'overview', label: 'Overview', icon: Target },
                { id: 'gallery', label: 'Gallery', icon: Eye },
                { id: 'technical', label: 'Technical', icon: Code },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id 
                      ? 'gradient-green text-white' 
                      : 'glass-button hover:bg-muted/50'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Key Features & Challenges */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="neo-card p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <h4 className="text-lg font-semibold">Key Features</h4>
                    </div>
                    <div className="space-y-3">
                      {(project.features || defaultFeatures).map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="neo-card p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <h4 className="text-lg font-semibold">Challenges Solved</h4>
                    </div>
                    <div className="space-y-3">
                      {(project.challenges || defaultChallenges).map((challenge, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Outcome Section */}
                <Card className="neo-card p-6">
                  <h4 className="text-lg font-semibold mb-3">Project Outcome</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.outcome || 
                    "Successfully delivered a robust, scalable application that exceeded client expectations. The project demonstrated strong technical skills, attention to detail, and ability to solve complex problems with innovative solutions."}
                  </p>
                </Card>
              </div>
            )}

            {/* Gallery Tab */}
            {activeTab === 'gallery' && (
              <div className="space-y-6">
                {/* Images Section */}
                {allImages.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Eye className="h-5 w-5 text-emerald-500" />
                      Project Screenshots
                    </h3>
                    
                    {/* Main Image Display */}
                    <div className="relative group mb-4">
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={allImages[currentImageIndex]}
                          alt={`${project.title} - Image ${currentImageIndex + 1}`}
                          className="w-full h-96 object-cover transition-transform duration-500"
                        />
                        
                        {allImages.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 glass-button p-3 rounded-full hover:scale-110 transition-all duration-200"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>
                            
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 glass-button p-3 rounded-full hover:scale-110 transition-all duration-200"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </>
                        )}
                        
                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-4 glass-button px-3 py-1 rounded-full text-sm">
                          {currentImageIndex + 1} / {allImages.length}
                        </div>
                      </div>
                    </div>
                    
                    {/* Thumbnail Grid */}
                    {allImages.length > 1 && (
                      <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                        {allImages.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
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
                )}

                {/* Videos Section */}
                {project.videos && project.videos.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Play className="h-5 w-5 text-emerald-500" />
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
              </div>
            )}

            {/* Technical Tab */}
            {activeTab === 'technical' && (
              <div className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-emerald-500" />
                    Technology Stack
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {project.tech.map((tech) => (
                      <div key={tech} className="neo-card p-3 text-center hover:scale-105 transition-transform">
                        <Badge className="gradient-green text-white border-0 w-full">
                          {tech}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <Button className="gradient-green text-white border-0 px-6" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="glass-button px-6" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
