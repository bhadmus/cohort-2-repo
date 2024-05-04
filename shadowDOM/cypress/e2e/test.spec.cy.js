describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  it('test shadowDOM', () => {
    cy.contains('Shadow DOM').should('be.visible').click()
    cy.get('shadow-signup-form').should('be.visible')
    .shadow().find('[name="username"]').should('exist').type('Azeez Dindey')
    cy.get('shadow-signup-form').should('be.visible')
    .shadow().find('[name="email"]').should('exist').type('azeez.dindey@yopmail.com')
    cy.get('shadow-signup-form').should('be.visible')
    .shadow().find('[name="password"]').should('exist').type('Test@1234')
    cy.get('shadow-signup-form').should('be.visible')
    .shadow().find('[name="confirm_password"]').should('exist').type('Test@1234')
    cy.get('shadow-signup-form').should('be.visible')
    .shadow().find('button').should('exist').click()
  })

  it.only('fileupload Test', () => {
    cy.contains('Upload File Demo').should('be.visible').click()
    cy.get('input[type="file"]').should('exist').selectFile('cypress/fixtures/example.png')
    
  })
})