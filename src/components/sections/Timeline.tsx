import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase, GraduationCap, Award, TrendingUp, BookOpen, Building2, Users, Star } from "lucide-react";

type TimelineItemType = 'experience' | 'education';

interface TimelineItem {
  id: string;
  type: TimelineItemType;
  title: string;
  organization: string;
  duration: string;
  location: string;
  logo: string;
  description: string;
  details: string[];
  skills?: string[];
  status?: string;
  level?: string;
  gpa?: string;
  startYear: number; // For sorting
}

const timelineData: TimelineItem[] = [
  // Experiences
  {
    id: "avialdo-backend-2024",
    type: "experience" as const,
    title: "Backend Engineer",
    organization: "Avialdo Solutions",
    duration: "Aug 2024 - Present",
    location: "Karāchi, Sindh, Pakistan",
    logo: "/avialdo.png",
    description: "Leading the development of complex backend modules and managing projects effectively using modern development practices and cloud services.",
    level: "Mid Level",
    startYear: 2024,
    skills: ["Django", "WebSocket", "GraphQL", "Cross-team Collaboration", "Amazon Web Services (AWS)", "Next.js"],
    details: [
      "Leading the development of complex backend modules",
      "Utilizing AWS services for DevOps tasks",
      "Managing projects effectively using JIRA, Confluence, and other Atlassian tools",
      "Developing detailed flowcharts, UML diagrams, and other visual representations to clarify backend processes",
      "Working closely with designers to enhance design solutions for seamless frontend-backend integration"
    ]
  },
  {
    id: "avialdo-junior-2023",
    type: "experience" as const,
    title: "Junior Backend Engineer",
    organization: "Avialdo Solutions",
    duration: "Sep 2023 - Jul 2024",
    location: "Karāchi, Sindh, Pakistan",
    logo: "/avialdo.png",
    description: "Worked on backend systems using Django and managed databases to ensure effective application performance.",
    level: "Junior",
    startYear: 2023,
    skills: ["Django", "REST APIs", "Code Review", "Continuous Integration and Continuous Delivery (CI/CD)", "jQuery"],
    details: [
      "Worked on backend systems using Django, gaining expertise in Django REST framework, Ninja APIs, and GraphQL",
      "Managed and optimized databases including PostgreSQL, SQLite, and MySQL to ensure effective application performance",
      "Utilized GIT to manage and maintain codebases, ensuring smooth version control and collaboration"
    ]
  },
  {
    id: "ned-graduation-2023",
    type: "education" as const,
    title: "Bachelor of Computer Science (BSCS)",
    organization: "NED University of Engineering and Technology",
    duration: "2019 - 2023",
    location: "Karachi, Pakistan",
    logo: "/ned.png",
    description: "Elected Academic Representative for the Computer Science Department. Bridged the gap between students and faculty, addressed academic concerns, and ensured effective communication.",
    status: "Graduated",
    gpa: "CGPA: 3.2",
    startYear: 2019,
    skills: ["Python (Programming Language)", "Data Structures & Algorithms", "Database Systems", "Software Engineering", "Web Technologies"],
    details: [
      "Elected Academic Representative for the Computer Science Department",
      "Bridged the gap between students and faculty",
      "Addressed academic concerns and ensured effective communication",
      "Maintained strong academic performance throughout the program"
    ]
  },
  {
    id: "dow-developer-2022",
    type: "experience" as const,
    title: "Software Developer",
    organization: "DOW UNIVERSITY OF HEALTH SCIENCES (DUHS)",
    duration: "Jun 2022 - May 2023",
    location: "Karāchi, Sindh, Pakistan",
    logo: "/dow.jpeg",
    description: "Developed a web application integrating deep learning and image processing for rapid classification and feature extraction of Drosophila melanogaster species.",
    level: "Junior",
    startYear: 2022,
    skills: ["Python (Programming Language)", "Collaborative Problem Solving", "Research and Development (R&D)", "JavaScript"],
    details: [
      "Developed a web application integrating deep learning and image processing for rapid classification and feature extraction of Drosophila melanogaster species",
      "Automated manual processes through innovative software solutions",
      "Applied research and development skills in a healthcare/academic environment"
    ]
  },
  {
    id: "college-hsc-2019",
    type: "education" as const,
    title: "HSC, Pre-Engineering",
    organization: "Government Degree Science & Commerce College - Malir Cantonment",
    duration: "Oct 2017 - May 2019",
    location: "Karachi, Pakistan",
    logo: "/college.jpeg",
    description: "Completed Higher Secondary Certificate in Pre-Engineering with excellent grades.",
    status: "Completed",
    gpa: "Grade: A",
    startYear: 2017,
    skills: ["Mathematics", "Physics", "Chemistry"],
    details: [
      "Completed Higher Secondary Certificate in Pre-Engineering",
      "Achieved excellent academic performance",
      "Built strong foundation in mathematics and sciences"
    ]
  }
].sort((a, b) => b.startYear - a.startYear); // Sort by most recent first

