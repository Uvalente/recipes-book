const imageUpload = "../fixtures/crab.png"

before (() => {
  cy.visit('/login')
  cy.get('input[name=email]').type('test@example.com')
  cy.get('input[name=password]').type('password{enter}')
})

after(() => {
  cy.contains('Sign Out').click()
})

describe('Recipe creation', () => {
  it('user is logged in', () => {
    cy.url().should('eq', 'http://localhost:3000/')
    cy.contains("Test's CookBook 101").should('exist')
  })

  it('create a recipe', () => {
    cy.contains('Add Recipe').click()

    cy.get('input[name=recipePicture]').attachFile(imageUpload);
    cy.get('textarea').type('Instructions')
    cy.get('select').first().select('Starter')

    cy.get('input[name=itemName]').type('Flour')
    cy.get('input[name=itemQuantity]').type('500')
    cy.get('select').last().select('Gr')
    cy.contains('+').click()

    cy.get('input[name=itemName]').last().type('Egg')
    cy.get('input[name=itemQuantity]').last().type('4')
    cy.get('select').last().select('Nº')

    cy.get('input[name=recipeName]').type('Crab{enter}')

    cy.url().should('not.include', '/new')
    cy.contains('Crab').should('exist')
    cy.contains('Starter').should('exist')
    cy.get('img').should('exist')
    cy.contains('Flour').should('exist')
    cy.contains('Gr').should('exist')
    cy.contains('4').should('exist')
  })

  it('can delete last ingredient field', () => {
    cy.contains('Add Recipe').click()
    cy.get('input[name=itemName]').type('first')
    cy.contains('+').click()
    cy.get('input[name=itemName]').last().type('second')
    cy.contains('+').click()
    cy.get('input[name=itemName]').last().type('third')
    cy.contains('-').click()
    cy.get('input[name=itemName]').last().should('have.value', 'second')
  })
})