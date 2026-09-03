import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { blogStore } from "../store/blogStore";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { RichTextEditor, RichTextEditorHandle } from "../components/RichTextEditor";

export function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const editorRef = useRef<RichTextEditorHandle>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const editor = editorRef.current;
    if (!title.trim() || !author.trim() || !editor || editor.isEmpty()) {
      alert("Please fill in all fields");
      return;
    }

    const newPost = blogStore.addPost({
      title: title.trim(),
      content: editor.getHTML(),
      author: author.trim(),
    });

    navigate(`/post/${newPost.id}`);
  };

  return (
    <PageShell maxWidth="max-w-4xl">
      <Button
        variant="ghost"
        onClick={() => navigate("/writing")}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Writing
      </Button>

      <h1 className="font-display text-3xl text-foreground mb-8">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-card p-6 border border-border rounded-lg">
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
              <Label>Content</Label>
              <p className="text-xs text-muted-foreground mt-1 mb-2">
                Select text to bold it or change its font, or insert an image at the cursor.
              </p>
              <RichTextEditor
                ref={editorRef}
                placeholder="Write your blog post content here..."
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit">Publish Post</Button>
          <Button type="button" variant="outline" onClick={() => navigate("/writing")}>
            Cancel
          </Button>
        </div>
      </form>
    </PageShell>
  );
}
