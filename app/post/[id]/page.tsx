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
    <article className="pb-24 pt-28 md:pb-32 md:pt-36">
      <header className="mx-auto max-w-6xl px-5 md:px-8">
        <Link
          href="/#work"
          className="mb-12 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-white"
        >
          <span aria-hidden="true">←</span> Selected work
        </Link>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.65fr)] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              {project.category}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-zinc-950 dark:text-white sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
          </div>
          <p className="border-l border-zinc-200 pl-5 text-lg leading-8 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            {project.summary}
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-2 border-y border-zinc-200 font-mono dark:border-zinc-800 md:grid-cols-4">
          {[
            ["Organisation / Context", project.client],
            ["Role", project.role],
            ["Timeline", project.duration],
            ["Date", formatDate(project.date)],
          ].map(([label, value], index) => (
            <div
              key={label}
              className={`py-5 pr-4 ${index % 2 ? "pl-4" : ""} ${
                index > 0 ? "md:border-l md:pl-5" : ""
              } ${
                index > 1 ? "border-t md:border-t-0" : ""
              } border-zinc-200 dark:border-zinc-800`}
            >
              <dt className="text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                {label}
              </dt>
              <dd className="mt-2 text-xs leading-5 text-zinc-800 dark:text-zinc-200">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mx-auto mt-10 max-w-7xl px-3 md:mt-14 md:px-6">
        {project.youtube ? (
          <div className="relative aspect-video overflow-hidden rounded-sm border border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
            <iframe
              src={project.youtube}
              title={`${project.title} project video`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              allowFullScreen
            />
          </div>
        ) : project.video ? (
          <div className="relative aspect-video overflow-hidden rounded-sm border border-zinc-300 bg-black dark:border-zinc-700">
            <ProjectVideo
              src={project.video}
              poster={project.image ?? project.cover}
              title={project.title}
            />
          </div>
        ) : project.image ? (
          <div className="relative aspect-video overflow-hidden rounded-sm border border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
            <Image
              src={project.image}
              alt={`${project.title} interface`}
              fill
              priority
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-contain"
            />
          </div>
        ) : null}
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 py-20 md:py-28 lg:grid-cols-[minmax(12rem,0.55fr)_minmax(0,1.45fr)]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              01 / Overview
            </p>
          </div>
          <div>
            <p className="max-w-3xl text-xl leading-9 tracking-[-0.015em] text-zinc-700 dark:text-zinc-300 md:text-2xl md:leading-10">
              {project.description}
            </p>

            <div className="mt-14 border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                Outcome
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-white md:text-3xl">
                {project.impact}
              </p>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="engineering-title"
          className="grid gap-12 border-t border-zinc-200 py-20 dark:border-zinc-800 md:py-28 lg:grid-cols-[minmax(12rem,0.55fr)_minmax(0,1.45fr)]"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              02 / Delivery
            </p>
            <h2
              id="engineering-title"
              className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-zinc-950 dark:text-white"
            >
              Engineering focus
            </h2>
          </div>
          <div>
            <ol className="space-y-0 border-t border-zinc-200 dark:border-zinc-800">
              {project.highlights.map((highlight, index) => (
                <li
                  key={highlight}
                  className="grid grid-cols-[2rem_1fr] gap-4 border-b border-zinc-200 py-6 dark:border-zinc-800"
                >
                  <span className="font-mono text-[10px] text-zinc-500">
                    0{index + 1}
                  </span>
                  <span className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                    {highlight}
                  </span>
                </li>
              ))}
            </ol>

            {project.technicalChallenge && (
              <div className="mt-10 border-l-2 border-zinc-950 pl-5 dark:border-white">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  Hardest engineering problem
                </p>
                <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                  {project.technicalChallenge}
                </p>
              </div>
            )}

            <div className="mt-10">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                System stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(technology => (
                  <span
                    key={technology}
                    className="rounded-sm border border-zinc-300 px-3 py-1.5 font-mono text-[10px] text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section
            aria-labelledby="gallery-title"
            className="border-t border-zinc-200 py-20 dark:border-zinc-800 md:py-28"
          >
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  03 / Evidence
                </p>
                <h2
                  id="gallery-title"
                  className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white"
                >
                  Project gallery
                </h2>
              </div>
              <span className="font-mono text-[10px] text-zinc-500">
                {String(project.gallery.length).padStart(2, "0")} frames
              </span>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <figure
                  key={image}
                  className={`relative overflow-hidden rounded-sm border border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 ${
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
                  <figcaption className="border-t border-zinc-200 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500 dark:border-zinc-800">
                    Frame {String(index + 1).padStart(2, "0")}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <nav
          aria-label="Continue through projects"
          className="border-t border-zinc-200 pt-12 dark:border-zinc-800"
        >
          <Link
            href={`/post/${nextProject.id}`}
            className="group grid gap-3 rounded-sm border border-zinc-300 p-6 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900 sm:grid-cols-[1fr_auto] sm:items-end md:p-8"
          >
            <span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                Next project
              </span>
              <span className="mt-3 block text-2xl font-semibold tracking-[-0.035em] text-zinc-950 dark:text-white md:text-3xl">
                {nextProject.title}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="text-2xl transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
