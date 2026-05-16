import { Variants, Transition } from "framer-motion";

export const pageVariants: Variants = {
  initial: { opacity: 0, scale: 0.98, filter: "blur(5px)" },
  in: { opacity: 1, scale: 1, filter: "blur(0px)" },
  out: { opacity: 0, scale: 1.02, filter: "blur(5px)" }
};

export const pageTransition: Transition = { type: "tween", duration: 0.25, ease: "easeOut" };

export const staggerContainer: Variants = { 
  hidden: { opacity: 0 }, 
  show: { opacity: 1, transition: { staggerChildren: 0.08 } } 
};

export const itemVariant: Variants = { 
  hidden: { opacity: 0, y: 20 }, 
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } 
};
