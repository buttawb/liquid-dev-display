import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Calendar, Copy, Check, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { EMAILJS_CONFIG } from '@/config/emailjs';

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.USER_ID);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.TEMPLATE_ID, 
        {
          to_email: EMAILJS_CONFIG.TO_EMAIL,
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        }, 
        EMAILJS_CONFIG.USER_ID
      );
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast({ title: "Message sent successfully!" });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at buttawb@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="h-4 w-4 text-emerald-500" />
            <span>Contact me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Contact Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Call Card */}
            <Card className="p-6 border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Calendar className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Quick Chat</h3>
                  <p className="text-sm text-muted-foreground">15-min call</p>
                </div>
              </div>
              <Button 
                asChild
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <a href="https://calendly.com/buttawb" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </Card>

            {/* Contact Info */}
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-emerald-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium">buttawb@gmail.com</p>
                  </div>
                </div>
                <button 
                  onClick={() => copyToClipboard('buttawb@gmail.com', 'email')}
                  className="p-2 rounded-md hover:bg-muted transition-colors"
                >
                  {copiedField === 'email' ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-emerald-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">+92 332 2109944</p>
                  </div>
                </div>
                <button 
                  onClick={() => copyToClipboard('+923322109944', 'phone')}
                  className="p-2 rounded-md hover:bg-muted transition-colors"
                >
                  {copiedField === 'phone' ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <MapPin className="h-4 w-4 text-emerald-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/buttawb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-card border border-border hover:border-emerald-500/30 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/buttawb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-card border border-border hover:border-emerald-500/30 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="lg:col-span-3 p-6 lg:p-8">
            <h3 className="text-lg font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground mb-1.5 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground mb-1.5 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm text-muted-foreground mb-1.5 block">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-1.5 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Abdul Wahab Butt. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
