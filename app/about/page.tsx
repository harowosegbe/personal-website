import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

const profile = [
  ["Role", "Senior 3D / XR Engineer"],
  ["Practice", "Web3D · CAD · AR · VR · AI"],
  ["Experience", "8+ years building spatial products"],
  ["Scale", "25K+ creators · 1M+ experiences powered"],
  ["Selected clients", "Marriott · Mastercard · Lloyds · Globacom · L’Oréal"],
];

const systems = [
  {
    id: "creating-no-code-arvr",
    title: "SwiftXR",
    description:
      "No-code creation, publishing and deployment for browser-based AR and VR.",
  },
  {
    id: "innovations-in-cad",
    title: "Solar CAD",
    description:
      "Aerial roof tracing, generated 3D geometry and simulation-aware panel layout.",
  },
  {
    id: "AR-Glasses",
    title: "AR subtitle glasses",
    description:
      "Real-time multilingual transcription positioned in a world-space display.",
  },
  {
    id: "banking-chatbot",
    title: "Lloyds campus AI",
    description:
      "Bidirectional phone-to-screen interaction used by more than 11,000 students.",
  },
  {
    id: "hse-vr-training",
    title: "VR simulation",
    description:
      "Repeatable safety and machinery training without real-world operational risk.",
  },
];

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32">
      <header>
        <div className="grid grid-cols-[4rem_1fr] gap-3 border-b border-zinc-300 pb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 dark:border-zinc-700">
          <span>Profile</span>
          <span>Hammed Arowosegbe</span>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-[minmax(0,1fr)_10rem] sm:items-end">
          <div>
            <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-zinc-950 dark:text-white sm:text-5xl md:text-6xl">
              I work where software meets the physical world.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              I&apos;m Hammed Arowosegbe, a senior 3D and XR engineer. I design
              and build browser-based 3D tools, immersive simulations and
              interactive installations.
            </p>
          </div>

          <figure className="w-36 sm:w-full">
            <Image
              src="/images/hammed-headshot.jpg"
              alt="Portrait of Hammed Arowosegbe"
              className="aspect-[4/5] w-full border border-zinc-300 object-cover grayscale dark:border-zinc-700"
              width={320}
              height={400}
              sizes="160px"
              priority
            />
            <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-zinc-500">
              Hammed Arowosegbe
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="sr-only">Profile details</h2>
        <dl>
          {profile.map(([label, value]) => (
            <div
              key={label}
              className="grid gap-2 border-b border-zinc-200 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4 dark:border-zinc-800"
            >
              <dt className="font-mono text-[9px] uppercase tracking-[0.13em] text-zinc-500">
                {label}
              </dt>
              <dd className="font-mono text-xs leading-5 text-zinc-700 dark:text-zinc-300">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16 grid gap-5 sm:grid-cols-[9rem_1fr] sm:gap-4">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
          Practice
        </h2>
        <div className="space-y-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          <p>
            My work spans browser CAD, no-code WebXR publishing, VR training,
            motion-tracked installations and AI experiences shared across phones
            and public displays.
          </p>
          <p>
            I usually work on the difficult middle: geometry, real-time
            communication, interaction logic and the systems needed to move an
            experience from prototype to dependable deployment.
          </p>
        </div>
      </section>

      <section className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="grid grid-cols-[4rem_1fr_auto] gap-3 border-b border-zinc-300 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 dark:border-zinc-700">
          <span>Index</span>
          <h2>Selected systems</h2>
          <span>{String(systems.length).padStart(2, "0")}</span>
        </div>

        <ol>
          {systems.map((system, index) => (
            <li key={system.id}>
              <Link
                href={`/post/${system.id}`}
                className="group grid grid-cols-[4rem_minmax(0,1fr)_auto] gap-3 border-b border-zinc-200 py-5 font-mono transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900/40"
              >
                <span className="text-[10px] text-zinc-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong className="block text-xs font-medium text-zinc-950 dark:text-white">
                    {system.title}
                  </strong>
                  <span className="mt-2 block text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                    {system.description}
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
          ))}
        </ol>
      </section>

      <section className="mt-16 grid gap-5 border-t border-zinc-200 pt-6 sm:grid-cols-[9rem_1fr] sm:gap-4 dark:border-zinc-800">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
          Community
        </h2>
        <div>
          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
            I&apos;m President of the VR/AR Association Nigeria Chapter, where I
            support stronger connections between researchers, builders and
            businesses working in immersive technology.
          </p>
          <a
            href="mailto:arowosegbe.hammed.olawale@gmail.com"
            className="mt-6 inline-block border-b border-zinc-300 pb-0.5 font-mono text-xs text-zinc-600 transition-colors hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-white dark:hover:text-white"
          >
            Email me ↗
          </a>
        </div>
      </section>
    </article>
  );
}
