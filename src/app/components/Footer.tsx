import { Link } from "react-router";
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-indigo-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent font-bold text-lg mb-4">
              Verma Wisdom
            </h3>
            <p className="text-sm leading-relaxed">
              A platform for sharing thoughts, stories, and ideas with the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pf" className="hover:text-cyan-400 transition-colors">
                  Personal Finance
                </Link>
              </li>
              <li>
                <Link to="/retirement-calculator" className="hover:text-cyan-400 transition-colors">
                  Retirement Calculator
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a
                  href="mailto:contact@vermawisdom.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  contact@vermawisdone.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>New York, USA</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/ravi-verma-1b21959/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:contact@vermawisdone.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-indigo-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2026 Verma Wisdone. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
