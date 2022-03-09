# Logging in with Single Sign On

> ## This section of the course mimicked running a full fledged app with authentication and how one would go testing the same.

1. The app server [app_server.js](app_server.js) runs on port 7074.
2. The auth server [auth_server.js](auth_server.js) runs on port 7075. [The file](cypress/integration/logging-in-single-sign-on-spec.js) describes the overall authentication flow and implements tests that follow it.
3. These were provided by the course and only serve for learning purposes.

The tests show how to:

- Login when authentication is done on a 3rd party server.
- Automatically parse tokens using [`cy.request()`](https://on.cypress.io/request) and set as cookies
- Manually set tokens on local storage (similar to SPA flow).
- Map external hosts like `auth.corp.com:7075` and point to local servers `127.0.0.1:7075` in [cypress.json](cypress.json)
- Get the authentication token just once and set it before each test (should make tests faster)

**TIP:** to start the server and run the Cypress Test Runner use this command `npm run dev`

Highly recommend watching [this video.](https://www.youtube.com/watch?v=5XQOK0v_YRE)
