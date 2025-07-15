### **TEST CASES**
Outlines the test cases for various functionalities within the CleanCity application. It covers user authentication, administrative features, pickup scheduling, input validation and the feedback form. Below is also a checklist of all tests carried out.


| Test Case ID | Module/Feature           | Test Case Name/Description                                | Test Steps                                                                                                                                                                             | Expected Result                                                                                                          |
| :----------- | :----------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **Authentication & Authorization** | | | | |
| TC-AUTH-001  | Registration             | Successful user registration                              | 1. Go to Register<br>2. Fill all fields correctly<br>3. Submit                                         | Success message shown; page may switch to login                                                                          |
| TC-AUTH-002  | Registration             | Mismatched password fields                                | Fill in non-matching password & confirm password fields                                                 | Error displayed, account not created                                                                                     |
| TC-AUTH-003  | Login                    | Valid user login                                          | Enter `user@cleancity.com` and `password123`                                                            | Welcome message shown; dashboard loads                                                                                   |
| TC-AUTH-004  | Login                    | Invalid login credentials                                 | Enter wrong email or password                                                                           | Error message displayed                                                                                                  |
| TC-AUTH-005  | Logout                   | User logout from dashboard                                | Login > Click Logout                                                                                    | Page returns to login/register options                                                                                   |
| TC-ADMIN-001 | Admin Login              | Admin logs in successfully                                | Enter `admin@cleancity.com` and `admin123`                                                              | Admin panel becomes accessible                                                                                           |
| TC-ADMIN-002 | Admin Panel              | View user pickup requests                                 | Login as admin > Go to Admin Panel                                                                      | Table loads with user requests                                                                                           |
| TC-ADMIN-003 | Admin Panel              | Update user request status                                | Login as admin > Select request > Change status > Click update                                          | Status updates in table and dashboard                                                                                    |
| TC-ADMIN-004 | Admin Access             | Hide admin link for non-admin users                       | Login as normal user                                                                                    | Admin nav link remains hidden                                                                                            |
| **Pickup Request & History** | | | | |
| TC-PICKUP-001| Schedule Pickups         | Validate Pickup Request                                   | Input details on home page                                                                              | Request Submitted Successfully                                                                                           |
| TC-PICKUP-002| Schedule Pickups         | Duplicate Pickup Request                                  | Input same details more than once                                                                       | Not Successful. Details duplicated                                                                                       |
| TC-HISTORY-001| View History            | Get Pickup Request                                        | Log in as user; Dashboard                                                                               | Requests Display on Dashboard                                                                                            |
| TC-HISTORY-002| View History            | Filter Request                                            | Click on filter dropdown and select                                                                     | Request display based on filter                                                                                          |
| TC-CANCEL-001| Cancel Request           | Cancel Request                                            | Click Edit on the table (Admin page)                                                                    | Request Cancelled Successfully                                                                                           |
| **Content Moderation (Admin)** | | | | |
| TC-MOD-001   | Content Moderation       | Update Request Status                                     | Log in as Admin then update                                                                             | Status Updated                                                                                                           |
| TC-MOD-002   | Content Moderation       | Delete Request                                            | Log in as Admin then delete                                                                             | Confirm deletion of request                                                                                              |
| TC-MOD-003   | Content Moderation       | Count Missed Request                                      | Log in as Admin, scroll to the bottom                                                                   | Display number of requests missed                                                                                        |
| **Pickup Request Form Validation** | | | | |
| TC-PRFV-001  | Full Name                | Valid Full Name                                           | 1. Navigate to the Pickup Request Form.<br>2. Enter "John Doe" into the "Full Name" field.              | The "Full Name" field should show no error message.                                                                      |
| TC-PRFV-002  | Full Name                | Empty Full Name                                           | 1. Navigate to the Pickup Request Form.<br>2. Leave the "Full Name" field empty.<br>3. Trigger validation. | An error message "Full Name is required." should be displayed.                                                           |
| TC-PRFV-003  | Full Name                | Full Name with Numbers                                    | 1. Navigate to the Pickup Request Form.<br>2. Enter "John Doe123" into the "Full Name" field.<br>3. Trigger validation. | An error message "Full Name can only contain letters and spaces." should be displayed.                                   |
| TC-PRFV-004  | Full Name                | Full Name with Special Characters                         | 1. Navigate to the Pickup Request Form.<br>2. Enter "John Doe!" into the "Full Name" field.<br>3. Trigger validation. | An error message "Full Name can only contain letters and spaces." should be displayed.                                   |
| TC-PRFV-005  | Full Name                | Full Name Too Short                                       | 1. Navigate to the Pickup Request Form.<br>2. Enter "Jo" into the "Full Name" field.<br>3. Trigger validation. | An error message "Full Name must be between 3 and 50 characters." should be displayed.                                   |
| TC-PRFV-006  | Full Name                | Full Name Too Long                                        | 1. Navigate to the Pickup Request Form.<br>2. Enter a name with more than 50 characters.<br>3. Trigger validation. | An error message "Full Name must be between 3 and 50 characters." should be displayed.                                   |
| TC-PRFV-007  | Email                    | Valid Email Address                                       | 1. Navigate to the Pickup Request Form.<br>2. Enter "test@example.com" into the "Email" field.         | The "Email" field should show no error message.                                                                          |
| TC-PRFV-008  | Email                    | Empty Email                                               | 1. Navigate to the Pickup Request Form.<br>2. Leave the "Email" field empty.<br>3. Trigger validation. | An error message "Email is required." should be displayed.                                                               |
| TC-PRFV-009  | Email                    | Email without "@"                                         | 1. Navigate to the Pickup Request Form.<br>2. Enter "testexample.com" into the "Email" field.<br>3. Trigger validation. | An error message "Invalid email format." should be displayed.                                                            |
| TC-PRFV-010  | Email                    | Email without Domain                                      | 1. Navigate to the Pickup Request Form.<br>2. Enter "test@" into the "Email" field.<br>3. Trigger validation. | An error message "Invalid email format." should be displayed.                                                            |
| TC-PRFV-011  | Preferred Date           | Valid Future Date (YYYY-MM-DD)                            | 1. Navigate to the Pickup Request Form.<br>2. Enter a valid future date (e.g., "2025-12-31") into the "Preferred Pickup Date" field. | The "Preferred Pickup Date" field should show no error message.                                                          |
| TC-PRFV-012  | Preferred Date           | Empty Preferred Date                                      | 1. Navigate to the Pickup Request Form.<br>2. Leave the "Preferred Pickup Date" field empty.<br>3. Trigger validation. | An error message "Preferred Pickup Date is required." should be displayed.                                               |
| TC-PRFV-013  | Preferred Date           | Invalid Date Format                                       | 1. Navigate to the Pickup Request Form.<br>2. Enter "2025/01/01" or "not-a-date" into the "Preferred Pickup Date" field.<br>3. Trigger validation. | An error message "Invalid date format for Preferred Pickup Date. Please use YYYY-MM-DD." should be displayed.           |
| TC-PRFV-014  | Preferred Date           | Invalid Calendar Date (e.g., Feb 30)                      | 1. Navigate to the Pickup Request Form.<br>2. Enter "2024-02-30" into the "Preferred Pickup Date" field.<br>3. Trigger validation. | An error message "Invalid date. Please enter a valid calendar date." should be displayed.                                |
| TC-PRFV-015  | Preferred Date           | Date in the Past                                          | 1. Navigate to the Pickup Request Form.<br>2. Enter a date from the past (e.g., "2024-01-01") into the "Preferred Pickup Date" field.<br>3. Trigger validation. | An error message "Preferred Pickup Date cannot be in the past." should be displayed.                                     |
| TC-PRFV-016  | Preferred Time           | Valid Time (HH:MM)                                        | 1. Navigate to the Pickup Request Form.<br>2. Enter "14:30" into the "Preferred Pickup Time" field.     | The "Preferred Pickup Time" field should show no error message.                                                          |
| TC-PRFV-017  | Preferred Time           | Empty Preferred Time                                      | 1. Navigate to the Pickup Request Form.<br>2. Leave the "Preferred Pickup Time" field empty.<br>3. Trigger validation. | An error message "Preferred Pickup Time is required." should be displayed.                                               |
| TC-PRFV-018  | Preferred Time           | Malformed Time Format                                     | 1. Navigate to the Pickup Request Form.<br>2. Enter "1430" or "2:30 PM" into the "Preferred Pickup Time" field.<br>3. Trigger validation. | An error message "Invalid time format. Please use HH:MM." should be displayed.                                         |
| TC-PRFV-019  | Preferred Time           | Out-of-Range Hour                                         | 1. Navigate to the Pickup Request Form.<br>2. Enter "25:00" into the "Preferred Pickup Time" field.<br>3. Trigger validation. | An error message "Invalid time. Hour must be between 00 and 23." should be displayed.                                   |
| TC-PRFV-020  | Preferred Time           | Out-of-Range Minute                                       | 1. Navigate to the Pickup Request Form.<br>2. Enter "10:65" into the "Preferred Pickup Time" field.<br>3. Trigger validation. | An error message "Invalid time. Minute must be between 00 and 59." should be displayed.                                 |
| TC-PRFV-021  | Quantity                 | Valid Quantity (Positive Integer)                         | 1. Navigate to the Pickup Request Form.<br>2. Enter "5" into the "Quantity (bags)" field.               | The "Quantity (bags)" field should show no error message.                                                                |
| TC-PRFV-022  | Quantity                 | Empty Quantity                                            | 1. Navigate to the Pickup Request Form.<br>2. Leave the "Quantity (bags)" field empty.<br>3. Trigger validation. | An error message "Quantity is required." should be displayed.                                                            |
| TC-PRFV-023  | Quantity                 | Zero Quantity                                             | 1. Navigate to the Pickup Request Form.<br>2. Enter "0" into the "Quantity (bags)" field.<br>3. Trigger validation. | An error message "Quantity must be a positive integer." should be displayed.                                             |
| TC-PRFV-024  | Quantity                 | Negative Quantity                                         | 1. Navigate to the Pickup Request Form.<br>2. Enter "-5" into the "Quantity (bags)" field.<br>3. Trigger validation. | An error message "Quantity must be a positive integer." should be displayed.                                             |
| TC-PRFV-025  | Quantity                 | Non-Integer Quantity                                      | 1. Navigate to the Pickup Request Form.<br>2. Enter "3.5" into the "Quantity (bags)" field.<br>3. Trigger validation. | An error message "Quantity must be a positive integer." should be displayed.                                             |
| TC-PRFV-026  | Quantity                 | Non-Numeric Quantity                                      | 1. Navigate to the Pickup Request Form.<br>2. Enter "abc" into the "Quantity (bags)" field.<br>3. Trigger validation. | An error message "Quantity must be a positive integer." should be displayed.                                             |
| TC-PRFV-027  | Location                 | Valid Location                                            | 1. Navigate to the Pickup Request Form.<br>2. Enter "Nairobi" into the "Location" field.                | The "Location" field should show no error message.                                                                       |
| TC-PRFV-028  | Location                 | Empty Location                                            | 1. Navigate to the Pickup Request Form.<br>2. Leave the "Location" field empty.<br>3. Trigger validation. | An error message "Location is required." should be displayed.                                                            |
| TC-PRFV-029  | Form Submission          | Successful Full Form Submission                           | 1. Navigate to the Pickup Request Form.<br>2. Fill all fields with valid data.<br>3. Click "Schedule Pickup". | A success message (e.g., "Pickup request submitted successfully!") should be displayed, and/or the form should clear. |
| TC-PRFV-030  | Form Submission          | Submission with All Required Fields Empty                 | 1. Navigate to the Pickup Request Form.<br>2. Leave all required fields empty.<br>3. Click "Schedule Pickup". | Error messages for all empty required fields should be displayed.                                                        |
| TC-PRFV-031  | Form Submission          | Submission with Partially Invalid Data                    | 1. Navigate to the Pickup Request Form.<br>2. Fill some fields with valid data and others with invalid data (e.g., invalid email, past date).<br>3. Click "Schedule Pickup". | Specific error messages for each invalid field should be displayed.                                                      |
| **Feedback Form Validation** | | | | |
| TCF-001      | Feedback Form Validation | Validate Request ID - Valid Format                        | 1. Navigate to the Feedback form.<br>2. Enter "REQ123" into the "Request ID" field.                    | The "Request ID" field should show no error message.                                                                     |
| TCF-002      | Feedback Form Validation | Validate Request ID - Empty                               | 1. Navigate to the Feedback form.<br>2. Leave the "Request ID" field empty.<br>3. Attempt to submit the form (or trigger validation). | An error message "Request ID is required." should be displayed.                                                          |
| TCF-003      | Feedback Form Validation | Validate Request ID - Invalid Format                      | 1. Navigate to the Feedback form.<br>2. Enter "ABCXYZ" into the "Request ID" field.<br>3. Attempt to submit the form (or trigger validation). | An error message "Request ID must start with "REQ" followed by 3 digits (e.g., REQ001)." should be displayed.           |
| TCF-004      | Feedback Form Validation | Validate Reason - Valid Selection                         | 1. Navigate to the Feedback form.<br>2. Select "Missed Pickup" from the "Reason" dropdown.            | The "Reason" field should show no error message.                                                                         |
| TCF-005      | Feedback Form Validation | Validate Reason - No Selection (Empty)                    | 1. Navigate to the Feedback form.<br>2. Leave the "Reason" dropdown at "Select a reason".<br>3. Attempt to submit the form (or trigger validation). | An error message "Reason is required." should be displayed.                                                              |
| TCF-006      | Feedback Form Validation | Validate Comments - Valid Length                          | 1. Navigate to the Feedback form.<br>2. Enter "This is a valid comment with sufficient length." into the "Comments" textarea. | The "Comments" textarea should show no error message.                                                                    |
| TCF-007      | Feedback Form Validation | Validate Comments - Too Short                             | 1. Navigate to the Feedback form.<br>2. Enter "Short" into the "Comments" textarea.<br>3. Attempt to submit the form (or trigger validation). | An error message "Comments must be at least 10 characters long." should be displayed.                                    |
| TCF-008      | Feedback Form Validation | Validate Comments - Optional Empty                        | 1. Navigate to the Feedback form.<br>2. Fill in valid Request ID and Reason.<br>3. Leave the "Comments" textarea empty.<br>4. Submit the form. | The form should submit successfully without a comments error.                                                            |
| TCF-009      | Feedback Form Validation | Validate Full Form - All Valid                            | 1. Navigate to Feedback form.<br>2. Fill valid data in all fields: Request ID, Reason, Comments.<br>3. Click "Submit Feedback". | A success message "Feedback submitted successfully!" should be displayed.                                                |
| TCF-010      | Feedback Form Validation | Validate Full Form - All Required Fields Empty            | 1. Navigate to Feedback form.<br>2. Leave Request ID and Reason fields empty.<br>3. Click "Submit Feedback". | Error messages "Request ID is required." and "Reason is required." should be displayed.                                  |

