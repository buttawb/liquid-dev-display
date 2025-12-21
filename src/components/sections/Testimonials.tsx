import { Card } from "@/components/ui/card";
import { Quote, Linkedin, MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    quote: "[Testimonial text will be added from LinkedIn recommendations]",
    name: "Name",
    title: "Title at Company",
    image: null,
    linkedIn: "#",
  },
  {
    quote: "[Testimonial text will be added from LinkedIn recommendations]",
    name: "Name",
    title: "Title at Company",
    image: null,
    linkedIn: "#",
  },
  {
    quote: "[Testimonial text will be added from LinkedIn recommendations]",
    name: "Name",
    title: "Title at Company",
    image: null,
    linkedIn: "#",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquareQuote className="h-4 w-4 text-primary" />
            <span>What others say</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Recommendations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues and collaborators
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="neo-card p-6 glow-hover relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

              {/* Quote Text */}
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>

                {/* LinkedIn Link */}
                <a 
                  href={testimonial.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-[#0077B5]/20 transition-colors"
                  aria-label="View LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5 text-[#0077B5]" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Testimonials will be updated with actual LinkedIn recommendations
        </p>
      </div>
    </section>
  );
}
