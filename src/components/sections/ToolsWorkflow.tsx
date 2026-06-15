import { GlassCard, GlassPill } from "@/components/glass";
import { Reveal } from "@/hooks/use-reveal";
import { Wrench, Bot, Activity, Cloud, Plug } from "lucide-react";

const toolCategories = [
  {
    title: "Dev Tools",
    icon: Bot,
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
    <section id="tools" className="relative py-24 px-6">
      <Reveal className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <GlassPill className="mb-6">
            <Wrench className="h-4 w-4 text-primary" />
            <span>Tools &amp; Workflow</span>
          </GlassPill>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The tools I actually reach for, day to day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {toolCategories.map((category, index) => (
            <GlassCard key={index} interactive sheen className="p-6 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <category.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">
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
                    className="p-3 rounded-xl bg-foreground/[0.04] hover:bg-foreground/[0.07] transition-colors duration-200"
                  >
                    <div className="font-medium text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-muted-foreground">{tool.description}</div>
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
