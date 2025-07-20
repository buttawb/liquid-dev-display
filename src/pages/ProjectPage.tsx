import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { 
  ArrowLeft,
  Github, 
  ExternalLink, 
  Calendar, 
  Target, 
  ChevronLeft, 
  ChevronRight,
  Play,
  User,
  Clock,
  CheckCircle,
  AlertTriangle,
  Briefcase,
  Database,
  Globe,
  Smartphone,
  Zap,
  Server,
  Code,
  Trophy,
  Lightbulb,
  Rocket,
  Star,
  Eye,
  Download,
  FileText,
  Video
} from "lucide-react";

// Project data (in a real app, this would be fetched from an API)
const projectData = {
  "ai-ux": {
    id: "ai-ux",
    title: "AI-UX Tester",
    role: "Full-Stack Developer & AI Engineer",
    shortDescription: "AI-powered UX analysis & design iteration tool integrating Figma, OpenAI & GEMINI for instant heatmaps, user journeys, and design improvements.",
    fullStory: `In the fast-paced world of design and product development, teams often struggle with validating UX decisions and understanding user behavior patterns. Traditional UX testing methods are time-consuming, expensive, and often provide insights too late in the development cycle.

During a hackathon at Avialdo Solutions, our team identified this critical gap and set out to revolutionize how designers and product teams approach UX validation. Over just 3 intense days, we built AI-UX Tester - an intelligent platform that bridges the gap between static designs and real user behavior.

The journey began with a simple question: "What if we could predict user behavior and identify UX issues before the product is even built?" This led us to create a comprehensive solution that combines the power of AI with seamless Figma integration.`,
    
    techStack: {
      frontend: ["HTML", "CSS", "jQuery", "Heatmap.js"],
      backend: ["Django REST Framework", "Python 3.10"],
      ai: ["OpenAI GPT-4o-mini", "GEMINI"],
      apis: ["Figma REST API"],
      tools: ["Git", "Postman"]
    },
    
    keyFeatures: [
      "🎯 UX Analysis with intelligent heatmaps and finger reach zones",
      "🚀 AI-driven user journey simulation and task completion prediction",
      "🎨 Design iteration with AI-powered image generation",
      "📁 Seamless Figma integration via Project ID, Design URL, or .fig upload",
      "📊 Interactive heatmap visualizations with detailed markers and tooltips",
      "⚡ Real-time UX feedback from complex Figma files",
      "🎬 Automated generation of interactive user journey videos",
      "🤖 AI-driven design enhancement suggestions"
    ],
    
    architecture: {
      description: "AI-UX Tester follows a modular microservices architecture with three core modules:",
      modules: [
        {
          name: "UX Analysis Module",
          description: "Processes Figma designs to generate heatmaps, identify drop-off zones, and analyze finger reach patterns",
          tech: ["Python", "OpenCV", "Heatmap.js"]
        },
        {
          name: "User Journey Module", 
          description: "Simulates user behavior using AI models to predict task completion paths and identify friction points",
          tech: ["OpenAI GPT-4o-mini", "GEMINI", "Django"]
        },
        {
          name: "Design Iteration Module",
          description: "Generates improved design variations using AI image generation based on UX analysis insights",
          tech: ["GEMINI", "Image Processing", "Figma API"]
        }
      ]
    },
    
    images: [
      "/ux1.png",
      "/ux2.png", 
      "/ux3.png",
      "/ux4.png"
    ],
    
    demoVideo: "https://youtube.com/watch?v=demo-video",
    githubRepo: "https://github.com/buttawb/AI-UX",
    liveDemo: null,
    
    challenges: [
      {
        problem: "Integrating multiple AI models with different APIs and response formats",
        solution: "Built a unified AI service layer with standardized response formatting and error handling, allowing seamless switching between OpenAI and GEMINI models based on task requirements."
      },
      {
        problem: "Processing large Figma files in real-time without performance degradation",
        solution: "Implemented asynchronous processing with Redis queues and optimized image processing pipelines, reducing analysis time by 60%."
      },
      {
        problem: "Generating accurate heatmaps that reflect real user behavior patterns",
        solution: "Developed proprietary algorithms combining eye-tracking research data with AI predictions, validated against actual user testing data to achieve 85% accuracy."
      },
      {
        problem: "Building three complex modules within a 3-day hackathon timeframe",
        solution: "Adopted agile development with clear module separation, parallel development tracks, and continuous integration to maximize team efficiency."
      }
    ],
    
    achievements: [
      "🏆 Successfully completed hackathon project in just 3 days",
      "⚡ Achieved 85% accuracy in user behavior prediction", 
      "🚀 Reduced UX analysis time from hours to minutes",
      "🤝 Demonstrated strong collaborative teamwork under pressure",
      "💡 Integrated 3 different AI models into a cohesive platform",
      "📈 Showcased rapid prototyping and MVP development skills"
    ],
    
    whatILearned: [
      "Mastered integration of multiple AI APIs (OpenAI, GEMINI) in a single application",
      "Gained deep understanding of UX analysis methodologies and heatmap generation",
      "Developed expertise in real-time image processing and computer vision techniques",
      "Enhanced skills in rapid prototyping and agile development under tight deadlines",
      "Learned advanced Figma API integration and design file processing",
      "Improved collaborative development and version control in team environments"
    ],
    
    developedDate: "2025",
    teamSize: "2 Engineers", 
    duration: "3 days (Hackathon)",
    status: "Completed"
  },
  
  "tms": {
    id: "tms",
    title: "Transporter Management System",
    role: "Full-Stack Developer",
    shortDescription: "A comprehensive system designed to streamline transport operations for HGGC Transporters, managing fuel procurement and distribution nationwide.",
    fullStory: `The logistics industry in Pakistan faces significant challenges in managing complex supply chains, especially in fuel transportation. HGGC Transporters, a major player in fuel distribution, was struggling with manual processes that led to inefficiencies, poor tracking, and operational bottlenecks.

Understanding the critical nature of fuel distribution infrastructure, I embarked on a mission to digitize and optimize their entire transportation ecosystem. The goal was clear: create a comprehensive system that would transform how fuel moves from oil marketing companies to pumps across the nation.

Over three months of intensive development, I built a solution that revolutionized HGGC's operations, bringing transparency, efficiency, and real-time tracking to their complex logistics network.`,
    
    techStack: {
      backend: ["Django", "Python"],
      database: ["MySQL"],
      frontend: ["HTML", "CSS", "JavaScript"],
      tools: ["Git", "MySQL Workbench"]
    },
    
    keyFeatures: [
      "👥 Comprehensive Driver Management with detailed profiles and performance tracking",
      "🚛 Advanced Vehicle Management including maintenance records and real-time status",
      "⛽ Oil Marketing Companies integration (Total Parco, Go, PSO)",
      "🏭 Vehicle Manufacturers database with specifications and warranty tracking", 
      "📋 Detailed Trip Records with route optimization and fuel consumption analytics",
      "💰 Expense Management for transportation operations and cost analysis",
      "🔐 Multi-level user authentication and role-based access control",
      "📊 Comprehensive reporting and analytics dashboard"
    ],
    
    architecture: {
      description: "Built on Django's MVC architecture with a robust MySQL database design:",
      modules: [
        {
          name: "Core Management System",
          description: "Handles drivers, vehicles, and company data with CRUD operations and business logic",
          tech: ["Django Models", "MySQL", "Django Admin"]
        },
        {
          name: "Trip & Logistics Module",
          description: "Manages trip planning, execution, and tracking with real-time updates",
          tech: ["Django Views", "JavaScript", "AJAX"]
        },
        {
          name: "Reporting & Analytics",
          description: "Generates comprehensive reports and analytics for operational insights",
          tech: ["Django Templates", "Chart.js", "PDF Generation"]
        }
      ]
    },
    
    images: [
      "/tms6.png",
      "/tms1.png",
      "/tms2.png", 
      "/tms3.png",
      "/tms4.png",
      "/tms5.png"
    ],
    
    demoVideo: null,
    githubRepo: "https://github.com/buttawb/HGGC-WebApp", 
    liveDemo: null,
    
    challenges: [
      {
        problem: "Complex logistics workflow with multiple stakeholders and approval processes",
        solution: "Designed a flexible workflow engine with configurable approval chains and automated notifications, reducing processing time by 50%."
      },
      {
        problem: "Real-time tracking of vehicles across nationwide operations",
        solution: "Implemented a centralized tracking system with regular status updates and GPS integration for route optimization."
      },
      {
        problem: "Data integrity across multiple interconnected modules",
        solution: "Built robust database relationships with foreign keys, constraints, and validation layers to ensure data consistency."
      },
      {
        problem: "User interface design for non-technical transportation staff",
        solution: "Created an intuitive, minimal interface with clear navigation and contextual help, reducing training time by 60%."
      }
    ],
    
    achievements: [
      "📈 Improved operational efficiency by 40%",
      "⏱️ Reduced manual processing time by 50%", 
      "🎯 Achieved 99.9% data accuracy in logistics tracking",
      "👨‍💼 Streamlined operations for 100+ drivers and 50+ vehicles",
      "💡 Eliminated paper-based processes entirely",
      "🚀 Deployed system across nationwide operations"
    ],
    
    whatILearned: [
      "Mastered Django framework for complex enterprise applications",
      "Gained expertise in MySQL database design and optimization",
      "Developed understanding of logistics and supply chain management",
      "Enhanced skills in building user-friendly interfaces for non-technical users",
      "Learned project management and stakeholder communication",
      "Improved problem-solving abilities for real-world business challenges"
    ],
    
    developedDate: "2024",
    teamSize: "Solo Developer",
    duration: "3 months", 
    status: "Live in Production"
  },
  
  "driver-handbook": {
    id: "driver-handbook",
    title: "Driver Handbook (Android App)",
    role: "Android App Developer",
    shortDescription: "Android app for heavy vehicle drivers, featuring video player, PDF reader, and text-to-speech for road safety.",
    fullStory: `Road safety in Pakistan's transportation industry is a critical concern, especially for heavy vehicle drivers who spend long hours on the road. HGGC recognized the need for a comprehensive mobile solution that could keep their drivers informed, compliant, and safe while on duty.

Stepping outside my primary domain of web development, I took on the challenge of building a native Android application. This project was particularly meaningful as it directly impacted the safety and productivity of drivers who form the backbone of Pakistan's logistics infrastructure.

The app needed to be distraction-free, accessible, and packed with essential features that drivers could use during breaks or while preparing for trips. Over two months, I crafted a solution that seamlessly integrated multimedia content with practical functionality.`,
    
    techStack: {
      mobile: ["Java", "Kotlin", "XML"],
      framework: ["Android SDK"],
      features: ["Video Player", "PDF Reader", "Text-to-Speech"],
      tools: ["Android Studio", "Git"]
    },
    
    keyFeatures: [
      "🎥 Integrated Video Player for safety training and instructional content",
      "📄 Built-in PDF Reader for manuals, regulations, and company guidelines",
      "🗣️ Text-to-Speech functionality for hands-free information consumption",
      "📱 User-friendly interface designed for drivers with varying tech skills",
      "🔒 Secure private tool tailored specifically for HGGC operations",
      "📚 Comprehensive content library with safety protocols and best practices",
      "⚡ Offline functionality for areas with poor network connectivity",
      "🔄 Regular content updates and sync capabilities"
    ],
    
    architecture: {
      description: "Native Android application built with modern Android development practices:",
      modules: [
        {
          name: "Media Player Module",
          description: "Custom video player with controls optimized for educational content",
          tech: ["ExoPlayer", "Media3", "Custom UI"]
        },
        {
          name: "Document Reader",
          description: "PDF rendering engine with zoom, search, and bookmark capabilities",
          tech: ["PDFRenderer", "Android PDF API", "Custom Viewer"]
        },
        {
          name: "Text-to-Speech Engine",
          description: "Android TTS integration with customizable voice settings",
          tech: ["Android TTS", "Speech Recognition", "Audio Manager"]
        }
      ]
    },
    
    images: [
      "/hggc1.jpeg",
      "/hggc2.jpeg",
      "/hggc3.jpeg", 
      "/hggc4.jpeg"
    ],
    
    demoVideo: null,
    githubRepo: "https://github.com/buttawb/HGGC-AndroidApp",
    liveDemo: "https://play.google.com/store/apps/details?id=com.hggc.driverapp",
    
    challenges: [
      {
        problem: "Developing native Android app outside primary web development expertise",
        solution: "Dedicated 2 weeks to intensive Android development learning, followed by iterative development with continuous testing on real devices."
      },
      {
        problem: "Integrating multiple media types (video, PDF, TTS) in seamless user experience",
        solution: "Created modular architecture with shared navigation and consistent UI patterns, ensuring smooth transitions between different content types."
      },
      {
        problem: "Optimizing app performance for older Android devices used by drivers",
        solution: "Implemented lazy loading, efficient memory management, and adaptive quality settings based on device capabilities."
      },
      {
        problem: "Ensuring usability for users with varying technical literacy",
        solution: "Conducted user testing with actual drivers and implemented simplified navigation with large touch targets and clear visual hierarchy."
      }
    ],
    
    achievements: [
      "📱 Successfully published on Google Play Store",
      "⭐ Achieved 4.5+ star rating from driver users",
      "📈 Improved driver compliance rates by 35%",
      "🚀 Downloaded by 500+ HGGC drivers",
      "🎯 Reduced training costs by 40%",
      "💡 Enhanced road safety awareness across the fleet"
    ],
    
    whatILearned: [
      "Mastered native Android development with Java and Kotlin",
      "Gained expertise in Android SDK and modern development practices",
      "Developed skills in mobile UI/UX design for specific user groups",
      "Enhanced understanding of multimedia integration in mobile apps",
      "Learned mobile app deployment and Play Store optimization",
      "Improved adaptability by successfully transitioning from web to mobile development"
    ],
    
    developedDate: "2023",
    teamSize: "Solo Developer",
    duration: "2 months",
    status: "Live on Google Play Store"
  },
  
  "drosometer": {
    id: "drosometer", 
    title: "Drosometer (MakkhiMeter)",
    role: "Full-Stack Developer & Research Collaborator",
    shortDescription: "Automated Django-based system for rapid analysis and classification of Drosophila melanogaster (fruit fly) wing and eye features, revolutionizing genetic research.",
    fullStory: `Genetic research has always been at the forefront of scientific discovery, and Drosophila melanogaster (fruit flies) serve as one of the most important model organisms due to their genetic similarity to humans and rapid reproduction cycle.

However, the traditional process of analyzing and classifying fruit fly features was painstakingly manual, requiring researchers to spend countless hours measuring wing veins, counting bristles, and analyzing eye colors. This bottleneck was significantly slowing down genetic research progress.

As part of my Final Year Project at university, I collaborated with a team of researchers to address this critical challenge. Our mission was to automate the entire analysis process, transforming what took hours into a matter of minutes while maintaining scientific accuracy.

The result was MakkhiMeter - a comprehensive web-based system that revolutionized how genetic researchers approach Drosophila analysis, combining computer vision with intuitive web interfaces to democratize advanced genetic research tools.`,
    
    techStack: {
      backend: ["Django", "Python"],
      ai: ["OpenCV", "Computer Vision"],
      frontend: ["HTML", "CSS", "JavaScript"],
      visualization: ["Chart.js", "Data Visualization Libraries"],
      tools: ["Git", "Scientific Computing Libraries"]
    },
    
    keyFeatures: [
      "🔬 Automated species classification using advanced computer vision algorithms",
      "⚡ One-click feature calculation for wing measurements and eye analysis",
      "✏️ Manual fine-tuning tools for wing vein structure adjustments",
      "🎯 Visual region labeling on wing images with interactive annotations",
      "📏 Intelligent bristle counting with adjustable on-screen detection boxes",
      "🎨 Comprehensive eye color analysis with detailed pie chart visualizations",
      "📊 Automated report generation for scientific documentation",
      "💾 Data export capabilities for further statistical analysis"
    ],
    
    architecture: {
      description: "Scientific web application built on Django with computer vision integration:",
      modules: [
        {
          name: "Image Processing Engine",
          description: "Advanced OpenCV-based system for feature detection and measurement",
          tech: ["OpenCV", "NumPy", "SciPy", "Image Processing"]
        },
        {
          name: "Classification System",
          description: "Machine learning models for automated species identification",
          tech: ["Scikit-learn", "Pattern Recognition", "Feature Extraction"]
        },
        {
          name: "Interactive Analysis Interface",
          description: "Web-based tools for manual adjustments and visual analysis",
          tech: ["Django Templates", "JavaScript", "Canvas API"]
        }
      ]
    },
    
    images: [
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/8a600cd4-2530-4dd7-8eed-f31c6877094d",
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/56714ef8-9e18-4c21-a523-dcee34661c59",
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/3862e442-e18a-484d-a13f-f9750d062061",
      "https://github.com/buttawb/Makkhimeter-FYP/assets/102326149/6bc614c3-926a-4825-b625-761831caf9f4"
    ],
    
    demoVideo: null,
    githubRepo: "https://github.com/buttawb/Makkhimeter-FYP",
    liveDemo: null,
    
    challenges: [
      {
        problem: "Achieving scientific-grade accuracy in automated image analysis",
        solution: "Developed custom computer vision algorithms validated against manual measurements, achieving 95% accuracy through iterative refinement and extensive testing."
      },
      {
        problem: "Processing high-resolution microscopic images efficiently",
        solution: "Implemented multi-threaded image processing with progress tracking and memory optimization, reducing analysis time from 30 minutes to 2 minutes per sample."
      },
      {
        problem: "Creating intuitive interfaces for researchers with varying technical backgrounds",
        solution: "Designed guided workflows with visual feedback and contextual help, enabling researchers to use advanced tools without technical expertise."
      },
      {
        problem: "Ensuring reproducible results across different imaging conditions",
        solution: "Built adaptive algorithms that automatically adjust for lighting variations and image quality, maintaining consistency across diverse input conditions."
      }
    ],
    
    achievements: [
      "🏆 Successfully defended as Final Year Project with highest honors",
      "⚡ Reduced analysis time from hours to minutes (98% time savings)",
      "🎯 Achieved 95% accuracy compared to manual analysis",
      "📚 Contributed to advancing genetic research methodology",
      "🤝 Demonstrated successful collaboration with academic researchers",
      "💡 Created reusable framework for biological image analysis"
    ],
    
    whatILearned: [
      "Mastered computer vision and image processing with OpenCV",
      "Gained deep understanding of scientific software development requirements",
      "Developed expertise in biological data analysis and visualization",
      "Enhanced collaborative skills working with domain experts",
      "Learned to balance automation with researcher control needs",
      "Improved problem-solving abilities for complex scientific challenges"
    ],
    
    developedDate: "2023",
    teamSize: "3 Developers",
    duration: "6 months",
    status: "Research Project Completed"
  }
};

