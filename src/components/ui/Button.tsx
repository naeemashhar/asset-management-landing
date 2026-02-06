import Link from "next/link";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-none text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-trust-blue-500 disabled:pointer-events-none disabled:opacity-50 tracking-wide uppercase",
    {
        variants: {
            variant: {
                default:
                    "bg-trust-blue-900 text-white hover:bg-trust-blue-800 shadow-sm",
                outline:
                    "border border-trust-blue-200 bg-transparent hover:bg-trust-blue-50 text-trust-blue-900",
                ghost: "hover:bg-trust-blue-50 text-trust-blue-900",
                gold: "bg-gold-400 text-white hover:bg-gold-500 shadow-md",
                link: "text-trust-blue-900 underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-8 py-2",
                sm: "h-9 px-4",
                lg: "h-14 px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

// Explicitly defining props to avoid inference issues in some environments
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    href?: string;
    variant?: "default" | "outline" | "ghost" | "gold" | "link" | null;
    size?: "default" | "sm" | "lg" | "icon" | null;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, href, ...props }, ref) => {
        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(buttonVariants({ variant, size, className }))}
                >
                    {props.children}
                </Link>
            );
        }
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
