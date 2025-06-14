
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from "lucide-react";

export function Education() {
  const education = {
    degree: "Bachelor of Software Engineering",
    university: "COMSATS University Islamabad",
    duration: "2021 - Present",
    location: "Islamabad, Pakistan",
    status: "Final Year",
    gpa: "3.7/4.0",
    description: "Comprehensive program covering software development, algorithms, database systems, and emerging technologies with hands-on project experience.",
    relevantCourses: [
      "Data Structures & Algorithms",
      "Software Design Patterns", 
      "Database Systems",
      "Web Technologies",
      "Mobile App Development",
      "Software Engineering"
    ]
  };

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      status: "Certified"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      status: "Certified"
    },
    {
      title: "Full Stack Development",
      issuer: "FreeCodeCamp",
      date: "2023", 
      status: "Certified"
    },
    {
      title: "Machine Learning Basics",
      issuer: "Coursera",
      date: "2023",
      status: "Certified"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border">
            <GraduationCap className="h-4 w-4 text-emerald-500" />
            <span>Education & Learning</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Continuous learning and professional development journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Education Card */}
          <Card className="professional-card p-8 h-fit">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-xl">
                <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{education.degree}</h3>
                  <Badge className="bg-emerald-500 text-white border-0 text-xs">
                    {education.status}
                  </Badge>
                </div>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg">{education.university}</p>
                
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    <span>GPA: {education.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {education.description}
            </p>

            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-500" />
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.relevantCourses.map((course) => (
                  <Badge key={course} variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0 text-xs">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Certifications Card */}
          <Card className="professional-card p-8 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Professional Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</span>
                      <Badge variant="outline" className="text-xs">
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
