import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { blogStore, BlogPost as BlogPostType, Comment } from "../store/blogStore";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { ArrowLeft } from "lucide-react";
import { TopNavigation } from "../components/TopNavigation";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentContent, setCommentContent] = useState("");

  useEffect(() => {
    if (!id) return;

    const loadedPost = blogStore.getPost(id);
    if (loadedPost) {
      setPost(loadedPost);
      setComments(blogStore.getComments(id));
    }

    const unsubscribe = blogStore.subscribe(() => {
      if (id) {
        setComments(blogStore.getComments(id));
      }
    });

    return unsubscribe;
  }, [id]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !commentAuthor.trim() || !commentContent.trim()) {
      alert("Please fill in all fields");
      return;
    }

    blogStore.addComment({
      postId: id,
      author: commentAuthor.trim(),
      content: commentContent.trim(),
    });

    setCommentAuthor("");
    setCommentContent("");
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <TopNavigation />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              <p>Post not found</p>
              <Button onClick={() => navigate("/")} className="mt-4">
                Go Home
              </Button>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopNavigation />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            {/* Blog Post */}
            <article className="bg-white p-8 border border-gray-200 mb-8 rounded-lg">
              <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
              <p className="text-gray-600 text-sm mb-6">
                By {post.author} • {post.createdAt.toLocaleDateString()}
              </p>
              <div className="prose max-w-none">
                <p className="whitespace-pre-wrap text-gray-700">{post.content}</p>
              </div>
            </article>

            {/* Comments Section */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>

              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-8 pb-8 border-b border-gray-200">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="commentAuthor">Name</Label>
                    <Input
                      id="commentAuthor"
                      value={commentAuthor}
                      onChange={(e) => setCommentAuthor(e.target.value)}
                      placeholder="Your name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="commentContent">Comment</Label>
                    <Textarea
                      id="commentContent"
                      value={commentContent}
                      onChange={(e) => setCommentContent(e.target.value)}
                      placeholder="Write your comment..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit">Post Comment</Button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.length === 0 ? (
                  <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                ) : (
                  comments.map((comment) => (
                    <div key={comment.id} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-gray-500 text-sm">
                          • {comment.createdAt.toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
