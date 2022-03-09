# Cypress Basics, Advanced uses & More

> ## Most of the material was covered in this section. That is why I'll list the sub-concepts covered in each spec file to give a general idea of how things progressed whilst following the course.

1. ### [Intro](./cypress/integration/course-tests/intro.js)
   - Getting started with Cypress
   - Using locators
   - Referencing locators for further use
   - Understanding the async nature of Cypress/Js
   - Basic assertions
   - Wrapping results in promises & working with those
2. ### [Fixture, Custom commands, POM](./cypress/integration/course-tests/fixtures-custom-commands-pom.js)
   - Using fixtures to provide data to tests
   - Writing custom commands to shorten tests and promote reusage
   - Generating page classes to follow the POM pattern
   - Asserting html attributes
3. ### [Web controls](./cypress/integration/course-tests/web-controls.js)
   - Working with checkboxes
   - Working with static dropdowns
   - Working with dynamic dropdowns
   - Working with hidden/toggable elements
   - Working with radio buttons
4. ### [Alerts, popups, windows](./cypress/integration/course-tests/alerts-popups-child-windows.js)
   - Using `cy.on()` to test browser popups
   - Using `cy.invoke()` to modify target attributes & toggle hover states
   - Forcefully clicking web elements to attain certain behaviour
   - Using jQuery `prop()` method to test certain attributes
   - Testing `<iframe>` web elements with Cypress
5. ### [Global configuration](./cypress/integration/course-tests/global-configuration.js)
   - Changing configuration settings for specific tests
   - Passing fixture data in custom commands to promote abstraction and cleaner code
   - Using `Cypress.env()` to use environment variables during testing
6. ### [Mocking Requests](./cypress/integration/course-tests/mocking-requests.js)

   - Using `cy.intercept()` to intercept requests and modify them
   - Passing options to intercepted requests to ensure desired behaviour
   - Using `cy.wait()` to execute modified requests to test specific scenarios