export function ProjectPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const project = projectData[projectId as keyof typeof projectData];
  
  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);
  
  if (!project) {
    return null;
  }
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend': return Globe;
      case 'backend': return Server;
      case 'database': return Database;
      case 'mobile': return Smartphone;
      case 'ai': return Zap;
      case 'apis': return Code;
      case 'framework': return Rocket;
      case 'features': return Star;
      case 'visualization': return Eye;
      case 'tools': return Database;
      default: return Code;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="glass-button mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>
          
          {/* Project Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="glass-card mb-4">
              {project.status}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {project.shortDescription}
            </p>
            
            {/* Project Meta Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{project.developedDate}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="h-4 w-4" />
                <span>{project.teamSize}</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="glass-button" asChild>
                <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Source Code
                </a>
              </Button>
              {project.liveDemo && (
                <Button className="glass-button" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {project.liveDemo.includes('play.google.com') ? 'Get on Play Store' : 'View Live Demo'}
                  </a>
                </Button>
              )}
              {project.demoVideo && (
                <Button variant="outline" className="glass-button" asChild>
                  <a href={project.demoVideo} target="_blank" rel="noopener noreferrer">
                    <Video className="h-4 w-4 mr-2" />
                    Watch Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="neo-card overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 glass-button p-3 rounded-full hover:scale-110 transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 glass-button p-3 rounded-full hover:scale-110 transition-all"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      </section>
      
      {/* Project Story */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="neo-card p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Target className="h-6 w-6 text-emerald-500" />
              The Story Behind {project.title}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              {project.fullStory.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </section>
      
      {/* Tech Stack */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Code className="h-8 w-8 text-emerald-500" />
            Technology Stack
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(project.techStack).map(([category, technologies]) => {
              const CategoryIcon = getCategoryIcon(category);
              return (
                <Card key={category} className="neo-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                      <CategoryIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="font-semibold capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="glass-card text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <CheckCircle className="h-8 w-8 text-emerald-500" />
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {project.keyFeatures.map((feature, index) => (
              <Card key={index} className="neo-card p-6">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{feature.charAt(0)}</div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.substring(2)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Architecture */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Database className="h-8 w-8 text-emerald-500" />
            System Architecture
          </h2>
          
          <Card className="neo-card p-8 mb-8">
            <p className="text-muted-foreground leading-relaxed text-center mb-8">
              {project.architecture.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {project.architecture.modules.map((module, index) => (
                <Card key={index} className="p-6 border-2 border-dashed border-emerald-200 dark:border-emerald-800">
                  <h3 className="font-semibold mb-3 text-emerald-600 dark:text-emerald-400">
                    {module.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {module.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </section>
      
      {/* Challenges & Solutions */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <AlertTriangle className="h-8 w-8 text-amber-500" />
            Challenges & Solutions
          </h2>
          
          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <Card key={index} className="neo-card p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2 text-red-600 dark:text-red-400">
                      <AlertTriangle className="h-5 w-5" />
                      Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {challenge.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                      <Lightbulb className="h-5 w-5" />
                      Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Trophy className="h-8 w-8 text-yellow-500" />
            Key Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.achievements.map((achievement, index) => (
              <Card key={index} className="neo-card p-6 text-center">
                <div className="text-3xl mb-3">{achievement.charAt(0)}</div>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.substring(2)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* What I Learned */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Rocket className="h-8 w-8 text-purple-500" />
            What I Learned & Achieved
          </h2>
          
          <Card className="neo-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-purple-600 dark:text-purple-400">
                  Technical Skills Gained
                </h3>
                <ul className="space-y-2">
                  {project.whatILearned.slice(0, Math.ceil(project.whatILearned.length / 2)).map((skill, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-purple-600 dark:text-purple-400">
                  Professional Growth
                </h3>
                <ul className="space-y-2">
                  {project.whatILearned.slice(Math.ceil(project.whatILearned.length / 2)).map((skill, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Next Project / Back to Portfolio */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="neo-card p-8">
            <h3 className="text-xl font-semibold mb-4">
              Interested in seeing more projects?
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore my complete portfolio to discover more innovative solutions and technical achievements.
            </p>
            <Button 
              onClick={() => navigate('/#projects')}
              className="glass-button"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Projects
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}