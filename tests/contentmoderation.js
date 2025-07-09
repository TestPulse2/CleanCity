function updateRequestStatus(requests, id, status) {
  if (!id || !status) return requests;
  return requests.map(r => r.id === id ? { ...r, status } : r);
}

function deleteRequest(requests, id, confirmFn) {
  if (!id || !confirmFn || !confirmFn()) return requests;
  return requests.filter(r => r.id !== id);
}

function countMissedRequests(requests) {
  return requests.filter(r =>
    r.status && r.status.toLowerCase().includes('missed')
  ).length;
}

module.exports = {
  updateRequestStatus,
  deleteRequest,
  countMissedRequests
};

/*Test Scripts 
updateRequestStatus
1. It should update the status of a request when given a valid ID and status.
2. It should return the original list if the ID is missing.
3. It should return the original list if the status is missing.

deleteRequest
1. It should delete a request when confirmed via the confirmation function.
2. It should not delete the request if confirmation is declined.
3. It should return the original list if the ID is missing.

countMissedRequests
1. It should count how many requests have the status “Missed”.
2. It should return zero if no requests are marked as “Missed”.
*/