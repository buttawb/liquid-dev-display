
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, ChevronDown, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-green-50/30 to-teal-50/50 dark:from-emerald-950/30 dark:via-green-950/20 dark:to-teal-950/30">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`floating absolute blob-shape gradient-green opacity-10`}
            style={{
              width: `${40 + i * 15}px`,
              height: `${40 + i * 15}px`,
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4 text-emerald-500" />
            <span className="gradient-text">Available for new opportunities</span>
          </div>

          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
              <span className="block text-foreground/90 mb-4">Hello World, I'm</span>
              <span className="block gradient-text font-black">
                Buttawb
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-muted-foreground font-light flex items-center justify-center gap-3">
              <Code className="h-8 w-8 text-emerald-500" />
              <span className="typing-text">Full-Stack Developer</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Crafting digital experiences with modern technologies, 
            AI integration, and pixel-perfect design that brings ideas to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-green text-white border-0 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-2xl"
            >
              <Download className="mr-3 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-button hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl"
              onClick={scrollToAbout}
            >
              Explore My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 pt-12">
            {[
              { icon: Github, href: "https://github.com/buttawb", label: "GitHub", color: "hover:text-gray-600" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/buttawb/", label: "LinkedIn", color: "hover:text-blue-600" },
              { icon: Mail, href: "mailto:your-email@example.com", label: "Email", color: "hover:text-emerald-600" },
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-button p-4 rounded-2xl hover:scale-110 transition-all duration-300 group ${color}`}
                aria-label={label}
              >
                <Icon className="h-6 w-6 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-3 rounded-full glass-button hover:scale-110 transition-all duration-300"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
