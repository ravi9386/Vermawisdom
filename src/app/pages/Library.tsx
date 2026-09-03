import { PageShell } from "../components/PageShell";

const financeBooks = [
  { title: "Psychology of Money", author: "Morgan Housel" },
  { title: "The Intelligent Investor", author: "Benjamin Graham" },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  { title: "Just Keep Buying", author: "Nick Maggiulli" },
  { title: "The Richest Man in Babylon", author: "George S. Clason" },
  { title: "Common Stocks and Uncommon Profits", author: "Philip Fisher" },
  { title: "A Random Walk Down Wall Street", author: "Burton Malkiel" },
  { title: "The Little Book of Common Sense Investing", author: "John C. Bogle" },
  { title: "One Up On Wall Street", author: "Peter Lynch" },
  { title: "The Millionaire Next Door", author: "Thomas J. Stanley & William D. Danko" },
  { title: "Your Money or Your Life", author: "Vicki Robin" },
  { title: "I Will Teach You to Be Rich", author: "Ramit Sethi" },
  { title: "The Art of Spending Money", author: "Morgan Housel" },
  { title: "Naked Economics", author: "Charles Wheelan" },
  { title: "The Little Book That Still Beats the Market", author: "Joel Greenblatt" },
];

const motivationBooks = [
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Deep Work", author: "Cal Newport" },
  { title: "The Hard Thing About Hard Things", author: "Ben Horowitz" },
  { title: "No Rules Rules", author: "Reed Hastings & Erin Meyer" },
  { title: "Think Again", author: "Adam Grant" },
  { title: "Man's Search for Meaning", author: "Viktor Frankl" },
  { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey" },
  { title: "Grit", author: "Angela Duckworth" },
  { title: "Mindset", author: "Carol S. Dweck" },
  { title: "Can't Hurt Me", author: "David Goggins" },
  { title: "The Power of Now", author: "Eckhart Tolle" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
  { title: "Outliers", author: "Malcolm Gladwell" },
  { title: "The 4-Hour Workweek", author: "Tim Ferriss" },
  { title: "Start with Why", author: "Simon Sinek" },
];

function BookList({ books }: { books: { title: string; author: string }[] }) {
  return (
    <ul className="space-y-3">
      {books.map((book) => (
        <li
          key={book.title}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-foreground/80 border-b border-border pb-3 last:border-0"
        >
          <span className="text-foreground">{book.title}</span>
          <span className="text-sm text-muted-foreground">{book.author}</span>
        </li>
      ))}
    </ul>
  );
}

export function Library() {
  return (
    <PageShell maxWidth="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
        03 / Library
      </p>
      <h1 className="font-display text-3xl text-foreground mb-4">Books I Read</h1>
      <div className="h-px w-16 bg-primary mb-10"></div>

      <h2 className="font-display text-2xl text-foreground mb-4">Finance &amp; Investing</h2>
      <BookList books={financeBooks} />

      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Motivation &amp; Mindset</h2>
      <BookList books={motivationBooks} />
    </PageShell>
  );
}
