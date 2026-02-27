"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close menu on click
    if (lenis) {
      lenis.scrollTo(target);
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between py-6 px-5 md:px-12 lg:px-24 bg-[#E2E8F0]/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md border-b border-transparent dark:border-white/5 transition-all duration-300"
      >
        <div className="flex-1 md:w-1/3">
          <span className="text-lg font-medium tracking-tight">Wisdom Obioma</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-sm font-medium hover:opacity-70 transition-opacity">About</a>
          <a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="text-sm font-medium hover:opacity-70 transition-opacity">Work</a>
          <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="text-sm font-medium hover:opacity-70 transition-opacity">Process</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-sm font-medium hover:opacity-70 transition-opacity">Drop me a line</a>
        </nav>

        <div className="flex-1 flex justify-end items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4" />
                  <span className="hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 -mr-2 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 text-2xl font-medium tracking-tight">
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:opacity-70 transition-opacity">About</a>
              <a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="hover:opacity-70 transition-opacity">Work</a>
              <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="hover:opacity-70 transition-opacity">Process</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:opacity-70 transition-opacity">Drop me a line</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
