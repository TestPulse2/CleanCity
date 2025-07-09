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

