class homePage{

    getAdminButton(){
        return cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text')
    }

    getMyInfoButton(){
        return cy.get(':nth-child(6) > .oxd-main-menu-item')
    }

    getLeaveButton() {
        return cy.get(':nth-child(3) > .oxd-main-menu-item')
    }

}

export default homePage;