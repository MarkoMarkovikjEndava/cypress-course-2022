/// <reference types="Cypress"/>

describe("connecting & asserting a database", () => {
  it("asserts the whole DB", () => {
    cy.task("dbQuery", { query: "select * from graduates" }).then((result) => {
      expect(result).to.have.length(4);
      expect(result[0].name).to.eq("Marko");
    });
  });
});
