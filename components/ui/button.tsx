import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded gap-x-2",
  // text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-primary-0 hover:bg-primary-500 active:bg-primary-700 focus:bg-primary-500 focus:border disabled: bg-primary-500 disabled:opacity-40",
        secondary:
          "bg-primary-0 text-secondary-400 border border-secondary-300 hover: border-secondary-400 hover:text-secondary-500 active:bg-primary-100 active:border-secondary-300 active:text-secondary-500 focus:border-secondary-300 disabled: border-primary-100",
        minimal:
          "bg-none text-secondary-400 hover:bg-primary-0 hover:text-secondary-500 active:bg-primary-100 active:text-secondary-500 focus:bg-none focus:border-secondary-200 focus:text-secondary-500 disabled:text-secondary-200",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        label:
          "min-w-16 sm:min-w-16 md:min-w-20 h-7 sm:h-9 sm:h-14 px-4 sm:px-4 md:px-6 py-1.5 sm:py-1.5 md:py-3 font-semibold text-xs md:text-base",
        ionly:
          "h-8 w-8 p-2 text-xs sm:h-10 sm:w-10 sm:p-3 sm:text-base md:h-12 md:w-12 md:p-4 md:text-lg ",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "label",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
