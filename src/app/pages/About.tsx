import { TopNavigation } from "../components/TopNavigation";
import { Sidebar } from "../components/Sidebar";
import { Books } from "../components/Books";
import { Footer } from "../components/Footer";
import { Briefcase, Target, Lightbulb, TrendingUp } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNavigation />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                04 / About
              </p>
              <h1 className="font-display text-4xl text-foreground mb-4">
                The person behind Verma Wisdom
              </h1>
              <div className="h-px w-16 bg-primary"></div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display text-foreground">
                  Digital Transformation Leader
                </h2>
              </div>
              
              <div className="space-y-4 text-foreground/80 dark:text-muted-foreground leading-relaxed">
                <p>
                  I am a consulting leader focused on digital transformation at the intersection of digital commerce and generative AI. 
                  I translate emerging technology into practical operating-model change—helping organizations modernize customer journeys, 
                  strengthen data and platform foundations, and unlock measurable growth.
                </p>
                
                <p>
                  I'm comfortable moving from strategy to execution: shaping roadmaps, defining target-state architecture, aligning 
                  stakeholders, and setting governance so programs actually land. In commerce work, I emphasize frictionless experiences, 
                  personalization, and scalable content and product data, while keeping an eye on profitability and simplification.
                </p>

                <div className="bg-muted dark:bg-slate-700 p-6 rounded-lg border-l-4 border-primary my-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-primary dark:text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-foreground mb-2">GenAI Approach</h3>
                      <p className="text-sm text-foreground/80 dark:text-muted-foreground">
                        In GenAI, I lean toward responsible adoption—prioritizing use cases with clear value, designing 
                        human-in-the-loop workflows, and building the controls that make leaders confident.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  My style is structured and decision-oriented: I clarify objectives, surface trade-offs, and push for the next 
                  concrete step. I also value crisp communication—turning complexity into executive-ready narratives, playbooks, 
                  and actionable plans for teams.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-accent-teal/10 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-accent-teal dark:text-indigo-400" />
                      <h4 className="font-display text-foreground">My Approach</h4>
                    </div>
                    <p className="text-sm text-foreground/80 dark:text-muted-foreground">
                      Pragmatic transformer: part technologist, part business translator, and part change leader, focused on 
                      outcomes rather than hype.
                    </p>
                  </div>

                  <div className="bg-accent-gold/10 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-accent-gold" />
                      <h4 className="font-display text-foreground">Success Metrics</h4>
                    </div>
                    <p className="text-sm text-foreground/80 dark:text-muted-foreground">
                      I measure success with KPIs tied to customer value, building coalitions across product, marketing, 
                      engineering, and risk.
                    </p>
                  </div>
                </div>

                <p className="text-lg font-medium text-foreground dark:text-white mt-6">
                  I thrive in ambiguous situations, using hypotheses and experiments to learn fast. My focus is always on 
                  moving from strategy to measurable impact.
                </p>
              </div>
            </div>
          </div>
        </main>

        <Books />
      </div>

      <Footer />
    </div>
  );
}
