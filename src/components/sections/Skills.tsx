
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Star, Code, Database, Smartphone, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "from-emerald-400 to-green-500",
    skills: [
      { name: "React/Next.js", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "HTML/CSS", level: "Expert" },
      { name: "Vue.js", level: "Intermediate" }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "from-green-400 to-teal-500",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "RESTful APIs", level: "Expert" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "MongoDB", level: "Advanced" }
    ]
  },
  {
    title: "Mobile & Cloud",
    icon: Smartphone,
    color: "from-teal-400 to-cyan-500",
    skills: [
      { name: "React Native", level: "Advanced" },
      { name: "Firebase", level: "Advanced" },
      { name: "AWS", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Git/GitHub", level: "Expert" }
    ]
  },
  {
    title: "AI & Emerging Tech",
    icon: Cpu,
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "AI/ML Integration", level: "Intermediate" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "IoT Development", level: "Intermediate" },
      { name: "Blockchain", level: "Beginner" },
      { name: "WebRTC", level: "Intermediate" },
      { name: "PWA", level: "Advanced" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    case "Advanced":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Intermediate":
      return "bg-teal-500/20 text-teal-400 border-teal-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="neo-card p-6 hover:scale-[1.02] transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold group-hover:gradient-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium truncate">{skill.name}</span>
                        <div className="flex items-center gap-0.5 flex-shrink-0">
                          {[...Array(getLevelStars(skill.level))].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className="h-2.5 w-2.5 text-emerald-400 fill-emerald-400"
                            />
                          ))}
                          {[...Array(5 - getLevelStars(skill.level))].map((_, starIndex) => (
                            <Star
                              key={starIndex + getLevelStars(skill.level)}
                              className="h-2.5 w-2.5 text-gray-600"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getLevelColor(skill.level)} border ml-2 flex-shrink-0`}
                    >
                      {skill.level}
                    </Badge>
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
