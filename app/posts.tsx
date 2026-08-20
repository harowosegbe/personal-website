"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "./data/projects";

type SortDirection = "desc" | "asc";

export function Posts() {
  const [direction, setDirection] = useState<SortDirection>("desc");

  const sortedProjects = useMemo(
    () =>
      [...projects].sort((a, b) =>
        direction === "desc"
          ? b.date.localeCompare(a.date)
          : a.date.localeCompare(b.date)
      ),
    [direction]
  );

  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-[3.75rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-zinc-300 pb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 dark:border-zinc-700">
          <button
            type="button"
            onClick={() =>
              setDirection(current => (current === "desc" ? "asc" : "desc"))
            }
            className="w-fit transition-colors hover:text-zinc-950 dark:hover:text-white"
            aria-label={`Sort projects by date ${
              direction === "desc" ? "oldest first" : "newest first"
            }`}
          >
            Date {direction === "desc" ? "↓" : "↑"}
          </button>
          <span>Project</span>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>

        <ul>
          {sortedProjects.map((project, index) => {
            const previousProject = sortedProjects[index - 1];
            const year = project.date.slice(0, 4);
            const showYear =
              !previousProject || previousProject.date.slice(0, 4) !== year;

            return (
              <li key={project.id}>
                <Link
                  href={`/post/${project.id}`}
                  className="group grid grid-cols-[3.75rem_minmax(0,1fr)_auto] gap-3 border-b border-zinc-200 py-5 font-mono transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900/40"
                >
                  <span className="text-xs text-zinc-500">
                    {showYear ? year : "·"}
                  </span>

                  <span className="min-w-0">
                    <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm font-medium text-zinc-950 dark:text-white">
                      {project.title}
                      {project.featured ? (
                        <span className="text-[9px] font-normal uppercase tracking-[0.12em] text-zinc-400">
                          Selected
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-2 block max-w-xl text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                      {project.summary}
                    </span>
                    <span className="mt-2 block text-[9px] uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
                      {project.category} · {project.duration}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-xs text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-zinc-950 dark:group-hover:text-white"
                  >
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
