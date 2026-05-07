"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  FolderKanban,
  Info,
  Layers3,
  Menu,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
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

function PortfolioMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="portfolio-menu"
        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:border-neutral-900 hover:shadow-md"
      >
        {isOpen ? <X size={17} /> : <Menu size={17} />}
        Menu
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="portfolio-menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute right-0 top-14 w-[min(88vw,520px)] overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/95 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl"
          >
            <div className="bg-[radial-gradient(circle_at_10%_10%,rgba(251,113,133,0.20),transparent_34%),radial-gradient(circle_at_90%_0%,rgba(14,165,233,0.18),transparent_30%)] p-5">
              <div className="rounded-2xl bg-white/75 p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-neutral-950 text-white">
                    <UserRound size={20} />
                  </span>
                  <div>
                    <p className="text-base font-semibold">Anthony Vargas</p>
                    <p className="text-sm text-neutral-600">
                      UX / Interaction Design
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-neutral-600">
                  Portfolio work focused on clearer everyday systems, better
                  hierarchy, and interfaces that reduce effort.
                </p>
              </div>
            </div>

            <div className="grid gap-2 p-3">
              <Link
                href="/#top"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100"
              >
                <span className="flex items-center gap-3">
                  <Info size={18} />
                  My info
                </span>
                <ArrowUpRight size={17} />
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100"
              >
                <span className="flex items-center gap-3">
                  <UserRound size={18} />
                  About
                </span>
                <ArrowUpRight size={17} />
              </Link>
              <Link
                href="/#projects"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100"
              >
                <span className="flex items-center gap-3">
                  <FolderKanban size={18} />
                  Projects folder
                </span>
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="border-t border-neutral-100 p-3">
              <p className="px-4 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                All projects
              </p>
              <div className="grid gap-2">
                {projects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-neutral-950 hover:text-white"
                  >
                    <span>
                      <span className="block text-sm font-semibold">
                        {project.title}
                      </span>
                      <span className="mt-1 block text-xs text-neutral-500 transition group-hover:text-white/65">
                        {project.category}
                      </span>
                    </span>
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full text-sm"
                      style={{ backgroundColor: project.accent }}
                    >
                      {project.image}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-end bg-white/70 px-8 py-4 backdrop-blur-md">
        <PortfolioMenu />
      </nav>

      <section id="top" className="flex min-h-screen flex-col justify-center px-8 pt-20 md:px-20">
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

      </section>

      <section id="projects" className="relative overflow-hidden px-8 py-24 md:px-20">
        <div className="pointer-events-none absolute inset-x-0 top-8 h-72 bg-[radial-gradient(circle_at_15%_20%,rgba(251,113,133,0.22),transparent_32%),radial-gradient(circle_at_82%_6%,rgba(14,165,233,0.2),transparent_28%),radial-gradient(circle_at_58%_82%,rgba(16,185,129,0.16),transparent_30%)]" />

        <Reveal>
          <div className="relative mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
                <Layers3 size={16} /> Case studies
              </p>
            </div>
          </div>
        </Reveal>

        <div className="relative grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="h-full"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)] outline-none transition duration-300 focus-visible:ring-4 focus-visible:ring-black/10"
                >
                  <div
                    className={`relative h-72 overflow-hidden bg-gradient-to-br ${project.pattern}`}
                  >
                    <motion.div
                      aria-hidden="true"
                      className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-white/30 blur-2xl"
                      animate={{ x: [0, 26, 0], y: [0, 18, 0] }}
                      transition={{
                        duration: 7 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      aria-hidden="true"
                      className="absolute bottom-8 right-8 h-28 w-28 rounded-full bg-black/10 blur-xl"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 18, 0] }}
                      transition={{
                        duration: 6 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.34)_0_1px,transparent_1px_18px)] opacity-40" />

                    <div className="relative flex h-full flex-col justify-between p-7 text-white">
                      <div className="flex items-start justify-between gap-4">
                        <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md">
                          0{index + 1}
                        </span>
                        <span className="rounded-full bg-black/15 px-4 py-2 text-xs font-medium backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>

                      <div className="flex items-end justify-between gap-5">
                        <motion.div
                          className="text-8xl drop-shadow-sm"
                          whileHover={{ rotate: -8, scale: 1.08 }}
                          transition={{ type: "spring", stiffness: 260 }}
                        >
                          {project.image}
                        </motion.div>
                        <div className="rounded-2xl bg-white/22 p-4 text-right shadow-lg backdrop-blur-md">
                          <p className="text-2xl font-semibold leading-none">
                            {project.metric}
                          </p>
                          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                            {project.metricLabel}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <span
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-white shadow-lg transition duration-300 group-hover:rotate-45 group-hover:scale-110"
                        style={{ backgroundColor: project.accent }}
                      >
                        <ArrowUpRight size={20} />
                      </span>
                    </div>

                    <p className="mt-4 leading-7 text-neutral-600">
                      {project.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-600 transition duration-300 group-hover:border-transparent group-hover:bg-neutral-900 group-hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-8">
                      <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
                      <p className="mt-5 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        View project
                        <span className="h-2 w-2 rounded-full transition duration-300 group-hover:scale-[2.4]" style={{ backgroundColor: project.accent }} />
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
