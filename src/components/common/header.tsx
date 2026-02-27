"use client";

import Link from "next/link";
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
          <Link href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-sm font-medium hover:opacity-70 transition-opacity">About</Link>
          <Link href="#work" onClick={(e) => handleNavClick(e, '#work')} className="text-sm font-medium hover:opacity-70 transition-opacity">Work</Link>
          {/* <Link href="#process" onClick={(e) => handleNavClick(e, '#process')} className="text-sm font-medium hover:opacity-70 transition-opacity">Process</Link> */}
          <Link href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-sm font-medium hover:opacity-70 transition-opacity">Drop me a line</Link>
        </nav>

        <div className="flex-1 flex justify-end items-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/whizzie99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </div>

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
              <Link href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:opacity-70 transition-opacity">About</Link>
              <Link href="#work" onClick={(e) => handleNavClick(e, '#work')} className="hover:opacity-70 transition-opacity">Work</Link>
              {/* <Link href="#process" onClick={(e) => handleNavClick(e, '#process')} className="hover:opacity-70 transition-opacity">Process</Link> */}
              <Link href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:opacity-70 transition-opacity">Drop me a line</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
