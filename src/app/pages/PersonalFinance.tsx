import { useState, useEffect } from "react";
import { TopNavigation } from "../components/TopNavigation";
import { Sidebar } from "../components/Sidebar";
import { Books } from "../components/Books";
import { Footer } from "../components/Footer";
import { TrendingUp, Newspaper, DollarSign, PiggyBank, BarChart3, Globe } from "lucide-react";

interface NewsItem {
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
}

export function PersonalFinance() {
  const [globalNews, setGlobalNews] = useState<NewsItem[]>([]);
  const [indiaNews, setIndiaNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated news data - In production, replace with actual API calls
    const mockGlobalNews: NewsItem[] = [
      {
        title: "Federal Reserve Signals Potential Rate Cuts in 2026",
        description: "The Fed hints at easing monetary policy as inflation shows signs of cooling globally.",
        url: "#",
        source: "Financial Times",
        publishedAt: "2026-03-03"
      },
      {
        title: "Global Stock Markets Rally on Tech Earnings",
        description: "Major indices climb as tech giants report better-than-expected quarterly results.",
        url: "#",
        source: "Bloomberg",
        publishedAt: "2026-03-02"
      },
      {
        title: "Cryptocurrency Regulations Tighten Across EU",
        description: "New MiCA regulations come into effect, reshaping crypto market operations.",
        url: "#",
        source: "Reuters",
        publishedAt: "2026-03-01"
      }
    ];

    const mockIndiaNews: NewsItem[] = [
      {
        title: "PPF Interest Rate Holds Steady at 7.1% for Q1 2026",
        description: "Government maintains PPF rates, continues to be attractive for long-term savers.",
        url: "#",
        source: "Economic Times",
        publishedAt: "2026-03-03"
      },
      {
        title: "EPFO Adds 1.2 Million Subscribers in January",
        description: "Strong formal employment growth signals economic recovery momentum.",
        url: "#",
        source: "Business Standard",
        publishedAt: "2026-03-02"
      },
      {
        title: "Mutual Fund SIPs Cross ₹20,000 Crore Monthly Mark",
        description: "Retail investor participation reaches new highs as systematic investments surge.",
        url: "#",
        source: "Moneycontrol",
        publishedAt: "2026-03-01"
      }
    ];

    setGlobalNews(mockGlobalNews);
    setIndiaNews(mockIndiaNews);
    setLoading(false);
  }, []);

  const NewsCard = ({ item }: { item: NewsItem }) => (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all hover:shadow-md"
    >
      <div className="flex items-start gap-3">
        <Newspaper className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
            {item.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
            <span>{item.source}</span>
            <span>•</span>
            <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-indigo-900 dark:to-slate-900">
      <TopNavigation />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2">
                Personal Finance Hub
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Your comprehensive guide to wealth building, investments, and financial planning
              </p>
            </div>

            {/* Latest News Section */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Global Finance News
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {loading ? (
                  <div className="col-span-full text-center py-8 text-gray-500">Loading news...</div>
                ) : (
                  globalNews.map((item, idx) => <NewsCard key={idx} item={item} />)
                )}
              </div>
            </section>

            {/* India Finance News */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  India Finance News
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading ? (
                  <div className="col-span-full text-center py-8 text-gray-500">Loading news...</div>
                ) : (
                  indiaNews.map((item, idx) => <NewsCard key={idx} item={item} />)
                )}
              </div>
            </section>

            {/* Financial Topics Grid */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Financial Topics
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* EPF */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="flex items-center gap-3 mb-4">
                    <PiggyBank className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">EPF (Employee Provident Fund)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Current rate: 8.25% (2025-26)</li>
                    <li>• Combined contribution: 24% of basic salary (12% employee + 12% employer)</li>
                    <li>• Tax-free withdrawals after 5 continuous years</li>
                    <li>• Core retirement savings vehicle for formal sector employees</li>
                    <li>• EPS (pension) component provides retirement income</li>
                  </ul>
                </div>

                {/* PPF */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">PPF (Public Provident Fund)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Current rate: 7.1% compounded annually</li>
                    <li>• 15-year lock-in with extension options</li>
                    <li>• Tax-free returns (EEE status)</li>
                    <li>• Annual contribution limit: ₹1.5 lakh (Section 80C)</li>
                    <li>• Ideal for long-term, risk-free wealth building</li>
                  </ul>
                </div>

                {/* Mutual Funds */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mutual Funds</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• SIP culture: ₹20,000+ crore monthly inflows</li>
                    <li>• ELSS: Tax-saving with 3-year lock-in</li>
                    <li>• Index funds: Low-cost passive investing (Nifty 50, Sensex)</li>
                    <li>• Asset allocation: Mix large-cap, mid-cap, debt for diversification</li>
                    <li>• Long-term equity (&gt;1 year): 10% LTCG tax on gains above ₹1 lakh</li>
                  </ul>
                </div>

                {/* Stocks */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Direct Stocks</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Higher potential returns vs. mutual funds (no expense ratio)</li>
                    <li>• Requires research: fundamentals, valuations, sector trends</li>
                    <li>• Diversification critical: 15-20 stocks across sectors</li>
                    <li>• Avoid speculation; invest in businesses you understand</li>
                    <li>• Hold quality companies long-term for compounding</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Key Principles */}
            <section className="bg-gradient-to-r from-cyan-50 to-indigo-50 dark:from-cyan-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Core Personal Finance Principles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Start Early & Stay Consistent</h4>
                  <p>Compound interest rewards time. Start SIPs/PPF early, automate contributions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Emergency Fund First</h4>
                  <p>6-12 months expenses in liquid savings before aggressive investing.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Diversify Across Assets</h4>
                  <p>Stocks, debt, gold, real estate—spread risk, optimize returns.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tax Optimization</h4>
                  <p>Use 80C (PPF, ELSS), NPS for 80CCD(1B), maximize deductions legally.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Review & Rebalance Annually</h4>
                  <p>Life changes, markets shift. Annual review keeps goals aligned.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Avoid Debt for Consumption</h4>
                  <p>Credit cards, personal loans for lifestyle = wealth destroyer. Use for assets only.</p>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Books />
      </div>

      <Footer />
    </div>
  );
}
