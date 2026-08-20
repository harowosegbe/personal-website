import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "./data/projects";
import { Posts } from "./posts";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
        <div className="mb-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          <span>01 / Profile</span>
          <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          <span>2018—Now</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(18rem,0.7fr)] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Senior 3D / XR Engineer
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-zinc-950 dark:text-white sm:text-6xl md:text-7xl">
              I build spatial systems that make complex things tangible.
            </h1>
          </div>

          <div className="border-l border-zinc-200 pl-5 dark:border-zinc-800 lg:pb-1">
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Web3D, CAD, AR, VR and AI products, from browser-based design
              tools to immersive installations for global brands.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-sm bg-zinc-950 px-4 py-2.5 text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Selected work <span aria-hidden="true">↓</span>
              </Link>
              <a
                href="mailto:arowosegbe.hammed.olawale@gmail.com"
                className="inline-flex items-center rounded-sm border border-zinc-300 px-4 py-2.5 text-zinc-700 transition-colors hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-white dark:hover:text-white"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-y border-zinc-200 dark:border-zinc-800 md:grid-cols-4">
          {[
            ["8+", "years building spatial products"],
            ["1M+", "immersive experiences powered"],
            ["25K+", "creators served"],
            ["11K+", "students reached"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`py-5 pr-4 md:py-6 ${index % 2 ? "pl-4" : ""} ${
                index > 0 ? "md:border-l md:pl-5" : ""
              } ${
                index > 1 ? "border-t md:border-t-0" : ""
              } border-zinc-200 dark:border-zinc-800`}
            >
              <dt className="font-mono text-[10px] uppercase leading-4 tracking-[0.16em] text-zinc-500">
                {label}
              </dt>
              <dd className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        id="work"
        className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                02 / Selected work
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white md:text-4xl">
                Systems with a physical point of view.
              </h2>
            </div>
            <span className="hidden font-mono text-xs text-zinc-500 md:block">
              04 projects
            </span>
          </div>

          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/post/${project.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
                  <Image
                    src={project.cover}
                    alt=""
                    fill
                    priority={index === 0}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover grayscale transition duration-300 ease-out group-hover:grayscale-0"
                  />
                  <span className="absolute left-0 top-0 border-b border-r border-white/20 bg-black/70 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-[2rem_1fr_auto] gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                  <span className="pt-1 font-mono text-[10px] text-zinc-500">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.025em] text-zinc-950 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {project.impact}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="pt-1 font-mono text-lg transition-transform group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Posts />
    </>
  );
}
