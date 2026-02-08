import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Award, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Avialdo Solutions",
    duration: "Jan 2025 - Present",
    location: "Karāchi, Sindh, Pakistan",
    type: "Full-time",
    level: "Mid Level",
    logo: "/avialdo.png",
    description: "Working on multi-tenant SaaS platforms, handling architecture decisions, and helping the team with code quality and production support.",
    skills: ["Django", "Terraform", "Datadog", "New Relic", "AWS", "Next.js", "GraphQL"],
    achievements: [
      "Working on platform serving 2,000+ organizations",
      "Set up monitoring with Datadog and New Relic",
      "Helping with infrastructure using Terraform",
      "Code reviews and mentoring junior devs",
      "On-call for production issues"
    ]
  },
  {
    title: "Backend Engineer",
    company: "Avialdo Solutions",
    duration: "Aug 2024 - Dec 2024",
    location: "Karāchi, Sindh, Pakistan",
    type: "Full-time",
    level: "Mid Level",
    logo: "/avialdo.png",
    description: "Led backend development for logistics and B2B platforms, built real-time features, and started taking on more ownership.",
    skills: ["Django", "WebSocket", "GraphQL", "AWS", "Next.js", "Celery"],
    achievements: [
      "Integrated third-party services (OneSignal, Twilio, Firebase)",
      "Built real-time features - dashboards, chat, 2FA",
      "Started doing architecture work and code reviews",
      "Worked on AWS and Docker pipelines"
    ]
  },
  {
    title: "Junior Backend Engineer",
    company: "Avialdo Solutions", 
    duration: "Sep 2023 - Jul 2024",
    location: "Karāchi, Sindh, Pakistan",
    type: "Full-time",
    level: "Junior",
    logo: "/avialdo.png",
    description: "Worked on backend systems using Django and managed databases to ensure effective application performance.",
    skills: ["Django", "REST APIs", "Code Review", "Continuous Integration and Continuous Delivery (CI/CD)", "jQuery"],
    achievements: [
      "Worked on backend systems using Django, gaining expertise in Django REST framework, Ninja APIs, and GraphQL",
      "Managed and optimized databases including PostgreSQL, SQLite, and MySQL to ensure effective application performance",
      "Utilized GIT to manage and maintain codebases, ensuring smooth version control and collaboration"
    ]
  },
  {
    title: "Software Developer",
    company: "DOW UNIVERSITY OF HEALTH SCIENCES (DUHS)",
    duration: "Jun 2022 - May 2023",
    location: "Karāchi, Sindh, Pakistan", 
    type: "Part-time",
    level: "Junior",
    logo: "/dow.jpeg",
    description: "Developed a web application integrating deep learning and image processing for rapid classification and feature extraction of Drosophila melanogaster species.",
    skills: ["Python (Programming Language)", "Collaborative Problem Solving", "Research and Development (R&D)", "JavaScript"],
    achievements: [
      "Developed a web application integrating deep learning and image processing for rapid classification and feature extraction of Drosophila melanogaster species",
      "Automated manual processes through innovative software solutions",
      "Applied research and development skills in a healthcare/academic environment"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border">
            <Briefcase className="h-4 w-4 text-emerald-500" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A journey of continuous learning and professional growth
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="professional-card p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Section - Main Info */}
                <div className="flex-1 lg:w-[70%]">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Company Logo */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border-2 border-white dark:border-gray-700 shadow-md group-hover:scale-105 transition-transform">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-emerald-500 p-1.5 rounded-full">
                        <Building2 className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {exp.level}
                        </Badge>
                      </div>
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg">{exp.company}</p>
                      
                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities & Contributions */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4 text-emerald-500" />
                      Responsibilities & Contributions
                    </h4>
                    <div className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Section - Skills */}
                <div className="lg:w-[30%] lg:min-w-[200px]">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
