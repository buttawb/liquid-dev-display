import { useState, useEffect, useRef } from "react";
import { GlassCard, GlassPanel, GlassPill } from "@/components/glass";
import { Reveal } from "@/hooks/use-reveal";
import { User, Code, Clock, Sparkles, Rocket, Brain, BookOpen, Gamepad2, Music, Coffee } from "lucide-react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function AnimatedStat({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    if (prefersReducedMotion()) {
      setCount(end);
      return;
    }
    let startTime: number;
    let frame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * end));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <Reveal className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <GlassPill className="mb-6">
            <User className="h-4 w-4 text-primary" />
            <span>Get to know me</span>
          </GlassPill>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Backend &amp; infrastructure engineer who ships and owns it end-to-end.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start mb-12">
          {/* Content - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-muted-foreground">
                Hey, I'm <strong className="text-foreground">Abdul Wahab Butt</strong>, a software engineer based in Karachi with 3+ years of building stuff that runs in production. Currently working on SaaS platforms that serve thousands of organizations.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                My bread and butter is Django and Python, but I also work with Next.js, cloud infra (AWS mostly), and whatever tools help ship faster. I've been doing more infrastructure and monitoring work lately with Terraform, Datadog, and New Relic.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                Beyond coding, I do code reviews, help junior devs, and handle production issues when things go wrong. I like understanding the full picture, from writing the code to deploying it to fixing it at 2am when something breaks.
              </p>
            </div>
          </div>

          {/* Stats Grid - Takes 1 column */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { end: 3, suffix: "+", label: "Years Experience", icon: Clock },
              { end: 2000, suffix: "+", label: "Orgs Served", icon: Code },
              { end: 99, suffix: ".5%", label: "System Uptime", icon: Rocket },
              { end: 1, suffix: "M+", label: "Users Reached", icon: Brain },
            ].map((stat) => (
              <GlassCard key={stat.label} interactive sheen className="p-4 text-center group">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mb-1">
                  <AnimatedStat end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* What sets me apart — full width glass panel with accent edge */}
        <GlassPanel className="w-full mb-8 p-6 border-l-4 border-l-primary">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            What I bring to the table
          </h3>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p><strong className="text-foreground">I ship fast:</strong> Use modern tools to move quickly without cutting corners on quality.</p>
            <p><strong className="text-foreground">I fix things:</strong> When production breaks, I dig into logs, traces, and metrics to figure out what's wrong.</p>
            <p><strong className="text-foreground">I own my work:</strong> From writing the code to deploying it to monitoring it, I see things through.</p>
            <p><strong className="text-foreground">I've worked at scale:</strong> Built systems handling thousands of organizations and lots of users.</p>
          </div>
        </GlassPanel>

        {/* Currently Learning & Fun Facts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Currently Learning */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Currently exploring
            </h3>
            <div className="space-y-3">
              {[
                { name: "Go", desc: "For high-performance services" },
                { name: "Kubernetes", desc: "Container orchestration" },
                { name: "System Design", desc: "Distributed systems patterns" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-2 rounded-lg bg-foreground/[0.04]">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div>
                    <span className="font-medium text-sm">{item.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">- {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Fun Facts */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              When I'm not coding
            </h3>
            <div className="space-y-3">
              {[
                { icon: Gamepad2, text: "Gaming (mostly FPS and strategy)" },
                { icon: Music, text: "Listening to lo-fi while working" },
                { icon: Coffee, text: "Finding the best chai spots in Karachi" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-foreground/[0.04]">
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </Reveal>
    </section>
  );
}
