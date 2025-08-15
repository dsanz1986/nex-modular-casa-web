
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
          "relative overflow-hidden bg-gradient-to-r from-nex-primary via-purple-600 to-nex-accent",
          "hover:from-nex-primary/90 hover:via-purple-600/90 hover:to-nex-accent/90",
          "text-white font-semibold px-8 py-3 rounded-full",
          "transform transition-all duration-300 hover:scale-105 hover:shadow-xl",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
          "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
          "animate-pulse",
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
