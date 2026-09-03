import { useEffect, useState } from "react";
import { Link } from "react-router";
import { blogStore, BlogPost } from "../store/blogStore";
import { Button } from "../components/ui/button";
import { PlusCircle, Trash2 } from "lucide-react";
import { PageShell } from "../components/PageShell";

export function Writing() {
  const [posts, setPosts] = useState<BlogPost[]>(blogStore.getPosts());

  useEffect(() => {
    const unsubscribe = blogStore.subscribe(() => {
      setPosts(blogStore.getPosts());
    });
    return unsubscribe;
  }, []);

  const handleDelete = (e: React.MouseEvent, id: string, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm(`Delete "${title}"? This can't be undone.`)) {
      blogStore.deletePost(id);
    }
  };

  return (
    <PageShell maxWidth="max-w-3xl">
      <div className="flex justify-between items-baseline mb-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            01 / Writing
          </p>
          <h1 className="font-display text-3xl text-foreground">All writing</h1>
        </div>
        <Link to="/create">
          <Button
            variant="outline"
            className="border-border text-foreground/80 hover:text-primary hover:border-primary/50"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      {posts.length === 0 && (
        <p className="text-muted-foreground text-sm">
          No posts yet. Use "New Post" above to write the first one.
        </p>
      )}

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="group relative">
            <Link
              to={`/post/${post.id}`}
              className="block bg-card p-6 pr-14 border border-border hover:border-primary/50 transition-all rounded-lg"
            >
              <h2 className="font-display text-xl text-foreground mb-2">{post.title}</h2>
              <p className="text-muted-foreground text-sm mb-2">
                By {post.author} • {post.createdAt.toLocaleDateString()}
              </p>
              <p className="text-foreground/80 line-clamp-2">{post.content}</p>
            </Link>
            <button
              onClick={(e) => handleDelete(e, post.id, post.title)}
              aria-label={`Delete "${post.title}"`}
              title="Delete post"
              className="absolute top-4 right-4 p-2 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
