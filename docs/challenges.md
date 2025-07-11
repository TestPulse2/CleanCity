# Challenges – Auth & Admin

## 1. No Real Backend
Since user authentication is handled client-side, we simulate login state with page visibility changes, not real session management.

## 2. No Feedback for Admin Actions
When admins update request statuses, no confirmation or visual refresh occurs, making it hard to know if it worked.

## 3. Password Validation
Password mismatch logic exists in form inputs, but user is not informed when passwords don't match.

## 4. Visibility Toggle Bugs
Some nav links (Admin, Dashboard) don’t update correctly between logins/logouts or user types.
