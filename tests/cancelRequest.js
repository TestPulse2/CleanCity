function cancelPickupRequest(requestId) {
  const saved = localStorage.getItem('pickupRequests');
  const requests = saved ? JSON.parse(saved) : [];

  const updatedRequests = requests.map((r, index) => {
    const currentId = r.id || index + 1;
    if (currentId === requestId) {
      return { ...r, status: 'Cancelled' };
    }
    return r;
  });

  localStorage.setItem('pickupRequests', JSON.stringify(updatedRequests));
  return updatedRequests;
}

module.exports = {
  cancelPickupRequest
};

/* Test Scripts
1. It should mark the correct request as cancelled by ID.
2. It should not modify other requests.
3. It should not show if request ID does not exist.
4. It should assign IDs correctly ifmising and still cancel.
*/