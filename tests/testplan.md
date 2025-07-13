### **TEAM MEMBERS DETAILS**

|        NAME         |               EMAIL                |         ROLE         |
|---------------------|------------------------------------|----------------------|
| Given Teboho        | teboho4000@gmail.com               | Junior Tester (GL)   |
| Gloria Titus        | gloriamtitus@gmail.com             | Junior Tester        |
| Ashlyne Muthoni     | kihoroashlyne@gmail.com            | Junior Tester        |

### **Objectives**
*Verify Functional Requirements*
1. Ensure core features such as user authentication, waste management scheduling, admin operations, and content interaction behave as expected.
2. Confirm data persistence to ensure it meets consistency and integrity requirements.
3. Validate input handling through form validation.

*Non-Functional Attributes*
1. Measure and optimize performance, including page load speed and interface responsiveness.
2. Evaluate usability by checking for intuitive navigation and user-friendly design.
3. Confirm accessibility and screen reader compatibility.
4. Conduct security checks such as input sanitization and session protection.
5. Test cross-browser and device compatibility to ensure responsive design.

*Investigate Focus Areas*
1. Identify and analyze intentional flaws inserted for quality assurance practice.
2. Stress-test the system with edge cases and unexpected user input.
3. Assess user experience with attention to workflow logic and information architecture.
4. Ensure data integrity and reliability in local storage interactions.

### **Resources**
Personal Computers
Specialised Personnel i.e Junior Testers
Jira  (test management)
Selenium (automated browser testing)
Dev Tools (manual inspection and debugging)
Chrome Browser

### **Schedule**
| Phase                | Duration | Start Date | End Date |
|----------------------|----------|------------|----------|
| Test Planning        | 2 days   | 30-Jun     | 02-Jul   |
| Test Case Design     | 2 days   | 03-Jul     | 04-Jul   |
| Test Execution       | 4 days   | 05-Jul     | 08-Jul   |
| Bug Fix Verification | 2 days   | 09-Jul     | 10-Jul   |
| Final Reporting      | 2 days   | 11-Jul     | 12-Jul   |

### **Scope**

| Category               | In Scope                                                                 |
|------------------------|--------------------------------------------------------------------------|
| **Functional**         | - Authenticity workflows (login, register, roles)                        |
|                        | - Waste scheduling & reminders                                           |
|                        | - Admin operations (CRUD, dashboards)                                    |
|                        | - Form validation & input handling                                       |
|                        | - Data persistence via local storage or API                              |                    
| **Non-Functional**     | - Page load & UI responsiveness                                          |
|                        | - Usability: navigation, feedback, readability                           |
|                        | - Accessibility: screen readers, ARIA, keyboard support                  |
|                        | - Security: input sanitization, session handling                         |
|                        | - Compatibility: major browsers + devices                                |
| **Focus Areas**        | - Flaw detection (intentional QA flaws)                                  |
|                        | - Stress tests with edge inputs                                          |
|                        | - Workflow logic & info architecture                                     |
|                        | - Data integrity in local storage                                        |
|------------------------|--------------------------------------------------------------------------|
| **Out of Scope**       | - Deep third-party API integration tests                                 |
|                        | - Backend load/performance testing                                       |
|                        | - Localization/multilingual testing                                      |
|                        | - Legal compliance audits                                                |

 ### **Testing Types**
Unit Testing: Focused on JavaScript modules and DOM interactions.
System Testing: Evaluates end-to-end functionality.
Accessibility Testing: Ensures compliance with WCAG standards.
Security Testing: Input validation, authentication flaws, and session safety.
Cross-Browser & Device Testing: Chrome, Safari, Firefox (mobile & desktop).

### **Risk Mitigation**
Prioritize risk-based testing on modules like scheduling and admin access. 

### **Test Entry/Exit Criteria**
Entry: Feature complete, test environment ready
Exit: No Critical/High bugs open, regression passed, stakeholder sign-off

### **Roles & Responsibilities**
Grp Leader Given Teboho: Jira Setup and Documentation.
Jrn Tester Ashlyne Muthoni: Systematic Testing.
Jrn Tester Gloria Titus: Slide and Video Presentation.

### **Deliverables**
- Before Testing:
Test Plan Document: Detailed test plan, including scope, objectives, strategy, and resources.
Test Cases: Specific test cases for each feature, outlining the steps to be executed and the expected results.
Test Data: Prepared data sets for testing various scenarios, such as valid/invalid user inputs, loggin successful, Pickup schedules, and many more. 
Test Environment Setup: Setup of tools like Jira, Jest, and Selenium.
- During Testing:
Execution Logs: Records of all test cases executed, including pass/fail status.
Defect Reports: Documentation of any issues found, including steps to reproduce, screenshots, and severity.
Daily/Weekly Status Reports: Updates on testing progress, including completed tests, open defects, and risks.
- After Testing:
Final Test Report: Summary of the testing activities, including overall test coverage, defect trends, and final recommendations.
Defect Log: Comprehensive list of all identified defects, including their status (open, fixed, closed) and resolution.
Test Closure Report: Document indicating that all planned tests have been completed, and the software is ready for release.
    
## **Test Strategy**
- Methods that will be used are manual testing and automation testing.
- Techniques that will be used under manual test: Black-box and White-box.
- Black-Box: Both Functional and Non-Functional testing.
- White box: Both Functional and Non-Functional testing.
- Functional: Unit testing, Integration testing, System testing, Acceptance testing.
- Non-Functional testing: Peformance teting, Usability testing, Compatibility testing.

  ## **Plan the test Environment and Test Data**
  - Jira
Test Environment

Web-based access (Jira Cloud/Server)

Create test project with workflows (To Do → In Progress → Done)

Integrate with GitHub and test tools (Zephyr, Xray)

Set user roles (Tester, Developer, Admin) 

Test Data
Test cases (manual/imported)

Sample bugs and requirements

Test user accounts for role validation

Reports to test filters and dashboards

- Selenium
  
Test Environment

Install Selenium WebDriver with language binding (Python, JS, etc.)

Use browsers (Chrome, Firefox)

Required drivers: ChromeDriver, GeckoDriver

Test Data

Valid/invalid login credentials

Sample form inputs (text, dropdowns)

Mock API responses if needed

- Jest

Test Environment
 
Install via npm install --save-dev jest

Run in VS Code or terminal (npm test)

Use mocks (jest.fn())

Enable code coverage with --coverage

Test Data
Mock objects ({ username: 'test' })

JSON fixtures for repeated tests

Edge case values (null, empty strings)

Mock API responses


  

  
