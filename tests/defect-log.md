| Bug ID | Feature       | Description                             | Steps                                            | Expected Result                      | Actual Result                        | Severity | Status |
|--------|----------------|-----------------------------------------|--------------------------------------------------|--------------------------------------|--------------------------------------|----------|--------|
| BUG001 | Registration   | No error on password mismatch           | Enter unmatched passwords, click submit         | Message: "Passwords do not match"    | No message; form proceeds            | High     | Open   |
| BUG002 | Admin Panel    | No feedback after updating status       | Admin changes request status, clicks update     | Confirmation or table refresh        | No visible confirmation              | Medium   | Open   |
| BUG003 | Access Control | Admin link shown to normal user         | Login with `user@cleancity.com`                 | Admin link hidden                    | Admin link visible                   | High     | Open   |

| Bug ID | Feature       | Description                             | Steps                                            | Expected Result                      | Actual Result                        | Severity | Status |
|--------|----------------|-----------------------------------------|--------------------------------------------------|--------------------------------------|--------------------------------------|----------|--------|
| BUG001 |Schedule Pickup| No error on entry of past dates  | Enter a past date eg 2016,click submit | Message: Please enter a valid date   | "Submitted Successfully"          | High     | Open   |
| BUG002 |View History   | Entries filtered on command      | Open filter dropdown, select Eldoret    | RequestIDs for Eldoret displayed       | Displays RequestIDs for Nairobi     | Medium   | Open   |
| BUG003 |Admin Page  | Warning without request to fill input  | Log in as Admin, update reuests status| Status updated successfully update next requests  | "Please fill in required input    | High     | Open   |


![alt text](<Screenshot (53).png>)
![alt text](<Screenshot (46).png>)
![alt text](<Screenshot (45).png>)