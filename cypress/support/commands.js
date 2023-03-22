Cypress.Commands.add('login', (email, password)=> {
    cy.session("loginSession", () => {
        cy.visit('http://localhost:3000')
        cy.wait(1000);
        cy.get('#username').type(email);
        cy.wait(1000);
        cy.get('#password').type(password);
        cy.wait(1000);
        cy.get('[data-test="signin-submit"]').click();
        cy.wait(2000);
        cy.url().should('contain', '/')
    })
})