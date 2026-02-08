import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Bot, Activity, Cloud, Plug } from "lucide-react";

const toolCategories = [
  {
    title: "Dev Tools",
    icon: Bot,
    color: "from-purple-400 to-indigo-500",
    description: "What I use to write code faster",
    tools: [
      { name: "Claude Code", description: "My main coding assistant" },
      { name: "Cursor", description: "IDE with AI built in" },
      { name: "Lovable", description: "Quick prototyping" },
      { name: "GitHub Copilot", description: "Autocomplete on steroids" },
    ]
  },
  {
    title: "Monitoring",
    icon: Activity,
    color: "from-emerald-400 to-green-500",
    description: "How I debug production issues",
    tools: [
      { name: "Datadog", description: "APM, logs, traces" },
      { name: "New Relic", description: "App performance" },
      { name: "CloudWatch", description: "AWS metrics" },
      { name: "Sentry", description: "Error tracking" },
    ]
  },
  {
    title: "Infrastructure",
    icon: Cloud,
    color: "from-cyan-400 to-blue-500",
    description: "Deployment and cloud stuff",
    tools: [
      { name: "Terraform", description: "Infra as code" },
      { name: "AWS", description: "EC2, S3, RDS, etc" },
      { name: "Docker", description: "Containers" },
      { name: "GitHub Actions", description: "CI/CD" },
    ]
  },
  {
    title: "API Tools",
    icon: Plug,
    color: "from-orange-400 to-red-500",
    description: "Testing and building APIs",
    tools: [
      { name: "Postman", description: "API testing" },
      { name: "GraphQL Playground", description: "GraphQL queries" },
      { name: "Swagger", description: "API docs" },
      { name: "Insomnia", description: "REST client" },
    ]
  },
];

export function ToolsWorkflow() {
  return (
    <section id="tools" className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Wrench className="h-4 w-4 text-emerald-500" />
            <span>Tools & Workflow</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tools I actually use day-to-day
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {toolCategories.map((category, index) => (
            <Card key={index} className="neo-card p-6 hover:scale-[1.02] transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:gradient-text transition-all duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <div className="font-medium text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-muted-foreground">{tool.description}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full text-sm text-muted-foreground">
            <Bot className="h-4 w-4 text-emerald-500" />
            <span>Right tool for the right job</span>
          </div>
        </div>
      </div>
    </section>
  );
}
