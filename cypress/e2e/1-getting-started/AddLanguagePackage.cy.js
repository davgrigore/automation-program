/// <reference types="cypress" />

describe('Login', () => {
   
    beforeEach(() => {
        cy.visit('/')
    })

    
    it('Update Contact Details', () => {
        cy.Login('Admin', 'admin123')
        cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').contains("Admin").click()
        cy.get('[class="oxd-topbar-body-nav-tab-item"]').contains("More").click()
        cy.get('[class="oxd-topbar-body-nav-tab-link --more"]').contains("Configuration").click()
        cy.get('[class="oxd-topbar-body-nav-tab-accordian"]').contains("Language Packages").click()
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div[1]/div/button').click()
        cy.get('.oxd-select-text--after').click()
        cy.get('.oxd-select-option').contains("Akan").click()
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').contains("Save").click()
        cy.get('[class="oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text"]').contains("Success")
        cy.get('[class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]').contains("Successfully Saved")
    });


})

