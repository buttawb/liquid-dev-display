import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { GlassCard } from "@/components/glass";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background px-6 overflow-hidden">
      {/* ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] left-1/4 h-[50vh] w-[50vh] rounded-full bg-emerald-400/20 dark:bg-emerald-500/10 blur-[120px] animate-orb-a" />
        <div className="absolute bottom-[-10%] right-1/4 h-[50vh] w-[50vh] rounded-full bg-teal-400/16 dark:bg-teal-500/10 blur-[120px] animate-orb-b" />
      </div>

      <GlassCard className="px-10 py-12 text-center max-w-md">
        <h1 className="text-7xl font-extrabold tracking-tight gradient-text mb-3">404</h1>
        <p className="text-lg text-muted-foreground mb-8">
          This page drifted off into the ether.
        </p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back home
          </Link>
        </Button>
      </GlassCard>
    </div>
  );
};

export default NotFound;
