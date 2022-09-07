describe('Test suit: Sign In', () => {
    context('sign in unsuccessfully', () => {
      it('TC1: not input password', () => {
        cy.visit('https://demo.realworld.io/#/')
        cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').click()
        cy.get(':nth-child(3) > .form-control').type('goldenowl2020')
        cy.get('.btn').click()
  
        cy.get('div.ng-scope > .ng-binding').should('have.text',"\n      email can't be blank\n    ")
      })
      it('TC2: not input email', () => {
        cy.visit('https://demo.realworld.io/#/')
        cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .form-control').type('kate.nguyen.goldenowl+02@gmail.com')
        cy.get('.btn').click()
  
        cy.get('div.ng-scope > .ng-binding').should('have.text',"\n      password can't be blank\n    ")
      })
      it('TC3: not input email & password', () => {
        cy.visit('https://demo.realworld.io/#/')
        cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').click()
        cy.get('.btn').click()
  
        cy.get('div.ng-scope > .ng-binding').should('have.text',"\n      email can't be blank\n    ")
      })
    })
    context('sign in ok', () => {
      it('TC4: sign in successfully', () => {
        cy.visit('https://demo.realworld.io/#/')
        cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .form-control').type('kate.nguyen.goldenowl@gmail.com')
        cy.get(':nth-child(3) > .form-control').type('goldenowl2020')
        cy.get('.btn').click()
  
        cy.get(':nth-child(4) > .nav-link').should('contain','kate01')
      })
    })
    
  })