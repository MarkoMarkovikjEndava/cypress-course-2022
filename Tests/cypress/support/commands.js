import HomePage from "../pages/homePage";
import ProductsPage from "../pages/productsPage";
import ShopPage from "../pages/shopPage";

// Marko's commands
Cypress.Commands.add("AddSingleProductToCartAndVerifyPrice", (name, price) => {
  const shopPage = new ShopPage();
  const productsPage = new ProductsPage();

  shopPage.getProductTitles().each((el, index, list) => {
    el.text().includes(name)
      ? shopPage.getProductAddButtons().eq(index).click()
      : null;
  });
  shopPage.clickCheckout();
  productsPage.getTotalPrice().should("contain.text", price);
  productsPage.clickOnRemoveProduct();
  productsPage.clickContinueShopping();
});

Cypress.Commands.add("AddProductToCartWithQuantity", (name, quantity) => {
  const shopPage = new ShopPage();
  const productsPage = new ProductsPage();

  shopPage.getProductTitles().each((el, index, list) => {
    if (el.text().includes(name)) {
      while (quantity !== 0) {
        shopPage.getProductAddButtons().eq(index).click();
        quantity--;
      }
    }
  });
});

Cypress.Commands.add("VerifyTableRowsForGivenDataLength", (length) => {
  return cy.get("tbody tr").should("have.length", length);
});
