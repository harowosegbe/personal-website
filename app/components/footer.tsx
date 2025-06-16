"use client";
import { A } from "./mdx/a";

export function Footer() {
  return (
    <footer 
    className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono bg-gray-50/80 dark:bg-zinc-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800"
    style={{
      position: 'sticky',
      bottom: 0,
      left: 0,
      zIndex: 10
    }}
    >
      <div className="grow text-left">
        Hammed Arowosegbe (
        arowosegbe.hammed.olawale@gmail.com
        )
      </div>
      <div>
        <A target="_blank" href="https://github.com/harowosegbe">
          GitHub
        </A>
      </div>
    </footer>
  );
}
