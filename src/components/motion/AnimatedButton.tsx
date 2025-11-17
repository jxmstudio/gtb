"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

/**
 * AnimatedButton component that provides motion effects for buttons
 * Works with both regular buttons and asChild buttons
 */
export function AnimatedButton({ 
  children, 
  asChild = false, 
  ...props 
}: ButtonProps) {
  const motionProps = {
    whileHover: { 
      scale: 1.05,
      y: -2,
      transition: { 
        type: "spring" as const, 
        stiffness: 400, 
        damping: 15,
        duration: 0.2 
      } 
    },
    whileTap: { 
      scale: 0.95,
      y: 0,
      transition: { 
        type: "spring" as const, 
        stiffness: 500, 
        damping: 20,
        duration: 0.1 
      } 
    }
  };

  if (asChild) {
    return (
      <motion.div {...motionProps}>
        <Button asChild {...props}>
          {children}
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div {...motionProps}>
      <Button {...props}>
        {children}
      </Button>
    </motion.div>
  );
}
