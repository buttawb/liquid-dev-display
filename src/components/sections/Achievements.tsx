import { GlassCard, GlassPill } from "@/components/glass";
import { Reveal } from "@/hooks/use-reveal";
import { Trophy, Shield, Clock, Users, Award, Star } from "lucide-react";

const featured = {
  title: "Scale",
  description:
    "Worked on a multi-tenant platform serving thousands of organizations — learned a lot about data isolation, tenancy, and handling wildly different use cases on one codebase.",
  icon: Users,
  category: "Scale",
  metric: "2,000+",
  metricLabel: "organizations served",
};

const achievements = [
  {
    title: "System Reliability",
    description: "Kept systems running smoothly through monitoring, alerts, and fixing issues before users ever notice.",
    icon: Trophy,
    category: "Reliability",
    metric: "99.5%",
    metricLabel: "uptime",
    span: "lg:col-span-2",
  },
  {
    title: "Better Code Quality",
    description: "50+ code reviews — catching bugs before production and helping the team write cleaner code.",
    icon: Shield,
    category: "Quality",
    metric: "30%",
    metricLabel: "fewer bugs",
    span: "lg:col-span-1",
  },
  {
    title: "Production Support",
    description: "On-call rotation, debugging at odd hours. Got fast at reading logs and traces to pin down problems.",
    icon: Clock,
    category: "Operations",
    metric: "<10m",
    metricLabel: "incident response",
    span: "lg:col-span-1",
  },
  {
    title: "Team Player Award",
    description: "Recognized at Avialdo for being helpful to the team and consistently shipping on time.",
    icon: Award,
    category: "Recognition",
    metric: "Q2 '24",
    metricLabel: "Avialdo recognition",
    span: "lg:col-span-4",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-6">
      <Reveal className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <GlassPill className="mb-6">
            <Star className="h-4 w-4 text-primary" />
            <span>Key Achievements</span>
          </GlassPill>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Professional <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            99.5% uptime across platforms serving 2,000+ organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[200px]">
          {/* Featured hero tile */}
          <GlassCard
            interactive
            sheen
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 p-8 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20">
                <featured.icon className="h-6 w-6" />
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{featured.category}</span>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
                {featured.metric}
              </div>
              <div className="text-sm font-medium text-primary mt-1">{featured.metricLabel}</div>
              <h3 className="text-xl font-bold mt-5 mb-2">{featured.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{featured.description}</p>
            </div>
          </GlassCard>

          {/* Supporting tiles */}
          {achievements.map((a) => (
            <GlassCard
              key={a.title}
              interactive
              sheen
              className={`${a.span} p-6 flex flex-col justify-between`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <a.icon className="h-5 w-5" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold tracking-tight text-foreground leading-none">{a.metric}</div>
                  <div className="text-[11px] text-muted-foreground mt-1">{a.metricLabel}</div>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
