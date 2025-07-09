const {
  validatePickupRequest,
  resetScheduledRequests
} = require('./schedulePickups');

describe('validatePickupRequest', () => {
  beforeEach(() => {
    resetScheduledRequests();
  });

  test('returns success for valid input', () => {
    const result = validatePickupRequest({
      name: 'Ashlyne Rose',
      email: 'ashlynerose@gmail.com',
      location: 'Nairobi',
      wasteType: 'Recycable',
      preferredDate: new Date().toISOString().split('T')[0]
    });
    expect(result.success).toBe(true);
    expect(result.message).toMatch(/validated successfully/);
  });

  test('fails when required fields are missing', () => {
    const result = validatePickupRequest({
      name: '',
      email: '',
      location: '',
      wasteType: '',
      preferredDate: ''
    });
    expect(result.success).toBe(false);
    expect(result.errors).toContain('Name is required.');
    expect(result.errors).toContain('Email is required.');
    expect(result.errors).toContain('Location is required.');
    expect(result.errors).toContain('Waste type is required.');
    expect(result.errors).toContain('Preferred pickup date is required.');
  });

  test('rejects requests with past dates', () => {
    const pastDate = '2000-01-01';
    const result = validatePickupRequest({
      name: 'Phil Ramon',
      email: 'philramon@example.com',
      location: 'Mombasa',
      wasteType: 'Hazardous',
      preferredDate: pastDate
    });
    expect(result.success).toBe(false);
    expect(result.errors).toContain('Pickup date cannot be in the past.');
  });

  test('detects duplicate requests', () => {
    const today = new Date().toISOString().split('T')[0];
    const request = {
      name: 'Ann Marie',
      email: 'annmarie@gmail.com',
      location: 'Eldoret',
      wasteType: 'Organic',
      preferredDate: today
    };

    validatePickupRequest(request); // first request
    const duplicate = validatePickupRequest(request); // duplicate
    expect(duplicate.success).toBe(false);
    expect(duplicate.errors).toContain('A pickup has already been scheduled for this location and date.');
  });
});
