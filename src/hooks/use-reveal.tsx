import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Reveals an element once it scrolls into view. Returns a ref + visibility flag.
 * Falls back to visible immediately when IntersectionObserver is unavailable or
 * the user prefers reduced motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = React.useRef<T>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** transition-delay in ms (for manual staggering) */
  delay?: number;
  as?: React.ElementType;
}

/** Wraps a block so it fades + rises into view on scroll. */
export const Reveal = React.forwardRef<HTMLDivElement, RevealProps>(
  ({ className, delay = 0, style, as, children, ...props }, _ref) => {
    const { ref, visible } = useReveal<HTMLDivElement>();
    const Comp = (as ?? "div") as React.ElementType;
    return (
      <Comp
        ref={ref}
        className={cn("reveal", visible && "is-visible", className)}
        style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Reveal.displayName = "Reveal";
