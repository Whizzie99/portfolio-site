"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12">
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-4 md:mb-0">Drop me a line</h2>
        <a href="mailto:wisdomobiomadev@gmail.com" className="text-neutral-900 dark:text-neutral-50 text-sm hover:underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 transition-all">
          wisdomobiomadev@gmail.com
        </a>
      </div>

      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-4xl md:text-7xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50 mb-8">
            Let's build something <br className="hidden md:block" /> extraordinary.
          </h3>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>

          <div className="flex flex-row items-start gap-4 mt-10">
            <Link
              href="mailto:wisdomobiomadev@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-neutral-900 dark:text-neutral-50 border border-neutral-200 dark:border-neutral-800 px-5 py-2.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Send an email
            </Link>
            <Link
              href="https://calendar.app.google/EsoHLJeBiqfiUGZT6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-50 bg-neutral-900 dark:text-neutral-900 dark:bg-neutral-50 px-5 py-2.5 hover:opacity-80 transition-opacity"
            >
              Schedule a call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
