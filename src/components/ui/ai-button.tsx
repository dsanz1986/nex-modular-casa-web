
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Sparkles, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const aiButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-nex-primary via-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 hover:from-blue-600 hover:via-purple-500 hover:to-pink-500",
        outline: "border-2 border-gradient-to-r from-nex-primary to-purple-500 bg-gradient-to-r from-nex-primary/10 via-blue-500/10 to-purple-500/10 text-nex-primary hover:from-nex-primary/20 hover:via-blue-500/20 hover:to-purple-500/20",
        ghost: "bg-gradient-to-r from-transparent via-nex-primary/5 to-transparent hover:from-nex-primary/10 hover:via-nex-primary/15 hover:to-nex-primary/10 text-nex-primary"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-md px-4",
        lg: "h-14 rounded-lg px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface AIButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof aiButtonVariants> {
  asChild?: boolean
  showIcon?: boolean
  iconType?: "sparkles" | "zap"
  glowEffect?: boolean
}

const AIButton = React.forwardRef<HTMLButtonElement, AIButtonProps>(
  ({ className, variant, size, asChild = false, showIcon = true, iconType = "sparkles", glowEffect = true, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const IconComponent = iconType === "sparkles" ? Sparkles : Zap

    return (
      <Comp
        className={cn(aiButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {glowEffect && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-md" />
        )}
        
        {/* Animated background particles */}
        {glowEffect && (
          <>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-md animate-pulse" />
          </>
        )}
        
        <div className="relative flex items-center gap-2">
          {showIcon && (
            <IconComponent className={cn(
              "transition-all duration-300",
              glowEffect && "group-hover:animate-pulse drop-shadow-sm"
            )} />
          )}
          {children}
        </div>
      </Comp>
    )
  }
)
AIButton.displayName = "AIButton"

export { AIButton, aiButtonVariants }
