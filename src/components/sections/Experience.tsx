
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Award } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "TechCorp Solutions",
    duration: "Jan 2024 - Present",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    level: "Senior",
    description: "Leading development of enterprise applications and mentoring junior developers. Architecting scalable solutions using modern tech stack.",
    skills: ["React", "Node.js", "Python", "AWS", "Team Leadership"],
    achievements: [
      "Led team of 5 developers",
      "Improved system performance by 40%",
      "Delivered 3 major projects on time"
    ]
  },
  {
    title: "Software Developer",
    company: "TechCorp Solutions", 
    duration: "Jun 2023 - Dec 2023",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    level: "Mid-level",
    description: "Developed full-stack applications and integrated AI/ML solutions. Promoted to Senior role within 6 months.",
    skills: ["React", "Node.js", "MongoDB", "Machine Learning", "APIs"],
    achievements: [
      "Promoted within 6 months",
      "Built 5+ production applications",
      "Integrated ML models successfully"
    ]
  },
  {
    title: "Junior Software Developer",
    company: "InnovateLab",
    duration: "Jan 2023 - May 2023",
    location: "Lahore, Pakistan", 
    type: "Full-time",
    level: "Junior",
    description: "Started career developing mobile and web applications. Gained hands-on experience in modern development practices.",
    skills: ["React Native", "JavaScript", "Firebase", "Git", "Agile"],
    achievements: [
      "Completed 10+ client projects",
      "Achieved 98% client satisfaction",
      "Learned 5 new technologies"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border">
            <Briefcase className="h-4 w-4 text-emerald-500" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
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
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Briefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
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

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4 text-emerald-500" />
                      Key Achievements
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
                <div className="lg:min-w-[280px]">
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
