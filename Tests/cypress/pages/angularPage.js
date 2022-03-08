export default class AngularPage {
  getLibraryMenuLink() {
    return cy.get(".nav-link").contains("Library");
  }

  getLibraryButton() {
    return cy.get(".btn.btn-primary");
  }

  clickLibraryButton() {
    this.getLibraryButton().click();
  }

  clickLibraryMenuLink() {
    this.getLibraryMenuLink().click();
  }
}
