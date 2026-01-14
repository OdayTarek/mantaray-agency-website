import clsx from "clsx";
import { HTMLAttributes, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          // Base styles
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
          // Variant styles
          {
            "bg-muted text-muted-foreground": variant === "default",
            "bg-primary text-primary-foreground": variant === "primary",
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
