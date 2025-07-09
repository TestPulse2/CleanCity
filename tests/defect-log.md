# Defect Log – Auth & Admin

| Bug ID | Feature       | Description                             | Steps                                            | Expected Result                      | Actual Result                        | Severity | Status |
|--------|----------------|-----------------------------------------|--------------------------------------------------|--------------------------------------|--------------------------------------|----------|--------|
| BUG001 | Registration   | No error on password mismatch           | Enter unmatched passwords, click submit         | Message: "Passwords do not match"    | No message; form proceeds            | High     | Open   |
| BUG002 | Admin Panel    | No feedback after updating status       | Admin changes request status, clicks update     | Confirmation or table refresh        | No visible confirmation              | Medium   | Open   |
| BUG003 | Access Control | Admin link shown to normal user         | Login with `user@cleancity.com`                 | Admin link hidden                    | Admin link visible                   | High     | Open   |

