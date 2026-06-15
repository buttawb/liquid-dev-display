import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

/**
 * Wider, calmer frosted slab for full-width feature blocks (e.g. the
 * "what I bring to the table" callout). Lighter shadow than GlassCard so it
 * reads as a calm ground rather than a lifted tile.
 */
export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, as, ...props }, ref) => {
    const Comp = (as ?? "div") as React.ElementType;
    return (
      <Comp
        ref={ref}
        className={cn("glass-card rounded-3xl", className)}
        {...props}
      />
    );
  }
);
GlassPanel.displayName = "GlassPanel";
