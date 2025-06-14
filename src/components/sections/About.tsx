
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Zap, Heart, Coffee, Code, Clock, Sparkles, Rocket, Brain, MapPin } from "lucide-react";

export function About() {
  const highlights = [
    "3+ Years Experience",
    "Full-Stack Development", 
    "Django & Next.js Expert",
    "Cloud Deployment",
    "Team Leadership"
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
          <div className="inline-flex items-center gap-2 text-lg text-muted-foreground mb-4">
            <MapPin className="h-5 w-5 text-emerald-500" />
            <span>Based in Karachi, Pakistan</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate Full-Stack Developer with nearly 3 years of professional experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Content - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-muted-foreground">
                Hi, I'm <strong className="text-foreground">Abdul Wahab Butt</strong>, a passionate Full-Stack Developer based in Karachi, Pakistan, with nearly 3 years of professional experience building scalable, efficient, and user-centric web applications.
              </p>
              
              <p className="text-base leading-relaxed text-muted-foreground">
                From crafting clean backend architectures in Django to collaborating closely with frontend teams and deploying to cloud environments, I love turning complex problems into practical, production-ready solutions.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                I'm not just a coder; I care deeply about <em>why</em> things are being built and <em>who</em> they're being built for. This has led me to take on responsibilities like mentoring junior engineers, collaborating with UI/UX designers, and contributing to architectural decisions that make products truly scalable.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 p-6 rounded-xl border-l-4 border-emerald-500">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-emerald-500" />
                  What sets me apart?
                </h3>
                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <p><strong className="text-emerald-600 dark:text-emerald-400">Ownership mindset:</strong> I treat every project like it's my own — from ideation to deployment and beyond.</p>
                  <p><strong className="text-emerald-600 dark:text-emerald-400">Fast learner:</strong> Whether it's integrating a new framework like Next.js or picking up a new cloud tool, I dive in with confidence and curiosity.</p>
                  <p><strong className="text-emerald-600 dark:text-emerald-400">Team player:</strong> I thrive in collaborative environments where knowledge sharing, peer reviews, and problem-solving go hand in hand.</p>
                  <p><strong className="text-emerald-600 dark:text-emerald-400">Builder's heart:</strong> I enjoy creating real-world products that solve genuine problems — whether it's an internal logistics platform or an automated classification system using image processing and deep learning.</p>
                  <p><strong className="text-emerald-600 dark:text-emerald-400">Growth-oriented:</strong> I value constant improvement — in code, in systems, and in myself. I'm always learning, always iterating.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-blue-500" />
                  Mindset & Values
                </h3>
                <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <p>• I believe clear communication is just as important as clean code.</p>
                  <p>• I prioritize maintainability, performance, and user needs over shortcuts and temporary fixes.</p>
                  <p>• I'm driven by a desire to create impact, not just output.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Rocket className="h-5 w-5 text-emerald-500" />
                Key Highlights
              </h3>
              <div className="flex flex-wrap gap-2">
                {highlights.map((highlight) => (
                  <Badge 
                    key={highlight} 
                    variant="secondary" 
                    className="glass-card px-3 py-1 text-sm font-medium hover:scale-105 transition-transform"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid - Takes 1 column */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { 
                number: "3+", 
                label: "Years Experience", 
                color: "from-emerald-400 to-green-500",
                icon: Clock
              },
              { 
                number: "15+", 
                label: "Projects Completed", 
                color: "from-green-400 to-teal-500",
                icon: Code
              },
              { 
                number: "500+", 
                label: "Coffee Cups", 
                color: "from-teal-400 to-cyan-500",
                icon: Coffee
              },
              { 
                number: "∞", 
                label: "Ideas Generated", 
                color: "from-cyan-400 to-blue-500",
                icon: Brain
              },
            ].map((stat) => (
              <Card key={stat.label} className="neo-card p-4 text-center hover:scale-105 transition-all duration-300 group">
                <div className="flex justify-center mb-2">
                  <stat.icon className={`h-5 w-5 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                </div>
                <div className={`text-xl md:text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.number}
                </div>
                <div className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-green mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
