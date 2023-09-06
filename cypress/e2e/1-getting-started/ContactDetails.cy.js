/// <reference types="cypress" />

import homePage from '../../pageObjects/homePage';
import myInfoPage from '../../pageObjects/myInfoPage';

describe('Login', () => {
   
    beforeEach(() => {
        cy.visit('/')
    })

    
    it('Update Contact Details', () => {

const HomePage=new homePage()
const MyInfoPage=new myInfoPage()


        cy.Login('Admin', 'admin123')
        HomePage.getMyInfoButton().click()
        MyInfoPage.getContactDetailsButton().click({force:true})
        MyInfoPage.getStreet1Button().clear().type("street 1")
        MyInfoPage.getCountryList().click()
        cy.get('[class="oxd-select-option"]').each(($el,index, $list) => {
            if($el.text()==='Algeria'){
                cy.wrap($el).click()
            }
        })
        MyInfoPage.getCountryList().should('have.text', 'Algeria')
        MyInfoPage.getSaveButton().click({force: true})
        MyInfoPage.getToastTitle().should('have.text', 'Success')
        MyInfoPage.getToastText().should('have.text', 'Successfully Updated')

    });


})