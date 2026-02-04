"use client";
import { A } from "./mdx/a";

export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-3xl mx-auto flex">
        <div className="grow text-left">
          Hammed Arowosegbe ( arowosegbe.hammed.olawale@gmail.com )
        </div>
        <div>
          <A target="_blank" href="https://github.com/harowosegbe">
            GitHub
          </A>
        </div>
      </div>
    </footer>
  );
}