export function Timeline() {
  return (
    <section id="journey" className="py-20 px-6 bg-gray-50/30 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border">
            <Users className="h-4 w-4 text-emerald-500" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A story of continuous growth, learning, and professional development through experience and education
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Line - Horizontal on larger screens, vertical on mobile */}
          <div className="hidden lg:block absolute top-[120px] left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-300 opacity-60"></div>
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 via-emerald-500 to-emerald-300 opacity-60"></div>

          {/* Timeline Items */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative flex-1 group">
                {/* Timeline Connector */}
                <div className="hidden lg:block absolute top-[120px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="lg:hidden absolute left-8 top-6 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                {/* Card */}
                <Card className={`professional-card p-6 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 lg:ml-0 ml-16 ${
                  index % 2 === 0 ? 'lg:mb-16' : 'lg:mt-16'
                } ${item.type === 'experience' ? 'border-l-4 border-l-blue-500' : 'border-l-4 border-l-emerald-500'}`}>
                  
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-lg border-2 border-gray-100 dark:border-gray-700 group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={item.logo} 
                          alt={`${item.organization} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`absolute -bottom-1 -right-1 p-1.5 rounded-full ${
                        item.type === 'experience' ? 'bg-blue-500' : 'bg-emerald-500'
                      }`}>
                        {item.type === 'experience' ? 
                          <Briefcase className="h-3 w-3 text-white" /> : 
                          <GraduationCap className="h-3 w-3 text-white" />
                        }
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className={`text-xs ${
                          item.type === 'experience' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                        }`}>
                          {item.type === 'experience' ? 'Work' : 'Education'}
                        </Badge>
                        {item.level && (
                          <Badge variant="secondary" className="text-xs">
                            {item.level}
                          </Badge>
                        )}
                        {item.status && (
                          <Badge className="bg-emerald-500 text-white border-0 text-xs">
                            {item.status}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className={`font-semibold text-base mb-2 ${
                        item.type === 'experience' ? 'text-blue-600 dark:text-blue-400' : 'text-emerald-600 dark:text-emerald-400'
                      }`}>
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    {item.gpa && (
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        <span>{item.gpa}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <Award className="h-3 w-3 text-emerald-500" />
                      Key Highlights
                    </h4>
                    <div className="space-y-1">
                      {item.details.slice(0, 3).map((detail, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                          <div className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                          <span className="leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills/Technologies */}
                  {item.skills && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                        {item.type === 'experience' ? 
                          <><TrendingUp className="h-3 w-3 text-emerald-500" />Technologies</> :
                          <><BookOpen className="h-3 w-3 text-emerald-500" />Coursework</>
                        }
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {item.skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0 text-xs px-2 py-1">
                            {skill}
                          </Badge>
                        ))}
                        {item.skills.length > 4 && (
                          <Badge variant="outline" className="text-xs px-2 py-1">
                            +{item.skills.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "2+", icon: Briefcase },
            { label: "Projects Completed", value: "15+", icon: Award },
            { label: "Technologies", value: "10+", icon: TrendingUp },
            { label: "Certifications", value: "4+", icon: GraduationCap }
          ].map((stat, index) => (
            <Card key={index} className="professional-card p-4 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}