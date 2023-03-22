before(()=> {
  //Setting up viewport size
  cy.viewport(1320, 768);
  //Login using valid credentials
  // Beta Creds
  // cy.login('mad-max@getnada.com', 'Max@12345');
  // Dev Creds
  cy.login('testuser877', 'testuser532029');
})
it('Navigation from homepage to dashboard.', ()=> {
  cy.loginSession;
  cy.wait(2000);
  HomeObj.gotoDashboard();
  console.log("test")
})