export default class CountryPage {
  getCountryInput() {
    return cy.get("#country");
  }

  getCountryCheckbox() {
    return cy.get("#checkbox2");
  }

  getAlertDialog() {
    return cy.get(".alert");
  }

  getPurchaseButton() {
    return cy.get("input[type='submit']");
  }

  clickPurchaseButton() {
    this.getPurchaseButton().click();
  }

  checkCountryCheckbox() {
    this.getCountryCheckbox().check({ force: true });
  }

  fillInCountryInput(text) {
    this.getCountryInput().type(text);
  }

  selectCountry(text) {
    cy.get(".suggestions").contains(text).click();
  }
}
