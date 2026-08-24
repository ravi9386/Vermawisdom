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
    <div className="min-h-screen flex flex-col bg-background">
      <TopNavigation />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold font-display text-primary mb-4">
                Get In Touch
              </h1>
              <div className="h-px w-16 bg-primary"></div>
              <p className="mt-4 text-muted-foreground dark:text-muted-foreground">
                Have a question or want to collaborate? Fill out the form and I'll get back to you.
              </p>
            </div>

            {submitted ? (
              <div className="bg-accent-sage/10 border border-accent-sage/30 rounded-lg p-8 text-center">
                <Send className="w-12 h-12 text-accent-sage mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-accent-sage dark:text-green-400 mb-2">Message Sent!</h2>
                <p className="text-muted-foreground dark:text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card dark:bg-slate-800 rounded-lg shadow-md border border-border dark:border-cyan-700 p-8 space-y-6"
              >
                {/* Formsubmit hidden config */}
                <input type="hidden" name="_subject" value="New message from Verma Wisdom" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground/80 dark:text-muted-foreground mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-slate-600 bg-muted dark:bg-slate-700 text-foreground dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground/80 dark:text-muted-foreground mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-slate-600 bg-muted dark:bg-slate-700 text-foreground dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground/80 dark:text-muted-foreground mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Cell / Phone Number
                  </label>
                  <input
                    type="tel"
                    name="cell"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-slate-600 bg-muted dark:bg-slate-700 text-foreground dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground/80 dark:text-muted-foreground mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    Your Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your query or message here..."
                    className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-slate-600 bg-muted dark:bg-slate-700 text-foreground dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-primary hover:bg-accent text-white font-semibold rounded-lg transition-all shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
