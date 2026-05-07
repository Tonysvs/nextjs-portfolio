import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7] px-8 py-16 text-[#1d1d1f] md:px-20">
      <Link href="/" className="text-sm text-neutral-500">
        ← Back to projects
      </Link>

      <section className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            {project.category}
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 text-xl leading-9 text-neutral-600">
            {project.description}
          </p>
        </div>

        <div
          className={`flex h-[440px] items-center justify-center rounded-[2.5rem] bg-gradient-to-br ${project.color} text-9xl shadow-2xl`}
        >
          {project.image}
        </div>
      </section>

      <section className="mt-24 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-8 shadow">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
            Problem
          </p>
          <p className="text-2xl leading-10">{project.problem}</p>
        </div>

        <div className="rounded-[2rem] bg-[#1d1d1f] p-8 text-white shadow">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
            Outcome
          </p>
          <p className="text-2xl leading-10">{project.outcome}</p>
        </div>
      </section>
    </main>
  );
}