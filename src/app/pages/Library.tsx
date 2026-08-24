import { PageShell } from "../components/PageShell";

const books = [
  "Psychology of Money",
  "The Hard Thing About Hard Things",
  "No Rules Rules",
  "Atomic Habits",
  "Intelligent Investor",
  "Deep Work",
  "Art of Spending Money",
  "Just Keep Buying",
  "Think Again",
];

const stockMarketViews = [
  "India remains a structural growth story led by consumption, formalization, and digital adoption.",
  "Focus on quality businesses with strong cash flows, governance, and pricing power over short-term momentum.",
  "SIPs and disciplined allocation across large-cap, mid-cap, and sector exposure reduce timing risk.",
  "Volatility is normal—treat corrections as rebalancing opportunities, not panic triggers.",
];

export function Library() {
  return (
    <PageShell maxWidth="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
        03 / Library
      </p>
      <h1 className="font-display text-3xl text-foreground mb-4">Books I Read</h1>
      <div className="h-px w-16 bg-primary mb-10"></div>

      <ul className="space-y-3 mb-16">
        {books.map((title) => (
          <li key={title} className="text-foreground/80 border-b border-border pb-3 last:border-0">
            {title}
          </li>
        ))}
      </ul>

      <h2 className="font-display text-2xl text-foreground mb-4">
        My View on the Indian Stock Market
      </h2>
      <ul className="space-y-3 text-foreground/80">
        {stockMarketViews.map((view) => (
          <li key={view} className="flex gap-3">
            <span className="text-primary">•</span>
            <span>{view}</span>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
