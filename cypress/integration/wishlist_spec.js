describe('Wishlist user flows', () => {
  cy.fixture('sampleVillagers').then((villagersData) => {
    cy.intercept('https://acnhapi.com/v1a/villagers/', villagersData);
  cy.visit('http://localhost:3000/');
});
