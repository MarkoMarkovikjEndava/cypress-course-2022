/// <reference types="Cypress" />

import HomePage from "../../pages/homePage";
import ShopPage from "../../pages/shopPage";
import ProductsPage from "../../pages/productsPage";
import CountryPage from "../../pages/countryPage";

describe("global configuration changes", () => {
  beforeEach(function () {
    cy.visit(Cypress.env("url") + "angularpractice/shop");

    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("asserts that a country has been selected and verifies dialog message", () => {
    const shopPage = new ShopPage();
    const productsPage = new ProductsPage();
    const countryPage = new CountryPage();
    shopPage.clickCheckout();
    productsPage.clickCheckout();

    Cypress.config("defaultCommandTimeout", 10000);
    countryPage.fillInCountryInput("India");
    countryPage.selectCountry("India");
    countryPage.getCountryInput().should("have.value", "India");

    countryPage.checkCountryCheckbox();
    countryPage.getCountryCheckbox().should("be.checked");

    countryPage.clickPurchaseButton();
    countryPage
      .getAlertDialog()
      .should(
        "contain.text",
        "Success! Thank you! Your order will be delivered in next few weeks :-)."
      );
  });

  it("adds multiple products and verifies the price dynamically", function () {
    const shopPage = new ShopPage();
    const productsPage = new ProductsPage();

    for (let i = 0; i <= 3; i++) {
      let productName = this.data.products[i].name;
      cy.AddProductToCartWithQuantity(productName, i + 1);
    }

    shopPage.clickCheckout();

    let total = 0;
    cy.get("tr td:nth-child(4) strong")
      .each((el, index, list) => {
        let text = el.text();
        let price = text.split(" ")[1];

        total += Number.parseInt(price);
      })
      .then(() => {
        productsPage.getTotalPrice().then((el) => {
          let totalPrice = parseInt(el.text().split(" ")[1]);
          expect(totalPrice).to.eq(total);
        });
      });
  });
});
