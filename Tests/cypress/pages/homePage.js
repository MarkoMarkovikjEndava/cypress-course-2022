export default class HomePage {
  getNameInput() {
    return cy.get(".form-control:first");
  }

  getEmailInput() {
    return cy.get('input[name="email"]');
  }

  getGenderInput() {
    return cy.get("#exampleFormControlSelect1");
  }

  getEntrepreneurRadio() {
    return cy.get("#inlineRadio3");
  }

  getTwoWayDataBindingInput() {
    return cy.get(":nth-child(4) > .ng-untouched");
  }

  getAlertDialog() {
    return cy.get(".alert");
  }

  getSubmitButton() {
    return cy.get('input[type="submit"]');
  }

  clickSubmitButton() {
    this.getSubmitButton().click();
  }

  fillInInputs(name, email, gender) {
    this.getNameInput().type(name);
    this.getEmailInput().type(email);
    this.getGenderInput().select(gender);
  }

  navigateToShop() {
    return cy.get(":nth-child(2) > .nav-link").click();
  }
}
