"use client";

import clsx from "clsx";
import { TextareaHTMLAttributes, forwardRef } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(
          // Base styles
          "w-full px-4 py-3 text-sm bg-white border rounded-lg transition-colors duration-200",
          "placeholder:text-muted-foreground/60",
          "resize-y min-h-[120px]",
          "focus:outline-none focus:ring-2 focus:ring-offset-0",
          // Default state
          !error && [
            "border-border",
            "focus:border-primary focus:ring-primary/20",
          ],
          // Error state
          error && [
            "border-red-500",
            "focus:border-red-500 focus:ring-red-500/20",
          ],
          // Disabled state
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
