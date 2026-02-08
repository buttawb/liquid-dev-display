
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Shield, Clock, Users, Award, Star } from "lucide-react";

const achievements = [
  {
    title: "Better Code Quality",
    description: "Did 50+ code reviews, caught bugs before they hit production, and helped the team write cleaner code.",
    icon: Shield,
    category: "Quality",
    impact: "30% Fewer Bugs",
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Scale",
    description: "Worked on multi-tenant platform serving thousands of organizations. Learned a lot about data isolation and handling different use cases.",
    icon: Users,
    category: "Scale",
    impact: "2,000+ Orgs",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Production Support",
    description: "On-call rotation, debugging production issues at odd hours. Got good at reading logs and traces to find problems fast.",
    icon: Clock,
    category: "Operations",
    impact: "<10 Min Response",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "System Reliability",
    description: "Helped keep systems running smoothly through monitoring, alerts, and fixing issues before users notice.",
    icon: Trophy,
    category: "Reliability",
    impact: "99.5% Uptime",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Team Player Award",
    description: "Got recognized at Avialdo for being helpful to the team and shipping stuff on time.",
    icon: Award,
    category: "Recognition",
    impact: "Q2 2024",
    color: "from-pink-500 to-rose-500"
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border">
          <Star className="h-4 w-4 text-emerald-500" />
            <span>Key Achievements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Some things I'm proud of
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="professional-card p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {achievement.category}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                  {achievement.description}
                </p>

                {/* Impact Badge */}
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-emerald-500" />
                  <Badge className={`bg-gradient-to-r ${achievement.color} text-white border-0 text-xs font-medium`}>
                    {achievement.impact}
                  </Badge>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-6 -translate-y-6">
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${achievement.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-full text-sm text-gray-600 dark:text-gray-300">
            <Users className="h-4 w-4 text-emerald-500" />
            <span>Always learning, always shipping</span>
          </div>
        </div>
      </div>
    </section>
  );
}
