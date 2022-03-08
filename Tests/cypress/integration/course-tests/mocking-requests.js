/// <reference types="Cypress" />

import AngularPage from "../../pages/angularPage";

describe("working with & intercepting http requests", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url") + "angularAppdemo/");
  });

  it("asserts page layout after intercepting the request", () => {
    const angularPage = new AngularPage();
    const endpoint =
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty";

    cy.intercept(
      {
        method: "GET",
        url: endpoint,
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: "2301",
          },
        ],
      }
    ).as("bookRequest");

    angularPage.clickLibraryButton();
    cy.wait("@bookRequest");
    cy.get("p").should("have.text", "Oops only 1 Book available");
  });

  it("asserts table rows & request data", () => {
    const angularPage = new AngularPage();
    const endpoint =
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty";

    cy.intercept({
      method: "GET",
      url: endpoint,
    }).as("bookRequest");

    angularPage.clickLibraryButton();
    cy.wait("@bookRequest").then(({ request, response }) => {
      cy.VerifyTableRowsForGivenDataLength(response.body.length);
    });
  });

  it("asserts request status after changing initial request url", () => {
    const angularPage = new AngularPage();
    const endpoint =
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty";
    const endpointChange =
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=marko";

    cy.intercept("GET", endpoint, (req) => {
      req.url = endpointChange;

      req.continue((response) => {
        expect(response.statusCode).to.eq(404);
      });
    }).as("bookRequest");

    angularPage.clickLibraryButton();
    cy.wait("@bookRequest");
  });

  it('asserts an api"s behaviour', () => {
    const randomEndpoint = "https://uselessfacts.jsph.pl/random.json";
    const postEndpoint = "https://reqres.in/api/users";

    cy.request("GET", randomEndpoint).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.have.length(36).and.to.contain("-");
      expect(response.body.text).to.not.be.empty;
    });

    cy.request("POST", postEndpoint, {
      name: "Marko",
      job: "Automation Tester",
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.id).to.not.be.null;
      expect(response.body.createdAt).to.contain(2022);
      expect(response.body.name).to.eq("Marko");
      expect(response.body.job).to.eq("Automation Tester");
    });
  });
});
