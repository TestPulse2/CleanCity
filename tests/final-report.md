### **CleanCity Waste PickUp — Final Report**

## Project Overview
- **Name**: CleanCity Waste PickUp.  

- **Goal**: To design and test a scalable solution for scheduled waste pickups with content moderation and user accessibility features and provide a platform for users to share thoughts, insights and ideas through blogs and articles and to learn from others.

- **Tech Stack**: JavaScript (DOM manipulation), React, Jest, Git, ESLint, Selenium, Node.js.  
- **Tracking Tool**: JIRA for sprint,issue monitoring and bug tracking.


## Project Role & Contributions
**Team Members**
*Given Teboho - Team Leader
*Ashlyne Muthoni - Jrn. Tester
*Gloria Titus - Jrn Tester

**Contributions**
- Led testing strategy including unit, static, intergration and accessibility audits. 
- Identified and resolved key debugging issues in the work flow.  
- Managed Git workflows, resolved merge conflicts, and tagged final release.  
- Documented issues in JIRA and reported test outcomes.


## Functional Requirements Summary
| Feature                  | Status      | Notes                                                             |
|--------------------------|-------------|-------------------------------------------------------------------|
| Waste Management         | ✅ Completed | Main workflow tested across scheduling filters and edge cases     |
| Authentication           | ✅ Completed | Login/logout verified with token simulation and error handling    |
| Accessibility compliance | ✅ Completed | WCAG 2.1 AA achieved                                               |
| API integration (mocked) | ✅ Completed | Fully simulated with Jest mocks and latency scenarios             |
| Admin Panel              | ✅ Completed | User roles, management views, and restricted actions validated    |
| Form Validation          | ✅ Completed | Input patterns, error prompts, and accessibility alerts verified  |
| Content Features         | ✅ Completed | Dynamic moderation filters tested                                 |
| Data Persistence         | ✅ Completed | LocalStorage and simulated server responses verified              |
| Feedback                 | ✅ Completed | User input flow tested; feedback forms handled validation, storage, and accessibility |


## Testing Summary
- **Test Types**:  
  - Unit Testing with Jest  
  - Static Code Analysis with ESLint  
  - Accessibility checks (manual + Lighthouse) 
  - Automation Testing with Selenium 

- **Coverage**: 78% 

- **Environment**:  
  - OS: Windows 11 
  - Browser: Chrome  
  - Node.js: Jest, ESLint, React.


## 🔧 Key Debugging Issues
- **Issue**: Inconsistent enforcement of user roles and access rights  
  - *Resolution*: Centralized role checks within a single access-control module and added fallback validation for restricted actions

- **Issue**: Statistics and badges on the dashboard do not reflect actual user activity  
  - *Resolution*: Refactored data aggregation logic and linked activity triggers to badge update functions with async tracking

- **Issue**: The system allows multiple conflicting pick up requests  
  - *Resolution*: Introduced request conflict detection logic and limited overlapping slots with visual feedback prompts


## Risk Assessment & Mitigation
- **Risk**: Tasks are successfully scheduled under past dates e.g. 2011-02-05 
  - Mitigation: Implement Default Date Logic. 

- **Risk**: Accepts symbols, numers and punctuation marks only under Name fields.
  - Mitigation: Implement preventive measures i.e. Input Validation .

- **Risk Monitoring**: Logged with priority levels in JIRA; weekly reviews.


## Lessons Learned
- Accessibility prioritization helps avoid last-minute pivots. 
- Static analysis reduced review time by 30%. 
- Clear issue tagging in JIRA sped up tracking.
- Documenting debugging steps saved hours in later phases.
- Team effort and collaboration enabled us to dive into and understand deeper concepts.

