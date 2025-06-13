
import { Card } from "@/components/ui/card";
import { Zap, Star } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "JavaScript", level: "Expert" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "RESTful APIs", level: "Expert" }
    ]
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Git/GitHub", level: "Expert" },
      { name: "Docker", level: "Intermediate" }
    ]
  },
  {
    title: "Mobile & Emerging Tech",
    skills: [
      { name: "React Native", level: "Advanced" },
      { name: "AI/ML Integration", level: "Intermediate" },
      { name: "IoT Development", level: "Intermediate" },
      { name: "Firebase", level: "Advanced" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-emerald-500 text-white";
    case "Advanced":
      return "bg-green-500 text-white";
    case "Intermediate":
      return "bg-teal-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

const getLevelStars = (level: string) => {
  switch (level) {
    case "Expert":
      return 5;
    case "Advanced":
      return 4;
    case "Intermediate":
      return 3;
    default:
      return 2;
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="h-4 w-4 text-emerald-500" />
            <span>Technical expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Constantly evolving technical skills to stay at the forefront of technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="neo-card p-8 hover:scale-[1.02] transition-all duration-300 group">
              <h3 className="text-2xl font-bold mb-8 text-center group-hover:gradient-text transition-all duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between p-4 rounded-xl glass-card hover:scale-[1.02] transition-all duration-200">
                    <div className="flex-1">
                      <span className="font-medium text-lg">{skill.name}</span>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`h-4 w-4 ${
                              starIndex < getLevelStars(skill.level)
                                ? "text-emerald-500 fill-emerald-500"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
