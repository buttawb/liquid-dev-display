import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tools", href: "#tools" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [frost, setFrost] = useState(0);
  const [activeId, setActiveId] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Scroll-linked frost-in (rAF-throttled, passive)
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() =>
        setFrost(Math.min(window.scrollY / 120, 1))
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Active-section highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const cycleTheme = () => {
    setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light");
  };

  const getThemeIcon = () => {
    if (theme === "light") return <Sun className="h-5 w-5" />;
    if (theme === "dark") return <Moon className="h-5 w-5" />;
    return <Monitor className="h-5 w-5" />;
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      {/* Frosted bar that fades in with scroll */}
      <div
        aria-hidden
        className="absolute inset-0 border-b border-border/40 bg-background/60 backdrop-blur-xl backdrop-saturate-150 transition-opacity duration-300"
        style={{ opacity: frost }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Monogram */}
          <button
            onClick={() => scrollToSection("#hero")}
            aria-label="Back to top"
            className="flex-shrink-0"
          >
            <span className="glass-card flex h-10 px-3 items-center justify-center rounded-2xl text-base font-extrabold tracking-tight">
              AWB
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const active = activeId === item.href.slice(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    aria-current={active ? "page" : undefined}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme + mobile menu */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={cycleTheme}
              className="glass-button rounded-xl"
              aria-label={`Theme: ${theme}. Click to cycle light, dark, system.`}
              title={`Theme: ${theme}`}
            >
              {getThemeIcon()}
            </Button>

            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="glass-button rounded-xl"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden pb-4">
            <div className="px-3 pt-2 pb-4 space-y-1 glass-card rounded-2xl">
              {navItems.map((item) => {
                const active = activeId === item.href.slice(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    aria-current={active ? "page" : undefined}
                    className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                      active ? "text-primary bg-primary/10" : "hover:bg-foreground/[0.06]"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <div className="pt-2 mt-1 border-t border-border/40">
                <div className="text-xs font-medium text-muted-foreground px-4 py-2 uppercase tracking-wider">
                  Theme
                </div>
                {([
                  { key: "light", label: "Light", icon: Sun },
                  { key: "dark", label: "Dark", icon: Moon },
                  { key: "system", label: "System", icon: Monitor },
                ] as const).map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setTheme(key)}
                    className={`flex items-center w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                      theme === key ? "text-primary bg-primary/10" : "hover:bg-foreground/[0.06]"
                    }`}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
