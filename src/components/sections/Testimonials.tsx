import { Card } from "@/components/ui/card";
import { Quote, Linkedin, Users } from "lucide-react";

const testimonials = [
  {
    name: "Ramsha Qasim",
    title: "Product Designer",
    image: "/testimonials/ramsha.jpeg",
    quote: "I had the opportunity to work with Wahab at our recent hackathon, and I was genuinely impressed by his strong backend expertise and problem-solving skills. He consistently delivered clean, scalable, and efficient solutions, even under tight deadlines.",
    linkedin: "https://www.linkedin.com/in/ramshaqasim/"
  },
  {
    name: "Faizan Ahmed",
    title: "Software Engineer",
    image: "/testimonials/faizan.jpeg",
    quote: "Strong on both backend and frontend. He's good at planning tasks, thinking through edge cases, and designing solutions that make sense. A thoughtful reviewer - his PR feedback makes you a better engineer.",
    linkedin: "https://www.linkedin.com/in/faizanahmed30/"
  },
  {
    name: "Moiz Ullah Khan",
    title: "MSc. AI @ BTU Cottbus",
    image: "/testimonials/moiz.jpeg",
    quote: "His dedication to software development is truly remarkable. He possesses excellent problem-solving skills and consistently delivers timely solutions to complex issues. A fast learner and skilled software engineer.",
    linkedin: "https://www.linkedin.com/in/moizullah-khan/"
  },
  {
    name: "Sumair Memon",
    title: "Senior Software Engineer",
    image: "/testimonials/sumair.jpeg",
    quote: "He possesses exceptional skills in multiple tech stacks and demonstrates strong analytical abilities that allow him to tackle complex challenges with ease. His contributions have always been top-notch.",
    linkedin: "https://www.linkedin.com/in/sumairmemon/"
  },
  {
    name: "Shaiz Akber",
    title: "Masters in Data Science",
    image: "/testimonials/shaiz.jpeg",
    quote: "Abdul Wahab is an exceptionally talented individual with excellent problem-solving skills. His strong work ethic, adaptability, and positive attitude make him a valuable asset to any team.",
    linkedin: "https://www.linkedin.com/in/shaizakber/"
  }
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="neo-card p-6 w-[350px] flex-shrink-0 flex flex-col">
      <Quote className="h-6 w-6 text-emerald-500/30 mb-3" />
      <p className="text-muted-foreground leading-relaxed mb-4 flex-1 text-sm">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=10b981&color=fff`;
              }}
            />
          </div>
          <div>
            <h4 className="font-semibold text-sm">{testimonial.name}</h4>
            <p className="text-xs text-muted-foreground">{testimonial.title}</p>
          </div>
        </div>
        <a
          href={testimonial.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button p-2 rounded-lg hover:scale-110 transition-all hover:text-blue-500"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </Card>
  );
}

export function Testimonials() {
  // Duplicate testimonials for seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4 text-emerald-500" />
            <span>What people say</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            LinkedIn recommendations from colleagues and managers
          </p>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex gap-6 animate-marquee hover:pause-animation">
          {doubledTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-10 text-center">
        <a
          href="https://www.linkedin.com/in/buttawb/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="h-4 w-4 text-blue-500" />
          <span>See all on LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
