
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const AIButton = React.forwardRef<HTMLButtonElement, AIButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative group overflow-hidden",
          "bg-gradient-to-r from-nex-primary via-emerald-500 to-forest-600",
          "hover:from-nex-primary/90 hover:via-emerald-500/90 hover:to-forest-600/90",
          "text-white font-semibold px-8 py-3 rounded-full",
          "transform transition-all duration-300 hover:scale-105",
          "shadow-xl hover:shadow-2xl",
          "ring-2 ring-white/20 hover:ring-white/40",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0",
          "before:translate-x-[-100%] before:rotate-45 before:transition-transform before:duration-700",
          "hover:before:translate-x-[100%]",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    );
  }
);

AIButton.displayName = "AIButton";
