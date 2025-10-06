"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";

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
      scale: 1.02,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.2 
      } 
    },
    whileTap: { 
      scale: 0.98,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25,
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
