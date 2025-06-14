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
  User,
  Clock,
  CheckCircle,
  AlertTriangle,
  Briefcase
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
    { label: "Role", value: project.role || "Full-Stack Developer", icon: Briefcase },
    { label: "Year", value: project.developedDate || "2024", icon: Calendar },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0 bg-white dark:bg-gray-900 border shadow-2xl">
        <div className="relative">
          {/* Header Section - Professional White Design */}
          <div className="relative overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 border-b">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-1 w-[80%]">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                    {project.fullDescription || project.description}
                  </p>
                </div>
                <div className="w-[20%] flex-shrink-0">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200 w-full text-center">
                    {project.purpose || "Innovation Project"}
                  </Badge>
                </div>
              </div>
              
              {/* Project Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projectInfo.map((info, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg border shadow-sm text-center">
                    <info.icon className="h-5 w-5 mx-auto mb-2 text-gray-600 dark:text-gray-400" />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{info.label}</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b bg-white dark:bg-gray-900 sticky top-0 z-20">
            <div className="flex p-6 gap-2">
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
                      ? 'bg-emerald-500 text-white shadow-sm' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Key Features & Challenges */}
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="professional-card p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Features</h4>
                    </div>
                    <div className="space-y-3">
                      {(project.features || defaultFeatures).map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="professional-card p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Challenges Solved</h4>
                    </div>
                    <div className="space-y-3">
                      {(project.challenges || defaultChallenges).map((challenge, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Outcome Section */}
                <Card className="professional-card p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Outcome</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.outcome || 
                    "Successfully delivered a robust, scalable application that exceeded client expectations. The project demonstrated strong technical skills, attention to detail, and ability to solve complex problems with innovative solutions."}
                  </p>
                </Card>
              </div>
            )}

            {/* Gallery Tab */}
            {activeTab === 'gallery' && (
              <div className="space-y-8">
                {/* Images Section */}
                {allImages.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                      <Eye className="h-5 w-5 text-emerald-500" />
                      Project Screenshots
                    </h3>
                    
                    {/* Main Image Display */}
                    <div className="relative group mb-6">
                      <div className="relative overflow-hidden rounded-xl border shadow-lg">
                        <a href={allImages[currentImageIndex]} target="_blank" rel="noopener noreferrer">
                          <img
                            src={allImages[currentImageIndex]}
                            alt={`${project.title} - Image ${currentImageIndex + 1}`}
                            className="w-full h-96 object-cover cursor-zoom-in"
                          />
                        </a>
                        
                        {allImages.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full hover:scale-110 transition-all duration-200 shadow-lg"
                            >
                              <ChevronLeft className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                            </button>
                            
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full hover:scale-110 transition-all duration-200 shadow-lg"
                            >
                              <ChevronRight className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                            </button>
                          </>
                        )}
                        
                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-sm font-medium">
                          {currentImageIndex + 1} / {allImages.length}
                        </div>
                      </div>
                    </div>
                    
                    {/* Thumbnail Grid */}
                    {allImages.length > 1 && (
                      <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                        {allImages.map((image, index) => (
                          <a
                            key={index}
                            href={image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                              index === currentImageIndex 
                                ? 'border-emerald-500 scale-105 shadow-md' 
                                : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300'
                            }`}
                            onClick={e => { e.preventDefault(); setCurrentImageIndex(index); }}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover cursor-zoom-in"
                            />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Videos Section */}
                {project.videos && project.videos.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                      <Play className="h-5 w-5 text-emerald-500" />
                      Demo Videos
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.videos.map((video, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden border shadow-lg">
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
              <div className="space-y-8">
                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                    <Code className="h-5 w-5 text-emerald-500" />
                    Technology Stack
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {project.tech.map((tech) => (
                      <div key={tech} className="professional-card p-4 text-center hover:scale-105 transition-transform">
                        <Badge className="bg-emerald-500 text-white border-0 w-full">
                          {tech}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t">
                  {/* <Button className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 px-6" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button> */}
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-6" asChild>
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