## * CHECKLIST*

## Authentication
- [X] Users can register with valid inputs
- [X] Error shown for password mismatch
- [X] Login works for valid credentials
- [X] Incorrect login shows error
- [X] Logout button works
- [X] Session state updates (hide/show links)

## Admin Functionality
- [X] Admin login shows Admin Panel
- [X] Admin can view requests
- [X] Admin can update request statuses
- [X] Non-admins cannot access admin features

## Waste Management: 
* Schedule Pickups
- [X] It should ensure valid scheduling with correct date, time and location.
- [X] It should ensure no invalid inputs e.g empty fields etc.
- [X] It should reject requests wih past dates.
- [X] It should ensure that duplicate pick ups are not allowed. 

* View History
- [X] It should return all scheduled pickups in tables
- [X] It should return an empty list if no pickups are in local storage
- [X] It should exclude failed or duplicate entries from history
- [X] It should filter requests by location and status

* Cancel Requests
- [X] It should mark the correct request as cancelled by ID.
- [X] It should not modify other requests.
- [X] It should not show if request ID does not exist.
- [X] It should assign IDs correctly ifmising and still cancel.

## Admin Funtion:
* Content Moderation

updateRequestStatus
- [X] It should update the status of a request when given a valid ID and status.
- [X] It should return the original list if the ID is missing.
- [X] It should return the original list if the status is missing.

