import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "magenta" | "both" | "violet" | "sky" | "pink";
  hover?: boolean;
}

export function GlassCard({ children, className = "", glowColor = "violet", hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card ${hover ? "glass-card-hover" : ""} ${className}`}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
