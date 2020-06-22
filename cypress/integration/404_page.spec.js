describe('Display 404 page', () => {
  it('visiting a wrong url', () => {
    cy.visit('/wrongpage')
    cy.contains("404")
    cy.contains('Page not found')
  })
})