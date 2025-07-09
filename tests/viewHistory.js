function getPickupRequests() {
  const saved = localStorage.getItem('pickupRequests');
  return saved ? JSON.parse(saved) : [];
}

function filterRequests(requests) {
  const statusEl = document.getElementById('statusFilter');
  const locationEl = document.getElementById('locationFilter');

  const status = statusEl ? statusEl.value : 'all';
  const location = locationEl ? locationEl.value : 'all';

  return requests.filter(req => {
    const matchStatus = status === 'all' || req.status === status;
    const matchLocation = location === 'all' || req.location === location;
    return matchStatus && matchLocation;
  });
}

function renderRequestsTable(requests) {
  const tbody = document.getElementById('requests-tbody');
  if (!tbody) return;

  tbody.innerHTML = ''; // Clear existing rows

  if (requests.length === 0) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 6;
    cell.textContent = 'No matching requests found.';
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }

  requests.forEach((req, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${req.id || index + 1}</td>
      <td>${req.name}</td>
      <td>${req.location}</td>
      <td>${req.wasteType}</td>
      <td>${req.preferredDate}</td>
      <td>${req.status || 'Pending'}</td>
    `;
    tbody.appendChild(row);
  });
}

function updateFilterCount(count) {
  const countEl = document.getElementById('filter-count');
  if (countEl) {
    countEl.textContent = `Showing ${count} request${count === 1 ? '' : 's'}`;
  }
}

function loadAndDisplayRequests() {
  const allRequests = getPickupRequests();
  const filtered = filterRequests(allRequests);
  renderRequestsTable(filtered);
  updateFilterCount(filtered.length);
}

// Attach listeners if in browser context
if (typeof document !== 'undefined') {
  const statusFilter = document.getElementById('statusFilter');
  const locationFilter = document.getElementById('locationFilter');

  if (statusFilter) {
    statusFilter.addEventListener('change', loadAndDisplayRequests);
  }
  if (locationFilter) {
    locationFilter.addEventListener('change', loadAndDisplayRequests);
  }

  document.addEventListener('DOMContentLoaded', loadAndDisplayRequests);
}

// Expose for testing (optional)
module.exports = {
  getPickupRequests,
  filterRequests,
  renderRequestsTable,
  updateFilterCount,
  loadAndDisplayRequests
};
