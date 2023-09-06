class leavePage{

    getLeaveStatusList(){
        return cy.get('.oxd-multiselect-wrapper > .oxd-select-text')
    }

    getStatusFilter(){
        return cy.get('.oxd-multiselect-chips-area')
    }

    getLeaveRequestOptions(){
        return cy.get('[class="oxd-icon bi-three-dots-vertical"]').eq(1)
    }

    getAddCommentBuuton(){
        return cy.get('.oxd-dropdown-menu > :nth-child(1)')
    }

    getCommentTextArea(){
        return cy.get('.oxd-textarea')
    }

    getSaveCommentButton(){
        return cy.get('.oxd-sheet > .oxd-form > .oxd-form-actions > .oxd-button--secondary')
    }

    getToastTitle(){
        return cy.get('.oxd-text--toast-title')
      }
    
      getToastText(){
        return cy.get('.oxd-text--toast-message')
      }
}

export default leavePage;


