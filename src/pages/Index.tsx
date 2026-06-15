import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ToolsWorkflow } from "@/components/sections/ToolsWorkflow";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { Achievements } from "@/components/sections/Achievements";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Ambient backdrop — soft drifting color blooms for the glass to refract.
          Fixed behind all content; sections sit transparent over this. */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] h-[55vh] w-[55vh] rounded-full bg-emerald-400/20 dark:bg-emerald-500/10 blur-[120px] animate-orb-a" />
        <div className="absolute top-[35%] -right-[10%] h-[60vh] w-[60vh] rounded-full bg-teal-400/16 dark:bg-teal-500/10 blur-[130px] animate-orb-b" />
        <div className="absolute bottom-[-10%] left-[20%] h-[50vh] w-[50vh] rounded-full bg-sky-300/14 dark:bg-indigo-500/10 blur-[120px] animate-orb-c" />
        {/* faint grid texture, radially masked so it's a whisper not noise */}
        <div
          className="absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] bg-[linear-gradient(hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.04)_1px,transparent_1px)] bg-[size:56px_56px]"
        />
      </div>

      <Navigation />
      <main className="relative overflow-x-hidden">
        <Hero />
        <About />
        <ToolsWorkflow />
        <Skills />
        <Timeline />
        <Achievements />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
