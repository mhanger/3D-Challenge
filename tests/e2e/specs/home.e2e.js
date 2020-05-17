describe('Home Page', () => {
  it('has the correct title and heading', () => {
    cy.visit('/')
    cy.title().should('equal', '3D Challenge | Vue and Three')
    cy.contains('h1', '3D Challenge')
  })

  it("scene exists", () => {
    cy.get('.scene').should('exist');
  });
  it("swatches container exists", () => {
    cy.get('.swatches-container').should('exist');
  });

})
