import { Badge } from "@/components/ui/badge";
import { GlassCard, GlassPill } from "@/components/glass";
import { Reveal } from "@/hooks/use-reveal";
import { Zap, Code, Database, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Core Stack",
    icon: Code,
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
      return "bg-primary/15 text-primary border-primary/25 font-semibold";
    case "Advanced":
      return "bg-foreground/[0.06] text-foreground/80 border-foreground/10";
    case "Intermediate":
      return "bg-foreground/[0.04] text-muted-foreground border-foreground/10";
    default:
      return "bg-foreground/[0.04] text-muted-foreground border-foreground/10";
  }
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <Reveal className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <GlassPill className="mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span>Technical expertise</span>
          </GlassPill>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The stack I reach for to ship and keep things running.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} interactive sheen className="p-6 group">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <Badge
                      variant="outline"
                      className={`text-xs border flex-shrink-0 ${getLevelColor(skill.level)}`}
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
