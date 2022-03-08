export default class ProductsPage {
  clickCheckout() {
    return cy.get(".btn.btn-success").click();
  }

  clickOnRemoveProduct() {
    return cy.get(".btn-danger").click();
  }

  clickContinueShopping() {
    return cy.get(".btn-default").click();
  }

  getTotalPrice() {
    return cy.get(".text-right strong");
  }
}
