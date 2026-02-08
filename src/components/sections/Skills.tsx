import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Star, Code, Database, Smartphone, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Core Stack",
    icon: Code,
    color: "from-emerald-400 to-green-500",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "Django", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "GraphQL", level: "Advanced" },
      { name: "WebSockets", level: "Advanced" },
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: Database,
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "AWS (EC2, S3, RDS)", level: "Advanced" },
      { name: "Azure", level: "Intermediate" },
      { name: "Terraform", level: "Intermediate" },
      { name: "Docker", level: "Advanced" },
      { name: "CI/CD", level: "Advanced" },
      { name: "GitHub Actions", level: "Advanced" },
    ]
  },
  {
    title: "Observability",
    icon: Cpu,
    color: "from-purple-400 to-indigo-500",
    skills: [
      { name: "Datadog APM", level: "Advanced" },
      { name: "New Relic", level: "Intermediate" },
      { name: "Log Analysis", level: "Advanced" },
      { name: "Performance Tuning", level: "Advanced" },
      { name: "Sentry", level: "Advanced" },
    ]
  },
  {
    title: "Data & Messaging",
    icon: Database,
    color: "from-green-400 to-teal-500",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Expert" },
      { name: "Redis", level: "Advanced" },
      { name: "Celery", level: "Advanced" },
      { name: "RabbitMQ", level: "Intermediate" },
    ]
  },
  {
    title: "AI Tooling",
    icon: Cpu,
    color: "from-violet-400 to-purple-500",
    skills: [
      { name: "Claude/GPT APIs", level: "Advanced" },
      { name: "Claude Code", level: "Expert" },
      { name: "Cursor IDE", level: "Advanced" },
      { name: "GitHub Copilot", level: "Advanced" },
    ]
  },
  {
    title: "Engineering Practices",
    icon: Code,
    color: "from-orange-400 to-red-500",
    skills: [
      { name: "System Design", level: "Advanced" },
      { name: "Multi-Tenant Architecture", level: "Advanced" },
      { name: "TDD", level: "Intermediate" },
      { name: "Code Review", level: "Expert" },
      { name: "Technical Documentation", level: "Advanced" },
    ]
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    case "Advanced":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Intermediate":
      return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
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
            Technologies I work with regularly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                  <div key={skillIndex} className="flex flex-col md:flex-row md:items-center justify-between flex-wrap gap-2">
                    <div className="flex-1 min-w-0 pr-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getLevelColor(skill.level)} border ml-2 flex-shrink-0 mt-1 md:mt-0`}
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
