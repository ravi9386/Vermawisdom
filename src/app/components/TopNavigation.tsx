import { Link } from "react-router";
import { Home, Compass, Users, User } from "lucide-react";

export function TopNavigation() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Verma Wisdom
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Compass className="w-5 h-5" />
            <span>Explore</span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Users className="w-5 h-5" />
            <span>Collab</span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <User className="w-5 h-5" />
            <span>About Me</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
