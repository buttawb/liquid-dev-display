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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-green-50/30 to-teal-50/50 dark:from-emerald-950/30 dark:via-green-950/20 dark:to-teal-950/30">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`floating absolute blob-shape gradient-green opacity-10`}
            style={{
              width: `${30 + i * 10}px`,
              height: `${30 + i * 10}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="block text-foreground/90 mb-2">Hello World, I'm</span>
                <span className="block gradient-text font-black">
                  Abdul Wahab Butt
                </span>
              </h1>
              
              <div className="text-lg md:text-xl text-muted-foreground font-light flex items-center justify-center lg:justify-start gap-2">
                <Code className="h-6 w-6 text-emerald-500" />
                <span className="typing-text">Software Engineer</span>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Driven to create meaningful digital experiences by writing clean, maintainable code and solving problems that matter.
            </p>

            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-3 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4 text-emerald-500" />
              <span className="gradient-text">Available for new opportunities</span>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                size="lg" 
                className="gradient-green text-white border-0 hover:scale-105 transition-all duration-300 px-6 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="/AbdulWahabButtCV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-button hover:scale-105 transition-all duration-300 px-6 py-3 text-base font-semibold rounded-xl"
                onClick={scrollToAbout}
              >
                Explore My Work
              </Button>
            </div> */}

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-6">
              {[
                { icon: Github, href: "https://github.com/buttawb", label: "GitHub", color: "hover:text-gray-600" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/buttawb/", label: "LinkedIn", color: "hover:text-blue-600" },
                { icon: Mail, href: "mailto:buttawb@gmail.com", label: "Email", color: "hover:text-emerald-600" },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-button p-3 rounded-xl hover:scale-110 transition-all duration-300 group ${color}`}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Main photo container with gradient border */}
                <div className="absolute inset-0 rounded-full border-4 border-emerald-500 p-0">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/profile.png"
                      alt="Abdul Wahab Butt"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>

                {/* Floating decoration elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 gradient-green rounded-full flex items-center justify-center floating">
                  <Code className="h-6 w-6 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-10 h-10 glass-card rounded-full flex items-center justify-center floating" style={{animationDelay: '1s'}}>
                  <Sparkles className="h-5 w-5 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-3 rounded-full glass-button hover:scale-110 transition-all duration-300"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
