import { Github, Linkedin, ArrowDown, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassPill } from "@/components/glass";

export function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-24 px-6 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text column */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <GlassPill className="mb-7">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to remote &amp; relocation · backend / infra roles
          </GlassPill>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-4">
            Abdul Wahab Butt
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-primary mb-5">
            Backend &amp; Infrastructure Engineer
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6">
            I keep multi-tenant SaaS running for{" "}
            <span className="text-foreground font-semibold">2,000+ organizations</span> — from
            Django services to Terraform infra to the 2am page.
          </p>

          <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-9">
            <MapPin className="h-4 w-4 text-primary" />
            Karachi, Pakistan · GMT+5
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-9">
            <Button
              size="lg"
              onClick={() => scrollTo("#projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#contact")}
              className="glass-button border-0 hover:text-primary px-8"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Let's Talk
            </Button>
          </div>

          {/* Socials */}
          <div className="flex justify-center lg:justify-start gap-3">
            <a
              href="https://github.com/buttawb"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-3 rounded-xl hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/buttawb/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-3 rounded-xl hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Photo column */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* soft glow anchoring the photo on the right */}
            <div aria-hidden className="absolute -inset-8 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative glass-card rounded-full p-2.5">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden ring-1 ring-white/40">
                <img
                  src="/profile.webp"
                  alt="Abdul Wahab Butt"
                  width={352}
                  height={352}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="absolute bottom-5 right-5 lg:bottom-7 lg:right-7 w-5 h-5 rounded-full bg-primary ring-4 ring-background" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:inline-flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-breathe" />
      </button>
    </section>
  );
}
