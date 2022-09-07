// const { Context } = require("mocha")

describe('Test suit: Sign up', () => {
  context('sign up unsuccessfully', () => {
    it('TC1: not input username', () => {
      cy.visit('https://demo.realworld.io/#/')
      cy.get('[show-authed="false"] > :nth-child(3) > .nav-link').click()
      cy.get(':nth-child(2) > .form-control').type('kate.nguyen.goldenowl@gmail.com')
      cy.get(':nth-child(3) > .form-control').type('goldenowl2020')
      cy.get('.btn').click()

      cy.get('div.ng-scope > .ng-binding').should('have.text',"\n      username can't be blank\n    ")
    })
    it('TC2: not input email', () => {
      cy.visit('https://demo.realworld.io/#/')
      cy.get('[show-authed="false"] > :nth-child(3) > .nav-link').click()
      cy.get('input[placeholder="Username"]').type('kate')
      cy.get(':nth-child(3) > .form-control').type('goldenowl2020')
      cy.get('.btn').click()

      cy.get('div.ng-scope > .ng-binding').should('have.text',"\n      email can't be blank\n    ")
    })
    it('TC3: not input password', () => {
      cy.visit('https://demo.realworld.io/#/')
      cy.get('[show-authed="false"] > :nth-child(3) > .nav-link').click()
      cy.get('input[placeholder="Username"]').type('kate')
      cy.get(':nth-child(2) > .form-control').type('kate.nguyen.goldenowl@gmail.com')
      cy.get('.btn').click()

      cy.get('div.ng-scope > .ng-binding').should('have.text',"\n      password can't be blank\n    ")
    })
  })
  context('sign up ok', () => {
    it('TC5: sign up successfully', () => {
      cy.visit('https://demo.realworld.io/#/')
      cy.get('[show-authed="false"] > :nth-child(3) > .nav-link').click()
      cy.get('input[placeholder="Username"]').type('kate03')
      cy.get(':nth-child(2) > .form-control').type('kate.nguyen.goldenowl+03@gmail.com')
      cy.get(':nth-child(3) > .form-control').type('goldenowl2020')
      cy.get('.btn').click()

      cy.get(':nth-child(4) > .nav-link').should('contain','kate03')
    })
  })
  
})