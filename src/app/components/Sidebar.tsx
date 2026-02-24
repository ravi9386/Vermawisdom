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
    <aside className="w-64 bg-white shadow-md border-r border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">My Blogs</h2>

      <div className="space-y-3">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-sm">No blogs written yet</p>
        ) : (
          posts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border border-gray-200 hover:border-blue-300">
                <h3 className="font-medium text-sm text-gray-800 truncate">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
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
