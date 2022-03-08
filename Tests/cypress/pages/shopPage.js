export default class ShopPage {
  clickCheckout() {
    return cy.get("#navbarResponsive .nav-link").click();
  }

  clickOnRemoveProduct() {
    return cy.get(".btn-danger").click();
  }

  clickContinueShopping() {
    return cy.get(".btn-default").click();
  }

  getProducts() {
    return cy.get("app-card");
  }

  getProductTitles() {
    return cy.get("h4.card-title");
  }

  getProductAddButtons() {
    return cy.get(".btn.btn-info");
  }

  getProductPrice() {
    return cy.get(".text-right strong");
  }
}
