import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard, GlassPill } from "@/components/glass";
import { Reveal } from "@/hooks/use-reveal";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Calendar, Copy, Check, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { EMAILJS_CONFIG } from '@/config/emailjs';

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
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

  const inputClass =
    "bg-foreground/[0.03] border-foreground/10 focus-visible:ring-primary";

  return (
    <section id="contact" className="relative py-24 px-6">
      <Reveal className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <GlassPill className="mb-6">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span>Contact me</span>
          </GlassPill>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a role, a project, or just want to talk infra? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left - contact options */}
          <div className="md:col-span-2 space-y-4">
            <GlassCard className="p-6 ring-1 ring-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Quick Chat</h3>
                  <p className="text-sm text-muted-foreground">15-min intro call</p>
                </div>
              </div>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://calendly.com/buttawb" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </GlassCard>

            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-foreground/[0.04] border border-foreground/10">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium">buttawb@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('buttawb@gmail.com', 'email')}
                  className="p-2 rounded-lg hover:bg-foreground/[0.06] transition-colors"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-foreground/[0.04] border border-foreground/10">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">+92 332 2109944</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+923322109944', 'phone')}
                  className="p-2 rounded-lg hover:bg-foreground/[0.06] transition-colors"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-foreground/[0.04] border border-foreground/10">
                <MapPin className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">Karachi, Pakistan · GMT+5</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              <a
                href="https://github.com/buttawb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl glass-button hover:text-primary"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/buttawb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl glass-button hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right - form */}
          <GlassCard className="md:col-span-3 p-6 lg:p-8">
            <h3 className="text-lg font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                  <Input id="name" name="name" placeholder="Your name" required value={formData.name} onChange={handleInputChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required value={formData.email} onChange={handleInputChange} className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm text-muted-foreground mb-1.5 block">Subject</label>
                <Input id="subject" name="subject" placeholder="What's this about?" required value={formData.subject} onChange={handleInputChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required value={formData.message} onChange={handleInputChange} className={`${inputClass} resize-none`} />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {isLoading ? "Sending..." : (<><Send className="mr-2 h-4 w-4" />Send Message</>)}
              </Button>
            </form>
          </GlassCard>
        </div>
      </Reveal>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-20 pt-8 border-t border-border/50">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="glass-card flex h-9 px-2.5 items-center justify-center rounded-xl text-sm font-extrabold tracking-tight">
              AWB
            </span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Abdul Wahab Butt
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:buttawb@gmail.com" className="hover:text-primary transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/buttawb/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
