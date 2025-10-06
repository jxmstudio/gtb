"use client";

import { motion, Variants } from "framer-motion";

// Motion primitives for common HTML elements
export const MotionDiv = motion.div;
export const MotionButton = motion.button;
export const MotionCard = motion.div;
export const MotionSection = motion.section;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionP = motion.p;
export const MotionUl = motion.ul;
export const MotionLi = motion.li;
export const MotionSpan = motion.span;
export const MotionA = motion.a;

// Common animation variants
export const hoverPop: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02, 
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20,
      duration: 0.2 
    } 
  },
  tap: { 
    scale: 0.98,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 25,
      duration: 0.1 
    } 
  }
};

export const press: Variants = {
  initial: { scale: 1 },
  tap: { 
    scale: 0.95,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 25,
      duration: 0.1 
    } 
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    } 
  }
};

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 12 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.35, 
      ease: "easeOut" 
    } 
  }
};

export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -12 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.35, 
      ease: "easeOut" 
    } 
  }
};

export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    } 
  }
};

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    } 
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    } 
  }
};

// Stagger container for lists
export const staggerContainer: Variants = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: 0.05 
    } 
  }
};

// Stagger item for list items
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    } 
  }
};

// Page transition variants
export const pageIn: Variants = {
  initial: { 
    opacity: 0, 
    y: 8 
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.25, 
      ease: "easeOut" 
    } 
  },
  exit: { 
    opacity: 0, 
    y: -8, 
    transition: { 
      duration: 0.18, 
      ease: "easeIn" 
    } 
  }
};

// Card hover effect
export const cardHover: Variants = {
  initial: { 
    y: 0, 
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" 
  },
  hover: { 
    y: -2, 
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    } 
  }
};

// Button hover effect with brand colors
export const buttonHover: Variants = {
  initial: { 
    scale: 1,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)"
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    } 
  },
  tap: { 
    scale: 0.98,
    transition: { 
      duration: 0.1, 
      ease: "easeIn" 
    } 
  }
};
