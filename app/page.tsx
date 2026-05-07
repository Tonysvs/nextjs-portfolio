"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ANFcorp Redesign",
    subtitle: "Making upcoming shifts easier to find",
    description:
      "A redesign of the work schedule portal that prioritizes next shifts and availability updates instead of hiding them inside a dense HR dashboard.",
  },
  {
    title: "Content Nutrition",
    subtitle: "Helping users reflect on digital habits",
    description:
      "A design concept that helps people understand the quality of the content they consume, not just the amount of time they spend online.",
  },
  {
    title: "Cookbook App",
    subtitle: "Turning recipes into a mobile experience",
    description:
      "A SwiftUI app redesign of a recipe database with search, add, edit, and recipe detail flows.",
  },
];

function RevealSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.35 }}
      className="min-h-screen flex items-center px-8 md:px-20"
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f5f5f7] text-[#1d1d1f]">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Anthony Vargas
        </p>

        <h1 className="max-w-5xl text-5xl md:text-7xl font-semibold leading-tight">
          Interaction design for everyday systems that should feel easier.
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-neutral-600">
          Inspired by Apple’s scroll-based reveal, this portfolio introduces
          each project gradually so viewers can focus on one idea at a time.
        </p>
      </section>

      {/* PROJECTS */}
      {projects.map((project, index) => (
        <RevealSection key={project.title}>
          <div className="grid gap-10 md:grid-cols-2 items-center w-full">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                Project 0{index + 1}
              </p>

              <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
                {project.title}
              </h2>

              <p className="mt-5 text-2xl text-neutral-600">
                {project.subtitle}
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
                {project.description}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              className="h-[420px] rounded-[2rem] bg-white shadow-xl flex items-center justify-center p-10"
            >
              <div className="h-full w-full rounded-[1.5rem] bg-gradient-to-br from-neutral-200 to-neutral-400 flex items-center justify-center text-center">
                <p className="text-3xl font-semibold text-white">
                  {project.title}
                </p>
              </div>
            </motion.div>
          </div>
        </RevealSection>
      ))}

      {/* REFLECTION */}
      <RevealSection>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Interaction Recreated
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold">
            Scroll-triggered staged reveal
          </h2>

        </div>
      </RevealSection>
    </main>
  );
}