deleteRequest
- [X] It should delete a request when confirmed via the confirmation function.
- [X] It should not delete the request if confirmation is declined.
- [X] It should return the original list if the ID is missing.

countMissedRequests
- [X] It should count how many requests have the status “Missed”.
- [X] It should return zero if no requests are marked as “Missed”.

## Content Features:
* Community Interactions

1. Like Functionality
- [X] Toggle state for post likes correctly.
- [X] Ensure likes are calculated based on existing state and toggle.

2. Comment Functionality
- [X] Add comments per post ID.
- [X] Validate empty comment input is ignored.
- [X] Ensure comment structure includes ID, content, author, and date.

3. Persistent Storage
- [X] Check updates to localStorage for posts, likes, and comments.

4. UI Logic (Simulated)
- [X] Toggle comment visibility flag per post.
- [X] Verify like button state mapping to toggled value.
- [X] Validate comment count display.

* Blog Posts
1. Search Filter Functionality
- [X] Validate that posts are filtered based on title or summary text matching the search input.

2. Tag Filter Accuracy
- [X] Confirm that filtering by selected tag returns only relevant posts.

3. Featured Posts Selection
- [X] Check that posts with featured: true are identified and displayed appropriately.

4. Unique Tag Extraction
- [X] Ensure extractTags() returns a distinct set of all tags from existing posts.

