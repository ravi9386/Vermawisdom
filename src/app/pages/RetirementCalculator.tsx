import { useMemo, useState } from "react";
import { TopNavigation } from "../components/TopNavigation";
import { Sidebar } from "../components/Sidebar";
import { Books } from "../components/Books";
import { Footer } from "../components/Footer";
import { Calculator, TrendingUp, CalendarClock, PiggyBank } from "lucide-react";

type RiskProfile = "conservative" | "balanced" | "growth";

function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

function toPercent(value: number) {
  return (value * 100).toFixed(1) + "%";
}

export function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(32);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [monthlyIncome, setMonthlyIncome] = useState(200000);
  const [monthlyExpense, setMonthlyExpense] = useState(90000);
  const [currentSavings, setCurrentSavings] = useState(1500000);
  const [incomeGrowthRate, setIncomeGrowthRate] = useState(0.08);
  const [inflationRate, setInflationRate] = useState(0.06);
  const [preRetirementRoi, setPreRetirementRoi] = useState(0.11);
  const [postRetirementRoi, setPostRetirementRoi] = useState(0.075);
  const [withdrawalRate, setWithdrawalRate] = useState(0.04);
  const [retirementExpenseRatio, setRetirementExpenseRatio] = useState(0.85);
  const [riskProfile, setRiskProfile] = useState<RiskProfile>("balanced");

  const result = useMemo(() => {
    const safeCurrentAge = Math.max(18, currentAge);
    const safeLifeExpectancy = Math.max(safeCurrentAge + 5, lifeExpectancy);
    const annualIncomeStart = Math.max(0, monthlyIncome) * 12;
    const annualExpenseStart = Math.max(0, monthlyExpense) * 12;
    const safeCurrentSavings = Math.max(0, currentSavings);
    const safeIncomeGrowth = Math.max(0, incomeGrowthRate);
    const safeInflation = Math.max(0, inflationRate);
    const safePreRoi = Math.max(0, preRetirementRoi);
    const safePostRoi = Math.max(0, postRetirementRoi);
    const safeWithdrawal = Math.min(0.12, Math.max(0.01, withdrawalRate));
    const safeRetExpenseRatio = Math.min(1.2, Math.max(0.5, retirementExpenseRatio));

    let corpus = safeCurrentSavings;
    let annualIncome = annualIncomeStart;
    let annualExpense = annualExpenseStart;
    let recommendedRetirementAge: number | null = null;
    let requiredCorpusAtRetirement = 0;

    // Check if can retire immediately
    const retirementExpenseNow = annualExpense * safeRetExpenseRatio;
    const yearsInRetirementNow = Math.max(1, safeLifeExpectancy - safeCurrentAge);
    const corpusByWithdrawalRuleNow = retirementExpenseNow / safeWithdrawal;
    const realReturnPostNow = (1 + safePostRoi) / (1 + safeInflation) - 1;
    const corpusByDurationNow =
      Math.abs(realReturnPostNow) < 0.0001
        ? retirementExpenseNow * yearsInRetirementNow
        : retirementExpenseNow * ((1 - Math.pow(1 + realReturnPostNow, -yearsInRetirementNow)) / realReturnPostNow);
    const requiredCorpusNow = Math.max(corpusByWithdrawalRuleNow, corpusByDurationNow);

    if (corpus >= requiredCorpusNow) {
      recommendedRetirementAge = safeCurrentAge;
      requiredCorpusAtRetirement = requiredCorpusNow;
    } else {
      for (let age = safeCurrentAge; age <= 80; age++) {
        const annualSavings = Math.max(annualIncome - annualExpense, 0);
        corpus = corpus * (1 + safePreRoi) + annualSavings;

        const ageAtRetirement = age + 1;
        const retirementExpense = annualExpense * safeRetExpenseRatio;
        const yearsInRetirement = Math.max(1, safeLifeExpectancy - ageAtRetirement);

        const corpusByWithdrawalRule = retirementExpense / safeWithdrawal;
        const realReturnPost = (1 + safePostRoi) / (1 + safeInflation) - 1;
        const corpusByDuration =
          Math.abs(realReturnPost) < 0.0001
            ? retirementExpense * yearsInRetirement
            : retirementExpense * ((1 - Math.pow(1 + realReturnPost, -yearsInRetirement)) / realReturnPost);

        const requiredCorpus = Math.max(corpusByWithdrawalRule, corpusByDuration);

        if (corpus >= requiredCorpus) {
          recommendedRetirementAge = ageAtRetirement;
          requiredCorpusAtRetirement = requiredCorpus;
          break;
        }

        annualIncome = annualIncome * (1 + safeIncomeGrowth);
        annualExpense = annualExpense * (1 + safeInflation);
      }
    }

    const yearsLeft = recommendedRetirementAge ? Math.max(0, recommendedRetirementAge - safeCurrentAge) : null;
    const annualSavingsNow = Math.max(0, annualIncomeStart - annualExpenseStart);
    const savingsRate = annualIncomeStart > 0 ? annualSavingsNow / annualIncomeStart : 0;

    return {
      recommendedRetirementAge,
      yearsLeft,
      projectedCorpus: corpus,
      requiredCorpusAtRetirement,
      annualSavingsNow,
      savingsRate,
    };
  }, [
    currentAge,
    lifeExpectancy,
    monthlyIncome,
    monthlyExpense,
    currentSavings,
    incomeGrowthRate,
    inflationRate,
    preRetirementRoi,
    postRetirementRoi,
    withdrawalRate,
    retirementExpenseRatio,
  ]);

  const applyRiskProfile = (profile: RiskProfile) => {
    setRiskProfile(profile);
    if (profile === "conservative") {
      setPreRetirementRoi(0.085);
      setPostRetirementRoi(0.065);
      setWithdrawalRate(0.035);
    }
    if (profile === "balanced") {
      setPreRetirementRoi(0.11);
      setPostRetirementRoi(0.075);
      setWithdrawalRate(0.04);
    }
    if (profile === "growth") {
      setPreRetirementRoi(0.13);
      setPostRetirementRoi(0.085);
      setWithdrawalRate(0.045);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-indigo-900 dark:to-slate-900">
      <TopNavigation />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Retirement Calculator
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Estimate your retirement age using income, expenses, inflation, and investment returns.
              </p>
            </div>

            <section className="bg-white dark:bg-slate-800 border border-cyan-200 dark:border-cyan-700 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Your Inputs</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Current Age
                  <input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} className="mt-1 w-full rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2" />
                </label>
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Life Expectancy
                  <input type="number" value={lifeExpectancy} onChange={(e) => setLifeExpectancy(Number(e.target.value))} className="mt-1 w-full rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2" />
                </label>
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Current Savings (₹)
                  <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(Number(e.target.value))} className="mt-1 w-full rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2" />
                </label>
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Monthly Income (₹)
                  <input type="number" value={monthlyIncome} onChange={(e) => setMonthlyIncome(Number(e.target.value))} className="mt-1 w-full rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2" />
                </label>
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Monthly Expense (₹)
                  <input type="number" value={monthlyExpense} onChange={(e) => setMonthlyExpense(Number(e.target.value))} className="mt-1 w-full rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2" />
                </label>
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Income Growth (% / year)
                  <input type="number" step="0.1" value={incomeGrowthRate * 100} onChange={(e) => setIncomeGrowthRate(Number(e.target.value) / 100)} className="mt-1 w-full rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2" />
                </label>
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Inflation (% / year)
                  <input type="number" step="0.1" value={inflationRate * 100} onChange={(e) => setInflationRate(Number(e.target.value) / 100)} className="mt-1 w-full rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2" />
                </label>
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Pre-Retirement ROI (% / year)
                  <input type="number" step="0.1" value={preRetirementRoi * 100} onChange={(e) => setPreRetirementRoi(Number(e.target.value) / 100)} className="mt-1 w-full rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2" />
                </label>
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Post-Retirement ROI (% / year)
                  <input type="number" step="0.1" value={postRetirementRoi * 100} onChange={(e) => setPostRetirementRoi(Number(e.target.value) / 100)} className="mt-1 w-full rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2" />
                </label>
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Safe Withdrawal Rate (% / year)
                  <input type="number" step="0.1" value={withdrawalRate * 100} onChange={(e) => setWithdrawalRate(Number(e.target.value) / 100)} className="mt-1 w-full rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2" />
                </label>
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Retirement Expense Level (% of current)
                  <input type="number" step="1" value={retirementExpenseRatio * 100} onChange={(e) => setRetirementExpenseRatio(Number(e.target.value) / 100)} className="mt-1 w-full rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2" />
                </label>
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  ROI Profile
                  <select value={riskProfile} onChange={(e) => applyRiskProfile(e.target.value as RiskProfile)} className="mt-1 w-full rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2">
                    <option value="conservative">Conservative</option>
                    <option value="balanced">Balanced</option>
                    <option value="growth">Growth</option>
                  </select>
                </label>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-slate-800 border border-cyan-200 dark:border-cyan-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2 text-cyan-600 dark:text-cyan-400">
                  <CalendarClock className="w-4 h-4" />
                  <span className="text-sm font-medium">Recommended Retirement Age</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {result.recommendedRetirementAge ?? "80+"}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-cyan-200 dark:border-cyan-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
                  <PiggyBank className="w-4 h-4" />
                  <span className="text-sm font-medium">Required Corpus</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{formatINR(result.requiredCorpusAtRetirement)}</p>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-cyan-200 dark:border-cyan-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2 text-orange-600 dark:text-orange-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">Annual Savings Today</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{formatINR(result.annualSavingsNow)}</p>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-cyan-200 dark:border-cyan-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2 text-green-600 dark:text-green-400">
                  <Calculator className="w-4 h-4" />
                  <span className="text-sm font-medium">Current Savings Rate</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{toPercent(result.savingsRate)}</p>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-800 border border-cyan-200 dark:border-cyan-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Interpretation</h3>
              {result.recommendedRetirementAge ? (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Based on your current income, expenses, growth assumptions, ROI, and withdrawal strategy, you can target retirement around age <span className="font-semibold">{result.recommendedRetirementAge}</span>.
                  {result.yearsLeft !== null ? ` That gives you approximately ${result.yearsLeft} years to prepare.` : ""}
                </p>
              ) : (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Under current assumptions, retirement before age 80 is unlikely. You can improve feasibility by increasing savings, reducing expense inflation, or improving long-term ROI through disciplined asset allocation.
                </p>
              )}
            </section>
          </div>
        </main>
        <Books />
      </div>
      <Footer />
    </div>
  );
}