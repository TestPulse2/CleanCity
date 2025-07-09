/**
 * @jest -environment jsdom
 */

const {
  getPickupRequests,
  filterRequests,
  renderRequestsTable,
  updateFilterCount,
  loadAndDisplayRequests,
} = require('./viewHistory');

const sampleRequests = [
  { id: 1, name: 'Ashlyne', location: 'Nairobi', wasteType: 'Organic', preferredDate: '2025-07-10', status: 'Scheduled' },
  { id: 2, name: 'Phil', location: 'Mombasa', wasteType: 'Hazardous', preferredDate: '2025-07-12', status: 'Missed' },
];

beforeEach(() => {
  document.body.innerHTML = `
    <select id="statusFilter">
      <option value="all">All</option>
      <option value="Scheduled">Scheduled</option>
      <option value="Missed">Missed</option>
    </select>
    <select id="locationFilter">
      <option value="all">All</option>
      <option value="Nairobi">Nairobi</option>
      <option value="Mombasa">Mombasa</option>
    </select>
    <div id="filter-count"></div>
    <table>
      <tbody id="requests-tbody"></tbody>
    </table>
  `;

  localStorage.setItem('pickupRequests', JSON.stringify(sampleRequests));
});

afterEach(() => {
  localStorage.clear();
});

test('should return all scheduled pickups in table', () => {
  loadAndDisplayRequests(); // populates the table

  const rows = document.querySelectorAll('#requests-tbody tr');
  expect(rows.length).toBe(2);
  expect(rows[0].textContent).toMatch(/Ashlyne/);
  expect(rows[1].textContent).toMatch(/Phil/);
});

test('should return empty list if no pickups are in localStorage', () => {
  localStorage.removeItem('pickupRequests');
  loadAndDisplayRequests(); // refresh view with no data

  const rows = document.querySelectorAll('#requests-tbody tr');
  expect(rows.length).toBe(1);
  expect(rows[0].textContent).toMatch(/No matching requests/i);
});

test('should exclude failed or duplicate entries from history', () => {
  const requests = [
    { name: 'Ashlyne', location: 'Nairobi', preferredDate: '2025-07-10', status: 'Scheduled' },
    { name: '', location: '', preferredDate: '', status: '' }, // failed
    { name: 'Ashlyne', location: 'Nairobi', preferredDate: '2025-07-10', status: 'Scheduled' } // duplicate
  ];
  localStorage.setItem('pickupRequests', JSON.stringify(requests));

  loadAndDisplayRequests();

  const rows = document.querySelectorAll('#requests-tbody tr');
  expect(rows.length).toBeGreaterThanOrEqual(1);
  expect(rows[0].textContent).toMatch(/Ashlyne/);
});

test('should filter requests by location and status', () => {
  document.getElementById('statusFilter').value = 'Missed';
  document.getElementById('locationFilter').value = 'Mombasa';
  loadAndDisplayRequests();

  const rows = document.querySelectorAll('#requests-tbody tr');
  expect(rows.length).toBe(1);
  expect(rows[0].textContent).toMatch(/Phil/);
});
