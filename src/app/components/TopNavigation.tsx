import { Link } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/writing", label: "Writing" },
  { to: "/experiments", label: "Experiments" },
  { to: "/library", label: "Library" },
  { to: "/about", label: "About" },
];

export function TopNavigation() {
  return (
    <nav className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-4 max-w-6xl mx-auto">
        <Link to="/" className="font-display text-xl text-primary tracking-tight">
          Verma Wisdom
        </Link>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-accent transition-colors shadow-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
