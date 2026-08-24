import { useState } from "react";

// simple placeholder component for books list
export function Books() {
  const [books] = useState<string[]>([
    'Psychology of Money',
    'The Hard Thing About Hard Things',
    'No Rules Rules',
    'Atomic Habits',
    'Intelligent Investor',
    'Deep Work',
    'Art of Spending Money',
    'Just Keep Buying',
    'Think Again',
  ]);

  const stockMarketViews = [
    'India remains a structural growth story led by consumption, formalization, and digital adoption.',
    'Focus on quality businesses with strong cash flows, governance, and pricing power over short-term momentum.',
    'SIPs and disciplined allocation across large-cap, mid-cap, and sector exposure reduce timing risk.',
    'Volatility is normal—treat corrections as rebalancing opportunities, not panic triggers.',
  ];

  return (
    <aside className="w-64 bg-card dark:bg-slate-800 shadow-md border-l border-border dark:border-cyan-700 p-6">
      <h2 className="text-xl font-display text-foreground mb-6">Books I Read</h2>
      <div className="space-y-2 text-sm">
        {books.length === 0 ? (
          <p className="text-muted-foreground dark:text-muted-foreground">No books added yet.</p>
        ) : (
          books.map((title, idx) => (
            <p key={idx} className="text-foreground/80 dark:text-muted-foreground">&bull; {title}</p>
          ))
        )}
      </div>

      <div className="mt-8 border-t border-border dark:border-cyan-700 pt-6">
        <h3 className="text-lg font-display text-foreground mb-3">
          My View on Indian Stock Market
        </h3>
        <ul className="space-y-2 text-sm text-foreground/80 dark:text-muted-foreground">
          {stockMarketViews.map((view) => (
            <li key={view}>&bull; {view}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
