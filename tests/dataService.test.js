/**
 * @jest-environment jsdom
 */

const { dataService, STORAGE_KEYS } = require('../src/dataService');

beforeEach(() => {
  localStorage.clear();
});

test('adds a new pickup request', () => {
  const newReq = {
    fullName: 'Alice',
    location: 'Kisumu',
    wasteType: 'General',
    preferredDate: '2025-07-10'
  };

  const result = dataService.addPickupRequest(newReq);
  expect(result.name).toBe('Alice');
  expect(result.status).toBe('Pending');

  const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS));
  expect(saved.length).toBe(1);
});

test('filters requests by location - Eldoret bug returns Nairobi', () => {
  const mockRequests = [
    { id: 'REQ001', location: 'Eldoret' },
    { id: 'REQ002', location: 'Nairobi' },
    { id: 'REQ003', location: 'Eldoret' }
  ];

  localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(mockRequests));
  const result = dataService.filterRequestsByLocation('Eldoret');

  expect(result.every(r => r.location === 'Nairobi')).toBe(true); // bug confirmed
});
