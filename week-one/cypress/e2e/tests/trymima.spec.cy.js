import {faker} from '@faker-js/faker'
describe('template spec', () => {
  
  it.only('1st signup button', () => {
    cy.contains('Sign up').should('be.visible').click()
    const details = ['Osman Shire','Boluwaji', faker.internet.email({provider:'yopmail.com'}), faker.phone.number('+2348#########'), 'RC-9087']
    cy.get('input').each(($el, index)=>{
      cy.wrap($el).fill(details[index])
    })
  })

  it('2nd signup button', () => {
    cy.contains('Sign up and get 2 months free').should('be.visible').click()
    cy.get('.Login_logintext__p__wb-Oy span').then((elem)=>{
      expect(elem.length).to.be.greaterThan(0)
    })
    cy.get('.Login_logintext__p__wb-Oy span').invoke('text').then(value=>{
      expect(value).to.eq('Log in')
    })
    cy.get('#fullname').should('be.visible').type('Osman Shire')
    cy.get('#fullname').invoke('val').then(someText=>{
      expect(someText).to.eq('Osman Shire')
    })
    cy.get('#businessname').type('Boluwaji')
    cy.get('#businessemail').type('udeme2@yopmail.com')
    cy.get('#businessphonenumber').type('+234803578798')
    cy.get('#businessRegNum').type('RC-9087')
  })

})