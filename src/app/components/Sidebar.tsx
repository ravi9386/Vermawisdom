import { useEffect, useState } from "react";
import { Link } from "react-router";
import { blogStore, BlogPost } from "../store/blogStore";

export function Sidebar() {
  const [posts, setPosts] = useState<BlogPost[]>(blogStore.getPosts());

  useEffect(() => {
    const unsubscribe = blogStore.subscribe(() => {
      setPosts(blogStore.getPosts());
    });
    return unsubscribe;
  }, []);

  return (
    <aside className="w-64 bg-card shadow-md border-r border-border p-6">
      <div className="mb-6 pb-4 border-b border-border">
        <h2 className="text-base font-semibold text-foreground dark:text-gray-100 mb-2">Tools</h2>
        <Link to="/retirement-calculator">
          <div className="p-3 bg-muted rounded-lg hover:bg-card transition-colors cursor-pointer border border-border">
            <h3 className="font-medium text-sm text-primary dark:text-cyan-300 truncate">
              Retirement Calculator
            </h3>
            <p className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">Income, expense, ROI & age planning</p>
          </div>
        </Link>
      </div>

      <h2 className="text-xl font-bold font-display text-primary mb-6">
        My Blogs
      </h2>

      <div className="space-y-3">
        {posts.length === 0 ? (
          <p className="text-muted-foreground dark:text-muted-foreground text-sm">No blogs written yet</p>
        ) : (
          posts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <div className="p-3 bg-muted rounded-lg hover:bg-card transition-colors cursor-pointer border border-border hover:border-primary/50">
                <h3 className="font-medium text-sm text-foreground dark:text-gray-200 truncate">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">
                  {post.createdAt.toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </aside>
  );
}
