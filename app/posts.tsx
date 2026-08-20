"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects, type Project } from "./data/projects";

type SortSetting = ["date", "desc" | "asc"];

export function Posts() {
  const [sort, setSort] = useState<SortSetting>(["date", "desc"]);

  function sortDate() {
    setSort(current => ["date", current[1] === "desc" ? "asc" : "desc"]);
  }

  return (
    <section
      id="archive"
      aria-labelledby="archive-title"
      className="border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              03 / Archive
            </p>
            <h2
              id="archive-title"
              className="text-3xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white md:text-4xl"
            >
              Project index
            </h2>
          </div>
          <button
            onClick={sortDate}
            aria-label={`Sort projects by date ${
              sort[1] === "desc" ? "ascending" : "descending"
            }`}
            className="rounded-sm border border-zinc-300 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-600 transition-colors hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-white dark:hover:text-white"
          >
            Date {sort[1] === "desc" ? "↓" : "↑"}
          </button>
        </div>

        <ProjectList posts={projects} sort={sort} />
      </div>
    </section>
  );
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  });
}

function ProjectList({ posts, sort }: { posts: Project[]; sort: SortSetting }) {
  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      return sort[1] === "desc"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }, [posts, sort]);

  return (
    <ul className="border-t border-zinc-200 dark:border-zinc-800">
      {sortedPosts.map((post, index) => {
        const year = new Date(post.date).getFullYear();
        const firstOfYear =
          !sortedPosts[index - 1] ||
          new Date(sortedPosts[index - 1].date).getFullYear() !== year;

        return (
          <li key={post.id}>
            <Link
              href={`/post/${post.id}`}
              className="group grid gap-4 border-b border-zinc-200 py-6 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900/60 sm:-mx-3 sm:grid-cols-[4rem_minmax(0,1fr)_12rem_1.5rem] sm:items-start sm:px-3"
            >
              <span className="font-mono text-xs text-zinc-500">
                {firstOfYear ? year : "·"}
              </span>
              <div>
                <h3 className="text-base font-semibold tracking-[-0.015em] text-zinc-900 transition-colors group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white md:text-lg">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {post.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase leading-5 tracking-[0.08em] text-zinc-500 sm:block">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="sm:block">{post.category}</span>
              </div>
              <span
                aria-hidden="true"
                className="hidden transition-transform group-hover:translate-x-1 sm:block"
              >
                →
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
