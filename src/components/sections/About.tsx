import { Card } from "@/components/ui/card";
import { User, GraduationCap, Calendar, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <User className="h-4 w-4 text-primary" />
            <span>Get to know me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Content - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a <strong className="text-foreground">Backend Engineer</strong> with <strong className="text-primary">3+ years</strong> of experience building enterprise SaaS platforms. I specialize in Python and Django, with expertise in multi-tenant architecture, REST APIs, GraphQL, and real-time features using Django Channels and WebSockets.
              </p>
              
              <p>
                At <strong className="text-foreground">Avialdo Solutions</strong> (US-based company), I architect backend systems that serve thousands of users daily. My work includes building scalable APIs, optimizing database performance with PostgreSQL and Redis, implementing secure authentication systems, and integrating third-party services. I collaborate with distributed teams across time zones and focus on writing clean, maintainable code.
              </p>

              <p>
                I'm passionate about solving complex technical challenges, mentoring teammates through code reviews, and building reliable systems that make a real impact.
              </p>
            </div>
          </div>

          {/* Education Card - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="neo-card p-6 glow-hover">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl gradient-primary">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Education</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Bachelor of Science in Computer Science</h4>
                  <p className="text-muted-foreground">Usman Institute of Technology</p>
                  <p className="text-sm text-muted-foreground">(Affiliated with NED University)</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>2019 - 2023</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="h-4 w-4 text-primary" />
                    <span>GPA: 3.2/4.0</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
