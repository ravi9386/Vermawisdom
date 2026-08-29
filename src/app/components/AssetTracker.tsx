import { useEffect, useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Landmark,
  Coins,
  Building2,
  Wallet,
  Bitcoin,
} from "lucide-react";

interface CryptoData {
  btcInr: number;
  btcChange24h: number;
  ethInr: number;
  ethChange24h: number;
}

interface FxData {
  usdInr: number;
  eurInr: number;
}

function formatINR(value: number, digits = 0) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: digits,
  }).format(value);
}

function ChangeBadge({ value }: { value: number }) {
  const up = value >= 0;
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold ${
        up ? "text-accent-sage" : "text-destructive"
      }`}
    >
      {up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
      {up ? "+" : ""}
      {value.toFixed(2)}%
    </span>
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-sage">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-sage animate-pulse" />
      Live
    </span>
  );
}

function ReferenceBadge() {
  return (
    <span className="text-xs font-medium text-muted-foreground">Reference</span>
  );
}

function AssetCard({
  icon,
  accent,
  title,
  value,
  caption,
  badge,
}: {
  icon: React.ReactNode;
  accent: string;
  title: string;
  value: React.ReactNode;
  caption: React.ReactNode;
  badge: React.ReactNode;
}) {
  return (
    <div className="relative bg-card p-5 rounded-lg border border-border shadow-sm overflow-hidden">
      <span
        aria-hidden
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: accent }}
      />
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span style={{ color: accent }}>{icon}</span>
          <h3 className="font-semibold text-foreground text-sm">{title}</h3>
        </div>
        {badge}
      </div>
      <p className="text-2xl font-display text-foreground mb-1">{value}</p>
      <div className="text-xs text-muted-foreground">{caption}</div>
    </div>
  );
}

export function AssetTracker() {
  const [crypto, setCrypto] = useState<CryptoData | null>(null);
  const [cryptoError, setCryptoError] = useState(false);
  const [fx, setFx] = useState<FxData | null>(null);
  const [fxError, setFxError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=inr&include_24hr_change=true"
    )
      .then((res) => res.json())
      .then((data) => {
        setCrypto({
          btcInr: data.bitcoin.inr,
          btcChange24h: data.bitcoin.inr_24h_change,
          ethInr: data.ethereum.inr,
          ethChange24h: data.ethereum.inr_24h_change,
        });
      })
      .catch(() => setCryptoError(true));

    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        if (data.result !== "success") throw new Error("rate lookup failed");
        setFx({
          usdInr: data.rates.INR,
          eurInr: data.rates.INR / data.rates.EUR,
        });
      })
      .catch(() => setFxError(true));
  }, []);

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-display text-foreground">Asset Class Tracker</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        A snapshot across the basic asset classes — crypto and currency update live on
        each visit; equity, debt, gold and real estate are shown as long-term reference
        ranges rather than live prices, since there's no reliable free live feed for
        those from a static site.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AssetCard
          icon={<Bitcoin className="w-5 h-5" />}
          accent="var(--primary)"
          title="Crypto"
          badge={cryptoError ? <ReferenceBadge /> : <LiveBadge />}
          value={
            cryptoError
              ? "Unavailable"
              : crypto
              ? formatINR(crypto.btcInr)
              : "Loading…"
          }
          caption={
            cryptoError ? (
              "Couldn't reach the live price feed right now."
            ) : crypto ? (
              <div className="flex flex-col gap-1">
                <span>Bitcoin (BTC) <ChangeBadge value={crypto.btcChange24h} /></span>
                <span>
                  Ethereum: {formatINR(crypto.ethInr)}{" "}
                  <ChangeBadge value={crypto.ethChange24h} />
                </span>
              </div>
            ) : (
              "Fetching current price…"
            )
          }
        />

        <AssetCard
          icon={<Wallet className="w-5 h-5" />}
          accent="var(--accent-teal)"
          title="Cash / Forex"
          badge={fxError ? <ReferenceBadge /> : <LiveBadge />}
          value={fxError ? "Unavailable" : fx ? formatINR(fx.usdInr, 2) : "Loading…"}
          caption={
            fxError
              ? "Couldn't reach the live rate feed right now."
              : fx
              ? `1 USD → ₹${fx.usdInr.toFixed(2)} · 1 EUR → ₹${fx.eurInr.toFixed(2)}`
              : "Fetching current rate…"
          }
        />

        <AssetCard
          icon={<TrendingUp className="w-5 h-5" />}
          accent="var(--accent-plum)"
          title="Equity"
          badge={<ReferenceBadge />}
          value="~12–14% CAGR"
          caption="Long-term average, Nifty 50 / Sensex (pre-tax, decades-long horizon)."
        />

        <AssetCard
          icon={<Landmark className="w-5 h-5" />}
          accent="var(--accent-sage)"
          title="Debt / Fixed Deposit"
          badge={<ReferenceBadge />}
          value="~6.5–7.5% p.a."
          caption="Typical bank FD / high-quality debt fund range, pre-tax."
        />

        <AssetCard
          icon={<Coins className="w-5 h-5" />}
          accent="var(--accent-gold)"
          title="Gold"
          badge={<ReferenceBadge />}
          value="~8–10% CAGR"
          caption="Long-term average appreciation in INR terms (physical / SGB / ETF)."
        />

        <AssetCard
          icon={<Building2 className="w-5 h-5" />}
          accent="var(--accent-rose)"
          title="Real Estate"
          badge={<ReferenceBadge />}
          value="~7–9% CAGR"
          caption="Long-term average appreciation; illiquid, highly location-dependent."
        />
      </div>
    </section>
  );
}
