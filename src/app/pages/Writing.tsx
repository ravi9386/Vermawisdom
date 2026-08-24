import { useEffect, useState } from "react";
import { Link } from "react-router";
import { blogStore, BlogPost } from "../store/blogStore";
import { Button } from "../components/ui/button";
import { PlusCircle } from "lucide-react";
import { PageShell } from "../components/PageShell";

export function Writing() {
  const [posts, setPosts] = useState<BlogPost[]>(blogStore.getPosts());

  useEffect(() => {
    const unsubscribe = blogStore.subscribe(() => {
      setPosts(blogStore.getPosts());
    });
    return unsubscribe;
  }, []);

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

      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <div className="bg-card p-6 border border-border hover:border-primary/50 transition-all rounded-lg">
              <h2 className="font-display text-xl text-foreground mb-2">{post.title}</h2>
              <p className="text-muted-foreground text-sm mb-2">
                By {post.author} • {post.createdAt.toLocaleDateString()}
              </p>
              <p className="text-foreground/80 line-clamp-2">{post.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
