describe('Villager details user flows', () => {
  beforeEach(() => {
    cy.fixture('sampleVillagers').then((villagersData) => {
      cy.intercept('https://acnhapi.com/v1a/villagers/', villagersData);
    });
    cy.visit('http://localhost:3000/');
      cy.get('#140').click();
  });

  it('Should contain a photo and more details about the villager', () => {
    cy.get('.detail-photo').should('be.visible');
    cy.contains('Ketchup');
    cy.contains('July 27th');
    cy.contains('When in doubt, eat a tomato!');
  });

  it('Should have buttons to reject the villager, or add them to the wishlist', () => {
    cy.get('.details-back-btn').should('be.visible');
    cy.get('.add-wishlist-btn').should('be.visible');
  });
});
