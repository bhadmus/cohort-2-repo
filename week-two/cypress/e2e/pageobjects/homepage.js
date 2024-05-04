class HomePage{
    clickAnyElement(element){
        cy.contains(element).click();
    }
}
export default new HomePage()