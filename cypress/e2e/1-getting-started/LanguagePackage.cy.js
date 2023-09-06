/// <reference types="cypress" />

import homePage from '../../pageObjects/homePage';
import adminPage from '../../pageObjects/adminPage';


describe('Login', () => {
   

    
    it('Language Package', () => {

const HomePage=new homePage()
const AdminPage=new adminPage()

        cy.Login('Admin', 'admin123')
        HomePage.getAdminButton().click()
        cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        AdminPage.getMoreButton().click()
        AdminPage.getConfigurationButton().click()
        AdminPage.getLanguagePackagesButton().click()
        AdminPage.getSpanishTranslateButton().click()
        cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/admin/languageCustomization/7')
    });


})

