Cypress.Commands.add('clickSpecifiedElement', (element) => { 
    cy.contains(element).should('be.visible').and('exist').click()
})