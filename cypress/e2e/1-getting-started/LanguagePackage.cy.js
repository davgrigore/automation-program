/// <reference types="cypress" />

describe('Login', () => {
   
    beforeEach(() => {
        cy.visit('/')
    })

    
    it('Language Package', () => {
        cy.Login('Admin', 'admin123')
        cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').contains("Admin").click()
        cy.get('[class="oxd-topbar-body-nav-tab-item"]').contains("More").click()
        cy.get('[class="oxd-topbar-body-nav-tab-link --more"]').contains("Configuration").click()
        cy.get('[class="oxd-topbar-body-nav-tab-accordian"]').contains("Language Packages").click()
        cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div[3]/div/div[2]/div[8]/div/div[2]/div/button[1]').click()
        cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/admin/languageCustomization/7')
    });


})

