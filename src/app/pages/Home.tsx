import { useEffect, useState } from "react";
import { Link } from "react-router";
import { blogStore, BlogPost } from "../store/blogStore";
import { Button } from "../components/ui/button";
import { PlusCircle } from "lucide-react";
import { TopNavigation } from "../components/TopNavigation";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

export function Home() {
  const [posts, setPosts] = useState<BlogPost[]>(blogStore.getPosts());

  useEffect(() => {
    const unsubscribe = blogStore.subscribe(() => {
      setPosts(blogStore.getPosts());
    });
    return unsubscribe;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopNavigation />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">My Blog</h1>
              <Link to="/create">
                <Button>
                  <PlusCircle className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </Link>
            </div>

            <img
              src="/bg.jpg"
              alt="Blog banner"
              className="w-full h-80 object-cover rounded-lg mb-8 shadow-lg"
            />

            <div className="space-y-4">
              {posts.map((post) => (
                <Link key={post.id} to={`/post/${post.id}`}>
                  <div className="bg-white p-6 border border-gray-200 hover:border-gray-300 transition-colors rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm mb-2">
                      By {post.author} • {post.createdAt.toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 line-clamp-2">{post.content}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
