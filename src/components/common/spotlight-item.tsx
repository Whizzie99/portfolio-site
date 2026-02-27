"use client";

import { motion, useMotionTemplate, useMotionValue, HTMLMotionProps } from "framer-motion";
import { ReactNode, MouseEvent } from "react";

interface SpotlightItemProps extends Omit<HTMLMotionProps<"a">, "children"> {
  href: string;
  newTab?: boolean;
  innerClassName?: string;
  lightColorStops?: string;
  darkColorStops?: string;
  children: ReactNode;
}

export function SpotlightItem({
  children,
  className = "",
  innerClassName = "",
  newTab = false,
  lightColorStops = "rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2), rgba(255, 255, 255, 0) 100%",
  darkColorStops = "rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01), rgba(10, 10, 10, 0) 100%",
  ...props
}: SpotlightItemProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.a
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden block ${className}`}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 dark:hidden"
        style={{
          background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, ${lightColorStops})`,
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 hidden dark:block"
        style={{
          background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, ${darkColorStops})`,
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      />
      <div className={`relative z-10 w-full ${innerClassName}`}>
        {children}
      </div>
    </motion.a>
  );
}
