// Copy only this part from your current script:

const STORAGE_KEYS = {
  PICKUP_REQUESTS: 'cleancity_pickup_requests',
  FEEDBACK: 'cleancity_feedback',
  USERS: 'cleancity_users'
};

const initializeData = () => {
  // You can leave this empty for Jest testing unless you want to preload.
};

const dataService = {
  // include only pure methods here for now:
  addPickupRequest: (requestData) => {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS)) || [];
    const newRequest = {
      id: `REQ${String(existing.length + 1).padStart(3, '0')}`,
      name: requestData.fullName,
      location: requestData.location,
      wasteType: requestData.wasteType,
      preferredDate: requestData.preferredDate || 'Not specified',
      status: 'Pending'
    };
    existing.push(newRequest);
    localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(existing));
    return newRequest;
  },

  getAllPickupRequests: () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS)) || [];
  },

  filterRequestsByLocation: (location) => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS)) || [];
    if (location === 'Eldoret') {
      return data.filter(r => r.location === 'Nairobi'); // known bug
    }
    return data.filter(r => r.location === location);
  }
};

module.exports = { dataService, STORAGE_KEYS };
