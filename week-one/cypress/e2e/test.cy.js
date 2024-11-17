describe('Test Describe Block', () => {
    it('Lunch a web page', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
    })
})

context('Testing Context Block', () => {
    it('lunch another web page', () => {
        cy.visit('https://www.amazon.com')
    })
})

context('Testing Page Size', () => {
    it('lunch tymima web page', () => {
        cy.visit('https://staging.trymima.com/')
    })
})