5. Empty Result Handling
- [X] Verify that no posts are displayed when the search and tag filters yield no match.

* Comments
1. Comment Posting
- [X] Test that new comments are added only when text is non-empty.
- [X] Ensure character limits (max 200) are respected.
- [X] Confirm input is cleared after successful posting.

2. Like Functionality
- [X] Validate that clicking "Like" increases the counter.
- [X] Ensure likes don’t change for reported comments.

3. Report Functionality
- [X] Confirm reported flag toggles correctly.
- [X] Test that "Report" button disables after use.
- [X] Validate visual changes for reported comments.

4. Persistent Storage
- [X] Assert that localStorage updates reflect added, liked, or reported comments.

5. Fallback Rendering
- [X] Check rendering of "No comments yet" when list is empty.
- [X] Validate comment structure rendering (user, text, likes, actions).

## Form Validation
* Input Validation
1. Input Validation: Full Name
- [X] Should return null for a valid full name.
- [X] Should return error for empty full name.
- [X] Should return error for full name too short.
- [X] Should return error for full name with invalid characters.

2. Input Validation: Email
- [X] Should return null for a valid email.
- [X] Should return error for empty email.
- [X] Should return error for invalid email format.

3. Input Validation: Location
- [X] Should return null for a valid location.
- [X] Should return error for empty location.
- [X] Should return error for an invalid location.
- [X] Should recognize all valid locations.

