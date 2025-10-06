"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * PageTransition component that provides smooth transitions between routes
 * Uses AnimatePresence to handle enter/exit animations
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.25, 
            ease: "easeOut" 
          } 
        }}
        exit={{ 
          opacity: 0, 
          y: -8, 
          transition: { 
            duration: 0.18, 
            ease: "easeIn" 
          } 
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
