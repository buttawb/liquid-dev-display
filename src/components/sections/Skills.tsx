import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Server, Database, Cog, Cloud, TestTube, Link, ChevronDown, ChevronUp } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & APIs",
    icon: Server,
    color: "from-primary to-blue-500",
    skills: [
      { name: "Python", years: "3+" },
      { name: "Django", years: "3+" },
      { name: "Flask", years: "2+" },
      { name: "REST APIs", years: "3+" },
      { name: "GraphQL", years: "2+" },
      { name: "Django Channels", years: "2+" },
      { name: "WebSockets", years: "2+" },
      { name: "Multi-Tenant Architecture", years: "2+" },
      { name: "Service-Oriented Architecture", years: "2+" },
    ]
  },
  {
    title: "Databases & Performance",
    icon: Database,
    color: "from-blue-500 to-accent",
    skills: [
      { name: "PostgreSQL", years: "3+" },
      { name: "MySQL", years: "3+" },
      { name: "Redis", years: "2+" },
      { name: "Query Optimization", years: "2+" },
      { name: "Caching Strategies", years: "2+" },
      { name: "Database Indexing", years: "2+" },
    ]
  },
  {
    title: "Async & Messaging",
    icon: Cog,
    color: "from-accent to-cyan-400",
    skills: [
      { name: "Celery", years: "2+" },
      { name: "Redis Queue", years: "2+" },
      { name: "Asynchronous Programming", years: "2+" },
      { name: "Message Queues", years: "2+" },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-cyan-400 to-primary",
    skills: [
      { name: "AWS (EC2, S3, RDS, Lambda)", years: "2+" },
      { name: "Docker", years: "2+" },
      { name: "CI/CD Pipelines", years: "2+" },
      { name: "Git", years: "3+" },
      { name: "Linux", years: "3+" },
    ]
  },
  {
    title: "Testing & Quality",
    icon: TestTube,
    color: "from-primary to-purple-400",
    skills: [
      { name: "Unit Testing", years: "3+" },
      { name: "Integration Testing", years: "2+" },
      { name: "Code Review", years: "3+" },
      { name: "Test-Driven Development (TDD)", years: "2+" },
    ]
  },
  {
    title: "Integrations & Additional",
    icon: Link,
    color: "from-purple-400 to-accent",
    skills: [
      { name: "OAuth2", years: "2+" },
      { name: "JWT", years: "3+" },
      { name: "Third-Party APIs", years: "3+" },
      { name: "AI APIs (GPT, Gemini)", years: "1+" },
      { name: "Next.js", years: "1+" },
      { name: "JavaScript", years: "2+" },
    ]
  },
];

export function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section id="skills" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span>Technical expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the backend development stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const isExpanded = expandedCategory === index;
            const visibleSkills = isExpanded ? category.skills : category.skills.slice(0, 4);
            const hasMore = category.skills.length > 4;

            return (
              <Card 
                key={index} 
                className="neo-card p-6 hover:scale-[1.02] transition-all duration-300 glow-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <category.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {visibleSkills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {skill.years}
                        </Badge>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-bar-fill"
                          style={{ 
                            width: skill.years.includes("3") ? "90%" : skill.years.includes("2") ? "70%" : "50%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {hasMore && (
                  <button
                    onClick={() => toggleCategory(index)}
                    className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 mt-4 transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        Show less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        Show {category.skills.length - 4} more
                      </>
                    )}
                  </button>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
