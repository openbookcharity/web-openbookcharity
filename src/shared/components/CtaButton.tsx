import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5",
        outline: "border-2 border-navy text-navy hover:bg-navy hover:text-navy-foreground",
        ghost: "text-navy hover:text-primary",
        light:
          "bg-navy-foreground text-navy shadow-soft hover:-translate-y-0.5",
      },
      size: {
        md: "h-11 px-6",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type CtaProps = VariantProps<typeof ctaVariants> & {
  children: ReactNode;
  to?: string;
  className?: string;
};

export function CtaButton({ children, to, variant, size, className }: CtaProps) {
  const classes = cn(ctaVariants({ variant, size }), className);
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
