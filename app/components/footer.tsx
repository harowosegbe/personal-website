export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Have a difficult spatial problem?
            </p>
            <a
              href="mailto:arowosegbe.hammed.olawale@gmail.com"
              className="mt-4 block max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-zinc-950 transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300 sm:text-4xl md:text-5xl"
            >
              Let&apos;s make it tangible. ↗
            </a>
          </div>
          <div className="flex gap-5 font-mono text-[11px] text-zinc-500">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/harowosegbe"
              className="transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hammed-arowosegbe/"
              className="transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/HammedArrow"
              className="transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              X
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-zinc-200 pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Hammed Arowosegbe</span>
          <span>3D · XR · CAD · AI</span>
        </div>
      </div>
    </footer>
  );
}
