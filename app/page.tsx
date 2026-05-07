"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "./data/projects";

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <nav className="fixed left-0 top-0 z-50 flex w-full justify-between bg-white/70 px-8 py-4 backdrop-blur-md">
        <Link href="/" className="font-semibold">Anthony Vargas</Link>
        <div className="flex gap-6 text-sm">
          <Link href="/#projects">Projects</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>

      <section className="flex min-h-screen flex-col justify-center px-8 pt-20 md:px-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-5 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-neutral-500"
        >
          <Sparkles size={16} /> UX / Interaction Design
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl text-5xl font-semibold leading-tight md:text-8xl"
        >
          Designing everyday systems so they feel easier, faster, and clearer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-2xl text-xl leading-8 text-neutral-600"
        >
          Scroll through selected projects. Each section reveals gradually,
          inspired by Apple’s staged content reveal.
        </motion.p>
      </section>

      <section id="projects" className="px-8 py-24 md:px-20">
        <Reveal>
          <h2 className="mb-12 text-4xl font-semibold md:text-6xl">
            Selected Projects
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-[2rem] bg-white shadow-md transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div
                  className={`flex h-72 items-center justify-center bg-gradient-to-br ${project.color} text-8xl transition duration-500 group-hover:scale-105`}
                >
                  {project.image}
                </div>

                <div className="p-7">
                  <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
                    {project.category}
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <ArrowUpRight className="transition group-hover:rotate-45" />
                  </div>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {project.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}