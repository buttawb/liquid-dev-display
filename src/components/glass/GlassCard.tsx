import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds the hover lift + pointer-tracked specular sheen. Use for clickable cards. */
  interactive?: boolean;
  /** Track the pointer to drive the specular sheen highlight (requires `interactive`). */
  sheen?: boolean;
  as?: React.ElementType;
}

/**
 * The single Liquid Glass material primitive. Renders a frosted, translucent
 * panel with a specular top edge and layered elevation (see `.neo-card` in
 * index.css). Everything that used the old undefined `neo-card` class routes
 * through this.
 */
export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, interactive = false, sheen = false, as, onMouseMove, ...props }, ref) => {
    const Comp = (as ?? "div") as React.ElementType;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (sheen) {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }
      onMouseMove?.(e);
    };

    return (
      <Comp
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          "neo-card",
          interactive && "is-interactive",
          interactive && sheen && "glass-sheen",
          className
        )}
        {...props}
      />
    );
  }
);
GlassCard.displayName = "GlassCard";
