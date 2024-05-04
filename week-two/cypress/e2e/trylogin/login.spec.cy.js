let details
let data
describe('Login Journey', () => {
    before(() => {
        cy.fixture('creds').then(cred => {
            details = cred
        })
        cy.fixture('selectors').then(sel=>{
            data = sel.otherDetailsPage
        })
    })
    it('valid login test', () => {
        cy.clickSpecifiedElement('Log in')
        cy.get(data.emailField).fill(details.email)
        cy.get(data.passwordField).fill(details.password)
        cy.clickSpecifiedElement('Login')
        cy.contains('Select a Plan').should('be.visible')
    })
})