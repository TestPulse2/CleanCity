const ERROR_MESSAGES = require('./errormessages');

/**
 * Validates the Request ID.
 * Assumes format REQ + 3 digits (e.g., REQ001).
 * @param {string} requestId - The request ID string.
 * @returns {string|null} Error message if invalid, otherwise null.
 */
function validateRequestId(requestId) {
    if (!requestId || requestId.trim() === '') {
        return ERROR_MESSAGES.REQUIRED('Request ID');
    }

    if (!/^REQ\d{3}$/.test(requestId.trim())) {
        return ERROR_MESSAGES.REQUEST_ID_INVALID_FORMAT;
    }
    return null;
}

/**
 * Validates the Reason for feedback.
 * @param {string} reason - The selected reason.
 * @param {string[]} validReasons - Array of valid reason options.
 * @returns {string|null} Error message if invalid, otherwise null.
 */
function validateReason(reason, validReasons = ['Missed Pickup', 'Incomplete Pickup', 'Wrong Date', 'Other']) {
    if (!reason || reason.trim() === '') {
        return ERROR_MESSAGES.REQUIRED('Reason');
    }
    if (!validReasons.includes(reason)) {
        return ERROR_MESSAGES.REASON_INVALID;
    }
    return null;
}

/**
 * Validates the Comments/Feedback text.
 * @param {string} comments - The comments string.
 * @returns {string|null} Error message if invalid, otherwise null.
 */
function validateComments(comments) {
    
    if (comments && comments.trim().length > 0) { 
        if (comments.trim().length < 10) {
            return ERROR_MESSAGES.COMMENTS_TOO_SHORT;
        }
        if (comments.trim().length > 500) {
            return ERROR_MESSAGES.COMMENTS_TOO_LONG;
        }
    }
    return null; 
}

/**
 * Validates all fields for the feedback form.
 * @param {object} formData 
 * @param {string} formData.requestId 
 * @param {string} formData.reason 
 * @param {string} formData.comments 
 * @returns {{success: boolean, errors: string[], message: string}} 
 */
function validateFeedbackForm(formData) {
    const errors = [];
    const defaultValidReasons = ['Missed Pickup', 'Incomplete Pickup', 'Wrong Date', 'Other'];

    const requestIdError = validateRequestId(formData.requestId);
    if (requestIdError) errors.push(requestIdError);

    const reasonError = validateReason(formData.reason, defaultValidReasons);
    if (reasonError) errors.push(reasonError);

    const commentsError = validateComments(formData.comments);
    if (commentsError) errors.push(commentsError);

    if (errors.length > 0) {
        return {
            success: false,
            errors: errors,
            message: 'Please correct the errors in your feedback.'
        };
    } else {
        return {
            success: true,
            errors: [],
            message: 'Feedback submitted successfully!'
        };
    }
}

module.exports = {
    validateRequestId,
    validateReason,
    validateComments,
    validateFeedbackForm,
    ERROR_MESSAGES
};