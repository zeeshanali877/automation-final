class Login{
    navigate(url){
        cy.visit(url)
    }
    username (username){
        cy.get('#username')
        .type(username)
        return this
    }
    password (pass){
        cy.get('#password')
        .type(pass)
        return this
    }
    Signin(){
        cy.get('[data-test="signin-submit"]')
        .click()
    }
}
export default Login