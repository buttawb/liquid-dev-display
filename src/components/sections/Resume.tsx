import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, ExternalLink, Calendar, CheckCircle } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="h-4 w-4 text-primary" />
            <span>Download</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Download my resume for detailed information about my experience and skills.
          </p>
        </div>

        <Card className="neo-card p-8 text-center glow-hover">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="lg"
              className="gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 px-8"
              asChild
            >
              <a href="/AbdulWahabButtCV.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV (PDF)
              </a>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="glass-button hover:scale-105 transition-all duration-300 px-8"
              asChild
            >
              <a href="/AbdulWahabButtCV.pdf" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Online
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 py-1 px-3">
              <Calendar className="mr-1 h-3 w-3" />
              Updated: December 2024
            </Badge>
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 py-1 px-3">
              <CheckCircle className="mr-1 h-3 w-3" />
              ATS-Friendly
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  );
}
