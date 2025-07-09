const {
  updateRequestStatus,
  deleteRequest,
  countMissedRequests
} = require('./contentmoderation');

const sampleRequests = [
  { id: 1, name: 'Given', status: 'Pending' },
  { id: 2, name: 'Ashlyne', status: 'Scheduled' },
  { id: 3, name: 'Phil', status: 'Missed' }
];

describe('updateRequestStatus', () => {
  test('updates the status of a request with valid ID and status', () => {
    const updated = updateRequestStatus(sampleRequests, 1, 'Completed');
    expect(updated.find(r => r.id === 1).status).toBe('Completed');
  });

  test('returns original list if ID is missing', () => {
    const updated = updateRequestStatus(sampleRequests, '', 'Completed');
    expect(updated).toEqual(sampleRequests);
  });

  test('returns original list if status is missing', () => {
    const updated = updateRequestStatus(sampleRequests, 2, '');
    expect(updated).toEqual(sampleRequests);
  });
});

describe('deleteRequest', () => {
  test('deletes request when confirmed', () => {
    const updated = deleteRequest(sampleRequests, 2, () => true);
    expect(updated.find(r => r.id === 2)).toBeUndefined();
    expect(updated.length).toBe(2);
  });

  test('does not delete request if confirmation declined', () => {
    const updated = deleteRequest(sampleRequests, 2, () => false);
    expect(updated).toEqual(sampleRequests);
  });

  test('returns original list if ID is missing', () => {
    const updated = deleteRequest(sampleRequests, '', () => true);
    expect(updated).toEqual(sampleRequests);
  });
});

describe('countMissedRequests', () => {
  test('counts requests with "missed" status', () => {
    const count = countMissedRequests(sampleRequests);
    expect(count).toBe(1);
  });

  test('returns zero when no requests are missed', () => {
    const filtered = sampleRequests.filter(r => r.status !== 'Missed');
    const count = countMissedRequests(filtered);
    expect(count).toBe(0);
  });
});
