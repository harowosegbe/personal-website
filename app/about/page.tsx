import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Hammed Arowosegbe, a senior 3D and XR engineer working across Web3D, CAD, AR, VR and AI.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Hammed Arowosegbe",
    description:
      "Senior 3D and XR engineer working across Web3D, CAD, AR, VR and AI.",
    url: "/about",
  },
};

const metrics = [
  ["8+", "years in spatial computing"],
  ["1M+", "experiences powered"],
  ["25K+", "creators served"],
  ["5", "global brands represented"],
];

const impact = [
  [
    "SwiftXR",
    "Built the platform foundations for no-code immersive publishing at scale.",
  ],
  [
    "Solar CAD",
    "Combined 3D roof modelling, layout automation and environmental simulation in a browser workflow.",
  ],
  [
    "Accessible AR",
    "Created real-time subtitle glasses supporting English, Yoruba, Igbo and Hausa workflows.",
  ],
  [
    "Lloyds AI",
    "Architected real-time communication for an interactive campus activation that reached more than 11,000 students.",
  ],
  [
    "Simulation",
    "Built repeatable VR training systems for maritime operations, industrial machinery and workplace safety.",
  ],
];

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
      <header>
        <div className="mb-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          <span>01 / About</span>
          <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          <span className="hidden sm:inline">
            Engineer · Builder · Community lead
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-zinc-950 dark:text-white sm:text-6xl md:text-7xl">
              I work where software meets the physical world.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 tracking-[-0.015em] text-zinc-600 dark:text-zinc-400 md:text-2xl md:leading-10">
              I&apos;m Hammed Arowosegbe, a senior 3D and XR engineer. I build
              spatial products that turn complex systems into interfaces people
              can see, understand and use.
            </p>
          </div>

          <figure>
            <Image
              src="/images/hammed-headshot.jpg"
              alt="Portrait of Hammed Arowosegbe"
              className="aspect-square w-full rounded-sm border border-zinc-300 object-cover grayscale dark:border-zinc-700"
              width={500}
              height={500}
              sizes="(min-width: 1024px) 30vw, 100vw"
              priority
            />
            <figcaption className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
              Hammed Arowosegbe / Senior 3D &amp; XR Engineer
            </figcaption>
          </figure>
        </div>
      </header>

      <dl className="mt-20 grid grid-cols-2 border-y border-zinc-200 dark:border-zinc-800 md:grid-cols-4">
        {metrics.map(([value, label], index) => (
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

      <section className="grid gap-12 py-20 md:py-28 lg:grid-cols-[minmax(12rem,0.55fr)_minmax(0,1.45fr)]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            02 / Practice
          </p>
        </div>
        <div className="space-y-8 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          <p>
            My work spans browser-based CAD, immersive training, interactive
            installations, real-time AI systems and accessibility tools. The
            common thread is an interest in interfaces that go beyond a flat
            screen and help people act on complicated information.
          </p>
          <p>
            I have delivered work for Marriott, Mastercard, Lloyds Banking
            Group, Globacom and L&apos;Oréal. Previously, as a founding engineer
            at Aether Energy, I helped build a Web3D solar design platform that
            combines rooftop geometry, environmental data and simulation.
          </p>
          <p>
            I also pioneered SwiftXR, a no-code platform used by more than
            25,000 creators to publish over one million immersive web, AR and VR
            experiences.
          </p>
        </div>
      </section>

      <section className="grid gap-12 border-t border-zinc-200 py-20 dark:border-zinc-800 md:py-28 lg:grid-cols-[minmax(12rem,0.55fr)_minmax(0,1.45fr)]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            03 / Selected impact
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-zinc-950 dark:text-white">
            Work that moved beyond the prototype.
          </h2>
        </div>
        <ol className="border-t border-zinc-200 dark:border-zinc-800">
          {impact.map(([title, description], index) => (
            <li
              key={title}
              className="grid grid-cols-[2rem_1fr] gap-4 border-b border-zinc-200 py-6 dark:border-zinc-800 sm:grid-cols-[2rem_10rem_1fr]"
            >
              <span className="font-mono text-[10px] text-zinc-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong className="text-sm font-semibold text-zinc-950 dark:text-white">
                {title}
              </strong>
              <span className="col-start-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:col-start-3">
                {description}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-12 border-t border-zinc-200 py-20 dark:border-zinc-800 md:py-28 lg:grid-cols-[minmax(12rem,0.55fr)_minmax(0,1.45fr)]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            04 / Leadership
          </p>
        </div>
        <div>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-zinc-950 dark:text-white md:text-4xl">
            Advancing the spatial computing ecosystem across Africa.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            As President of the VR/AR Association Nigeria Chapter, I support
            industry growth, access to knowledge and stronger connections
            between researchers, builders and businesses working in immersive
            technology.
          </p>
        </div>
      </section>

      <section className="rounded-sm bg-zinc-950 p-7 text-white dark:bg-white dark:text-zinc-950 md:p-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
          Start a conversation
        </p>
        <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
            Building something that needs a spatial point of view?
          </h2>
          <a
            href="mailto:arowosegbe.hammed.olawale@gmail.com"
            className="inline-flex w-fit rounded-sm border border-white/30 px-4 py-2.5 font-mono text-xs transition-colors hover:bg-white hover:text-zinc-950 dark:border-zinc-950/30 dark:hover:bg-zinc-950 dark:hover:text-white"
          >
            Email me ↗
          </a>
        </div>
      </section>
    </article>
  );
}
