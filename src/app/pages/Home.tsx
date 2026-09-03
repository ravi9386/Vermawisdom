import { Link } from "react-router";
import { blogStore } from "../store/blogStore";
import { stripHtml } from "../lib/html";
import { TopNavigation } from "../components/TopNavigation";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Mic, Lightbulb, ArrowRight } from "lucide-react";

const speaking = [
  { venue: "IIT Naya Raipur" },
  { venue: "Digital Confex Delhi 2026" },
];

export function Home() {
  const latestPost = blogStore.getPosts()[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNavigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative text-center pt-6 pb-20 px-6 overflow-hidden">
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

        {/* Credibility strip */}
        <Reveal>
          <section className="border-t border-b border-border bg-muted px-6 py-12">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
              <div>
                <p className="font-display text-4xl text-primary mb-1">17+</p>
                <p className="text-sm text-muted-foreground">Years in Consulting</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                {[
                  "Digital Commerce & Generative AI",
                  "Personal Finance Enthusiast",
                  "Mentor",
                  "Father",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-medium text-foreground/80 bg-card border border-border rounded-full px-4 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Point of view */}
        <Reveal>
          <section className="px-6 py-20">
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Point of View
              </p>
              <p className="font-display text-2xl md:text-3xl text-foreground leading-snug">
                I am a consulting leader focused on digital transformation at the intersection of
                digital commerce and generative AI — translating emerging technology into
                practical operating-model change that modernizes customer journeys, strengthens
                data and platform foundations, and unlocks measurable growth.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Speaking */}
        <Reveal>
          <section className="border-t border-border bg-muted px-6 py-20">
            <div className="max-w-2xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Speaking
              </p>
              <h2 className="font-display text-3xl text-foreground mb-8">
                A few places I've spoken at
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {speaking.map((s) => (
                  <div
                    key={s.venue}
                    className="flex items-center gap-3 bg-card p-5 rounded-lg border border-border"
                  >
                    <Mic className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium text-foreground">{s.venue}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* GenAI approach */}
        <Reveal>
          <section className="px-6 py-20">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-start gap-4 bg-accent/5 border-l-4 border-accent rounded-lg p-8">
                <Lightbulb className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-xl text-foreground mb-3">My GenAI Approach</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    In GenAI, I lean toward responsible adoption — prioritizing use cases with
                    clear value, designing human-in-the-loop workflows, and building the controls
                    that make leaders confident.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Writing teaser */}
        {latestPost && (
          <Reveal>
            <section className="border-t border-border bg-muted px-6 py-20">
              <div className="max-w-2xl mx-auto">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  01 / Writing
                </p>
                <Link to={`/post/${latestPost.id}`} className="group block">
                  <h2 className="font-display text-3xl text-foreground mb-2 group-hover:text-accent transition-colors">
                    {latestPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {stripHtml(latestPost.content)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Read the note <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </section>
          </Reveal>
        )}

        {/* Experiments teaser */}
        <Reveal>
          <section className="px-6 py-20">
            <div className="max-w-2xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                02 / Experiments
              </p>
              <Link to="/experiments" className="group block">
                <h2 className="font-display text-3xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  My Experiments
                </h2>
                <p className="text-muted-foreground mb-4">
                  Small tools and write-ups I build and tinker with — starting with a personal
                  finance hub and retirement calculator.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Explore experiments <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </section>
        </Reveal>

        {/* More */}
        <Reveal>
          <section className="border-t border-border bg-muted px-6 py-16">
            <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              <Link to="/library" className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors">
                03 / Library →
              </Link>
              <Link to="/about" className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors">
                04 / About →
              </Link>
              <Link to="/contact" className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors">
                05 / Contact →
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Closing CTA */}
        <Reveal>
          <section className="px-6 py-24 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
              Let's talk.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-accent transition-colors shadow-sm"
            >
              Get in touch
            </Link>
          </section>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
