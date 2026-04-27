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
    <aside className="w-64 bg-white dark:bg-slate-800 shadow-md border-l border-cyan-200 dark:border-cyan-700 p-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">Books I Read</h2>
      <div className="space-y-2 text-sm">
        {books.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No books added yet.</p>
        ) : (
          books.map((title, idx) => (
            <p key={idx} className="text-gray-700 dark:text-gray-300">&bull; {title}</p>
          ))
        )}
      </div>

      <div className="mt-8 border-t border-cyan-200 dark:border-cyan-700 pt-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
          My View on Indian Stock Market
        </h3>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {stockMarketViews.map((view) => (
            <li key={view}>&bull; {view}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
