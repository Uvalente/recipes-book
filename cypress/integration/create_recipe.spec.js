const imageUpload = "../fixtures/crab.png"

describe('Recipe creation', () => {
  it('user can log in and create a recipe', () => {
    cy.visit('/login')
    cy.get('input[name=email]').type('test@example.com')
    cy.get('input[name=password').type('password{enter}')
    cy.url().should('eq', 'http://localhost:3000/')
    cy.contains('Test recipe book').should('exist')
    cy.contains('Add Recipe').click()
    cy.get('input[name=recipePicture').attachFile(imageUpload);
    cy.get('textarea').type('Instructions')
    cy.get('select').select('Starter')
    cy.get('input[name=recipeName]').type('Crab{enter}')
    cy.url().should('eq', 'http://localhost:3000/')
    cy.contains('Crab').should('exist')
    cy.contains('Starter').should('exist')
    cy.contains('Crab').click()
    cy.get('img').should('exist')
  })
})