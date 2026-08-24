import { Link } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/writing", label: "Writing" },
  { to: "/pf", label: "Personal Finance" },
  { to: "/library", label: "Library" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function TopNavigation() {
  return (
    <nav className="border-b border-border">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-5 max-w-6xl mx-auto">
        <Link to="/" className="font-display text-xl text-foreground tracking-tight">
          Verma Wisdom
        </Link>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
