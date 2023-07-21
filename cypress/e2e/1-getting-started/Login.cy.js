/// <reference types="cypress" />

describe('Login', () => {
   
    beforeEach(() => {
        cy.visit('/')
    })
    it('login with invalid credentials', () => {
        cy.Login('Admin1', 'admin123')
        cy.get('[role="alert"]').should('be.visible').contains ("Invalid credentials")
    })

    
    it('login with valid credentials', () => {
        cy.Login('Admin', 'admin123')
    });
})