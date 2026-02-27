"use client";

import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-start justify-end px-6 md:px-12 pb-24">
      <div className="max-w-4xl w-full">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-6">
          Error
        </p>
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50 mb-6 leading-none">
          Something went wrong.
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-md mb-10 leading-relaxed">
          An unexpected error occurred. You can try again or head back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 text-sm text-neutral-50 bg-neutral-900 dark:text-neutral-900 dark:bg-neutral-50 px-5 py-2.5 hover:opacity-80 transition-opacity"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-900 dark:text-neutral-50 border border-neutral-200 dark:border-neutral-800 px-5 py-2.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
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
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
