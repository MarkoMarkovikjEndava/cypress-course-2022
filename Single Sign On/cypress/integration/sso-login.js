/// <reference types="cypress" />

describe("Logging In - Single Sign on", function() {
  xit("asserts an unauthenticated request", () => {
    cy.visit("http://localhost:7074/dashboard");
    cy.get("h3").should(
      "contain",
      "You are not logged in and cannot access this page"
    );
  });

  it("asserts an authenticated request", function() {
    const requestOptions = {
      method: "POST",
      url: "http://localhost:7075/login",
      qs: {
        redirectTo: "http://localhost:7074/set_token",
      },
      body: {
        username: "jane.lane",
        password: "password123",
      },
      form: true,
    };

    // SSO - email password //ca -> redirect to
    // Login and Authenticate
    cy.request(requestOptions);

    // Check again
    cy.visit("http://localhost:7074/dashboard");
    cy.get("h1").should("contain", "Welcome to the Dashboard");
  });
});
