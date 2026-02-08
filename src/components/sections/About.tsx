import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Zap, Heart, Code, Clock, Sparkles, Rocket, Brain, MapPin, BookOpen, Gamepad2, Music, Coffee } from "lucide-react";

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
  const highlights = [
    "3+ Years Experience",
    "Full-Stack Development",
    "Django & Next.js Expert",
    "Cloud & Infrastructure",
    "Acting Technical Lead"
  ];

  const values = [
    {
      icon: Target,
      title: "Ownership Mindset",
      description: "I treat every project like it's my own"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Diving into new technologies with confidence"
    },
    {
      icon: Heart,
      title: "Builder's Heart",
      description: "Creating products that solve real problems"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <User className="h-4 w-4 text-emerald-500" />
            <span>Get to know me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          {/* <div className="inline-flex items-center gap-2 text-lg text-muted-foreground mb-4">
            <MapPin className="h-5 w-5 text-emerald-500" />
            <span>Based in Karachi, Pakistan</span>
          </div> */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Learn who I am and what I do.
          </p>
        </div>
       
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Content - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-muted-foreground">
                Hey, I'm <strong className="text-foreground">Abdul Wahab Butt</strong> — a software engineer based in Karachi with 3+ years of building stuff that runs in production. Currently working on SaaS platforms that serve thousands of organizations.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                My bread and butter is Django and Python, but I also work with Next.js, cloud infra (AWS mostly), and whatever tools help ship faster. I've been doing more infrastructure and monitoring work lately with Terraform, Datadog, and New Relic.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                Beyond coding, I do code reviews, help junior devs, and handle production issues when things go wrong. I like understanding the full picture — from writing the code to deploying it to fixing it at 2am when something breaks.
              </p>
            </div>
          </div>

          {/* Stats Grid - Takes 1 column */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { end: 3, suffix: "+", label: "Years Experience", color: "from-emerald-400 to-green-500", icon: Clock },
              { end: 2000, suffix: "+", label: "Orgs Served", color: "from-green-400 to-teal-500", icon: Code },
              { end: 99, suffix: ".5%", label: "System Uptime", color: "from-teal-400 to-cyan-500", icon: Rocket },
              { end: 1, suffix: "M+", label: "Users Reached", color: "from-cyan-400 to-blue-500", icon: Brain },
            ].map((stat) => (
              <Card key={stat.label} className="neo-card p-4 text-center hover:scale-105 transition-all duration-300 group">
                <div className="flex justify-center mb-2">
                  <stat.icon className={`h-5 w-5 text-emerald-500`} />
                </div>
                <div className={`text-xl md:text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  <AnimatedStat end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

         {/* What sets me apart box - full width */}
         <div className="w-full mb-8 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 p-6 rounded-xl border-l-4 border-emerald-500">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-emerald-500" />
            What I bring to the table
          </h3>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p><strong className="text-emerald-600 dark:text-emerald-400">I ship fast:</strong> Use modern tools to move quickly without cutting corners on quality.</p>
            <p><strong className="text-emerald-600 dark:text-emerald-400">I fix things:</strong> When production breaks, I dig into logs, traces, and metrics to figure out what's wrong.</p>
            <p><strong className="text-emerald-600 dark:text-emerald-400">I own my work:</strong> From writing the code to deploying it to monitoring it — I see things through.</p>
            <p><strong className="text-emerald-600 dark:text-emerald-400">I've worked at scale:</strong> Built systems handling thousands of organizations and lots of users.</p>
          </div>
        </div>

        {/* Currently Learning & Fun Facts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Currently Learning */}
          <Card className="neo-card p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-500" />
              Currently exploring
            </h3>
            <div className="space-y-3">
              {[
                { name: "Go", desc: "For high-performance services" },
                { name: "Kubernetes", desc: "Container orchestration" },
                { name: "System Design", desc: "Distributed systems patterns" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <span className="font-medium text-sm">{item.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">— {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Fun Facts */}
          <Card className="neo-card p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-500" />
              When I'm not coding
            </h3>
            <div className="space-y-3">
              {[
                { icon: Gamepad2, text: "Gaming (mostly FPS and strategy)" },
                { icon: Music, text: "Listening to lo-fi while working" },
                { icon: Coffee, text: "Finding the best chai spots in Karachi" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                  <item.icon className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
