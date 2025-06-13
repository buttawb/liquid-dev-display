
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
    <section id="experience" className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Briefcase className="h-4 w-4 text-emerald-500" />
            <span>Professional journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of continuous learning and professional growth
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="neo-card p-8 lg:p-12 hover:scale-[1.02] transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="flex-1 space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="gradient-green p-3 rounded-2xl group-hover:scale-110 transition-transform">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">{exp.title}</h3>
                      <p className="text-emerald-600 font-semibold text-lg">{exp.company}</p>
                      <div className="flex items-center gap-3 mt-3 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                        <Badge variant="outline" className="glass-card">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="space-y-4 lg:min-w-[300px]">
                  <h4 className="font-semibold text-muted-foreground">Skills Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="glass-card">
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
