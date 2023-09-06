/// <reference types="cypress" />

import homePage from '../../pageObjects/homePage';
import leavePage from '../../pageObjects/leavePage';

describe('Leave Page', () => {
   
    beforeEach(() => {
        cy.visit('/')
    })

    
    it('Rejected status records', () => {

const HomePage=new homePage()
const LeavePage=new leavePage()


        cy.Login('Admin', 'admin123')
        HomePage.getLeaveButton().click()
        cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        LeavePage.getLeaveStatusList().click()
        cy.get('.oxd-select-option').each(($el) => {
            if($el.text()==='Rejected'){
                cy.wrap($el).click()
            }
        })
        LeavePage.getStatusFilter().contains('Rejected')

        
        

    });


})