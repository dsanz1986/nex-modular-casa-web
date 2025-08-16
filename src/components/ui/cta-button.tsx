
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    const baseClasses = "relative group overflow-hidden font-semibold px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl";
    
    const variantClasses = {
      primary: "bg-gradient-to-r from-emerald-500 via-green-600 to-forest-700 hover:from-emerald-600 hover:via-green-700 hover:to-forest-800 text-white ring-2 ring-white/20 hover:ring-white/40",
      secondary: "bg-gradient-to-r from-forest-100 to-forest-200 hover:from-forest-200 hover:to-forest-300 text-forest-800 ring-2 ring-forest-300/30 hover:ring-forest-400/50"
    };

    return (
      <Button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0",
          "before:translate-x-[-100%] before:rotate-12 before:transition-transform before:duration-700",
          "hover:before:translate-x-[100%]",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Button>
    );
  }
);

CTAButton.displayName = "CTAButton";
