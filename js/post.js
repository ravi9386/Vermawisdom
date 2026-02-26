// Get post ID from URL
function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Load and display individual post
async function loadPostPage() {
    const postId = getPostIdFromUrl();
    
    if (!postId) {
        document.body.innerHTML = '<p>Post not found.</p>';
        return;
    }

    try {
        const post = await loadPost(`${postId}.md`);
        
        if (!post) {
            document.body.innerHTML = '<p>Post not found.</p>';
            return;
        }

        displayPost(post);
        loadRelatedPosts(post);
    } catch (error) {
        console.error('Error loading post:', error);
        document.body.innerHTML = '<p>Error loading post.</p>';
    }
}

// Display post content
function displayPost(post) {
    // Update page title
    document.title = `${post.title} - Verma Speaks`;
    document.getElementById('post-title').textContent = post.title;
    
    // Update header
    document.getElementById('post-title-h1').textContent = post.title;
    document.getElementById('post-date').textContent = formatDate(post.date);
    
    const categoryTag = document.getElementById('post-category');
    categoryTag.textContent = post.category;
    categoryTag.className = 'category-tag';
    
    // Display content
    document.getElementById('post-content').innerHTML = post.content;
}

// Load related posts (same category)
async function loadRelatedPosts(currentPost) {
    const postsList = [
        'welcome-to-my-blog.md',
        'javascript-tips.md',
        'learning-web-development.md',
    ];

    const allPostsData = [];
    for (const postFile of postsList) {
        const post = await loadPost(postFile);
        if (post && post.id !== currentPost.id) {
            allPostsData.push(post);
        }
    }

    // Filter by same category
    const related = allPostsData.filter(post => post.category === currentPost.category).slice(0, 3);

    // If not enough same category, add others
    if (related.length < 3) {
        const others = allPostsData.filter(post => post.category !== currentPost.category).slice(0, 3 - related.length);
        related.push(...others);
    }

    displayRelatedPosts(related);
}

// Display related posts
function displayRelatedPosts(posts) {
    const container = document.getElementById('related-posts');
    container.innerHTML = '';

    if (posts.length === 0) {
        container.innerHTML = '<p>No related posts found.</p>';
        return;
    }

    posts.forEach(post => {
        container.appendChild(createPostCard(post));
    });
}

// Initialize post page on load
document.addEventListener('DOMContentLoaded', loadPostPage);
