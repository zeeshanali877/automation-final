class BankAccountPage{

    navigate(url){
        cy.visit(url)
    }

    OpenBankAccountModule(){
        cy.get('[data-test="sidenav-bankaccounts"]')
        .click()
    }

    Create(){
        cy.get('[data-test="bankaccount-new"]')
        .click({force:true})
    }

    EnterBankName(bankname){
        cy.get('#bankaccount-bankName-input')
        .type(bankname)
    }

    EnterRoutingNumber(routingnnumber){
        cy.get('#bankaccount-routingNumber-input')
        .type(routingnnumber)
    }

    EnterAccountNumber(accountnumber){
        cy.get('#bankaccount-accountNumber-input')
        .type(accountnumber)
    }

    Save(){
        cy.get('[data-test="bankaccount-submit"]')
        .click()
    }
}
export default BankAccountPage