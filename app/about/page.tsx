import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#111] px-8 py-20 text-white md:px-20">
      <Link href="/" className="text-sm text-white/60">← Back home</Link>

      <section className="mt-24 max-w-4xl">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/50">
          About
        </p>

        <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
          I design for moments where people are rushed, distracted, or overloaded.
        </h1>

        <p className="mt-8 text-xl leading-9 text-white/70">
          My work focuses on improving everyday interfaces: class tools, work
          scheduling systems, recipe apps, and digital habits. I care about
          hierarchy, clarity, and reducing unnecessary effort.
        </p>
      </section>
    </main>
  );
}