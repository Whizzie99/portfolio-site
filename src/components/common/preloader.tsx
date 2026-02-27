"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "@/components/providers/preloader-context";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { setComplete } = usePreloader();

  useEffect(() => {
    // Lock scrolling
    document.body.style.overflow = "hidden";

    let currentProgress = 0;

    // Simulate realistic loading progress
    const updateProgress = () => {
      // Random increment between 5 and 15
      const increment = Math.floor(Math.random() * 11) + 5;
      currentProgress += increment;

      if (currentProgress >= 100) {
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          setComplete();
          document.body.style.overflow = "";
        }, 500); // Hold at 100% briefly
      } else {
        setProgress(currentProgress);
        // Next update between 80ms and 150ms
        const nextTimeout = Math.floor(Math.random() * 70) + 80;
        setTimeout(updateProgress, nextTimeout);
      }
    };

    const firstTimeout = setTimeout(updateProgress, 100);

    return () => {
      clearTimeout(firstTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-9999 bg-neutral-950 text-[#F3F3F3]"
        >
          <div className="absolute right-4 bottom-0 z-10 text-[6rem] font-bold leading-none tracking-tighter tabular-nums mix-blend-difference md:right-8 md:text-[10rem] lg:text-[12rem] xl:text-[14rem]">
            {progress}%
          </div>
          <div className="absolute bottom-0 left-0 h-[50px] w-full bg-white/10">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
