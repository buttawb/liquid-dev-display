
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Zap, Heart } from "lucide-react";

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
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-8">
            <User className="h-4 w-4 text-emerald-500" />
            <span>Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and pushing the boundaries of technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a dedicated Software Developer with a strong foundation in full-stack development 
                and a passion for emerging technologies. Currently pursuing my Bachelor's in Software 
                Engineering at COMSATS University Islamabad, I've gained valuable experience through 
                internships and personal projects.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My expertise spans across modern web technologies, mobile app development, and AI/ML 
                integration. I enjoy tackling complex problems and turning innovative ideas into 
                functional, user-friendly applications that make a real difference.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Key Highlights</h3>
              <div className="flex flex-wrap gap-3">
                {highlights.map((highlight) => (
                  <Badge 
                    key={highlight} 
                    variant="secondary" 
                    className="glass-card px-4 py-2 text-sm font-medium"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "3+", label: "Years Experience", color: "from-emerald-400 to-green-500" },
              { number: "15+", label: "Projects Completed", color: "from-green-400 to-teal-500" },
              { number: "5+", label: "Technologies", color: "from-teal-400 to-cyan-500" },
              { number: "100%", label: "Commitment", color: "from-cyan-400 to-blue-500" },
            ].map((stat) => (
              <Card key={stat.label} className="neo-card p-8 text-center hover:scale-105 transition-all duration-300 group">
                <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-green mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
