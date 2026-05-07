import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  CalendarDays,
  ChefHat,
  Clock,
  Database,
  Home,
  ListChecks,
  MessageSquare,
  PieChart,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  if (project.slug === "anfcorp-redesign") {
    return <ANFcorpCaseStudy />;
  }

  if (project.slug === "content-nutrition") {
    return <ContentNutritionCaseStudy />;
  }

  if (project.slug === "cookbook-app") {
    return <CookbookCaseStudy />;
  }

  notFound();
}

function ANFcorpCaseStudy() {
  return (
    <main className="min-h-screen bg-[#08070a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-8 md:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(239,68,68,0.45),transparent_35%),radial-gradient(circle_at_20%_85%,rgba(249,115,22,0.35),transparent_30%)]" />

        <div className="relative z-10">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:bg-white hover:text-black"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>

          <div className="grid min-h-[78vh] gap-12 md:grid-cols-[0.9fr_1.3fr] md:items-center">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                UX Redesign
              </p>

              <h1 className="text-6xl font-black leading-[0.9] md:text-8xl">
                ANFcorp <br />
                Schedule <br />
                Portal
              </h1>

              <p className="mt-7 max-w-xl text-xl leading-8 text-white/75">
                Making upcoming shifts easier to find by turning a menu-heavy HR
                dashboard into a priority-first schedule experience.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <MiniStat icon={<CalendarDays />} title="Prioritized" text="Next shift first" />
                <MiniStat icon={<Zap />} title="Faster" text="Key actions nearby" />
                <MiniStat icon={<CheckCircle2 />} title="Cleaner" text="Less scanning" />
              </div>
            </div>

            <div className="relative">
              <LaptopMockup />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="grid gap-5 bg-[#f5f5f7] px-6 py-16 text-black md:grid-cols-2 md:px-16">
        <CaseCard
          number="01"
          title="The Problem"
          text="The current portal treats every HR tool like it has equal importance. For a worker checking their schedule, this creates unnecessary searching before they can answer the basic question: when do I work next?"
        />

        <CaseCard
          number="02"
          title="The Solution"
          text="The redesign makes the upcoming shift the first thing users see, then organizes quick actions and schedule details around that priority."
        />
      </section>

      {/* INTERACTIVE FEATURES */}
      <section className="bg-white px-6 py-20 text-black md:px-16">
        <div className="mb-12 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
            03 Key Features
          </p>
          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Built around what workers check first.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Clock />}
            title="Next Shift Priority"
            text="The largest card answers the most urgent question immediately: when is my next shift?"
          />
          <FeatureCard
            icon={<User />}
            title="Availability Access"
            text="Availability is moved into a quick-action area instead of being buried in the portal."
          />
          <FeatureCard
            icon={<MessageSquare />}
            title="Message Awareness"
            text="Unread messages are surfaced near schedule actions so updates are not missed."
          />
        </div>
      </section>

      {/* RESPONSIVE MOCKUPS */}
      <section className="grid gap-10 bg-[#f5f5f7] px-6 py-20 text-black md:grid-cols-[1fr_1.2fr] md:items-center md:px-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
            04 Responsive Design
          </p>
          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Desktop and mobile share the same priority.
          </h2>
          <p className="mt-6 text-xl leading-8 text-neutral-600">
            The layout changes shape, but the hierarchy stays consistent: next
            shift first, upcoming shifts second, quick actions third.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end">
          <div className="flex-1">
            <MiniDashboard />
          </div>
          <PhoneMockup />
        </div>
      </section>
    </main>
  );
}

