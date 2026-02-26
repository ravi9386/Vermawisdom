// Blog Configuration
const BLOG_CONFIG = {
    siteName: 'Verma Wisdom',
    siteDescription: 'Thoughts on technology, life, and everything in between',
    postDirectory: '/posts',
};

// Store all posts data
let allPosts = [];

// Fetch and parse markdown files
async function loadPost(filename) {
    try {
        const response = await fetch(`/posts/${filename}`);
        if (!response.ok) throw new Error(`Error loading ${filename}`);
        const markdown = await response.text();
        return parseMarkdownPost(markdown, filename);
    } catch (error) {
        console.error(`Failed to load post ${filename}:`, error);
        return null;
    }
}

// Parse markdown with frontmatter
function parseMarkdownPost(markdown, filename) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = markdown.match(frontmatterRegex);
    
    if (!match) {
        console.warn(`Post ${filename} doesn't have proper frontmatter`);
        return null;
    }

    const frontmatter = match[1];
    const content = match[2];
    
    const metadata = {};
    frontmatter.split('\n').forEach(line => {
        const [key, value] = line.split(':').map(s => s.trim());
        if (key && value) {
            metadata[key] = value.replace(/^["']|["']$/g, '');
        }
    });

    return {
        id: filename.replace('.md', ''),
        filename,
        title: metadata.title || 'Untitled',
        date: metadata.date || new Date().toISOString().split('T')[0],
        category: metadata.category || 'General',
        excerpt: metadata.excerpt || content.substring(0, 150).replace(/#/g, '').trim() + '...',
        content: marked.parse(content),
        contentRaw: content,
    };
}

// Load all posts
async function loadAllPosts(postsList) {
    const posts = [];
    for (const postFile of postsList) {
        const post = await loadPost(postFile);
        if (post) posts.push(post);
    }
    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    allPosts = posts;
    return posts;
}

// Get unique categories
function getCategories(posts) {
    const categories = new Set(posts.map(post => post.category));
    return Array.from(categories).sort();
}

// Format date
function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
}

// Generate post card HTML
function createPostCard(post) {
    const link = document.createElement('a');
    link.href = `post.html?id=${post.id}`;
    link.className = 'post-card';
    link.innerHTML = `
        <div class="post-card-header">
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
        </div>
        <div class="post-card-footer">
            <span class="post-date">${formatDate(post.date)}</span>
            <span class="category-tag">${post.category}</span>
        </div>
    `;
    return link;
}

// Render category list
function renderCategories(categories) {
    const categoriesList = document.getElementById('categories-list');
    if (!categoriesList) return;

    categoriesList.innerHTML = categories.map(category => {
        return `<li><a href="#" onclick="filterByCategory('${category}'); return false;">${category}</a></li>`;
    }).join('');
}

// Render posts
function renderPosts(posts) {
    const postsList = document.getElementById('posts-list');
    if (!postsList) return;

    postsList.innerHTML = '';
    if (posts.length === 0) {
        postsList.innerHTML = '<p>No posts found.</p>';
        return;
    }

    posts.forEach(post => {
        postsList.appendChild(createPostCard(post));
    });
}

// Filter posts by category
function filterByCategory(category) {
    if (category === 'All') {
        renderPosts(allPosts);
    } else {
        const filtered = allPosts.filter(post => post.category === category);
        renderPosts(filtered);
    }
}

// Initialize blog on home page
async function initBlog() {
    // Check if we're on the home page
    if (!document.getElementById('posts-list')) {
        return;
    }

    // List of blog posts (update this as you add new posts)
    const postsList = [
        'welcome-to-my-blog.md',
        'javascript-tips.md',
        'learning-web-development.md',
    ];

    try {
        const posts = await loadAllPosts(postsList);
        const categories = ['All', ...getCategories(posts)];
        
        renderPosts(posts);
        renderCategories(categories);
    } catch (error) {
        console.error('Failed to initialize blog:', error);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initBlog);
