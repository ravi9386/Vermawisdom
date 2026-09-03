import { Link } from "react-router";
import { blogStore } from "../store/blogStore";
import { PageShell } from "../components/PageShell";

const sections = [
  {
    n: "01",
    title: "Writing",
    desc: "Essays on digital transformation, generative AI, and turning strategy into practical, operating-model change.",
    to: "/writing",
    accent: "var(--accent-teal)",
  },
  {
    n: "02",
    title: "Experiments",
    desc: "Small tools and write-ups I build and tinker with — starting with a personal finance hub and retirement calculator.",
    to: "/experiments",
    accent: "var(--accent-gold)",
  },
  {
    n: "03",
    title: "Library",
    desc: "30 books across finance and investing, and motivation and mindset — the ones I keep coming back to.",
    to: "/library",
    accent: "var(--accent-plum)",
  },
  {
    n: "04",
    title: "About",
    desc: "The person behind Verma Wisdom.",
    to: "/about",
    accent: "var(--accent-sage)",
  },
];

export function Home() {
  const latestPost = blogStore.getPosts()[0];

  return (
    <PageShell maxWidth="max-w-5xl">
      <section className="relative text-center pt-6 pb-20 -mx-6 px-6 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--accent) 10%, transparent) 0%, transparent 60%), radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 24px 24px",
          }}
        />
        <h1 className="font-display text-4xl md:text-5xl text-primary leading-tight mb-6 text-balance max-w-3xl mx-auto">
          Digital transformation at the intersection of commerce and generative AI.
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
          I translate emerging technology into practical operating-model change — modernizing
          customer journeys, strengthening data and platform foundations, and unlocking
          measurable growth.
        </p>
        <div className="flex items-center justify-center gap-4">
          {latestPost && (
            <Link
              to={`/post/${latestPost.id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-md hover:bg-accent transition-colors shadow-sm"
            >
              Read the latest note →
            </Link>
          )}
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-border px-5 py-2.5 rounded-md hover:border-accent hover:text-accent transition-colors"
          >
            About me
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
        {sections.map((s) => (
          <Link
            key={s.n}
            to={s.to}
            className="group relative bg-card p-8 rounded-lg border border-border shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
          >
            <span
              aria-hidden
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: s.accent }}
            />
            <span className="text-sm font-semibold" style={{ color: s.accent }}>
              {s.n} /
            </span>
            <h2 className="font-display text-2xl text-primary mt-2 mb-2 group-hover:text-accent transition-colors">
              {s.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
