describe('Wishlist user flows', () => {
  beforeEach(() => {
    cy.fixture('sampleVillagers').then((villagersData) => {
      cy.intercept('https://acnhapi.com/v1a/villagers/', villagersData);
    });
    cy.visit('http://localhost:3000/');
  });

  it('Should show a message if the wishlist is empty', () => {
    cy.get('.nav-wishlist').click();
    cy.contains('You haven\'t added any villagers yet!');
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

  it('Cannot add duplicate villagers', () => {
    cy.get('#155').click();
    cy.get('.add-wishlist-btn').click();
    cy.get('#155').should('be.visible');
    cy.get('.nav-home').click();
    cy.get('#155').click();
    cy.get('.add-wishlist-btn').click();
    cy.get('img').should('have.length', 2);
  });

  it('Wishlist nav link is active', () => {
    cy.get('#155').click();
    cy.get('.add-wishlist-btn').click();
    cy.get('.nav-wishlist').should('have.class', 'active');
  });

  it('Wishlist nav link is functional', () => {
    cy.get('.wishlist-title').should('not.exist');
    cy.get('.nav-wishlist').click();
    cy.get('.wishlist-title').should('be.visible');
  });

  it('Should have a remove button for villagers on the wishlist', () => {
    cy.get('#140').click();
    cy.get('.add-wishlist-btn').click();
    cy.get('#rem-140').should('be.visible');
  });

  it('Can remove a villager from the wishlist by clicking the remove button', () => {
    cy.get('#155').click();
    cy.get('.add-wishlist-btn').click();
    cy.get('.nav-home').click();
    cy.get('#140').click();
    cy.get('.add-wishlist-btn').click();
    cy.get('#155').should('be.visible');
    cy.get('#rem-155').click();
    cy.get('#155').should('not.exist');
  });
});
