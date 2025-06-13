
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "Freelance",
    duration: "2023 - Present",
    type: "Freelance",
    description: "Developing full-stack web applications and mobile apps for various clients. Specializing in React, Node.js, and modern development practices.",
    skills: ["React", "Node.js", "MongoDB", "React Native", "TypeScript"]
  },
  {
    title: "Full Stack Developer Intern",
    company: "Tech Startup",
    duration: "Summer 2023",
    type: "Internship",
    description: "Worked on developing user interfaces and backend APIs. Gained experience in agile development methodologies and team collaboration.",
    skills: ["React", "Express.js", "PostgreSQL", "Git", "Agile"]
  },
  {
    title: "Software Engineering Student",
    company: "COMSATS University Islamabad",
    duration: "2021 - Present",
    type: "Education",
    description: "Pursuing Bachelor's degree in Software Engineering with focus on modern software development practices and emerging technologies.",
    skills: ["Data Structures", "Algorithms", "Software Design", "Database Systems"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of continuous learning and professional growth
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card p-8 hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="glass-button p-2 rounded-lg">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                        <Badge variant="outline" className="ml-2">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Skills Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
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
