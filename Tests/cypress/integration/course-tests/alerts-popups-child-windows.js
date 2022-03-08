/// <reference types="Cypress" />

import "cypress-iframe";

describe("handling alerts, popups, child windows", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url") + "AutomationPractice/");
    cy.get("#alertbtn").as("alert");
    cy.get("#confirmbtn").as("confirm");
  });

  it("asserts alerts", () => {
    cy.get("@alert").click();
    cy.on("window:alert", (text) => {
      expect(text).eq(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.get("@confirm").click();
    cy.on("window:confirm", (text) => {
      expect(text).eq("Hello , Are you sure you want to confirm?");
    });
  });

  it("asserts new tabs", () => {
    // first method (more secure)
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should("include", "rahulshettyacademy");

    cy.go("back");

    cy.url().should("include", "rahulshettyacademy.com/AutomationPractice");
    cy.get("h1").should("be.visible").and("have.text", "Practice Page");

    // second method (less secure)
    cy.get("#opentab").then((el) => {
      cy.visit(el.prop("href"));
    });

    cy.url().should("include", "rahulshettyacademy");
  });

  it("asserts web tables", () => {
    cy.get("table tr td:nth-child(2)").each((el, index) => {
      el.text().includes("interview")
        ? cy
            .get("table tr td:nth-child(2)")
            .eq(index)
            .next()
            .should("have.text", 0)
        : null;
    });
  });

  it("asserts hovers", () => {
    // hover over parent and click accordingly
    // cy.get(".mouse-hover-content")
    //   .invoke("show")
    //   .should("be.visible")
    //   .find('a[href="#top"]')
    //   .click();

    // skip hover and click hidden element forcibly
    cy.get("a[href='#top']").click({ force: true });

    cy.url().should("include", "top");
  });

  it("asserts frames", () => {
    cy.frameLoaded("#courses-iframe");

    cy.iframe().find('a[href="#/mentorship"]:first').click();
    cy.iframe()
      .find(".inner-box > h1")
      .should("be.visible")
      .and("have.text", "Mentorship");
  });
});
