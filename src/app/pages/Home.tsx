import { Link } from "react-router";
import { blogStore } from "../store/blogStore";
import { PageShell } from "../components/PageShell";

const sections = [
  {
    n: "01",
    title: "Writing",
    desc: "Essays on digital transformation, generative AI, and turning strategy into practical, operating-model change.",
    to: "/writing",
  },
  {
    n: "02",
    title: "Personal Finance",
    desc: "Notes on EPF, PPF, mutual funds and stocks, plus a retirement calculator I built for my own planning.",
    to: "/pf",
  },
  {
    n: "03",
    title: "Library",
    desc: "Books I keep coming back to, and where I stand on the Indian stock market.",
    to: "/library",
  },
  {
    n: "04",
    title: "About",
    desc: "The person behind Verma Wisdom.",
    to: "/about",
  },
];

export function Home() {
  const latestPost = blogStore.getPosts()[0];

  return (
    <PageShell maxWidth="max-w-4xl">
      <section className="text-center py-8">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-5">
          Ravi Verma · Digital Transformation Leader
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6 text-balance">
          Digital transformation at the intersection of commerce and generative AI.
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
          I translate emerging technology into practical operating-model change — modernizing
          customer journeys, strengthening data and platform foundations, and unlocking
          measurable growth.
        </p>
        {latestPost && (
          <Link
            to={`/post/${latestPost.id}`}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors"
          >
            Read the latest note →
          </Link>
        )}
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border mt-12 rounded-lg overflow-hidden border border-border">
        {sections.map((s) => (
          <Link
            key={s.n}
            to={s.to}
            className="bg-card p-8 hover:bg-muted transition-colors"
          >
            <span className="font-mono text-xs text-muted-foreground">{s.n} /</span>
            <h2 className="font-display text-2xl text-foreground mt-2 mb-2">{s.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
