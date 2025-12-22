import * as React from "react";
import { cn } from "@theme/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1.5 min-h-[24px] px-2 py-[3px] text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "bg-transparent text-foreground border border-border",
        ghost: "bg-transparent text-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
      roundness: {
        default: "rounded-lg",
        round: "rounded-full",
      },
      state: {
        default: "",
        focus: "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      },
    },
    defaultVariants: {
      variant: "default",
      roundness: "default",
      state: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, roundness, state, leftIcon, rightIcon, children, ...props }, ref) => {
    // Handle focus state - apply focus ring shadow
    const focusRingClass = state === "focus" 
      ? variant === "destructive" 
        ? "shadow-[0px_0px_0px_3px_hsl(var(--ring-error))] overflow-clip"
        : "shadow-[0px_0px_0px_3px_hsl(var(--ring))] overflow-clip"
      : "";

    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, roundness, state, className }), focusRingClass)}
        {...props}
      >
        {leftIcon && <span className="shrink-0 w-[13px] h-[13px] flex items-center justify-center">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0 w-[12px] h-[12px] flex items-center justify-center">{rightIcon}</span>}
      </div>
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };

