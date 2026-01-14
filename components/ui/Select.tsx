"use client";

import clsx from "clsx";
import { SelectHTMLAttributes, forwardRef } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={clsx(
          // Base styles
          "w-full px-4 py-3 text-sm bg-white border rounded-lg transition-colors duration-200",
          "appearance-none cursor-pointer",
          "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]",
          "bg-[length:1.5rem_1.5rem] bg-[right_0.5rem_center] bg-no-repeat",
          "pr-10",
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
      >
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";

export { Select };
