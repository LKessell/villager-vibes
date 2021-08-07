describe('Testing Environment', () => {
  it('Should expect true to be true', () => {
    expect(true).to.equal(true);
  });
});

describe('Dashboard user flows', () => {
  beforeEach(() => {
    cy.fixture('sampleVillagers').then((villagersData) => {
      cy.intercept('https://acnhapi.com/v1a/villagers/', villagersData);
    });
  });

  it('Should be able to visit http://localhost:3000/', () => {
    cy.visit('http://localhost:3000/').contains('Villager Vibes');
  });

  it('Should show a list of villager icons on the dashboard', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#155').should('be.visible');
    cy.get('#384').should('be.visible');
    cy.get('#140').should('be.visible');
  });

  it('Should have navigation links for the Home and Wishlist pages', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.nav-home').should('be.visible');
    cy.get('.nav-wishlist').should('be.visible');
  });

  it('Navigation link styling should reflect the current page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.nav-home').should('have.class', 'active');
    cy.get('.nav-wishlist').should('not.have.class', 'active');
  });

  it('Should contain a list of filters for villager species', () => {
    cy.visit('http://localhost:3000/');
    cy.get('label').contains('All Villagers');
    cy.get('#Duck').should('exist');
    cy.get('label').contains('Duck');
  });

  it('Should filter displayed villagers when a species bubble is clicked', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#140').should('be.visible');
    cy.contains('Wolf').click();
    cy.get('#384').should('be.visible');
    cy.get('#140').should('not.exist');
  });

  it('Can click "All Villagers" filter to show full list of villagers', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#140').should('be.visible');
    cy.contains('Wolf').click();
    cy.get('#384').should('be.visible');
    cy.get('#140').should('not.exist');
    cy.contains('All Villagers').click();
    cy.get('#140').should('be.visible');
    cy.get('#155').should('be.visible');
  });

  it('Can click a villager icon to move to the details page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#140').click();
    cy.url().should('include', '/villagers/140');
  });

  it('Can navigate to the dashboard using the Home link or browser back button', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#140').click();
    cy.url().should('include', '/villagers/140');
    cy.get('.nav-home').click();
    cy.url().should('not.include', '/villagers/140');
    cy.get('#140').click();
    cy.url().should('include', '/villagers/140');
    cy.go('back');
    cy.url().should('not.include', '/villagers/140');
  });
});
