const scheduledRequests = [];

function validatePickupRequest(input) {
  const errors = [];
  const { name, email, location, wasteType, preferredDate } = input;

  if (!name || !name.trim()) errors.push('Name is required.');
  if (!email || !email.trim()) errors.push('Email is required.');
  if (!location) errors.push('Location is required.');
  if (!wasteType) errors.push('Waste type is required.');
  if (!preferredDate) errors.push('Preferred pickup date is required.');

  const today = new Date().toISOString().split('T')[0];
  if (preferredDate < today) {
    errors.push('Pickup date cannot be in the past.');
  }

  const duplicate = scheduledRequests.find(req =>
    req.location === location &&
    req.preferredDate === preferredDate &&
    req.wasteType === wasteType
  );
  if (duplicate) {
    errors.push('A pickup has already been scheduled for this location and date.');
  }

  if (errors.length > 0) return { success: false, errors };

  scheduledRequests.push({ location, preferredDate, wasteType });
  return {
    success: true,
    message: 'Your waste pickup request has been validated successfully.',
    data: input
  };
}

function resetScheduledRequests() {
  scheduledRequests.length = 0;
}

module.exports = {
  validatePickupRequest,
  resetScheduledRequests
};


/* Test Scripts
1. It should ensure valid scheduling with correct date, time and location.
2. It should ensure no invalid inputs e.g empty fields etc.
3. It should reject requests wih past dates.
4. It should ensure that duplicate pick ups are not allowed. 
*/