function ContentNutritionCaseStudy() {
  return (
    <main className="min-h-screen bg-[#061814] text-white">
      <section className="relative overflow-hidden px-6 py-8 md:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(45,212,191,0.42),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(132,204,22,0.28),transparent_32%)]" />

        <div className="relative z-10">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:bg-white hover:text-black"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>

          <div className="grid min-h-[78vh] gap-12 md:grid-cols-[0.9fr_1.25fr] md:items-center">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">
                Product Concept
              </p>

              <h1 className="text-6xl font-black leading-[0.9] md:text-8xl">
                Content <br />
                Nutrition <br />
                Dashboard
              </h1>

              <p className="mt-7 max-w-xl text-xl leading-8 text-white/75">
                Reframing screen time as a weekly quality check, so users can
                see patterns in what they consume instead of only counting
                minutes.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <MiniStat icon={<PieChart />} title="Balanced" text="Media categories" />
                <MiniStat icon={<BarChart3 />} title="Visible" text="Weekly patterns" />
                <MiniStat icon={<ShieldCheck />} title="Reflective" text="Less judgment" />
              </div>
            </div>

            <ContentDashboardMockup />
          </div>
        </div>
      </section>

      <section className="grid gap-5 bg-[#eefbf6] px-6 py-16 text-black md:grid-cols-2 md:px-16">
        <CaseCard
          number="01"
          title="The Problem"
          text="Most screen-time products make time feel like the only thing that matters. They tell users how long they were online, but not whether the content helped, drained, taught, or distracted them."
        />
        <CaseCard
          number="02"
          title="The Solution"
          text="Content Nutrition groups media into simple categories and turns the week into a reflection surface, making habit patterns easier to understand without shaming the user."
        />
      </section>

      <section className="bg-white px-6 py-20 text-black md:px-16">
        <div className="mb-12 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
            03 Key Features
          </p>
          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            A calmer way to read digital habits.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<BarChart3 />}
            title="Weekly Mix"
            text="A category chart shows how attention is distributed across learning, social, entertainment, and low-value scrolling."
          />
          <FeatureCard
            icon={<Sparkles />}
            title="Quality Signals"
            text="Instead of labeling everything good or bad, the concept uses lightweight cues for energy, focus, and usefulness."
          />
          <FeatureCard
            icon={<ListChecks />}
            title="Reflection Prompts"
            text="End-of-week prompts help users name patterns and choose one small adjustment for the next week."
          />
        </div>
      </section>

      <section className="grid gap-10 bg-[#eefbf6] px-6 py-20 text-black md:grid-cols-[1fr_1.2fr] md:items-center md:px-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
            04 Mobile Flow
          </p>
          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Insight first, details when needed.
          </h2>
          <p className="mt-6 text-xl leading-8 text-neutral-600">
            The mobile layout starts with a single weekly scorecard, then lets
            users drill into categories and reflection notes when they want more
            context.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end">
          <ContentInsightPanel />
          <ContentPhoneMockup />
        </div>
      </section>
    </main>
  );
}

function CookbookCaseStudy() {
  return (
    <main className="min-h-screen bg-[#120d08] text-white">
      <section className="relative overflow-hidden px-6 py-8 md:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(244,114,182,0.35),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.34),transparent_32%),radial-gradient(circle_at_74%_86%,rgba(56,189,248,0.24),transparent_30%)]" />

        <div className="relative z-10">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:bg-white hover:text-black"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>

          <div className="grid min-h-[78vh] gap-12 md:grid-cols-[0.9fr_1.25fr] md:items-center">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
                SwiftUI / SQLite
              </p>

              <h1 className="text-6xl font-black leading-[0.9] md:text-8xl">
                Cookbook <br />
                Mobile <br />
                App
              </h1>

              <p className="mt-7 max-w-xl text-xl leading-8 text-white/75">
                Turning a recipe database into a mobile-first cooking companion
                with fast search, favorites, editable recipes, and saved
                ingredients.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <MiniStat icon={<Search />} title="Searchable" text="Find recipes fast" />
                <MiniStat icon={<Star />} title="Saved" text="Favorites first" />
                <MiniStat icon={<Database />} title="Local" text="SQLite storage" />
              </div>
            </div>

            <CookbookHeroMockup />
          </div>
        </div>
      </section>

      <section className="grid gap-5 bg-[#fff7ed] px-6 py-16 text-black md:grid-cols-2 md:px-16">
        <CaseCard
          number="01"
          title="The Problem"
          text="The original recipe experience had useful data, but it did not feel built for someone cooking with one hand, searching quickly, or editing a recipe from a phone."
        />
        <CaseCard
          number="02"
          title="The Solution"
          text="The app organizes recipes into large mobile cards, keeps core actions close to the thumb, and supports saved favorites, search, and add/edit flows backed by local storage."
        />
      </section>

      <section className="bg-white px-6 py-20 text-black md:px-16">
        <div className="mb-12 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            03 Key Features
          </p>
          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Built for quick cooking decisions.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<BookOpen />}
            title="Recipe Detail Pages"
            text="Ingredients, steps, timing, and notes are separated clearly so the cook can scan without losing their place."
          />
          <FeatureCard
            icon={<Search />}
            title="Fast Search"
            text="Search and category chips make it easy to jump from craving to recipe without scrolling through a long list."
          />
          <FeatureCard
            icon={<ChefHat />}
            title="Add and Edit"
            text="A simple form flow lets users save new recipes, update ingredients, and keep their cookbook personal."
          />
        </div>
      </section>

      <section className="grid gap-10 bg-[#fff7ed] px-6 py-20 text-black md:grid-cols-[1fr_1.2fr] md:items-center md:px-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            04 App System
          </p>
          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Native screens with a warm kitchen feel.
          </h2>
          <p className="mt-6 text-xl leading-8 text-neutral-600">
            The visual system uses warm recipe cards, clear saved states, and
            compact details so the app feels useful without getting fussy.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end">
          <RecipeGridMockup />
          <CookbookPhoneMockup />
        </div>
      </section>
    </main>
  );
}

