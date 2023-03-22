class SignUp{
    navigate(url){
        cy.visit(url)
    }
    Signup(){
        cy.get('[data-test="signup"]')
        .click()
    }
    firstname (first){
        cy.get('#firstName')
        .type(first)
        return this
    }
    lastname (last){
        cy.get('#lastName')
        .type(last)
        return this
    }
    username (user){
        cy.get('#username')
        .type(user)
        return this
    }
    password (pass){
        cy.get('#password')
        .type(pass)
        return this
    }
    ConfirmPassword(ConfirmPass){
        cy.get('#confirmPassword')
        .type(ConfirmPass)
        return this
    }
    Submit(){
        cy.get('.MuiButton-label')
        .click()
    }
}
export default SignUp