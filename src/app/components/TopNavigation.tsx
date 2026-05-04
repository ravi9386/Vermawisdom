import { Link } from "react-router";
import { Home, Users, User, Wallet, Calculator, Mail, ShoppingCart } from "lucide-react";

export function TopNavigation() {
  return (
    <nav className="bg-gradient-to-r from-cyan-50 to-indigo-50 dark:from-slate-800 dark:to-indigo-900 shadow-md border-b border-cyan-200 dark:border-cyan-700">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Verma Wisdom
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>

          <Link
            to="/pf"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
          >
            <Wallet className="w-5 h-5" />
            <span>Personal Finance</span>
          </Link>

          <Link
            to="/retirement-calculator"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
          >
            <Calculator className="w-5 h-5" />
            <span>Retirement</span>
          </Link>

          <Link
            to="/Ecommerce"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>E-commerce</span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
          >
            <Users className="w-5 h-5" />
            <span>Collab</span>
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
          >
            <User className="w-5 h-5" />
            <span>About Me</span>
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
          >
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
