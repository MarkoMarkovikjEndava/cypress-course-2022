/// <reference types="Cypress" />

describe("intro to cypress, commands, async nature", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url") + "seleniumPractise");
    cy.get(".products").find(".product").as("productsLocator");
    cy.get(".brand.greenLogo").as("logoLocator");
  });

  it("adds cashews to the cart and verifies the logo text", () => {
    cy.get(".search-keyword").type("ca");
    cy.wait(1000);

    //get & check products
    cy.get("@productsLocator").should("have.length", 4);
    cy.get("@productsLocator").each((el, index, list) => {
      let name = el.find(".product-name").text();
      if (name.includes("Cashews")) {
        cy.wrap(el).find("button").click();
      }
    });

    // get & check logo
    cy.get("@logoLocator").should("have.text", "GREENKART");
  });

  it("adds and checks for cashews in the cart then proceeds to checkout", () => {
    //find and add cashews
    cy.get(".search-keyword").type("ca");
    cy.wait(1000);
    cy.get("@productsLocator").eq(3).find("button").click();

    //confirm and proceed to checkout
    cy.get(".cart-icon").click();
    cy.get(".product-total > .amount:visible").should("have.text", 650);
    cy.get(".cart-preview")
      .should("have.class", "active")
      .find("button")
      .click();
    cy.get(".cartTable")
      .find(".product-name")
      .should("have.text", "Cashews - 1 Kg");
    cy.contains("Place Order").click();
  });
});