function LaptopMockup() {
  return (
    <div className="rounded-[2rem] bg-neutral-900 p-4 shadow-2xl shadow-red-950/50 transition duration-500 hover:-translate-y-3 hover:rotate-1">
      <div className="rounded-t-[1.5rem] bg-black p-3">
        <div className="mx-auto h-3 w-28 rounded-full bg-neutral-800" />
      </div>

      <div className="rounded-b-[1.5rem] bg-white p-6 text-black">
        <div className="grid grid-cols-[170px_1fr] gap-6">
          <aside className="rounded-2xl bg-neutral-50 p-4">
            <p className="mb-6 text-lg font-black text-red-700">ANFcorp</p>
            {["Home", "My Schedule", "Time Off", "Availability", "Messages"].map((item, i) => (
              <div
                key={item}
                className={`mb-3 flex items-center gap-3 rounded-xl px-3 py-2 text-sm ${
                  i === 0 ? "bg-red-600 text-white" : "text-neutral-600"
                }`}
              >
                <Home size={15} />
                {item}
              </div>
            ))}
          </aside>

          <section>
            <p className="text-sm text-neutral-500">Good morning, Alex 👋</p>
            <h3 className="mb-5 text-2xl font-black">Here’s what’s coming up.</h3>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl bg-gradient-to-br from-red-600 to-orange-500 p-6 text-white shadow-lg transition hover:scale-[1.02]">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Next Shift</p>
                <h4 className="mt-4 text-3xl font-black">Friday, May 16</h4>
                <p className="mt-2 text-xl font-bold">9:00 AM – 5:00 PM</p>
                <p className="mt-1 text-sm text-white/80">Store Associate · Anaheim, CA</p>
                <button className="mt-6 rounded-full bg-white px-5 py-3 text-sm font-bold text-red-700 transition hover:scale-105">
                  View Shift Details →
                </button>
              </div>

              <div className="rounded-3xl bg-neutral-50 p-6 shadow-sm">
                <h4 className="font-black">May 2024</h4>
                <div className="mt-5 grid grid-cols-7 gap-2 text-center text-sm text-neutral-500">
                  {Array.from({ length: 31 }, (_, i) => (
                    <span
                      key={i}
                      className={`rounded-full p-1 ${
                        i + 1 === 16 ? "bg-red-600 font-bold text-white" : ""
                      }`}
                    >
                      {i + 1}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-3xl bg-neutral-50 p-5 shadow-sm">
              <div className="mb-3 flex justify-between">
                <h4 className="font-black">Upcoming Shifts</h4>
                <span className="text-sm font-bold text-red-600">View all</span>
              </div>
              {["Sat, May 17 — 10:00 AM – 6:00 PM", "Sun, May 18 — 11:00 AM – 7:00 PM", "Mon, May 19 — 9:00 AM – 5:00 PM"].map((shift) => (
                <div key={shift} className="border-t border-neutral-200 py-3 text-sm">
                  {shift}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ContentDashboardMockup() {
  const categories = [
    { label: "Learning", value: "34%", color: "bg-emerald-400" },
    { label: "Social", value: "27%", color: "bg-cyan-400" },
    { label: "Entertainment", value: "24%", color: "bg-lime-300" },
    { label: "Mindless", value: "15%", color: "bg-slate-300" },
  ];

  return (
    <div className="rounded-[2rem] bg-white/10 p-4 shadow-2xl shadow-emerald-950/50 backdrop-blur transition duration-500 hover:-translate-y-3 hover:rotate-1">
      <div className="rounded-[1.6rem] bg-[#f7fffb] p-6 text-black">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">
              Week Overview
            </p>
            <h3 className="mt-2 text-3xl font-black">Content Nutrition</h3>
          </div>
          <div className="rounded-2xl bg-emerald-950 px-4 py-3 text-right text-white">
            <p className="text-2xl font-black">82</p>
            <p className="text-xs uppercase tracking-[0.18em] text-white/65">balance</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h4 className="font-black">Weekly Mix</h4>
              <BarChart3 className="text-emerald-500" />
            </div>
            <div className="flex h-52 items-end gap-3">
              {[68, 46, 78, 38, 58, 72, 50].map((height, index) => (
                <div key={height} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <div
                    className="w-full rounded-t-2xl bg-gradient-to-t from-emerald-500 to-cyan-300"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs font-bold text-neutral-400">
                    {["M", "T", "W", "T", "F", "S", "S"][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-emerald-950 p-5 text-white shadow-sm">
            <h4 className="font-black">Media Plate</h4>
            <div className="my-7 grid place-items-center">
              <div className="grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(#34d399_0_34%,#22d3ee_34%_61%,#bef264_61%_85%,#cbd5e1_85%_100%)]">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-emerald-950 text-center">
                  <span className="text-2xl font-black">4</span>
                  <span className="-mt-2 text-[10px] uppercase tracking-[0.18em] text-white/60">types</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {categories.map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                    {item.label}
                  </span>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-bold text-neutral-500">Reflection</p>
          <p className="mt-2 text-lg font-black">
            More learning content on focused days. Social spikes late at night.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContentInsightPanel() {
  return (
    <div className="flex-1 rounded-[2rem] bg-white p-6 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black">Nutrition score</h3>
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
          Healthy mix
        </span>
      </div>
      <div className="mt-6 grid gap-4">
        {[
          ["Learning", "34%", "bg-emerald-500"],
          ["Social", "27%", "bg-cyan-500"],
          ["Entertainment", "24%", "bg-lime-400"],
          ["Mindless scroll", "15%", "bg-neutral-400"],
        ].map(([label, value, color]) => (
          <div key={label}>
            <div className="mb-2 flex justify-between text-sm font-bold">
              <span>{label}</span>
              <span>{value}</span>
            </div>
            <div className="h-3 rounded-full bg-neutral-100">
              <div className={`h-full rounded-full ${color}`} style={{ width: value }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContentPhoneMockup() {
  return (
    <div className="w-full max-w-[260px] rounded-[2.5rem] bg-emerald-950 p-3 shadow-2xl">
      <div className="rounded-[2rem] bg-[#f8fffb] p-5 text-black">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Today</p>
        <h3 className="mt-2 text-2xl font-black">Content Plate</h3>
        <div className="my-6 grid place-items-center">
          <div className="grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(#34d399_0_45%,#22d3ee_45%_70%,#bef264_70%_88%,#cbd5e1_88%_100%)]">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-white shadow-inner">
              <span className="text-3xl font-black">82</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {["Watch one lesson", "Save social for later", "Reflect tonight"].map((item) => (
            <div key={item} className="rounded-2xl bg-emerald-50 p-3 text-sm font-bold">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CookbookHeroMockup() {
  return (
    <div className="rounded-[2rem] bg-white/10 p-4 shadow-2xl shadow-amber-950/50 backdrop-blur transition duration-500 hover:-translate-y-3 hover:rotate-1">
      <div className="rounded-[1.6rem] bg-[#fffaf2] p-6 text-black">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-600">
              My Cookbook
            </p>
            <h3 className="mt-2 text-3xl font-black">Tonight’s recipes</h3>
          </div>
          <button className="rounded-full bg-amber-500 px-5 py-3 text-sm font-black text-white shadow-lg">
            Add recipe
          </button>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-amber-300 via-rose-300 to-sky-300 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                Featured
              </p>
              <h4 className="mt-4 text-4xl font-black text-white">
                Lemon Basil Pasta
              </h4>
              <p className="mt-2 text-white/85">25 min · 8 ingredients</p>
            </div>
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/25 text-4xl backdrop-blur">
              🥐
            </span>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ["Breakfast", "12 recipes", "🥞"],
            ["Dinner", "18 recipes", "🍝"],
            ["Dessert", "9 recipes", "🧁"],
          ].map(([title, count, icon]) => (
            <div key={title} className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-4xl">{icon}</p>
              <h4 className="mt-4 font-black">{title}</h4>
              <p className="mt-1 text-sm text-neutral-500">{count}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-black">Favorites</h4>
            <span className="text-sm font-bold text-amber-600">View all</span>
          </div>
          {["Sourdough French Toast", "Roasted Veggie Bowl", "Chocolate Banana Bread"].map((recipe) => (
            <div key={recipe} className="flex items-center justify-between border-t border-neutral-100 py-3 text-sm">
              <span>{recipe}</span>
              <Star size={16} className="fill-amber-400 text-amber-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecipeGridMockup() {
  return (
    <div className="flex-1 rounded-[2rem] bg-white p-6 shadow-xl">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-2xl font-black">Recipe library</h3>
        <Search className="text-amber-500" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          ["Pasta", "25 min", "🍝"],
          ["Toast", "12 min", "🍞"],
          ["Soup", "40 min", "🥣"],
          ["Cupcakes", "55 min", "🧁"],
        ].map(([title, time, icon]) => (
          <div key={title} className="rounded-3xl bg-[#fff7ed] p-4">
            <p className="text-3xl">{icon}</p>
            <h4 className="mt-4 font-black">{title}</h4>
            <p className="mt-1 text-sm text-neutral-500">{time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CookbookPhoneMockup() {
  return (
    <div className="w-full max-w-[260px] rounded-[2.5rem] bg-black p-3 shadow-2xl">
      <div className="rounded-[2rem] bg-[#fffaf2] p-5 text-black">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black">Recipes</h3>
          <ChefHat className="text-amber-500" />
        </div>
        <div className="mt-5 rounded-full bg-white px-4 py-3 text-sm text-neutral-500 shadow-sm">
          Search dinner, dessert...
        </div>
        <div className="mt-5 rounded-3xl bg-gradient-to-br from-amber-300 to-rose-300 p-5 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-white/80">Saved</p>
          <h4 className="mt-3 text-2xl font-black">Banana Bread</h4>
          <p className="mt-1 text-sm font-bold">55 min · Dessert</p>
        </div>
        <div className="mt-5 space-y-3">
          {["Add ingredients", "Edit steps", "Mark favorite"].map((item) => (
            <div key={item} className="rounded-2xl bg-white p-3 text-sm font-bold shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniDashboard() {
  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-xl">
      <div className="rounded-3xl bg-gradient-to-br from-red-600 to-orange-500 p-6 text-white">
        <p className="text-xs uppercase tracking-[0.2em] text-white/70">Next Shift</p>
        <h3 className="mt-3 text-3xl font-black">Friday, May 16</h3>
        <p className="mt-1 text-lg font-bold">9:00 AM – 5:00 PM</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {["Availability", "Time Off", "Swap Shift", "Messages"].map((item) => (
          <div key={item} className="rounded-2xl bg-neutral-100 p-4 text-sm font-bold">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="w-full max-w-[250px] rounded-[2.5rem] bg-black p-3 shadow-2xl">
      <div className="rounded-[2rem] bg-white p-5 text-black">
        <h3 className="text-xl font-black">My Schedule</h3>
        <div className="mt-5 rounded-3xl bg-gradient-to-br from-red-600 to-orange-500 p-5 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">Next Shift</p>
          <h4 className="mt-3 text-2xl font-black">Friday, May 16</h4>
          <p className="mt-1 font-bold">9:00 AM – 5:00 PM</p>
        </div>
        <div className="mt-5 space-y-3">
          {["Sat, May 17", "Sun, May 18", "Mon, May 19"].map((shift) => (
            <div key={shift} className="rounded-2xl bg-neutral-100 p-3 text-sm">
              {shift}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniStat({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div>
      <div className="mb-3 text-orange-500">{icon}</div>
      <p className="font-bold">{title}</p>
      <p className="mt-1 text-sm text-white/60">{text}</p>
    </div>
  );
}

function CaseCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-sm">
      <p className="text-sm font-black text-red-600">{number}</p>
      <h3 className="mt-4 text-3xl font-black">{title}</h3>
      <p className="mt-5 text-lg leading-8 text-neutral-600">{text}</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-[2rem] bg-[#f5f5f7] p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:bg-black hover:text-white hover:shadow-2xl">
      <div className="mb-6 text-red-600 transition group-hover:text-orange-400">
        {icon}
      </div>
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-neutral-600 transition group-hover:text-white/70">
        {text}
      </p>
    </div>
  );
}
