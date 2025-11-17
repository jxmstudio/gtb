"use client";

import { MotionDiv, fadeInUp, slideInLeft, slideInRight, scaleIn } from "./MotionPrimitives";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  once?: boolean;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  margin?: string;
}

/**
 * RevealOnScroll component that animates children when they enter the viewport
 * @param children - Content to animate
 * @param once - Whether to animate only once (default: true)
 * @param delay - Delay before animation starts (in seconds)
 * @param direction - Animation direction
 * @param margin - Intersection observer margin
 */
export function RevealOnScroll({ 
  children, 
  once = true, 
  delay = 0,
  direction = "up",
  margin = "0px 0px -10% 0px"
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once, ...(margin ? { margin: margin as any } : {}) });

  const getVariants = () => {
    switch (direction) {
      case "down":
        return fadeInUp;
      case "left":
        return slideInLeft;
      case "right":
        return slideInRight;
      case "scale":
        return scaleIn;
      default:
        return fadeInUp;
    }
  };

  return (
    <MotionDiv
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </MotionDiv>
  );
}

interface StaggerRevealProps {
  children: ReactNode;
  once?: boolean;
  staggerDelay?: number;
  itemDelay?: number;
  margin?: string;
}

/**
 * StaggerReveal component that animates children with staggered timing
 * @param children - Content to animate
 * @param once - Whether to animate only once (default: true)
 * @param staggerDelay - Delay between each child animation (default: 0.1)
 * @param itemDelay - Initial delay before animations start (default: 0)
 * @param margin - Intersection observer margin
 */
export function StaggerReveal({ 
  children, 
  once = true, 
  staggerDelay = 0.1,
  itemDelay = 0,
  margin = "0px 0px -10% 0px"
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once, ...(margin ? { margin: margin as any } : {}) });

  return (
    <MotionDiv
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: itemDelay
          }
        }
      }}
    >
      {children}
    </MotionDiv>
  );
}

interface FadeInWhenVisibleProps {
  children: ReactNode;
  once?: boolean;
  delay?: number;
  duration?: number;
  margin?: string;
}

/**
 * Simple fade-in animation when element becomes visible
 * @param children - Content to animate
 * @param once - Whether to animate only once (default: true)
 * @param delay - Delay before animation starts (in seconds)
 * @param duration - Animation duration (in seconds)
 * @param margin - Intersection observer margin
 */
export function FadeInWhenVisible({ 
  children, 
  once = true, 
  delay = 0,
  duration = 0.3,
  margin = "0px 0px -10% 0px"
}: FadeInWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once, ...(margin ? { margin: margin as any } : {}) });

  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </MotionDiv>
  );
}
