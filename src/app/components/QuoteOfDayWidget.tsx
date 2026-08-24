import { useEffect, useState } from "react";
import { Quote, RefreshCw } from "lucide-react";

interface QuoteData {
  text: string;
  author: string;
}

export function QuoteOfDayWidget() {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote({
        text: data.content,
        author: data.author.replace(", type.works", ""),
      });
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      // Fallback quote
      setQuote({
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return (
      <div className="bg-muted p-6 rounded-lg border border-border">
        <div className="animate-pulse text-center">
          <div className="h-4 bg-accent-gold rounded w-3/4 mx-auto mb-3"></div>
          <div className="h-4 bg-accent-gold rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!quote) {
    return (
      <div className="bg-muted p-6 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground dark:text-muted-foreground">Quote unavailable</p>
      </div>
    );
  }

  return (
    <div className="bg-muted p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <Quote className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
        <div className="flex-1">
          <p className="text-xs font-semibold text-accent-gold dark:text-orange-300 uppercase tracking-wider mb-3">
            Quote of the Day
          </p>
          <blockquote className="text-sm leading-relaxed text-foreground dark:text-gray-100 italic mb-4">
            "{quote.text}"
          </blockquote>
          <p className="text-xs font-semibold text-accent-gold dark:text-orange-300">
            — {quote.author}
          </p>
        </div>
      </div>

      <button
        onClick={fetchQuote}
        className="mt-4 w-full flex items-center justify-center gap-2 p-2 rounded text-xs font-medium text-accent-gold dark:text-orange-300 hover:bg-card transition-colors"
      >
        <RefreshCw className="w-3 h-3" />
        New Quote
      </button>
    </div>
  );
}
