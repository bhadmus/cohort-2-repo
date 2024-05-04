let details
let data
describe('Login Journey', () => {
    before(() => {
        cy.fixture('creds').then(cred => {
            details = cred
        })
        cy.fixture('selectors').then(sel => {
            data = sel.otherDetailsPage
        })
    })
    // it('valid login test', () => {
    //     cy.clickSpecifiedElement('Log in')
    //     cy.get(data.emailField).fill(details.email)
    //     cy.get(data.passwordField).fill(details.password)
    //     cy.clickSpecifiedElement('Login')
    //     cy.contains('Select a Plan').should('be.visible')
    // })
    it.only('same site origin iframe', () => {
        cy.get('[href="/ingredients/iframe"]').should('be.visible').click()
        cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#fruits-vegetables').should('be.visible')
        })
    })

    it('cross-origin iframe', () => {
        cy.get('[href="/ingredients/iframe"]').should('be.visible').click()
        cy.get('#youtube-table-cypress').should('exist').wait(2000)
        cy.get('#youtube-table-cypress').checkiframeStatus()
        .find('.ytp-cued-thumbnail-overlay-image').should('exist')
    })
})