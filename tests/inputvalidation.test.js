//inputvalidation.test.js 
const {
    validateName,
    validateEmail,
    validateLocation,
    validateWasteType,
    validatePreferredDate,
    validatePickupRequest,
    VALID_LOCATIONS,
    VALID_WASTE_TYPES
} = require('./inputvalidation'); 

const getFutureDate = (days = 1) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0]; 
};

// --- Individual Field Validation Tests ---

describe('Input Validation: Full Name', () => {
    test('should return null for a valid full name', () => {
        expect(validateName('Palmer Rain')).toBeNull();
        expect(validateName('Jane Michael')).toBeNull();
        expect(validateName('O\'Dembele')).toBeNull();
        expect(validateName('Jean-Luc Romeo')).toBeNull();
    });

    test('should return error for empty full name', () => {
        expect(validateName('')).toBe('Full Name is required.');
        expect(validateName('   ')).toBe('Full Name is required.');
        expect(validateName(null)).toBe('Full Name is required.');
        expect(validateName(undefined)).toBe('Full Name is required.');
    });

    test('should return error for full name too short', () => {
        expect(validateName('A')).toBe('Full Name must be at least 2 characters long.');
        expect(validateName('J')).toBe('Full Name must be at least 2 characters long.');
    });

    test('should return error for full name with invalid characters', () => {
        expect(validateName('John123')).toBe('Full Name contains invalid characters.');
        expect(validateName('Jane@Doe')).toBe('Full Name contains invalid characters.');
        expect(validateName('John!')).toBe('Full Name contains invalid characters.');
    });
});

describe('Input Validation: Email', () => {
    test('should return null for a valid email', () => {
        expect(validateEmail('test@example.com')).toBeNull();
        expect(validateEmail('john.doe@sub.domain.co.uk')).toBeNull();
    });

    test('should return error for empty email', () => {
        expect(validateEmail('')).toBe('Email is required.');
        expect(validateEmail('   ')).toBe('Email is required.');
        expect(validateEmail(null)).toBe('Email is required.');
        expect(validateEmail(undefined)).toBe('Email is required.');
    });

    test('should return error for invalid email format', () => {
        expect(validateEmail('invalid-email')).toBe('Please enter a valid email address.');
        expect(validateEmail('user@domain')).toBe('Please enter a valid email address.');
        expect(validateEmail('@domain.com')).toBe('Please enter a valid email address.');
        expect(validateEmail('user@.com')).toBe('Please enter a valid email address.');
        expect(validateEmail('user@domaincom')).toBe('Please enter a valid email address.');
    });
});

describe('Input Validation: Location', () => {
    test('should return null for a valid location', () => {
        expect(validateLocation('Nairobi')).toBeNull();
        expect(validateLocation('Kisumu')).toBeNull();
    });

    test('should return error for empty location', () => {
        expect(validateLocation('')).toBe('Location is required.');
        expect(validateLocation('   ')).toBe('Location is required.');
        expect(validateLocation(null)).toBe('Location is required.');
        expect(validateLocation(undefined)).toBe('Location is required.');
    });

    test('should return error for an invalid location', () => {
        expect(validateLocation('InvalidCity')).toBe('Please select a valid location.');
        expect(validateLocation('Nakuru')).toBe('Please select a valid location.');
    });

    test('should recognize all valid locations', () => {
        VALID_LOCATIONS.forEach(location => {
            expect(validateLocation(location)).toBeNull();
        });
    });
});

describe('Input Validation: Waste Type', () => {
    test('should return null for a valid waste type', () => {
        expect(validateWasteType('General')).toBeNull();
        expect(validateWasteType('Recyclable')).toBeNull();
        expect(validateWasteType('Hazardous')).toBeNull();
    });

    test('should return error for empty waste type', () => {
        expect(validateWasteType('')).toBe('Waste Type is required.');
        expect(validateWasteType('   ')).toBe('Waste Type is required.');
        expect(validateWasteType(null)).toBe('Waste Type is required.');
        expect(validateWasteType(undefined)).toBe('Waste Type is required.');
    });

    test('should return error for an invalid waste type', () => {
        expect(validateWasteType('Organic')).toBe('Please select a valid waste type.');
        expect(validateWasteType('Biohazard')).toBe('Please select a valid waste type.');
    });

    test('should recognize all valid waste types', () => {
        VALID_WASTE_TYPES.forEach(type => {
            expect(validateWasteType(type)).toBeNull();
        });
    });
});

