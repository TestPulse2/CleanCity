const ERROR_MESSAGES = {
    REQUIRED: (fieldName) => `${fieldName} is required.`,
    REQUEST_ID_INVALID_FORMAT: 'Request ID must start with "REQ" followed by 3 digits (e.g., REQ001).',
    REASON_INVALID: 'Please select a valid reason.',
    COMMENTS_TOO_SHORT: 'Comments must be at least 10 characters long.',
    COMMENTS_TOO_LONG: 'Comments cannot exceed 500 characters.'
};

module.exports = ERROR_MESSAGES;

/* Test Sripts
Feedback Form Validation
1. validateRequestId (Individual Field Tests):
Should return null for a valid request ID.
Should return required error for empty request ID.
Should return format error for invalid request ID format.

2. validateReason (Individual Field Tests):
Should return null for a valid reason.
Should return required error for empty reason.
Should return invalid reason error for an unrecognized reason.

3. validateComments (Individual Field Tests):
Should return null for valid comments (including optional empty/whitespace/null/undefined comments).
Should return error for comments too short.
Should return error for comments too long.

4. validateFeedbackForm (Comprehensive Form Validation Tests):
Should return success for a completely valid form.
Should return errors for all empty required fields (requestId, reason).
Should return specific errors for partially invalid form data (e.g., invalid request ID format, too short comments).
Should handle undefined/null values gracefully for all fields (treating them as empty and triggering required errors where applicable).
Should allow empty comments without error (as comments are optional when empty).
*/
