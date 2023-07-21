/// <reference types="cypress" />

describe('Login', () => {


    it ('test', () => {
        cy.Login('Admin', 'admin123')
        cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').contains("My Info").click()
        cy.wait(3000)
        cy.get('[class="oxd-userdropdown-name"]').invoke('text').then((username1) => {
            cy.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[1]/div[1]/div[1]/h6').invoke('text').then((username2) => {
                if (username1.includes(username2)) {
                    cy.log("username ok")
                } else {
                    cy.log("username not ok")
                }
            })
        })
    })
   

})