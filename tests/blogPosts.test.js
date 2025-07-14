const { getPosts, filterPosts, getFeatured, extractTags } = require('./blogPosts');

const mockPosts = [
  { id: 1, title: 'Waste Tips', summary: 'Reduce waste', tags: ['Eco'], featured: true },
  { id: 2, title: 'My Neighborhood', summary: 'CleanCity story', tags: ['Community'], featured: false },
];

describe('Blog utility functions', () => {
  beforeEach(() => {
    const mockData = JSON.stringify(mockPosts);
    global.localStorage = {
      getItem: jest.fn(key => 
        {return key === 'blogPosts' ? mockData : null})
    };
  });

  test('filterPosts matches search and tag', () => {
    const filtered = filterPosts(mockPosts, 'waste', 'Eco');
    expect(filtered).toHaveLength(1);
  });

  test('getFeatured returns featured posts only', () => {
    const featured = getFeatured(mockPosts);
    expect(featured).toHaveLength(1);
    expect(featured[0].featured).toBe(true);
  });

  test('extractTags returns unique tags', () => {
    const tags = extractTags(mockPosts);
    expect(tags).toEqual(expect.arrayContaining(['Eco', 'Community']));
  });
});
