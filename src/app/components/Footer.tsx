import { Link } from "react-router";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border text-muted-foreground mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-display text-lg text-foreground mb-3">Verma Wisdom</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              A personal space for writing, finance tools, and things worth sharing.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/pf" className="hover:text-primary transition-colors">Personal Finance</Link>
              </li>
              <li>
                <Link to="/retirement-calculator" className="hover:text-primary transition-colors">Retirement Calculator</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Find Me
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/ravi-verma-1b21959/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors w-fit"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="mailto:contact@vermawisdom.com"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors w-fit"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-sm">
          <p>&copy; {new Date().getFullYear()} Verma Wisdom.</p>
        </div>
      </div>
    </footer>
  );
}
