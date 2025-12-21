import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, MessageCircle, Github, Linkedin, Copy, Check, Loader2 } from "lucide-react";
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
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const { toast } = useToast();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.USER_ID);
  }, []);

  const copyToClipboard = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.TEMPLATE_ID, 
        templateParams, 
        EMAILJS_CONFIG.USER_ID
      );
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Thanks! I'll get back to you soon.",
        description: "Your message has been sent successfully.",
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please email me directly at buttawb@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "buttawb@gmail.com",
      href: "mailto:buttawb@gmail.com",
      copyable: true,
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 332 2109944",
      href: "tel:+923322109944",
      copyable: true,
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karachi, Pakistan",
      copyable: false,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/buttawb/", label: "LinkedIn", color: "hover:text-[#0077B5]" },
    { icon: Github, href: "https://github.com/buttawb", label: "GitHub", color: "hover:text-foreground" },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4 text-primary" />
            <span>Let's connect</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project? Let's talk!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="neo-card p-4 glow-hover">
              <div className="flex items-center justify-between">
                <a 
                  href={item.href}
                  className="flex items-center gap-3 flex-1"
                >
                  <div className="p-2 rounded-lg gradient-primary">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
                {item.copyable && (
                  <button
                    onClick={() => copyToClipboard(item.value, item.title)}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    aria-label={`Copy ${item.title}`}
                  >
                    {copiedField === item.title ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-button p-4 rounded-xl hover:scale-110 transition-all duration-300 ${color}`}
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="neo-card p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors ${errors.name ? 'border-destructive' : ''}`}
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject <span className="text-destructive">*</span>
              </label>
              <Input
                id="subject"
                placeholder="What's this about?"
                required
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors ${errors.subject ? 'border-destructive' : ''}`}
              />
              {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message <span className="text-destructive">*</span>
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or just say hello! (min 20 characters)"
                rows={5}
                required
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`bg-secondary/50 border-border/50 focus:border-primary transition-colors resize-none ${errors.message ? 'border-destructive' : ''}`}
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full gradient-primary text-primary-foreground hover:scale-[1.02] transition-all duration-300 h-12 text-lg font-semibold"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
