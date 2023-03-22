class WelcomePage{
    navigate(url){
        cy.visit(url)
    }
    GetStarted(){
    cy.get('[data-test="user-onboarding-next"] > .MuiButton-label')
    .click()
}
    BankName(bankname){
    cy.get('#bankaccount-bankName-input')
    .type(bankname)
    }

    RoutingNumber(routingnumber){
    cy.get('#bankaccount-routingNumber-input')
    .type(routingnumber)
    }

    AccountNumber(accountnumber){
    cy.get('#bankaccount-accountNumber-input')
    .type(accountnumber)
    }
    
    Save(){
    cy.get('[data-test="bankaccount-form"] > .MuiGrid-container > .MuiGrid-root')
    .click()
    }
}
export default WelcomePage