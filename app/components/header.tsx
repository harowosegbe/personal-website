"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-[#fcfcfc]/85 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-[#111]/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-5 md:px-8">
        <Logo />

        <nav
          aria-label="Primary navigation"
          className="ml-auto flex items-center gap-0.5 font-mono text-[11px] font-medium sm:gap-1"
        >
          <Link
            href="/#work"
            className="hidden rounded-md px-3 py-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 sm:inline-flex"
          >
            Work
          </Link>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            className="inline-flex rounded-md px-3 py-2 transition-colors hover:bg-zinc-100 aria-[current=page]:bg-zinc-100 dark:hover:bg-zinc-900 dark:aria-[current=page]:bg-zinc-900"
          >
            About
          </Link>
          <a
            href="mailto:arowosegbe.hammed.olawale@gmail.com"
            className="hidden rounded-md px-3 py-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 md:inline-flex"
          >
            Contact
          </a>

          <ThemeToggle />

          <a
            href="https://x.com/HammedArrow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hammed Arowosegbe on X (opens in a new tab)"
            className="hidden items-center rounded-md p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 sm:inline-flex"
          >
            <TweetIcon aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/hammed-arowosegbe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hammed Arowosegbe on LinkedIn (opens in a new tab)"
            className="hidden items-center rounded-md p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 sm:inline-flex"
          >
            <LinkedInIcon aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}

function TweetIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
        d="M8.28 20.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 0 0-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 0 0 1.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 0 0 3.29 4.02 4 4 0 0 1-1.85.08 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.43a11.67 11.67 0 0 0 6.28 1.83"
      />
    </svg>
  );
}

function LinkedInIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
