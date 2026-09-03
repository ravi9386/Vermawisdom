import { useState, useEffect } from "react";
import { Link } from "react-router";
import { PageShell } from "../components/PageShell";
import { AssetTracker } from "../components/AssetTracker";
import { RetirementCalculatorTool } from "../components/RetirementCalculatorTool";
import { TrendingUp, Newspaper, DollarSign, PiggyBank, BarChart3, Globe, ArrowLeft } from "lucide-react";

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
      className="block bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-md"
    >
      <div className="flex items-start gap-3">
        <Newspaper className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-1 line-clamp-2">
            {item.title}
          </h4>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{item.source}</span>
            <span>•</span>
            <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <PageShell maxWidth="max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/experiments"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experiments
        </Link>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
          Experiments / Personal Finance
        </p>
        <h1 className="font-display text-4xl text-foreground mb-2">
          Personal Finance
        </h1>
        <p className="text-muted-foreground">
          Notes on wealth building, investments, and financial planning — plus a
          retirement calculator I built for my own planning.
        </p>
      </div>

      <div className="mb-8">
        <RetirementCalculatorTool />
      </div>

      <AssetTracker />

      {/* Latest News Section */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-display text-foreground">
            Global Finance News
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {loading ? (
            <div className="col-span-full text-center py-8 text-muted-foreground">Loading news...</div>
          ) : (
            globalNews.map((item, idx) => <NewsCard key={idx} item={item} />)
          )}
        </div>
      </section>

      {/* India Finance News */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-accent-teal" />
          <h2 className="text-2xl font-display text-foreground">
            India Finance News
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            <div className="col-span-full text-center py-8 text-muted-foreground">Loading news...</div>
          ) : (
            indiaNews.map((item, idx) => <NewsCard key={idx} item={item} />)
          )}
        </div>
      </section>

      {/* Financial Topics Grid */}
      <section className="mb-8">
        <h2 className="text-2xl font-display text-foreground mb-6">
          Financial Topics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* EPF */}
          <div className="bg-accent-sage/10 p-6 rounded-lg border border-accent-sage/20">
            <div className="flex items-center gap-3 mb-4">
              <PiggyBank className="w-6 h-6 text-accent-sage" />
              <h3 className="text-xl font-display text-foreground">EPF (Employee Provident Fund)</h3>
            </div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Current rate: 8.25% (2025-26)</li>
              <li>• Combined contribution: 24% of basic salary (12% employee + 12% employer)</li>
              <li>• Tax-free withdrawals after 5 continuous years</li>
              <li>• Core retirement savings vehicle for formal sector employees</li>
              <li>• EPS (pension) component provides retirement income</li>
            </ul>
          </div>

          {/* PPF */}
          <div className="bg-accent-teal/10 p-6 rounded-lg border border-accent-teal/20">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-accent-teal" />
              <h3 className="text-xl font-display text-foreground">PPF (Public Provident Fund)</h3>
            </div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Current rate: 7.1% compounded annually</li>
              <li>• 15-year lock-in with extension options</li>
              <li>• Tax-free returns (EEE status)</li>
              <li>• Annual contribution limit: ₹1.5 lakh (Section 80C)</li>
              <li>• Ideal for long-term, risk-free wealth building</li>
            </ul>
          </div>

          {/* Mutual Funds */}
          <div className="bg-accent-plum/10 p-6 rounded-lg border border-accent-plum/20">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-accent-plum" />
              <h3 className="text-xl font-display text-foreground">Mutual Funds</h3>
            </div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• SIP culture: ₹20,000+ crore monthly inflows</li>
              <li>• ELSS: Tax-saving with 3-year lock-in</li>
              <li>• Index funds: Low-cost passive investing (Nifty 50, Sensex)</li>
              <li>• Asset allocation: Mix large-cap, mid-cap, debt for diversification</li>
              <li>• Long-term equity (&gt;1 year): 10% LTCG tax on gains above ₹1 lakh</li>
            </ul>
          </div>

          {/* Stocks */}
          <div className="bg-accent-gold/10 p-6 rounded-lg border border-accent-gold/20">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-accent-gold" />
              <h3 className="text-xl font-display text-foreground">Direct Stocks</h3>
            </div>
            <ul className="space-y-2 text-sm text-foreground/80">
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
      <section className="bg-muted p-6 rounded-lg border border-border">
        <h3 className="text-xl font-display text-foreground mb-4">
          Core Personal Finance Principles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-foreground/80">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Start Early & Stay Consistent</h4>
            <p>Compound interest rewards time. Start SIPs/PPF early, automate contributions.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Emergency Fund First</h4>
            <p>6-12 months expenses in liquid savings before aggressive investing.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Diversify Across Assets</h4>
            <p>Stocks, debt, gold, real estate—spread risk, optimize returns.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Tax Optimization</h4>
            <p>Use 80C (PPF, ELSS), NPS for 80CCD(1B), maximize deductions legally.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Review & Rebalance Annually</h4>
            <p>Life changes, markets shift. Annual review keeps goals aligned.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Avoid Debt for Consumption</h4>
            <p>Credit cards, personal loans for lifestyle = wealth destroyer. Use for assets only.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
