/// <reference types="cypress" />

describe('Login', () => {
   
    beforeEach(() => {
        cy.visit('/')
    })

    
    it('Rejected Status', () => {
        cy.Login('Admin', 'admin123')
        cy.get('.oxd-userdropdown-tab').contains('a')
        cy.get('.oxd-main-menu-item').contains('Leave').click()
        cy.get('[class="oxd-select-text-input"]').eq(0).click({force: true})
        cy.get('[class="oxd-select-option"]').contains('Rejected').click()
        cy.get('[class="oxd-multiselect-chips-area"').contains('Rejected')
    });


})