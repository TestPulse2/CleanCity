/**
 * @jest environment jsdom
 */

const { cancelPickupRequest } = require('./cancelRequest');

describe('cancelPickupRequest', () => {
  const sampleData = [
    { id: 1, name: 'Ashlyne', status: 'Scheduled' },
    { id: 2, name: 'Phil', status: 'Pending' },
    { id: 3, name: 'Jordan', status: 'Completed' },
  ];

  beforeEach(() => {
    localStorage.setItem('pickupRequests', JSON.stringify(sampleData));
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('should mark the correct request as Cancelled by ID', () => {
    const updated = cancelPickupRequest(2);
    expect(updated.find(r => r.id === 2).status).toBe('Cancelled');
    expect(updated.length).toBe(3);
  });

  test('should not modify other requests', () => {
    const updated = cancelPickupRequest(1);
    expect(updated.find(r => r.id === 2).status).toBe('Pending');
    expect(updated.find(r => r.id === 3).status).toBe('Completed');
  });

  test('should not throw if request ID does not exist', () => {
    const updated = cancelPickupRequest(999);
    expect(updated.every(r => r.status !== 'Cancelled')).toBe(true);
    expect(updated.length).toBe(3);
  });

  test('should assign IDs correctly if missing and still cancel', () => {
    const anonymousData = [
      { name: 'Mystery', status: 'Scheduled' },
      { name: 'Shadow', status: 'Missed' }
    ];
    localStorage.setItem('pickupRequests', JSON.stringify(anonymousData));
    const updated = cancelPickupRequest(2); 
    expect(updated[1].status).toBe('Cancelled');
  });
});
