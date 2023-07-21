/// <reference types="cypress" />

describe('Login', () => {
   
    beforeEach(() => {
        cy.visit('/')
    })

    
    it('Update Contact Details', () => {
        cy.Login('Admin', 'admin123')
        cy.get('.oxd-main-menu-item').contains('My Info').click()
        cy.get('a[href="/web/index.php/pim/contactDetails/empNumber/7"]').click({force: true})
        cy.get('[class="oxd-input oxd-input--active"]').eq(1).clear().type("street 1")
        cy.get('[class="oxd-select-text oxd-select-text--active"]').click()
        cy.get('[class="oxd-select-dropdown --positon-bottom"]').contains('Algeria').click()
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"').click()
        cy.get('[class="oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text"]').contains("Success")
        cy.get('[class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]').contains("Successfully Updated")
    });


})