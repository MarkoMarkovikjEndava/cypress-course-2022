import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ShopPage from "../../../../pages/shopPage";
import ProductsPage from "../../../../pages/productsPage";
import CountryPage from "../../../../pages/countryPage";

const shopPage = new ShopPage();
const productsPage = new ProductsPage();
const countryPage = new CountryPage();

Given("the user is on the shopping page", () => {
  cy.visit(Cypress.env("url") + "angularpractice/shop");
});

When("the user adds a product", (table) => {
  table.rows().forEach((row) => {
    cy.AddSingleProductToCartAndVerifyPrice(row[0], row[1]);
  });
});

When("the user has added multiple products", function () {
  for (let i = 0; i <= 3; i++) {
    let productName = this.data.products[i].name;
    cy.AddProductToCartWithQuantity(productName, i + 1);
  }
});

And("the user goes to products checkout", () => {
  shopPage.clickCheckout();
});

And("the user goes to checkout", () => {
  shopPage.clickCheckout();
  productsPage.clickCheckout();
});

And("the user fills in their info", () => {
  Cypress.config("defaultCommandTimeout", 10000);
  countryPage.fillInCountryInput("India");
  countryPage.selectCountry("India");
  countryPage.checkCountryCheckbox();
  countryPage.clickPurchaseButton();
});

Then("the user receives a confirmational dialog message", () => {
  countryPage
    .getAlertDialog()
    .should(
      "contain.text",
      "Success! Thank you! Your order will be delivered in next few weeks :-)."
    );
});

Then("the price is calculated correctly", () => {
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