describe('Input Validation: Preferred Pickup Date', () => {
    test('should return null for a valid future date', () => {
        const futureDate = getFutureDate(5);
        expect(validatePreferredDate(futureDate)).toBeNull();
    });

    test('should return null for today\'s date', () => {
        const today = getFutureDate(0); // getFutureDate(0) returns today
        expect(validatePreferredDate(today)).toBeNull();
    });

    test('should return error for empty date', () => {
        expect(validatePreferredDate('')).toBe('Preferred Pickup Date is required.');
        expect(validatePreferredDate('   ')).toBe('Preferred Pickup Date is required.');
        expect(validatePreferredDate(null)).toBe('Preferred Pickup Date is required.');
        expect(validatePreferredDate(undefined)).toBe('Preferred Pickup Date is required.');
    });

    test('should return error for a past date', () => {
        const pastDate = '2025-01-01'; 
        const yesterday = getFutureDate(-1);
        expect(validatePreferredDate(pastDate)).toBe('Preferred Pickup Date cannot be in the past.');
        expect(validatePreferredDate(yesterday)).toBe('Preferred Pickup Date cannot be in the past.');
    });
});

// --- Comprehensive Form Validation Test ---

describe('Comprehensive Pickup Request Form Validation', () => {
    const validFormData = {
        name: 'Test User',
        email: 'test@example.com',
        location: 'Nairobi',
        wasteType: 'General',
        preferredDate: getFutureDate(2)
    };

    test('should return success for a completely valid form', () => {
        const result = validatePickupRequest(validFormData);
        expect(result.success).toBe(true);
        expect(result.errors).toEqual([]);
        expect(result.message).toBe('Form submitted successfully!');
    });

    test('should return success for valid form with today\'s date', () => {
        const formDataToday = { ...validFormData, preferredDate: getFutureDate(0) };
        const result = validatePickupRequest(formDataToday);
        expect(result.success).toBe(true);
        expect(result.errors).toEqual([]);
        expect(result.message).toBe('Form submitted successfully!');
    });

    test('should return errors for all empty required fields', () => {
        const invalidFormData = {
            name: '',
            email: '',
            location: '',
            wasteType: '',
            preferredDate: ''
        };
        const result = validatePickupRequest(invalidFormData);
        expect(result.success).toBe(false);
        expect(result.errors.length).toBe(5);
        expect(result.errors).toEqual([
            'Full Name is required.',
            'Email is required.',
            'Location is required.',
            'Waste Type is required.',
            'Preferred Pickup Date is required.'
        ]);
        expect(result.message).toBe('Please correct the errors in the form.');
    });

    test('should return specific errors for partially invalid form data', () => {
        const partiallyInvalidData = {
            name: 'A', // Too short
            email: 'bad-email', // Invalid format
            location: 'Mars', // Invalid location
            wasteType: 'Magic', // Invalid type
            preferredDate: '2020-01-01' // Past date
        };
        const result = validatePickupRequest(partiallyInvalidData);
        expect(result.success).toBe(false);
        expect(result.errors.length).toBe(5);
        expect(result.errors).toEqual([
            'Full Name must be at least 2 characters long.',
            'Please enter a valid email address.',
            'Please select a valid location.',
            'Please select a valid waste type.',
            'Preferred Pickup Date cannot be in the past.'
        ]);
    });

    test('should handle undefined/null values gracefully', () => {
        const formDataWithUndefined = {
            name: undefined,
            email: null,
            location: undefined,
            wasteType: null,
            preferredDate: undefined
        };
        const result = validatePickupRequest(formDataWithUndefined);
        expect(result.success).toBe(false);
        expect(result.errors.length).toBe(5);
        expect(result.errors).toEqual([
            'Full Name is required.',
            'Email is required.',
            'Location is required.',
            'Waste Type is required.',
            'Preferred Pickup Date is required.'
        ]);
    });
});