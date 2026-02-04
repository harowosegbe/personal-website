"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Suspense } from "react";
import posts from "./data/posts.json";

type SortSetting = ["date" | "views", "desc" | "asc"];

interface Post {
  id: string;
  date: string;
  title: string;
  summary: string;
  technologies: string[];
  duration: string;
}

export function Posts() {
  const [sort, setSort] = useState<SortSetting>(["date", "desc"]);

  function sortDate() {
    setSort(sort => [
      "date",
      sort[0] !== "date" || sort[1] === "asc" ? "desc" : "asc",
    ]);
  }

  return (
    <Suspense fallback={null}>
      <main className="max-w-3xl font-mono m-auto mb-10 text-sm">
        <header className="text-gray-500 dark:text-gray-600 flex items-center text-xs mb-4">
          <button
            onClick={sortDate}
            className={`w-12 h-9 text-left  ${
              sort[0] === "date" && sort[1] !== "desc"
                ? "text-gray-700 dark:text-gray-400"
                : ""
            }`}
          >
            date
            {sort[0] === "date" && sort[1] === "asc" && "↑"}
          </button>
          <span className="grow pl-2">title</span>
        </header>

        <List posts={posts.posts} sort={sort} />
      </main>
    </Suspense>
  );
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

function List({ posts, sort }: { posts: Post[]; sort: SortSetting }) {
  const sortedPosts = useMemo(() => {
    const [sortKey, sortDirection] = sort;
    return [...posts].sort((a, b) => {
      if (sortKey === "date") {
        return sortDirection === "desc"
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return 0;
    });
  }, [posts, sort]);

  return (
    <ul>
      {sortedPosts.map((post, i: number) => {
        const year = getYear(post.date);
        const firstOfYear =
          !sortedPosts[i - 1] || getYear(sortedPosts[i - 1].date) !== year;
        const lastOfYear =
          !sortedPosts[i + 1] || getYear(sortedPosts[i + 1].date) !== year;

        return (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <span
                className={`group flex transition-[background-color] hover:bg-gray-50/50 dark:hover:bg-[#202020] active:bg-gray-100 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131]
                ${!firstOfYear ? "border-t-0" : ""}
                ${lastOfYear ? "border-b-0" : ""}
              `}
              >
                <span
                  className={`py-6 flex grow items-start ${
                    !firstOfYear ? "ml-14" : ""
                  }`}
                >
                  {firstOfYear && (
                    <span className="w-14 inline-block self-start shrink-0 text-gray-500 dark:text-gray-500 pt-1 font-mono text-xs">
                      {year}
                    </span>
                  )}
                  <div className="grow">
                    <h2 className="text-[1.1rem] font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                      {post.summary}
                    </p>
                    <div className="flex items-center gap-3 text-xs font-mono text-gray-500 dark:text-gray-500 mb-3 uppercase tracking-wide">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="text-gray-300 dark:text-gray-700">
                        |
                      </span>
                      <span>{post.duration}</span>
                    </div>
                    {post.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {post.technologies.map(tech => (
                          <span
                            key={tech}
                            className="inline-flex items-center h-5 px-2 text-[10px] leading-none font-medium border border-gray-200/60 dark:border-gray-700/60 bg-gray-50/50 dark:bg-zinc-800/50 text-gray-600 dark:text-gray-400 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function getYear(date: string) {
  return new Date(date).getFullYear();
}
