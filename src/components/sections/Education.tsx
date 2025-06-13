
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
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Committed to continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              Education
            </h3>
            
            {educationData.map((edu, index) => (
              <Card key={index} className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.duration}</p>
                  </div>
                  
                  <p className="text-muted-foreground">{edu.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium">Key Subjects</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <Badge key={highlight} variant="secondary" className="text-xs">
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
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    {cert}
                  </div>
                ))}
              </div>
            </Card>

            {/* Courses */}
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Courses
              </h3>
              <div className="space-y-3">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    {course}
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
