import { useEffect, useState } from "react";
import { Link } from "react-router";
import { blogStore, BlogPost } from "../store/blogStore";
import { Button } from "../components/ui/button";
import { PlusCircle } from "lucide-react";
import { TopNavigation } from "../components/TopNavigation";
import { Sidebar } from "../components/Sidebar";
import { Books } from "../components/Books";
import { Footer } from "../components/Footer";
import { WeatherWidget } from "../components/WeatherWidget";
import { QuoteOfDayWidget } from "../components/QuoteOfDayWidget";

export function Home() {
  const [posts, setPosts] = useState<BlogPost[]>(blogStore.getPosts());

  useEffect(() => {
    const unsubscribe = blogStore.subscribe(() => {
      setPosts(blogStore.getPosts());
    });
    return unsubscribe;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNavigation />

      {/* Hero */}
      <section className="px-6 pt-16 pb-14 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-5">
            Ravi Verma · Digital Transformation Leader
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6 text-balance">
            Digital transformation at the intersection of commerce and generative AI.
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            I translate emerging technology into practical operating-model change — modernizing
            customer journeys, strengthening data and platform foundations, and unlocking
            measurable growth.
          </p>
        </div>
      </section>

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-baseline mb-8">
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                01 / Writing
              </h2>
              <Link to="/create">
                <Button variant="outline" className="border-border text-foreground/80 hover:text-primary hover:border-primary/50">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </Link>
            </div>

            {/* Widgets Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <WeatherWidget />
              <QuoteOfDayWidget />
            </div>

            <img
              src="/bg.jpg"
              alt="Verma Wisdom"
              className="w-full h-80 object-cover rounded-lg mb-8 border border-border"
            />

            <div className="space-y-4">
              {posts.map((post) => (
                <Link key={post.id} to={`/post/${post.id}`}>
                  <div className="bg-card p-6 border border-border hover:border-primary/50 transition-all rounded-lg">
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      By {post.author} • {post.createdAt.toLocaleDateString()}
                    </p>
                    <p className="text-foreground/80 line-clamp-2">
                      {post.content}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Books />
      </div>

      <Footer />
    </div>
  );
}
