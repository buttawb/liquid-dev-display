import { Badge } from "@/components/ui/badge";
import { GlassCard, GlassPill } from "@/components/glass";
import { Reveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap, MapPin, ChevronDown, Route } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface TimelineEntry {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
}

const timelineData: TimelineEntry[] = [
  {
    id: "1",
    type: "work",
    title: "Software Engineer",
    organization: "Avialdo Solutions",
    location: "Karachi, Pakistan",
    duration: "Jan 2025 - Present",
    description: "Working on multi-tenant SaaS platforms with focus on reliability and performance.",
    achievements: [
      "Platform serving 2,000+ organizations",
      "Set up monitoring with Datadog APM and New Relic",
      "Infrastructure work using Terraform",
      "Code reviews and mentoring junior developers",
    ],
    skills: ["Engineering", "Acting Team Lead", "Django", "Terraform", "AWS", "GraphQL", "Next.js"],
  },
  {
    id: "2",
    type: "work",
    title: "Backend Engineer",
    organization: "Avialdo Solutions",
    location: "Karachi, Pakistan",
    duration: "Aug 2024 - Dec 2024",
    description: "Led backend development for logistics and B2B platforms with real-time features.",
    achievements: [
      "Integrated OneSignal, Twilio, Firebase, Google OAuth2",
      "Built real-time features with Django Channels",
      "Architecture decisions and code reviews",
      "AWS infrastructure and Docker pipelines",
    ],
    skills: ["Django", "WebSocket", "GraphQL", "Celery", "AWS"],
  },
  {
    id: "3",
    type: "work",
    title: "Junior Backend Engineer",
    organization: "Avialdo Solutions",
    location: "Karachi, Pakistan",
    duration: "Sep 2023 - Jul 2024",
    description: "Developed features for logistics and B2B platforms using Django and REST APIs.",
    achievements: [
      "Async tasks with Celery + Redis, 30% efficiency boost",
      "API integration with Next.js frontend",
      "20+ backend tasks weekly",
    ],
    skills: ["Django", "REST APIs", "Celery", "Redis"],
  },
  {
    id: "4",
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "NED University of Engineering and Technology",
    location: "Karachi, Pakistan",
    duration: "2019 - 2023",
    description: "Graduated with BSCS degree. Academic Representative for Computer Science Department.",
    achievements: [
      "CGPA: 3.2/4.0",
      "Elected Academic Representative",
      "Bridged communication between students and faculty",
    ],
    skills: ["Python", "Data Structures", "Databases", "Software Engineering"],
  },
  {
    id: "5",
    type: "work",
    title: "Software Developer",
    organization: "DOW University of Health Sciences",
    location: "Karachi, Pakistan",
    duration: "Jun 2022 - May 2023",
    description: "Built deep learning web app for fruit fly analysis and feature extraction.",
    achievements: [
      "Web app with deep learning for species classification",
      "Automated manual research processes",
      "Applied R&D in healthcare/academic environment",
    ],
    skills: ["Python", "Deep Learning", "JavaScript", "Research"],
  },
];

/** Scroll-linked progress for the rail fill + which nodes have been passed. */
function useRailProgress(count: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    // Respect reduced motion: render the rail fully filled, statically.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      setActiveCount(count);
      return;
    }
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(Math.max((vh * 0.5 - rect.top) / rect.height, 0), 1);
        setProgress(p);
        let c = 0;
        nodeRefs.current.forEach((n) => {
          if (n && n.getBoundingClientRect().top < vh * 0.55) c++;
        });
        setActiveCount(c);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, [count]);

  return { containerRef, nodeRefs, progress, activeCount };
}

function TimelineItem({
  entry,
  index,
  isActive,
  registerNode,
}: {
  entry: TimelineEntry;
  index: number;
  isActive: boolean;
  registerNode: (el: HTMLElement | null) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = entry.type === "work" ? Briefcase : GraduationCap;
  const isLeft = index % 2 === 0;
  const preview = entry.achievements.slice(0, 2);
  const rest = entry.achievements.slice(2);

  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-x-14 mb-8 last:mb-0">
      {/* Node - left rail on mobile, center on desktop */}
      <div
        ref={registerNode}
        className={cn(
          "absolute z-10 left-0 top-1.5 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full glass-card flex items-center justify-center transition-all duration-500",
          isActive && "ring-2 ring-primary shadow-[0_0_18px_hsl(var(--primary)/0.45)]"
        )}
      >
        <Icon className={cn("h-3.5 w-3.5 transition-colors", isActive ? "text-primary" : "text-muted-foreground")} />
      </div>

      {/* Card */}
      <div
        className={cn(
          "pl-12 md:pl-0",
          isLeft ? "md:col-start-1 md:pr-14" : "md:col-start-2 md:pl-14"
        )}
      >
        <GlassCard className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="font-semibold text-foreground">{entry.title}</h3>
              <p className="text-primary font-medium text-sm">{entry.organization}</p>
            </div>
            <Badge variant="outline" className="text-xs font-normal border-foreground/10 bg-foreground/[0.03]">
              {entry.duration}
            </Badge>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <MapPin className="h-3 w-3" />
            {entry.location}
          </div>

          <p className="text-sm text-muted-foreground mb-3">{entry.description}</p>

          <ul className="space-y-1">
            {preview.map((achievement, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>

          <div className={cn("overflow-hidden transition-all duration-300", isExpanded ? "max-h-96 mt-2" : "max-h-0")}>
            {rest.length > 0 && (
              <ul className="space-y-1">
                {rest.map((achievement, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
            <div className="pt-3 flex flex-wrap gap-1.5">
              {entry.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs border-foreground/10 bg-foreground/[0.03]">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs text-primary hover:opacity-80 mt-3 transition-opacity"
          >
            <ChevronDown className={cn("h-3 w-3 transition-transform", isExpanded && "rotate-180")} />
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </GlassCard>
      </div>
    </div>
  );
}

export function Timeline() {
  const { containerRef, nodeRefs, progress, activeCount } = useRailProgress(timelineData.length);

  return (
    <section id="journey" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <GlassPill className="mb-6">
              <Route className="h-4 w-4 text-primary" />
              <span>Career path</span>
            </GlassPill>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Where I've worked and what I've learned along the way.
            </p>
          </div>
        </Reveal>

        {/* Timeline with scroll-tracking rail */}
        <div ref={containerRef} className="relative">
          {/* Rail track */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px md:-translate-x-1/2 bg-border/70" />
          {/* Rail fill (grows with scroll) + glowing tip */}
          <div
            className="absolute top-0 left-4 md:left-1/2 w-px md:-translate-x-1/2 bg-gradient-to-b from-primary via-primary to-primary/40"
            style={{ height: `${progress * 100}%` }}
          >
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_3px_hsl(var(--primary)/0.55)]" />
          </div>

          {timelineData.map((entry, index) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              index={index}
              isActive={index < activeCount}
              registerNode={(el) => (nodeRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
