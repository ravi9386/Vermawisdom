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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-indigo-900 dark:to-slate-900">
      <TopNavigation />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
                My Blog
              </h1>
              <Link to="/create">
                <Button className="bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600">
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
              alt="Blog banner"
              className="w-full h-80 object-cover rounded-lg mb-8 shadow-lg border border-cyan-200 dark:border-cyan-700"
            />

            <div className="space-y-4">
              {posts.map((post) => (
                <Link key={post.id} to={`/post/${post.id}`}>
                  <div className="bg-white dark:bg-slate-800 p-6 border border-cyan-200 dark:border-cyan-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all rounded-lg shadow-sm hover:shadow-md">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      By {post.author} • {post.createdAt.toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
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
