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
Waste Management: 
* Schedule Pickups
1. It should ensure valid scheduling with correct date, time and location.
2. It should ensure no invalid inputs e.g empty fields etc.
3. It should reject requests wih past dates.
4. It should ensure that duplicate pick ups are not allowed. 

* View History
1. It should return all scheduled pickups in tables
2. It should return an empty list if no pickups are in local storage
3. It should exclude failed or duplicate entries from history
4. It should filter requests by location and status

* Cancel Requests
1. It should mark the correct request as cancelled by ID.
2. It should not modify other requests.
3. It should not show if request ID does not exist.
4. It should assign IDs correctly ifmising and still cancel.

Admin Funtion:
* Content Moderation
updateRequestStatus
1. It should update the status of a request when given a valid ID and status.
2. It should return the original list if the ID is missing.
3. It should return the original list if the status is missing.

deleteRequest
1. It should delete a request when confirmed via the confirmation function.
2. It should not delete the request if confirmation is declined.
3. It should return the original list if the ID is missing.

countMissedRequests
1. It should count how many requests have the status “Missed”.
2. It should return zero if no requests are marked as “Missed”.

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

