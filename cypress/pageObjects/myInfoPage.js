class myInfoPage{

  getContactDetailsButton() {
    return cy.get(':nth-child(2) > .orangehrm-tabs-item')
  }

  getStreet1Button() {
    return cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
  }

  getCountryList() {
    return cy.get('.oxd-select-text')
  }

  getSaveButton(){
    return cy.get('.oxd-form-actions > .oxd-button')
  }

  getToastTitle(){
    return cy.get('.oxd-text--toast-title')
  }

  getToastText(){
    return cy.get('.oxd-text--toast-message')
  }

}

export default myInfoPage;