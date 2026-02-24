import { useState } from "react";
import { useNavigate } from "react-router";
import { blogStore } from "../store/blogStore";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { ArrowLeft } from "lucide-react";
import { TopNavigation } from "../components/TopNavigation";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

export function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !author.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newPost = blogStore.addPost({
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
    });

    navigate(`/post/${newPost.id}`);
  };

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

            <h1 className="text-3xl font-bold mb-8">Create New Post</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="author">Author Name</Label>
                    <Input
                      id="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Your name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="title">Heading</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Post title"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Write your blog post content here..."
                      rows={12}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button type="submit">Publish Post</Button>
                <Button type="button" variant="outline" onClick={() => navigate("/")}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
