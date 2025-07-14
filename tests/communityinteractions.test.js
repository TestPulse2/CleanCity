const {
  getPosts,
  getLikes,
  getComments,
  addPost,
  toggleLike,
  addComment
} = require('./communityinteractions');

describe('Community Interactions Module', () => {
  beforeEach(() => {
    global.localStorage = {
      getItem: jest.fn(key => {
        const data = {
          communityPosts: JSON.stringify([{ id: 1, content: 'Test post', likes: 0, comments: 0 }]),
          communityLikes: JSON.stringify({ 1: true }),
          communityComments: JSON.stringify({ 1: [{ id: 1, content: 'Nice!', author: 'User' }] })
        };
        return data[key] || null;
      })
    };
  });

   test('addPost appends new post if valid', () => {
    const current = [];
    const updated = addPost(current, 'Hello world!');
    expect(updated).toHaveLength(1);
    expect(updated[0].author).toBe('You');
  });

  test('addPost ignores empty input', () => {
    const updated = addPost([], '   ');
    expect(updated).toEqual([]);
  });

  test('toggleLike switches like state', () => {
    const initial = { 1: true };
    const toggled = toggleLike(initial, 1);
    expect(toggled[1]).toBe(false);
  });

  test('addComment appends comment to post', () => {
    const existing = { 1: [] };
    const updated = addComment(existing, 1, 'Nice tip!');
    expect(updated[1]).toHaveLength(1);
    expect(updated[1][0].content).toBe('Nice tip!');
  });

  test('addComment ignores empty input', () => {
    const result = addComment({}, 1, '   ');
    expect(result).toEqual({});
  });
});
