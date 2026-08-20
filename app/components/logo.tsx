"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Logo() {
  const pathname = usePathname();
  return (
    <span className="whitespace-nowrap font-mono text-xs font-semibold tracking-[-0.02em] sm:text-sm">
      {pathname === "/" ? (
        <span className="cursor-default">
          <span className="sm:hidden">Hammed A.</span>
          <span className="hidden sm:inline">Hammed Arowosegbe</span>
        </span>
      ) : (
        <Link
          href="/"
          className="-ml-2 rounded-md p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
        >
          <span className="sm:hidden">Hammed A.</span>
          <span className="hidden sm:inline">Hammed Arowosegbe</span>
        </Link>
      )}
    </span>
  );
}
