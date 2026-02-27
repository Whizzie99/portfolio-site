import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Wisdom Obioma",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-start justify-end px-6 md:px-12 pb-24">
      <div className="max-w-4xl w-full">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-6">
          404
        </p>
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50 mb-6 leading-none">
          Page not found.
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-md mb-10 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>
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
    </main>
  );
}
