
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, FileText, Shield, Clock, Users, Award, Star } from "lucide-react";

const achievements = [
  {
    title: "Streamlined Onboarding Process",
    description: "Authored technical documentation, reducing onboarding time by 40% for new developers.",
    icon: FileText,
    category: "Documentation",
    impact: "40% Time Reduction",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Outstanding Team Player Award",
    description: "Acknowledged by Avialdo Solutions for effective collaboration and contributions during the quarter May 2024 to August 2024.",
    icon: Trophy,
    category: "Recognition",
    impact: "Q2 2024 Winner",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Production Support & On-Call Duties",
    description: "Participated in on-call rotation, ensuring 24/7 availability to resolve critical production issues within 10 minutes and minimize downtime.",
    icon: Shield,
    category: "Operations",
    impact: "<10min Response",
    color: "from-emerald-500 to-green-500"
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
            Notable accomplishments that demonstrate impact and excellence in my professional journey
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
            <span>Committed to continuous growth and impactful contributions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
