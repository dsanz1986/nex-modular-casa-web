
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
          "bg-gradient-to-r from-nex-primary to-forest-600",
          "hover:from-nex-primary/90 hover:to-forest-600/90",
          "text-white font-semibold px-8 py-3 rounded-full",
          "transform transition-all duration-200 hover:scale-105",
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
