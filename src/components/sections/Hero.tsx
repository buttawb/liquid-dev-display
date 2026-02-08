import { Github, Linkedin, ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circle - top left */}
        <div
          className="absolute top-[15%] left-[10%] w-16 h-16 rounded-full border-2 border-emerald-500/40 animate-float-slow"
        />
        {/* Square - top right */}
        <div
          className="absolute top-[20%] right-[15%] w-12 h-12 border-2 border-emerald-500/30 rotate-45 animate-float-medium"
        />
        {/* Circle - bottom left */}
        <div
          className="absolute bottom-[25%] left-[8%] w-8 h-8 rounded-full bg-emerald-500/15 animate-float-medium"
        />
        {/* Triangle - right side */}
        <div
          className="absolute top-[45%] right-[8%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-emerald-500/30 animate-float-slow"
        />
        {/* Small circle - bottom right */}
        <div
          className="absolute bottom-[30%] right-[20%] w-6 h-6 rounded-full border-2 border-emerald-500/35 animate-float-fast"
        />
        {/* Hexagon shape - left middle */}
        <div
          className="absolute top-[55%] left-[15%] w-10 h-10 bg-emerald-500/15 rotate-12 animate-float-medium"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        {/* Small square - top center */}
        <div
          className="absolute top-[12%] left-[45%] w-5 h-5 border-2 border-emerald-500/25 animate-float-fast"
        />
        {/* Ring - bottom center */}
        <div
          className="absolute bottom-[15%] left-[40%] w-14 h-14 rounded-full border-2 border-emerald-500/30 animate-float-slow"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Profile Photo */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-xl">
              <img
                src="/profile.png"
                alt="Abdul Wahab Butt"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-background" />
          </div>
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
          <span className="text-foreground">Abdul Wahab Butt</span>
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl text-emerald-600 dark:text-emerald-400 font-medium mb-4">
          Software Engineer
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Building scalable SaaS platforms with 3+ years of production experience
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-emerald-500/50 hover:bg-emerald-500/10 hover:border-emerald-500"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Let's Talk
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/buttawb"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card border border-border hover:border-emerald-500/50 hover:text-emerald-500 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/buttawb/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card border border-border hover:border-emerald-500/50 hover:text-emerald-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-emerald-500 transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
