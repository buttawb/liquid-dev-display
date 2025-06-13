
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function About() {
  const highlights = [
    "3+ Years Experience",
    "Full-Stack Development",
    "AI/ML Integration",
    "Mobile App Development",
    "Problem Solver"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions and pushing the boundaries of technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a dedicated Software Developer with a strong foundation in full-stack development 
                and a passion for emerging technologies. Currently pursuing my Bachelor's in Software 
                Engineering at COMSATS University Islamabad, I've gained valuable experience through 
                internships and personal projects.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My expertise spans across modern web technologies, mobile app development, and AI/ML 
                integration. I enjoy tackling complex problems and turning innovative ideas into 
                functional, user-friendly applications.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {highlights.map((highlight) => (
                  <Badge 
                    key={highlight} 
                    variant="secondary" 
                    className="glass-card px-3 py-1 text-sm"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "15+", label: "Projects Completed" },
              { number: "5+", label: "Technologies" },
              { number: "100%", label: "Commitment" },
            ].map((stat) => (
              <Card key={stat.label} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
