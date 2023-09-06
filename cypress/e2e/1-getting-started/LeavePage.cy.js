/// <reference types="cypress" />

import homePage from '../../pageObjects/homePage';
import leavePage from '../../pageObjects/leavePage';

describe('Leave Page', () => {
    const HomePage=new homePage()
    const LeavePage=new leavePage()

    
    it('Rejected status records', () => {


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


    it.only('Add a comment for a leave request', () => {

        cy.Login('Admin', 'admin123')
        HomePage.getLeaveButton().click()
        LeavePage.getLeaveRequestOptions().click({force: true})
        LeavePage.getAddCommentBuuton().click()
        LeavePage.getCommentTextArea().type('test')
        LeavePage.getSaveCommentButton().click()
        LeavePage.getToastTitle().should('have.text', 'Success')
        LeavePage.getToastText().should('have.text', 'Successfully Saved')

    })


})