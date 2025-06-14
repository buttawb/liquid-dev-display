
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Zap, Heart, Coffee, Code, Clock, Sparkles, Rocket, Brain } from "lucide-react";

export function About() {
  const highlights = [
    "3+ Years Experience",
    "Full-Stack Development", 
    "AI/ML Integration",
    "Mobile App Development",
    "Problem Solver"
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every line of code serves a purpose"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing cutting-edge technologies"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Love what I do, do what I love"
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and pushing the boundaries of technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Content - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-muted-foreground">
                🚀 Hey there! I'm Abdul Wahab Butt, a passionate Software Developer who turns coffee into code and ideas into reality. 
                Currently pursuing my Bachelor's in Software Engineering at COMSATS University Islamabad, I've been on an incredible 
                journey of building digital experiences that matter.
              </p>
              
              <p className="text-base leading-relaxed text-muted-foreground">
                💡 What drives me? The thrill of solving complex problems with elegant solutions! From crafting pixel-perfect 
                user interfaces to architecting robust backend systems, I live for those "Aha!" moments when everything clicks into place. 
                My expertise spans the full spectrum - React, Node.js, AI/ML integration, mobile development, and beyond.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                🎯 I'm not just a developer; I'm a digital craftsman who believes technology should enhance human experiences. 
                Whether it's building AI-powered platforms or creating seamless mobile apps, I approach every project with curiosity, 
                creativity, and a relentless pursuit of excellence. Ready to bring your next big idea to life!
              </p>
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
