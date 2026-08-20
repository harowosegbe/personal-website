import Link from "next/link";
import { Posts } from "./posts";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
          Senior 3D / XR Engineer
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-zinc-950 dark:text-white sm:text-5xl md:text-6xl">
          I build spatial systems that make complex things tangible.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Web3D, CAD, AR, VR and AI products, from browser-based design tools to
          immersive installations for global brands.
        </p>
        <div className="mt-7 flex gap-5 font-mono text-xs text-zinc-600 dark:text-zinc-400">
          <Link
            href="#work"
            className="border-b border-zinc-300 pb-0.5 transition-colors hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-700 dark:hover:border-white dark:hover:text-white"
          >
            View work ↓
          </Link>
          <a
            href="mailto:arowosegbe.hammed.olawale@gmail.com"
            className="border-b border-zinc-300 pb-0.5 transition-colors hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-700 dark:hover:border-white dark:hover:text-white"
          >
            Email ↗
          </a>
        </div>
      </section>

      <Posts />
    </>
  );
}
