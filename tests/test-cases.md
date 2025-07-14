# Test Cases – Auth & Admin Management

| TC ID  | Feature      | Description                              | Steps                                                                                   | Expected Result                                   | Status |
|--------|--------------|------------------------------------------|------------------------------------------------------------------------------------------|--------------------------------------------------|--------|
| TC001  | Registration | Successful user registration              | 1. Go to Register<br>2. Fill all fields correctly<br>3. Submit                          | Success message shown; page may switch to login   |        |
| TC002  | Registration | Mismatched password fields                | Fill in non-matching password & confirm password fields                                 | Error displayed, account not created              |        |
| TC003  | Login        | Valid user login                          | Enter `user@cleancity.com` and `password123`                                            | Welcome message shown; dashboard loads            |        |
| TC004  | Login        | Invalid login credentials                 | Enter wrong email or password                                                           | Error message displayed                           |        |
| TC005  | Logout       | User logout from dashboard                | Login > Click Logout                                                                    | Page returns to login/register options            |        |
| TC006  | Admin Login  | Admin logs in successfully                | Enter `admin@cleancity.com` and `admin123`                                              | Admin panel becomes accessible                    |        |
| TC007  | Admin Panel  | View user pickup requests                 | Login as admin > Go to Admin Panel                                                      | Table loads with user requests                    |        |
| TC008  | Admin Panel  | Update user request status                | Login as admin > Select request > Change status > Click update                          | Status updates in table and dashboard             |        |
| TC009  | Admin Access | Hide admin link for non-admin users       | Login as normal user                                                                    | Admin nav link remains hidden                     |        |

# Checklist – Auth & Admin

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

- [X] Like Functionality
> Toggle state for post likes correctly.
> Ensure likes are calculated based on existing state and toggle.

- [X] Comment Functionality
> Add comments per post ID.
> Validate empty comment input is ignored.
> Ensure comment structure includes ID, content, author, and date.

- [X] Persistent Storage
> Check updates to localStorage for posts, likes, and comments.

- [X] UI Logic (Simulated)
> Toggle comment visibility flag per post.
> Verify like button state mapping to toggled value.
> Validate comment count display.

* Blog Posts
- [X] Search Filter Functionality
> Validate that posts are filtered based on title or summary text matching the search input.
- [X] Tag Filter Accuracy
> Confirm that filtering by selected tag returns only relevant posts.
- [X] Featured Posts Selection
> Check that posts with featured: true are identified and displayed appropriately.
- [X] Unique Tag Extraction
> Ensure extractTags() returns a distinct set of all tags from existing posts.
- [X] Empty Result Handling
> Verify that no posts are displayed when the search and tag filters yield no match.

* Comments
- [X] Comment Posting
> Test that new comments are added only when text is non-empty.
> Ensure character limits (max 200) are respected.
> Confirm input is cleared after successful posting.
- [X] Like Functionality
> Validate that clicking "Like" increases the counter.
> Ensure likes don’t change for reported comments.
- [X] Report Functionality
> Confirm reported flag toggles correctly.
> Test that "Report" button disables after use.
> Validate visual changes for reported comments.
- [X] Persistent Storage
> Assert that localStorage updates reflect added, liked, or reported comments.
- [X] Fallback Rendering
> Check rendering of "No comments yet" when list is empty.
> Validate comment structure rendering (user, text, likes, actions).

| TCID   | Feature           | Description            | Steps                              | Expected Results                    |
|--------|-------------------|------------------------|------------------------------------|-------------------------------------|
| TC001  |Schedule Pickups   |Validate Pickup Request |Input details on home page          |Request Submitted Successfully       |
| TC002  |Schedule Pickups   |Duplicate Pickup Request|Input same details more than once   |Not Successful. Details duplicated   |
| TC003  |View History       |Get Pickup Request      |Log in as user; Dashboard           |Requests Display on Dashboard        |
| TC004  |View History       |Filter Request          |Click on filter dropdown and select |Request display based on filter      |
| TC005  |Cancel Request     |Cancel Request          |Click Edit on the table(Admin page) |Request Cancelled Successfully       |
| TC006  |Content Moderation |Update Request Status   |Log in as Admin the update          |Status Updated                       |
| TC007  |Content Moderation |Delete Request          |Log in as Admin then delete         |Confirm deletion of request          |
| TC008  |Content Moderation |Count Missed Request    |Log in as Admin,scroll to the bottom|Display number of requests missed    |

