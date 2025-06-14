
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, MessageCircle, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "buttawb@gmail.com",
      href: "mailto:buttawb@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 3322109944",
      href: "tel:+923322109944",
      description: "Call for urgent matters"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karachi, Pakistan",
      // href: "#",
      description: "Available for work"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/buttawb", label: "GitHub", color: "hover:text-gray-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/buttawb/", label: "LinkedIn", color: "hover:text-blue-600" },
    // { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-8">
            <MessageCircle className="h-4 w-4 text-emerald-500" />
            <span>Let's connect</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborations, 
                or just chat about the latest in technology and innovation. 
                Choose your preferred way to connect below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="neo-card p-6 hover:scale-[1.02] transition-all duration-300 group">
                  <a 
                    href={item.href}
                    className="flex items-center gap-6"
                  >
                    <div className="gradient-green p-4 rounded-2xl group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.value}</p>
                      <p className="text-sm text-muted-foreground/70">{item.description}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-button p-4 rounded-2xl hover:scale-110 transition-all duration-300 ${color}`}
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Simplified styling */}
          <Card className="neo-card p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Abdul Wahab Butt"
                    required
                    className="h-12 border-border/50 bg-background/50 backdrop-blur-sm focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="buttawb@gmail.com"
                    required
                    className="h-12 border-border/50 bg-background/50 backdrop-blur-sm focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What would you like to discuss?"
                  required
                  className="h-12 border-border/50 bg-background/50 backdrop-blur-sm focus:border-emerald-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                  required
                  className="border-border/50 bg-background/50 backdrop-blur-sm focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full gradient-green text-white border-0 hover:scale-[1.02] transition-all duration-300 h-12 text-lg font-semibold"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Enhanced Footer */}
        <div className="mt-32 pt-16 border-t border-border/50">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30">
            <p className="text-muted-foreground text-sm">
              © 2025 Abdul Wahab Butt. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {/* <a href="#" className="text-muted-foreground hover:text-emerald-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald-500 text-sm transition-colors">
                Terms of Service
              </a> */}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
