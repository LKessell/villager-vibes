describe('Wishlist user flows', () => {
  beforeEach(() => {
    cy.fixture('sampleVillagers').then((villagersData) => {
      cy.intercept('https://acnhapi.com/v1a/villagers/', villagersData);
    });
    cy.visit('http://localhost:3000/');
  });

  it('Should be able to add multiple villagers to the wishlist', () => {
    cy.get('#155').click();
    cy.get('.add-wishlist-btn').click();
    cy.get('.nav-home').click();
    cy.get('#140').click();
    cy.get('.add-wishlist-btn').click();
    cy.contains('The Top 10');
    cy.get('#155').should('be.visible');
    cy.get('#140').should('be.visible');
    cy.get('#384').should('not.exist');
  });
});
