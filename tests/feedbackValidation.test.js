const {
    validateRequestId,
    validateReason,
    validateComments,
    validateFeedbackForm,
    ERROR_MESSAGES
} = require('./feedbackValidation');

describe('Feedback Form Validation', () => {

    // --- Individual Field Validation Tests ---

    describe('validateRequestId', () => {
        test('should return null for a valid request ID', () => {
            expect(validateRequestId('REQ001')).toBeNull();
            expect(validateRequestId('REQ999')).toBeNull();
        });

        test('should return required error for empty request ID', () => {
            expect(validateRequestId('')).toBe(ERROR_MESSAGES.REQUIRED('Request ID'));
            expect(validateRequestId('   ')).toBe(ERROR_MESSAGES.REQUIRED('Request ID'));
            expect(validateRequestId(null)).toBe(ERROR_MESSAGES.REQUIRED('Request ID'));
            expect(validateRequestId(undefined)).toBe(ERROR_MESSAGES.REQUIRED('Request ID'));
        });

        test('should return format error for invalid request ID format', () => {
            expect(validateRequestId('REQ00')).toBe(ERROR_MESSAGES.REQUEST_ID_INVALID_FORMAT); // Too few digits
            expect(validateRequestId('REQ0001')).toBe(ERROR_MESSAGES.REQUEST_ID_INVALID_FORMAT); // Too many digits
            expect(validateRequestId('req001')).toBe(ERROR_MESSAGES.REQUEST_ID_INVALID_FORMAT); // Wrong case
            expect(validateRequestId('ABC123')).toBe(ERROR_MESSAGES.REQUEST_ID_INVALID_FORMAT); // Wrong prefix
            expect(validateRequestId('REQabc')).toBe(ERROR_MESSAGES.REQUEST_ID_INVALID_FORMAT); // Non-digits
            expect(validateRequestId(' REQ001')).toBeNull(); // Should trim leading/trailing spaces
        });
    });

    describe('validateReason', () => {
        const VALID_REASONS = ['Missed Pickup', 'Incomplete Pickup', 'Wrong Date', 'Other'];

        test('should return null for a valid reason', () => {
            expect(validateReason('Missed Pickup', VALID_REASONS)).toBeNull();
            expect(validateReason('Other', VALID_REASONS)).toBeNull();
        });

        test('should return required error for empty reason', () => {
            expect(validateReason('', VALID_REASONS)).toBe(ERROR_MESSAGES.REQUIRED('Reason'));
            expect(validateReason('   ', VALID_REASONS)).toBe(ERROR_MESSAGES.REQUIRED('Reason'));
            expect(validateReason(null, VALID_REASONS)).toBe(ERROR_MESSAGES.REQUIRED('Reason'));
            expect(validateReason(undefined, VALID_REASONS)).toBe(ERROR_MESSAGES.REQUIRED('Reason'));
        });

        test('should return invalid reason error for an unrecognized reason', () => {
            expect(validateReason('Not a reason', VALID_REASONS)).toBe(ERROR_MESSAGES.REASON_INVALID);
            expect(validateReason('Missed', VALID_REASONS)).toBe(ERROR_MESSAGES.REASON_INVALID); // Partial match
        });
    });

    describe('validateComments', () => {
        test('should return null for valid comments', () => {
            expect(validateComments('This is a test comment, it is long enough.')).toBeNull();
            expect(validateComments('This is exactly 10 characters')).toBeNull(); 
            expect(validateComments('')).toBeNull(); 
            expect(validateComments('   ')).toBeNull(); 
            expect(validateComments(null)).toBeNull();
            expect(validateComments(undefined)).toBeNull();
        });

        test('should return error for comments too short', () => {
            expect(validateComments('Short')).toBe(ERROR_MESSAGES.COMMENTS_TOO_SHORT);
            expect(validateComments('123456789')).toBe(ERROR_MESSAGES.COMMENTS_TOO_SHORT); 
        });

        test('should return error for comments too long', () => {
            const longComment = 'a'.repeat(501); // 501 characters
            expect(validateComments(longComment)).toBe(ERROR_MESSAGES.COMMENTS_TOO_LONG);
        });
    });

    // --- Comprehensive Form Validation Test ---

    describe('validateFeedbackForm', () => {
        const validFormData = {
            requestId: 'REQ123',
            reason: 'Missed Pickup',
            comments: 'This is a valid comment for testing purposes, exceeding ten characters.'
        };

        test('should return success for a completely valid form', () => {
            const result = validateFeedbackForm(validFormData);
            expect(result.success).toBe(true);
            expect(result.errors).toEqual([]);
            expect(result.message).toBe('Feedback submitted successfully!');
        });

        test('should return errors for all empty required fields', () => {
            const invalidFormData = {
                requestId: '',
                reason: '',
                comments: '' // Comments are optional if empty, so this won't trigger an error for comments being required
            };
            const result = validateFeedbackForm(invalidFormData);
            expect(result.success).toBe(false);
            expect(result.errors.length).toBe(2); // Only requestId and reason are required
            expect(result.errors).toEqual([
                ERROR_MESSAGES.REQUIRED('Request ID'),
                ERROR_MESSAGES.REQUIRED('Reason')
            ]);
            expect(result.message).toBe('Please correct the errors in your feedback.');
        });

        test('should return specific errors for partially invalid form data', () => {
            const partiallyInvalidData = {
                requestId: 'R001', // Invalid format
                reason: 'Wrong reason', // Invalid reason
                comments: 'Too short' // Too short
            };
            const result = validateFeedbackForm(partiallyInvalidData);
            expect(result.success).toBe(false);
            expect(result.errors.length).toBe(3);
            expect(result.errors).toEqual([
                ERROR_MESSAGES.REQUEST_ID_INVALID_FORMAT,
                ERROR_MESSAGES.REASON_INVALID,
                ERROR_MESSAGES.COMMENTS_TOO_SHORT
            ]);
            expect(result.message).toBe('Please correct the errors in your feedback.');
        });

        test('should handle undefined/null values gracefully for all fields', () => {
            const formDataWithUndefined = {
                requestId: undefined,
                reason: null,
                comments: undefined
            };
            const result = validateFeedbackForm(formDataWithUndefined);
            expect(result.success).toBe(false);
            expect(result.errors.length).toBe(2); // Comments remain null if undefined/null
            expect(result.errors).toEqual([
                ERROR_MESSAGES.REQUIRED('Request ID'),
                ERROR_MESSAGES.REQUIRED('Reason')
            ]);
        });

        test('should allow empty comments without error', () => {
            const formDataNoComments = { ...validFormData, comments: '' };
            const result = validateFeedbackForm(formDataNoComments);
            expect(result.success).toBe(true);
            expect(result.errors).toEqual([]);
        });
    });
});