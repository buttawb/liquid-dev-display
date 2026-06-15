import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassPillProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

/**
 * Small frosted glass chip — section eyebrows, status badges, tags.
 * Uses the lighter `.glass-card` recipe at a fully-rounded radius.
 */
export const GlassPill = React.forwardRef<HTMLDivElement, GlassPillProps>(
  ({ className, as, ...props }, ref) => {
    const Comp = (as ?? "div") as React.ElementType;
    return (
      <Comp
        ref={ref}
        className={cn(
          "glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
          className
        )}
        {...props}
      />
    );
  }
);
GlassPill.displayName = "GlassPill";
