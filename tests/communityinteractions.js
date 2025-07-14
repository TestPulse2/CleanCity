const LS_POSTS = 'communityPosts';
const LS_LIKES = 'communityLikes';
const LS_COMMENTS = 'communityComments';

function getPosts() {
  const saved = global.localStorage?.getItem(LS_POSTS);
  return saved ? JSON.parse(saved) : [];
}

function getLikes() {
  const saved = global.localStorage?.getItem(LS_LIKES);
  return saved ? JSON.parse(saved) : {};
}

function getComments() {
  const saved = global.localStorage?.getItem(LS_COMMENTS);
  return saved ? JSON.parse(saved) : {};
}

function addPost(posts, content) {
  if (!content.trim()) return posts;
  const post = {
    id: Date.now(),
    content,
    author: 'You',
    date: new Date().toISOString().slice(0, 10),
    likes: 0,
    comments: 0
  };
  return [post, ...posts];
}

function toggleLike(prevLikes, postId) {
  return {
    ...prevLikes,
    [postId]: !prevLikes[postId]
  };
}

function addComment(existingComments, postId, commentText) {
  if (!commentText.trim()) return existingComments;
  const comment = {
    id: Date.now(),
    content: commentText,
    author: 'You',
    date: new Date().toISOString().slice(0, 10)
  };
  return {
    ...existingComments,
    [postId]: [...(existingComments[postId] || []), comment]
  };
}

module.exports = {
  getPosts,
  getLikes,
  getComments,
  addPost,
  toggleLike,
  addComment
};

/* Test Scripts
1. Like Functionality
Toggle state for post likes correctly.
Ensure likes are calculated based on existing state and toggle.

2. Comment Functionality
Add comments per post ID.
Validate empty comment input is ignored.
Ensure comment structure includes ID, content, author, and date.

3. Persistent Storage
Check updates to localStorage for posts, likes, and comments.

4. UI Logic (Simulated)
Toggle comment visibility flag per post.
Verify like button state mapping to toggled value.
Validate comment count display.
*/