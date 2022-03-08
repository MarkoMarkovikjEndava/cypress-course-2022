/// <reference types="Cypress" />

describe("handling web controls", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url") + "AutomationPractice/");
  });

  it("asserts checkboxes", () => {
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1")
      .uncheck()
      .should("not.be.checked");

    cy.get('input[type="checkbox"]')
      .check(["option2", "option1"])
      .should("be.checked");
  });

  it("asserts dropdowns", () => {
    //static
    cy.get("select[id='dropdown-class-example']")
      .select("option3")
      .should("have.value", "option3");

    //dynamic
    cy.get("#autocomplete").type("mar");
    cy.get(".ui-menu-item > div").each((el, ind, list) => {
      el.text() === "San Marino" ? cy.wrap(el).click() : null;
    });
    cy.get("#autocomplete").should("have.value", "San Marino");
  });

  it("asserts hidden/visible elements", () => {
    cy.get("#show-textbox").as("show");
    cy.get("#hide-textbox").as("hide");
    cy.get("#displayed-text").as("text");

    cy.get("@text").should("be.visible");
    cy.get("@hide").click();
    cy.get("@text").should("not.be.visible");
    cy.get("@show").click();
    cy.get("@text").should("be.visible");
  });

  it("asserts radio buttons", () => {
    cy.get('input[value="radio1"]').check().should("be.checked");
    cy.get('input[value="radio3"]').check().should("be.checked");
    cy.get('input[value="radio1"]').should("not.be.checked");
  });
});
