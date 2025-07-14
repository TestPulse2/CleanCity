const {
  getComments,
  addComment,
  likeComment,
  reportComment
} = require('./comments');

describe('Comment utilities', () => {
  beforeEach(() => {
    const mockComments = {
      1: [{ id: 1, user: 'User', text: 'Nice post', likes: 1, reported: false }]
    };

    global.localStorage = {
      getItem: jest.fn((key) => {
        return key === 'blogcomments' ? JSON.stringify(mockComments) : null;
      })
    };
  });

  test('addComment adds valid comment', () => {
    const current = [];
    const updated = addComment(1, current, 'Hello!');
    expect(updated).toHaveLength(1);
    expect(updated[0].text).toBe('Hello!');
  });

  test('addComment ignores empty input', () => {
    const current = [];
    const updated = addComment(1, current, '   ');
    expect(updated).toEqual([]);
  });

  test('likeComment increases like count', () => {
    const original = [{ id: 1, likes: 2, reported: false }];
    const updated = likeComment(original, 1);
    expect(updated[0].likes).toBe(3);
  });

  test('likeComment does not increment for reported', () => {
    const original = [{ id: 1, likes: 2, reported: true }];
    const updated = likeComment(original, 1);
    expect(updated[0].likes).toBe(2);
  });

  test('reportComment sets reported flag', () => {
    const original = [{ id: 1, reported: false }];
    const updated = reportComment(original, 1);
    expect(updated[0].reported).toBe(true);
  });
});
