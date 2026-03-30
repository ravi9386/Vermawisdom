import { useState } from "react";
import { TopNavigation } from "../components/TopNavigation";
import { Sidebar } from "../components/Sidebar";
import { Books } from "../components/Books";
import { Footer } from "../components/Footer";
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/YOUR_EMAIL@HERE.COM", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-indigo-900 dark:to-slate-900">
      <TopNavigation />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
                Get In Touch
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Have a question or want to collaborate? Fill out the form and I'll get back to you.
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg p-8 text-center">
                <Send className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-2">Message Sent!</h2>
                <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-indigo-600 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-cyan-200 dark:border-cyan-700 p-8 space-y-6"
              >
                {/* Formsubmit hidden config */}
                <input type="hidden" name="_subject" value="New message from Verma Wisdom" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Cell / Phone Number
                  </label>
                  <input
                    type="tel"
                    name="cell"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your query or message here..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white font-semibold rounded-lg transition-all shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </main>

        <Books />
      </div>

      <Footer />
    </div>
  );
}
