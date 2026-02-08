import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Github, Folder, ChevronLeft, ChevronRight, Play, Calendar, User, Clock, Briefcase, CheckCircle, Lightbulb, Eye } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tech: string[];
  github: string;
  live: string;
  developedDate: string;
  teamSize: string;
  duration: string;
  role: string;
  features: string[];
  challenges: string[];
  outcome: string;
}

const projects: Project[] = [
  {
    id: "ai-ux",
    title: "AI-UX",
    description: "AI-powered UX analysis & design iteration tool integrating Figma, OpenAI & GEMINI for instant heatmaps, user journeys, and design improvements.",
    fullDescription: "AI-UX Tester is an intelligent platform for designers and product teams. It bridges the gap between static designs and real user behavior using AI models and Figma integration. Built in 3 days for a hackathon with three modules: UX Analysis, User Journey, and Design Iteration.",
    image: "/ux1.png",
    images: ["/ux1.png", "/ux2.png", "/ux3.png", "/ux4.png"],
    tech: ["Django REST Framework", "Python", "OpenAI GPT-4o-mini", "GEMINI", "Figma API", "Heatmap.js"],
    github: "https://github.com/buttawb/AI-UX",
    live: "#",
    developedDate: "2025",
    teamSize: "2 Engineers",
    duration: "3 days",
    role: "Full-Stack Developer",
    features: [
      "UX Analysis with heatmaps and finger reach zones",
      "AI-driven user journey simulation",
      "Design iteration with AI image generation",
      "Figma integration via Project ID or URL",
      "Interactive heatmap visualizations",
      "Real-time UX feedback"
    ],
    challenges: [
      "Integrating multiple AI models (OpenAI & GEMINI)",
      "Processing large Figma files efficiently",
      "Generating accurate behavior prediction heatmaps",
      "Building three modules in 3-day hackathon"
    ],
    outcome: "Successfully completed hackathon. Achieved 85% accuracy in user behavior prediction and reduced UX analysis time from hours to minutes."
  },
  {
    id: "tms",
    title: "Transporter Management System",
    description: "Comprehensive system for HGGC Transporters to manage fuel procurement and distribution nationwide.",
    fullDescription: "Built for HGGC Transporters to streamline fuel procurement and distribution. Handles drivers, vehicles, oil marketing companies, trip records, and expenses. Replaced paper-based processes with a digital solution.",
    image: "/tms6.png",
    images: ["/tms6.png", "/tms1.png", "/tms2.png", "/tms3.png", "/tms4.png", "/tms5.png"],
    tech: ["Django", "MySQL", "HTML", "CSS", "JavaScript", "Git"],
    github: "https://github.com/buttawb/HGGC-WebApp",
    live: "#",
    developedDate: "2024",
    teamSize: "Solo Developer",
    duration: "3 months",
    role: "Full-Stack Developer",
    features: [
      "Driver management with performance tracking",
      "Vehicle management with maintenance records",
      "Oil marketing company integration",
      "Trip logging and route tracking",
      "Expense management and reporting",
      "Multi-level user authentication"
    ],
    challenges: [
      "Complex logistics workflow with approval processes",
      "Data integrity across interconnected modules",
      "UI design for non-technical staff",
      "Scalable architecture for nationwide ops"
    ],
    outcome: "Improved operational efficiency by 40%. Eliminated paper-based processes and deployed across nationwide operations."
  },
  {
    id: "driver-handbook",
    title: "Driver Handbook",
    description: "Android app for heavy vehicle drivers with video player, PDF reader, and text-to-speech for road safety.",
    fullDescription: "Native Android app for HGGC's heavy vehicle drivers. Features video player for training, PDF reader for manuals, and text-to-speech for hands-free info. Built outside my comfort zone of web development.",
    image: "/hggc1.jpeg",
    images: ["/hggc1.jpeg", "/hggc2.jpeg", "/hggc3.jpeg", "/hggc4.jpeg"],
    tech: ["Java", "Kotlin", "Android SDK", "ExoPlayer"],
    github: "https://github.com/buttawb/HGGC-AndroidApp",
    live: "https://play.google.com/store/apps/details?id=com.hggc.driverapp",
    developedDate: "2023",
    teamSize: "Solo Developer",
    duration: "2 months",
    role: "Android Developer",
    features: [
      "Video player for safety training content",
      "PDF reader for manuals and guidelines",
      "Text-to-speech for hands-free use",
      "Simple interface for non-tech users",
      "Offline functionality",
      "Regular content updates"
    ],
    challenges: [
      "Learning Android dev outside web expertise",
      "Integrating video, PDF, TTS in one app",
      "Optimizing for older devices",
      "Making UI accessible for all skill levels"
    ],
    outcome: "Published on Play Store with 4.5+ rating. Used by 500+ drivers, improved compliance rates by 35%."
  },
  {
    id: "drosometer",
    title: "Drosometer (MakkhiMeter)",
    description: "Automated system for rapid analysis and classification of fruit fly features for genetic research.",
    fullDescription: "Final Year Project: Automated system for analyzing Drosophila melanogaster (fruit fly) features. Uses computer vision to classify species and calculate wing/eye measurements. Reduced analysis time from hours to minutes.",
    image: "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/8a600cd4-2530-4dd7-8eed-f31c6877094d",
    images: [
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/8a600cd4-2530-4dd7-8eed-f31c6877094d",
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/56714ef8-9e18-4c21-a523-dcee34661c59",
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/3862e442-e18a-484d-a13f-f9750d062061",
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/6bc614c3-926a-4825-b625-761831caf9f4"
    ],
    tech: ["Django", "Python", "OpenCV", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/buttawb/Makkhimeter-FYP",
    live: "#",
    developedDate: "2023",
    teamSize: "3 Developers",
    duration: "6 months",
    role: "Full-Stack Developer",
    features: [
      "Automated species classification",
      "One-click feature calculation",
      "Manual wing vein fine-tuning",
      "Visual region labeling",
      "Bristle counting with adjustable detection",
      "Eye color analysis with pie charts"
    ],
    challenges: [
      "Achieving scientific-grade accuracy",
      "Processing high-res microscopic images",
      "Creating intuitive UI for researchers",
      "Ensuring reproducible results"
    ],
    outcome: "Defended with highest honors. Achieved 95% accuracy compared to manual analysis. Reduced analysis time by 98%."
  }
];

function ProjectModal({
  project,
  isOpen,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalProjects
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalProjects: number;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project.id]);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Navigation Arrows - Outside content */}
        <button
          onClick={onPrev}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-background/90 border p-3 rounded-full hover:bg-muted transition-colors shadow-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={onNext}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-background/90 border p-3 rounded-full hover:bg-muted transition-colors shadow-lg"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{currentIndex + 1} / {totalProjects}</span>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{project.role}</span>
              <span className="flex items-center gap-1"><User className="h-3 w-3" />{project.teamSize}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{project.duration}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{project.developedDate}</span>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative rounded-lg overflow-hidden bg-muted mb-6">
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="w-full h-64 md:h-80 object-contain"
            />
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 p-1.5 rounded-full hover:bg-background"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 p-1.5 rounded-full hover:bg-background"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-1.5 h-1.5 rounded-full ${i === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-6">{project.fullDescription}</p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
              ))}
            </div>
          </div>

          {/* Features & Challenges */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                Key Features
              </h3>
              <ul className="space-y-1.5">
                {project.features.slice(0, 4).map((f, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                Challenges Solved
              </h3>
              <ul className="space-y-1.5">
                {project.challenges.slice(0, 4).map((c, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Outcome */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Outcome</h3>
            <p className="text-sm text-muted-foreground">{project.outcome}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.github && project.github !== "#" && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
            {project.live && project.live !== "#" && (
              <Button size="sm" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4 mr-2" />
                  {project.live.includes('play.google.com') ? 'Get on Play Store' : 'View Live'}
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedProjectIndex(index);
  const closeModal = () => setSelectedProjectIndex(null);

  const goToPrev = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex(selectedProjectIndex === 0 ? projects.length - 1 : selectedProjectIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((selectedProjectIndex + 1) % projects.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProjectIndex === null) return;
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectIndex]);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Folder className="h-4 w-4 text-emerald-500" />
            <span>My Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Some stuff I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="neo-card group hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openModal(index)}
                  className="w-full"
                >
                  <Eye className="h-3 w-3 mr-2" />
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedProjectIndex !== null && (
          <ProjectModal
            project={projects[selectedProjectIndex]}
            isOpen={selectedProjectIndex !== null}
            onClose={closeModal}
            onPrev={goToPrev}
            onNext={goToNext}
            currentIndex={selectedProjectIndex}
            totalProjects={projects.length}
          />
        )}
      </div>
    </section>
  );
}
