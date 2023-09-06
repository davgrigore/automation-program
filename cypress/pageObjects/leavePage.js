class leavePage{

    getLeaveStatusList(){
        return cy.get('.oxd-multiselect-wrapper > .oxd-select-text')
    }

    getStatusFilter(){
        return cy.get('.oxd-multiselect-chips-area')
    }

}

export default leavePage;