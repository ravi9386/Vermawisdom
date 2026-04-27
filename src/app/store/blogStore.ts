export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

// Simple in-memory store
class BlogStore {
  private posts: BlogPost[] = [
    {
      id: "1",
      title: "Welcome to My Blog",
      content: "This is the first blog post. You can create new posts and add comments!",
      author: "Admin",
      createdAt: new Date("2026-02-20"),
    },
  ];
  
  private comments: Comment[] = [
    {
      id: "1",
      postId: "1",
      author: "Reader",
      content: "Great first post!",
      createdAt: new Date("2026-02-21"),
    },
  ];

  private listeners: (() => void)[] = [];

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(listener => listener());
  }

  getPosts(): BlogPost[] {
    return [...this.posts].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  getPost(id: string): BlogPost | undefined {
    return this.posts.find(p => p.id === id);
  }

  addPost(post: Omit<BlogPost, "id" | "createdAt">): BlogPost {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    this.posts.push(newPost);
    this.notify();
    return newPost;
  }

  getComments(postId: string): Comment[] {
    return this.comments
      .filter(c => c.postId === postId)
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }

  addComment(comment: Omit<Comment, "id" | "createdAt">): Comment {
    const newComment: Comment = {
      ...comment,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    this.comments.push(newComment);
    this.notify();
    return newComment;
  }
}

export const blogStore = new BlogStore();
