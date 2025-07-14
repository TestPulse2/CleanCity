const LS_COMMENTS = 'blogcomments';

function getComments() {
  const saved = global.localStorage?.getItem(LS_COMMENTS);
  return saved ? JSON.parse(saved) : {};
}

function addComment(postId, comments, text) {
  if (!text.trim()) return comments;
  const newComment = {
    id: Date.now(),
    user: 'Ashlyne',
    text: text.trim(),
    likes: 0,
    reported: false
  };
  return [...comments, newComment];
}

function likeComment(comments, cid) {
  return comments.map(c => c.id === cid && !c.reported ? { ...c, likes: c.likes + 1 } : c);
}

function reportComment(comments, cid) {
  return comments.map(c => c.id === cid ? { ...c, reported: true } : c);
}

module.exports = { getComments, addComment, likeComment, reportComment };

/* Test Scripts
1. Comment Retrieval
Verify getComments() parses localStorage correctly.
Check fallback defaults when no saved data exists.
2. Comment Posting
Test that new comments are added only when text is non-empty.
Ensure character limits (max 200) are respected.
Confirm input is cleared after successful posting.
3. Like Functionality
Validate that clicking "Like" increases the counter.
Ensure likes don’t change for reported comments.
4. Report Functionality
Confirm reported flag toggles correctly.
Test that "Report" button disables after use.
Validate visual changes for reported comments.
5. Persistent Storage
Assert that localStorage updates reflect added, liked, or reported comments.
6. Fallback Rendering
Check rendering of "No comments yet" when list is empty.
Validate comment structure rendering (user, text, likes, actions).
*/