import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Braces,
  Code2,
  Database,
  FileText,
  GitBranch,
  GraduationCap,
  LayoutTemplate,
  Link as LinkIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "(619) 361-0210",
    href: "tel:+16193610210",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://linkedin.com/in/your-profile",
    icon: LinkIcon,
  },
  {
    label: "GitHub",
    value: "github.com/tonysvs",
    href: "https://github.com/tonysvs",
    icon: GitBranch,
  },
  {
    label: "Location",
    value: "San Diego, CA",
    href: null,
    icon: MapPin,
  },
  {
    label: "Resume",
    value: "Add resume link",
    href: "#",
    icon: FileText,
  },
];

const educationItems = [
  {
    label: "University",
    value: "UC San Diego",
    detail: "Cognitive Science / Design-focused coursework",
  },
  {
    label: "Relevant coursework",
    value: "COGS 125, UX research, interaction design",
    detail: "Portfolio projects focused on usability, hierarchy, and task flows.",
  },
  {
    label: "Focus",
    value: "Human-centered product design",
    detail: "Designing practical interfaces for people who are busy or overloaded.",
  },
];

const programmingItems = [
  {
    label: "Frontend",
    value: "React, Next.js, TypeScript, Tailwind CSS",
    icon: Code2,
  },
  {
    label: "Mobile",
    value: "SwiftUI app screens and native mobile flows",
    icon: LayoutTemplate,
  },
  {
    label: "Data",
    value: "SQLite, local storage, structured app data",
    icon: Database,
  },
  {
    label: "Foundations",
    value: "Java, JavaScript, HTML, CSS",
    icon: Braces,
  },
];

export default function MyInfo() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] text-[#171717]">
      <section className="relative overflow-hidden px-8 py-8 md:px-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(251,113,133,0.18),transparent_30%),radial-gradient(circle_at_85%_8%,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_70%_82%,rgba(16,185,129,0.14),transparent_30%)]" />

        <div className="relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm transition hover:border-neutral-900 hover:text-neutral-950"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>

          <div className="grid min-h-[76vh] gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.28em] text-neutral-500">
                <BriefcaseBusiness size={17} />
                Employer contact
              </p>

              <h1 className="max-w-4xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">
                Anthony Vargas
              </h1>

              <p className="mt-7 max-w-xl text-xl leading-8 text-neutral-600">
                UX / Interaction Design student focused on clearer everyday
                systems, faster task flows, and interfaces that reduce
                unnecessary effort.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white">
                  UX Design
                </span>
                <span className="rounded-full bg-white px-5 py-3 text-sm font-bold text-neutral-700 shadow-sm">
                  Product Thinking
                </span>
                <span className="rounded-full bg-white px-5 py-3 text-sm font-bold text-neutral-700 shadow-sm">
                  Frontend Prototyping
                </span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur">
              <div className="rounded-[1.5rem] bg-neutral-950 p-7 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/50">
                  Contact card
                </p>
                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-black">Open to roles</h2>
                    <p className="mt-2 max-w-md leading-7 text-white/65">
                      Internships, junior UX/product design roles, and teams
                      building practical digital tools.
                    </p>
                  </div>
                  <div className="hidden h-20 w-20 place-items-center rounded-3xl bg-white text-4xl md:grid">
                    AV
                  </div>
                </div>
              </div>

              <div className="grid gap-3 p-3 md:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-neutral-100 text-neutral-700">
                        <Icon size={20} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                          {item.label}
                        </span>
                        <span className="mt-1 block truncate text-sm font-semibold text-neutral-800">
                          {item.value}
                        </span>
                      </span>
                      {item.href && (
                        <ArrowUpRight className="ml-auto shrink-0 text-neutral-400" size={18} />
                      )}
                    </>
                  );

                  if (!item.href) {
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-2xl bg-white p-4"
                      >
                        {content}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 rounded-2xl bg-white p-4 transition hover:bg-neutral-950 hover:text-white"
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-6 pb-20 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="mb-7 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-neutral-950 text-white">
                  <GraduationCap size={22} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                    Education
                  </p>
                  <h2 className="text-2xl font-black">Academic background</h2>
                </div>
              </div>

              <div className="space-y-4">
                {educationItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-neutral-100 bg-white p-5"
                  >
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="mt-1 shrink-0 text-emerald-500" size={20} />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                          {item.label}
                        </p>
                        <h3 className="mt-1 text-lg font-black">{item.value}</h3>
                        <p className="mt-2 leading-7 text-neutral-600">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/80 bg-neutral-950 p-7 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
              <div className="mb-7 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-neutral-950">
                  <BookOpen size={22} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                    Programming experience
                  </p>
                  <h2 className="text-2xl font-black">Tools I can build with</h2>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {programmingItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/8 p-5"
                    >
                      <Icon className="mb-5 text-sky-300" size={24} />
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                        {item.label}
                      </p>
                      <h3 className="mt-2 text-lg font-black leading-7">{item.value}</h3>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
