class adminPage{

    getMoreButton() {
        return cy.get('[class="oxd-topbar-body-nav-tab-item"]').contains("More")
    }

    getConfigurationButton() {
        return cy.get('[class="oxd-topbar-body-nav-tab-link --more"]').contains("Configuration")
    }

    getLanguagePackagesButton() {
        return cy.get('[class="oxd-topbar-body-nav-tab-accordian"]').contains("Language Packages")
    }

    getSpanishTranslateButton() {
        return cy.get(':nth-child(9) > .oxd-table-row > [style="flex: 1 1 30%;"] > .oxd-table-cell-actions > :nth-child(1)')
    }

}

export default adminPage;