const LS_POSTS = 'blogPosts';

function getPosts() {
  const saved = global.localStorage?.getItem(LS_POSTS);
  if (saved) return JSON.parse(saved);
  return [];
}

function filterPosts(posts, search, tag) {
  return posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !tag || post.tags.includes(tag);
    return matchesSearch && matchesTag;
  });
}

function getFeatured(posts) {
  return posts.filter(post => post.featured);
}

function extractTags(posts) {
  return [...new Set(posts.flatMap(post => post.tags))];
}

module.exports = { getPosts, filterPosts, getFeatured, extractTags };

/* Test Scripts
1. Retrieve Blog Posts
Mock localStorage and verify posts are correctly parsed and returned by getPosts().
2. Search Filter Functionality
Validate that posts are filtered based on title or summary text matching the search input.
3. Tag Filter Accuracy
Confirm that filtering by selected tag returns only relevant posts.
4. Featured Posts Selection
Check that posts with featured: true are identified and displayed appropriately.
5. Unique Tag Extraction
Ensure extractTags() returns a distinct set of all tags from existing posts.
6. Empty Result Handling
Verify that no posts are displayed when the search and tag filters yield no match.
*/
