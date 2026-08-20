import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVideo } from "@/app/components/project-video";
import { getProject, projects } from "@/app/data/projects";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });
}

export function generateStaticParams() {
  return projects.map(project => ({ id: project.id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const project = getProject(params.id);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/post/${project.id}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      publishedTime: project.date,
      images: project.cover ? [{ url: project.cover }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: project.cover ? [project.cover] : undefined,
    },
  };
}

export default function PostPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id);

  if (!project) notFound();

  const currentIndex = projects.findIndex(item => item.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pb-24 pt-24 md:pb-28 md:pt-28">
      <header>
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Link
            href="/#work"
            className="mb-8 inline-block border-b border-zinc-300 pb-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500 transition-colors hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-700 dark:hover:border-white dark:hover:text-white"
          >
            ← Project index
          </Link>

          <div className="grid grid-cols-[4rem_minmax(0,1fr)_auto] gap-3 border-b border-zinc-300 pb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 dark:border-zinc-700">
            <span>Record</span>
            <span>{project.category}</span>
            <time dateTime={project.date}>{project.date.slice(0, 4)}</time>
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-zinc-950 dark:text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {project.summary}
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-5xl px-5 md:px-8">
          {project.youtube ? (
            <div className="relative aspect-video overflow-hidden border border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
              <iframe
                src={project.youtube}
                title={`${project.title} project video`}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="eager"
                allowFullScreen
              />
            </div>
          ) : project.video ? (
            <div className="relative aspect-video overflow-hidden border border-zinc-300 bg-black dark:border-zinc-700">
              <ProjectVideo
                src={project.video}
                poster={project.image ?? project.cover}
                title={project.title}
              />
            </div>
          ) : project.image || project.cover ? (
            <div className="relative aspect-video overflow-hidden border border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
              <Image
                src={project.image ?? project.cover}
                alt={`${project.title} interface`}
                fill
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-contain"
              />
            </div>
          ) : null}
        </div>

        <div className="mx-auto mt-8 max-w-3xl px-5 md:px-8">
          <dl className="border-t border-zinc-200 font-mono dark:border-zinc-800">
            {[
              ["Organisation / Context", project.client],
              ["Role", project.role],
              ["Timeline", project.duration],
              ["Date", formatDate(project.date)],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-zinc-200 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4 dark:border-zinc-800"
              >
                <dt className="text-[9px] uppercase tracking-[0.13em] text-zinc-500">
                  {label}
                </dt>
                <dd className="text-xs leading-5 text-zinc-700 dark:text-zinc-300">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="mx-auto mt-16 max-w-3xl px-5 md:px-8">
        <section className="grid gap-5 border-t border-zinc-200 pt-6 sm:grid-cols-[9rem_1fr] sm:gap-4 dark:border-zinc-800">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
            Overview
          </h2>
          <div>
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              {project.description}
            </p>
            <dl className="mt-8 border-t border-zinc-200 font-mono dark:border-zinc-800">
              <div className="grid gap-2 border-b border-zinc-200 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4 dark:border-zinc-800">
                <dt className="text-[9px] uppercase tracking-[0.13em] text-zinc-500">
                  Outcome
                </dt>
                <dd className="text-xs leading-5 text-zinc-700 dark:text-zinc-300">
                  {project.impact}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          aria-labelledby="engineering-title"
          className="mt-16 grid gap-5 border-t border-zinc-200 pt-6 sm:grid-cols-[9rem_1fr] sm:gap-4 dark:border-zinc-800"
        >
          <h2
            id="engineering-title"
            className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500"
          >
            Engineering
          </h2>
          <div>
            <ol className="border-t border-zinc-200 dark:border-zinc-800">
              {project.highlights.map((highlight, index) => (
                <li
                  key={highlight}
                  className="grid grid-cols-[2rem_1fr] gap-3 border-b border-zinc-200 py-5 dark:border-zinc-800"
                >
                  <span className="font-mono text-[9px] text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    {highlight}
                  </span>
                </li>
              ))}
            </ol>

            {project.technicalChallenge ? (
              <dl className="mt-8 border-t border-zinc-200 font-mono dark:border-zinc-800">
                <div className="grid gap-2 border-b border-zinc-200 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4 dark:border-zinc-800">
                  <dt className="text-[9px] uppercase leading-4 tracking-[0.13em] text-zinc-500">
                    Hardest problem
                  </dt>
                  <dd className="text-xs leading-5 text-zinc-700 dark:text-zinc-300">
                    {project.technicalChallenge}
                  </dd>
                </div>
              </dl>
            ) : null}

            <dl className="mt-8 border-t border-zinc-200 font-mono dark:border-zinc-800">
              <div className="grid gap-2 border-b border-zinc-200 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4 dark:border-zinc-800">
                <dt className="text-[9px] uppercase tracking-[0.13em] text-zinc-500">
                  Stack
                </dt>
                <dd className="text-xs leading-5 text-zinc-700 dark:text-zinc-300">
                  {project.technologies.join(" · ")}
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <section
          aria-labelledby="gallery-title"
          className="mx-auto mt-16 max-w-5xl px-5 md:px-8"
        >
          <div className="grid grid-cols-[4rem_1fr_auto] gap-3 border-y border-zinc-300 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 dark:border-zinc-700">
            <span>Media</span>
            <h2 id="gallery-title">Project views</h2>
            <span>{String(project.gallery.length).padStart(2, "0")}</span>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <figure
                key={image}
                className={`overflow-hidden border border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 ${
                  index === 0 && project.gallery!.length % 2 !== 0
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`${project.title}, project view ${index + 1}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="border-t border-zinc-200 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500 dark:border-zinc-800">
                  Frame {String(index + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <nav
        aria-label="Continue through projects"
        className="mx-auto mt-16 max-w-3xl px-5 md:px-8"
      >
        <Link
          href={`/post/${nextProject.id}`}
          className="group grid grid-cols-[4rem_minmax(0,1fr)_auto] gap-3 border-y border-zinc-300 py-5 font-mono transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900/40"
        >
          <span className="text-[9px] uppercase tracking-[0.12em] text-zinc-500">
            Next
          </span>
          <span className="text-xs font-medium text-zinc-950 dark:text-white">
            {nextProject.title}
          </span>
          <span
            aria-hidden="true"
            className="text-xs text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-zinc-950 dark:group-hover:text-white"
          >
            →
          </span>
        </Link>
      </nav>
    </article>
  );
}
