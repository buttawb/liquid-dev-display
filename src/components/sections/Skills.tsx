
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 95 }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 }
    ]
  },
  {
    title: "Mobile & Emerging Tech",
    skills: [
      { name: "React Native", level: 80 },
      { name: "AI/ML Integration", level: 70 },
      { name: "IoT Development", level: 65 },
      { name: "Firebase", level: 85 }
    ]
  }
];

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
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-3"
                    />
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
