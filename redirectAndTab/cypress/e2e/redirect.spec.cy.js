describe('template spec', () => {
  it('test redirect', () => {
    cy.visit('/')
    cy.get('a[href="http://elementalselenium.com/"]')
    .should('be.visible').invoke('removeAttr',  'target').click()
    cy.origin('https://elementalselenium.com/', ()=>{
      cy.get('#email').should('be.visible').type('email@redirect.class')
      cy.get('select#options').select('Ruby')
    })
  })
})