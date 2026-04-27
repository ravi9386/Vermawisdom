import { TopNavigation } from "../components/TopNavigation";
import { Sidebar } from "../components/Sidebar";
import { Books } from "../components/Books";
import { Footer } from "../components/Footer";
import { Briefcase, Target, Lightbulb, TrendingUp } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-indigo-900 dark:to-slate-900">
      <TopNavigation />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
                About Me
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"></div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md border border-cyan-200 dark:border-cyan-700 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Digital Transformation Leader
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
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

                <div className="bg-cyan-50 dark:bg-slate-700 p-6 rounded-lg border-l-4 border-cyan-500 my-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">GenAI Approach</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
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
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      <h4 className="font-bold text-gray-900 dark:text-white">My Approach</h4>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Pragmatic transformer: part technologist, part business translator, and part change leader, focused on 
                      outcomes rather than hype.
                    </p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      <h4 className="font-bold text-gray-900 dark:text-white">Success Metrics</h4>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      I measure success with KPIs tied to customer value, building coalitions across product, marketing, 
                      engineering, and risk.
                    </p>
                  </div>
                </div>

                <p className="text-lg font-medium text-gray-900 dark:text-white mt-6">
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
