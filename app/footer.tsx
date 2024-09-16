import { A } from "./(post)/components/a";

export function Footer() {
  return (
    <footer 
    className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono"
    style={{
      position: 'sticky',
      bottom: 0,
      left: 0
    }}
    >
      <div className="grow text-left">
        Hammed Arowosegbe (
        <A target="_blank" href="https://x.com/HammedArrow">
          @HammedArrow
        </A>
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
