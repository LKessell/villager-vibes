describe('Wishlist user flows', () => {
  beforeEach(() => {
    cy.fixture('sampleVillagers').then((villagersData) => {
      cy.intercept('https://acnhapi.com/v1a/villagers/', villagersData);
    });
    cy.visit('http://localhost:3000/');
  });
});
