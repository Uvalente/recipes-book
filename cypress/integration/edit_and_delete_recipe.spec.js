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
    cy.contains(/crab/i).click({ force: true })
    cy.contains('Edit').click()
    cy.get('textarea').type(' Updated Instructions')
    cy.get('input[name=recipeName]').type(' Updated Title{enter}')
    cy.contains(/Updated Title/)
    cy.contains(/Updated Instructions/)
    cy.contains('Edit')
  })
})

describe('Delete', () => {
  it('can delete a recipe', () => {
    cy.contains('Delete').click()
    // cy.contains('Ok').click()
    cy.url().should('not.contain', 'recipes')
  })
})