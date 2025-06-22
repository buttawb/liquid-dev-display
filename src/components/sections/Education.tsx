
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Science (BSCS)",
      university: "NED University of Engineering and Technology",
      duration: "2019 - 2023",
      location: "Karachi, Pakistan",
      status: "Graduated",
      gpa: "CGPA: 3.2",
      description: "Elected Academic Representative for the Computer Science Department. Bridged the gap between students and faculty, addressed academic concerns, and ensured effective communication.",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center",
      relevantCourses: [
        "Python (Programming Language)",
        "Data Structures & Algorithms",
        "Database Systems",
        "Software Engineering",
        "Web Technologies",
      ]
    },
    {
      degree: "HSC, Pre-Engineering",
      university: "Government Degree Science & Commerce College - Malir Cantonment",
      duration: "Oct 2017 - May 2019",
      location: "Karachi, Pakistan",
      status: "Completed",
      gpa: "Grade: A",
      description: "Completed Higher Secondary Certificate in Pre-Engineering.",
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop&crop=center",
      relevantCourses: [
        "Mathematics",
        "Physics",
        "Chemistry"
      ]
    }
  ];

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
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Continuous learning and professional development journey
          </p>
        </div>

        <div className="w-full">
          {/* Education Card */}
          {education.map((edu, idx) => (
            <Card key={idx} className="professional-card p-8 h-fit mb-8">
              <div className="flex items-start gap-6 mb-6">
                {/* University Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-lg border-2 border-gray-100 dark:border-gray-700">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.university} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <Badge className="bg-emerald-500 text-white border-0 text-xs">
                      {edu.status}
                    </Badge>
                  </div>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mb-3">{edu.university}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span>{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {edu.description}
              </p>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-emerald-500" />
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course) => (
                    <Badge key={course} variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0 text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/*
        <Card className="professional-card p-8 h-fit">
          ... (certifications card code here)
        </Card>
        */}
      </div>
    </section>
  );
}
