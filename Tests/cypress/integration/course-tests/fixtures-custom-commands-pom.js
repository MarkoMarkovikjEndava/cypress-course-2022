/// <reference types="Cypress" />

import HomePage from "../../pages/homePage";

describe("understanding fixtures, custom commands, pom pattern", () => {
  before(() => {});

  beforeEach(function () {
    cy.visit(Cypress.env("url") + "angularpractice");
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });

  it("asserts input using fixture data", function () {
    const homePage = new HomePage();

    homePage.fillInInputs(this.data.name, this.data.email, this.data.gender);

    homePage.getNameInput().should("have.value", "Marko Markovikj");
    homePage.getEmailInput().should("have.value", "marko.markovikj@test.com");
    homePage.getGenderInput().should("have.value", "Male");
  });

  it("asserts attribute properties", function () {
    const homePage = new HomePage();

    homePage.fillInInputs(this.data.name, this.data.email, this.data.gender);

    homePage
      .getNameInput()
      .should("have.value", "Marko Markovikj")
      .and("have.attr", "minlength", 2);
    homePage.getEntrepreneurRadio().should("be.disabled");
  });

  it("asserts an added product using custom commands", () => {
    const homePage = new HomePage();
    homePage.navigateToShop();

    cy.AddSingleProductToCartAndVerifyPrice("Blackberry", 50000);
  });

  it("asserts added products using parameterization", function () {
    const homePage = new HomePage();
    homePage.navigateToShop();

    this.data.products.forEach((product) => {
      cy.AddSingleProductToCartAndVerifyPrice(product.name, product.price);
    });
  });
});
