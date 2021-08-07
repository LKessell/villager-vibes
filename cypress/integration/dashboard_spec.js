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
});
