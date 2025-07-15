const VALID_LOCATIONS = ['Nairobi', 'Kisumu', 'Mombasa', 'Eldoret'];
const VALID_WASTE_TYPES = ['General', 'Recyclable', 'Hazardous'];

/**
 * Validates a full name.
 * @param {string} name - The full name to validate.
 * @returns {string|null} Error message if invalid, otherwise null.
 */
function validateName(name) {
    if (!name || name.trim() === '') {
        return 'Full Name is required.';
    }
    if (name.trim().length < 2) {
        return 'Full Name must be at least 2 characters long.';
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
        return 'Full Name contains invalid characters.';
    }
    return null; 
}

/**
 * Validates an email address.
 * @param {string} email - The email to validate.
 * @returns {string|null} Error message if invalid, otherwise null.
 */
function validateEmail(email) {
    if (!email || email.trim() === '') {
        return 'Email is required.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'Please enter a valid email address.';
    }
    return null; // Valid
}

/**
 * Validates a selected location.
 * @param {string} location - The selected location.
 * @returns {string|null} Error message if invalid, otherwise null.
 */
function validateLocation(location) {
    if (!location || location.trim() === '') {
        return 'Location is required.';
    }
    if (!VALID_LOCATIONS.includes(location)) {
        return 'Please select a valid location.';
    }
    return null;
}

/**
 * Validates a selected waste type.
 * @param {string} wasteType - The selected waste type.
 * @returns {string|null} Error message if invalid, otherwise null.
 */
function validateWasteType(wasteType) {
    if (!wasteType || wasteType.trim() === '') {
        return 'Waste Type is required.';
    }
    if (!VALID_WASTE_TYPES.includes(wasteType)) {
        return 'Please select a valid waste type.';
    }
    return null; 
}

/**
 * Validates a preferred pickup date.
 * @param {string} dateString - The date string (YYYY-MM-DD) to validate.
 * @returns {string|null} Error message if invalid, otherwise null.
 */
function validatePreferredDate(dateString) {
    if (!dateString || dateString.trim() === '') {
        return 'Preferred Pickup Date is required.';
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    const selectedDate = new Date(dateString);
    selectedDate.setHours(0, 0, 0, 0); 

    if (isNaN(selectedDate.getTime())) {
        return 'Invalid date format for Preferred Pickup Date.';
    }

    if (selectedDate < today) {
        return 'Preferred Pickup Date cannot be in the past.';
    }
    return null;
}

/**
 * Validates all fields for a waste pickup request.
 * @param {object} formData 
 * @param {string} formData.name 
 * @param {string} formData.email 
 * @param {string} formData.location 
 * @param {string} formData.wasteType 
 * @param {string} formData.preferredDate 
 * @returns {{success: boolean, errors: string[], message: string}} 
 */
function validatePickupRequest(formData) {
    const errors = [];

    const nameError = validateName(formData.name);
    if (nameError) errors.push(nameError);

    const emailError = validateEmail(formData.email);
    if (emailError) errors.push(emailError);

    const locationError = validateLocation(formData.location);
    if (locationError) errors.push(locationError);

    const wasteTypeError = validateWasteType(formData.wasteType);
    if (wasteTypeError) errors.push(wasteTypeError);

    const dateError = validatePreferredDate(formData.preferredDate);
    if (dateError) errors.push(dateError);

    if (errors.length > 0) {
        return {
            success: false,
            errors: errors,
            message: 'Please correct the errors in the form.'
        };
    } else {
        return {
            success: true,
            errors: [],
            message: 'Form submitted successfully!'
        };
    }
}

module.exports = {
    validateName,
    validateEmail,
    validateLocation,
    validateWasteType,
    validatePreferredDate,
    validatePickupRequest,
    VALID_LOCATIONS,
    VALID_WASTE_TYPES 
};

/* TestScripts
1. Input Validation: Full Name
Should return null for a valid full name.
Should return error for empty full name.
Should return error for full name too short.
Should return error for full name with invalid characters.

2. Input Validation: Email
Should return null for a valid email.
Should return error for empty email.
Should return error for invalid email format.

3. Input Validation: Location
Should return null for a valid location.
Should return error for empty location.
Should return error for an invalid location.
Should recognize all valid locations.

4. Input Validation: Waste Type
Should return null for a valid waste type.
Should return error for empty waste type.
Should return error for an invalid waste type.
Should recognize all valid waste types.

5. Input Validation: Preferred Pickup Date
Should return null for a valid future date.
Should return null for today's date.
Should return error for empty date.
Should return error for a past date.
Should return error for invalid date format.

6. Comprehensive Pickup Request Form Validation
Should return success for a completely valid form.
Should return success for valid form with today's date.
Should return errors for all empty required fields.
Should return specific errors for partially invalid form data.
Should handle undefined/null values gracefully.
*/