import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

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

function TimelineItem({ entry, isLast }: { entry: TimelineEntry; isLast: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = entry.type === "work" ? Briefcase : GraduationCap;

  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center">
        <Icon className="h-3 w-3 text-emerald-500" />
      </div>

      {/* Content */}
      <div className="bg-card border border-border rounded-lg p-5 hover:border-emerald-500/30 transition-colors">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-semibold text-foreground">{entry.title}</h3>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">
              {entry.organization}
            </p>
          </div>
          <Badge variant="secondary" className="text-xs font-normal">
            {entry.duration}
          </Badge>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin className="h-3 w-3" />
          {entry.location}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-3">
          {entry.description}
        </p>

        {/* Achievements (collapsible) */}
        <div className={`space-y-2 overflow-hidden transition-all ${isExpanded ? "max-h-96" : "max-h-0"}`}>
          <div className="pt-2 border-t border-border">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
              Key Achievements
            </p>
            <ul className="space-y-1">
              {entry.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1">
              {entry.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Expand button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 mt-3 transition-colors"
        >
          <ChevronDown className={`h-3 w-3 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="journey" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            My Journey
          </h2>
          <p className="text-muted-foreground">
            Where I've worked and what I've learned along the way
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {timelineData.map((entry, index) => (
            <TimelineItem 
              key={entry.id} 
              entry={entry} 
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
