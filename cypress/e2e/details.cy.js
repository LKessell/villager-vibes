describe("Villager details user flows", () => {
  beforeEach(() => {
    cy.fixture("sampleVillagers").then((villagersData) => {
      cy.intercept("https://acnhapi.com/v1a/villagers/", villagersData);
    });
    cy.visit("http://localhost:3000/");
    cy.get("#140").click();
  });

  it("Should contain a photo and more details about the villager", () => {
    cy.get(".detail-photo").should("be.visible");
    cy.contains("Ketchup");
    cy.contains("July 27th");
    cy.contains("When in doubt, eat a tomato!");
  });

  it("Should have buttons to reject the villager, or add them to the wishlist", () => {
    cy.get(".details-back-btn").should("be.visible");
    cy.get(".add-wishlist-btn").should("be.visible");
  });

  it("Should return to the dashboard after clicking the rejection button", () => {
    cy.url().should("include", "/villagers/140");
    cy.get(".details-back-btn").click();
    cy.url().should("not.include", "/villagers/140");
  });

  it("Should show an error message if an invalid url is entered", () => {
    cy.visit("http://localhost:3000/villagers/900");
    cy.contains("Sorry, this page does not exist!");
    cy.visit("http://localhost:3000/villager/Ketchup");
    cy.contains("Sorry, this page does not exist!");
    cy.visit("http://localhost:3000/djksfhkjd");
    cy.contains("Sorry, this page does not exist!");
  });

  it("Can click the FAVE button to add the current villager to the wishlist and move to the wishlist page", () => {
    cy.get(".add-wishlist-btn").click();
    cy.url().should("include", "/wishlist");
    cy.get("#140").should("be.visible");
  });
});