4. Input Validation: Waste Type
- [X] Should return null for a valid waste type.
- [X] Should return error for empty waste type.
- [X] Should return error for an invalid waste type.
- [X] Should recognize all valid waste types.

5. Input Validation: Preferred Pickup Date
- [X] Should return null for a valid future date.
- [X] Should return null for today's date.
- [X] Should return error for empty date.
- [X] Should return error for a past date.
- [ ] Should return error for invalid date format.

6. Comprehensive Pickup Request Form Validation
- [X] Should return success for a completely valid form.
- [X] Should return success for valid form with today's date.
- [X] Should return errors for all empty required fields.
- [X] Should return specific errors for partially invalid form data.
- [X] Should handle undefined/null values gracefully.

* Error Messages/Feedback Validation
1. validateRequestId (Individual Field Tests):
- [X] Should return null for a valid request ID.
- [X] Should return required error for empty request ID.
- [X] Should return format error for invalid request ID format.

2. validateReason (Individual Field Tests):
- [X] Should return null for a valid reason.
- [X] Should return required error for empty reason.
- [X] Should return invalid reason error for an unrecognized reason.

3. validateComments (Individual Field Tests):
- [X] Should return null for valid comments (including optional empty/whitespace/null/undefined comments).
- [X] Should return error for comments too short.
- [X] Should return error for comments too long.

4. validateFeedbackForm (Comprehensive Form Validation Tests):
- [X] Should return success for a completely valid form.
- [X] Should return errors for all empty required fields (requestId, reason).
- [X] Should return specific errors for partially invalid form data (e.g., invalid request ID format, too short comments).
- [X] Should handle undefined/null values gracefully for all fields (treating them as empty and triggering required errors where applicable).
- [X] Should allow empty comments without error (as comments are optional when empty).


