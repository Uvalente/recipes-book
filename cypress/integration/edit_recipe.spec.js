before(() => {
  cy.visit('/login')
  cy.get('input[name=email]').type('test@example.com')
  cy.get('input[name=password]').type('password{enter}')
})

after(() => {
  cy.contains('Sign Out').click()
})

describe('Edit', () => {
  it('can edit a recipe', () => {
    cy.contains(/starter|main course|dessert|drink|element/i).click({ force: true })
    cy.contains('Edit').click()
    cy.get('textarea').type(' Updated Instructions')
    cy.get('input[name=recipeName]').type(' Updated Title{enter}')
    cy.contains(/Updated Title/)
    cy.contains(/Updated Instructions/)
    cy.contains('Edit')
  })
})