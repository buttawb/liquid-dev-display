
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "COMSATS University Islamabad",
    duration: "2021 - Present",
    description: "Comprehensive program covering software development, algorithms, database systems, and emerging technologies.",
    highlights: ["Software Design Patterns", "Data Structures & Algorithms", "Database Management", "Web Development"]
  }
];

const certifications = [
  "React.js Certification",
  "Node.js Development",
  "JavaScript Fundamentals",
  "Git & Version Control",
  "Agile Development"
];

const courses = [
  "Full-Stack Web Development",
  "Mobile App Development",
  "Machine Learning Basics",
  "Cloud Computing Fundamentals",
  "DevOps Essentials"
];

export function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-8">
            <GraduationCap className="h-4 w-4 text-emerald-500" />
            <span>Learning journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Committed to continuous learning and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-emerald-500" />
              Education
            </h3>
            
            {educationData.map((edu, index) => (
              <Card key={index} className="neo-card p-8 hover:scale-[1.02] transition-all duration-300 group">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">{edu.degree}</h4>
                    <p className="text-emerald-600 font-semibold text-lg">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.duration}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  
                  <div className="space-y-3">
                    <h5 className="font-semibold">Key Subjects</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <Badge key={highlight} variant="secondary" className="glass-card">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications & Courses */}
          <div className="space-y-8">
            {/* Certifications */}
            <Card className="neo-card p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-emerald-500" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 gradient-green rounded-full"></div>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Courses */}
            <Card className="neo-card p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-emerald-500" />
                Courses
              </h3>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
                    <span className="text-sm">{course}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
