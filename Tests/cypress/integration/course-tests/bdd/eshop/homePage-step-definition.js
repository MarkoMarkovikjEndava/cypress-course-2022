import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../pages/homePage";

const homePage = new HomePage();

Given("the user is on the home page", () => {
  cy.visit(Cypress.env("url") + "angularpractice/");
});

When("the user fills in the required inputs successfully", function () {
  homePage.fillInInputs(this.data.name, this.data.email, this.data.gender);

  homePage
    .getNameInput()
    .should("have.value", "Marko Markovikj")
    .and("have.attr", "minlength", 2);
  homePage.getEmailInput().should("have.value", "marko.markovikj@test.com");
  homePage.getGenderInput().should("have.value", "Male");
});

And("the user clicks submit", () => {
  homePage.clickSubmitButton();
});

Then("the user receives a confirmational alert dialog", () => {
  homePage
    .getAlertDialog()
    .should(
      "contain.text",
      "Success! The Form has been submitted successfully!."
    );
});
