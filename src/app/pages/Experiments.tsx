import { Link } from "react-router";
import { PageShell } from "../components/PageShell";

const experiments = [
  {
    title: "Personal Finance",
    desc: "Notes on wealth building, an asset-class tracker, and a retirement calculator I built for myself.",
    to: "/experiments/personal-finance",
    accent: "var(--accent-gold)",
  },
];

export function Experiments() {
  return (
    <PageShell maxWidth="max-w-4xl">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
          02 / Experiments
        </p>
        <h1 className="font-display text-4xl text-foreground mb-2">My Experiments</h1>
        <p className="text-muted-foreground">
          Small tools and write-ups I build and tinker with — not polished products,
          just things I found useful enough to keep around.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {experiments.map((e) => (
          <Link
            key={e.title}
            to={e.to}
            className="group relative bg-card p-8 rounded-lg border border-border shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
          >
            <span
              aria-hidden
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: e.accent }}
            />
            <h2 className="font-display text-2xl text-primary mb-2 group-hover:text-accent transition-colors">
              {e.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
