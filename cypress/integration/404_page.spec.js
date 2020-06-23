describe('Display 404 page', () => {
  it('visiting a wrong url', () => {
    cy.visit('/login')
    cy.get('input[name=email]').type('test@example.com')
    cy.get('input[name=password]').type('password{enter}')
    cy.contains("Test's CookBook 101").should('exist')
    cy.visit('/wrongpage')
    cy.contains("404")
    cy.contains('Page not found')
    cy.contains('Sign Out').click()
  })
})