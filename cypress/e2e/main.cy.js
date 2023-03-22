import Login from "../PageObjectModel/login-page"
import SignUp from "../PageObjectModel/SignupPage"
import WelcomePage from "../PageObjectModel/WelcomePage"
import HomePage from "../PageObjectModel/Homepage"
import AccountSettingsPage from "../PageObjectModel/AccountSettingsPage"
import BankAccountPage from "../PageObjectModel/BankAccountPage"

//slowCypressDown(1000)

const Signup = new SignUp()
const login = new Login()
const welcomepage= new WelcomePage()
const homepage = new HomePage()
const accountsettings = new AccountSettingsPage()
const bankaccount= new BankAccountPage()




// describe('Sign up page test', () => {
//     beforeEach(()=>{
//         Signup.navigate('http://localhost:3000')
//     })
//     it('SignupForm', () => {
//         Signup.Signup()
//         Signup.firstname('test')
//         Signup.lastname('user')
//         Signup.username('testuser877')
//         Signup.password('testuser532029')
//         Signup.ConfirmPassword('testuser532029')
//         Signup.Submit() 
//     })
//     })








// describe('Login and Getting started with bank account page test',()=>{
//     beforeEach(()=>{
//         login.navigate('http://localhost:3000')
//     })
//     it('Login Form',()=>{
//         login.username('testuser877')
//         login.password('testuser532029')
//         login.Signin()
//         cy.wait(1000)
    
//     //Handling a Window Pop UP or Prompt//
//     cy.window().then((p)=>{
//         cy.stub(p, "prompt").returns("Get Started with Real World App")
//         cy.get('[data-test="user-onboarding-next"]').click()
//         cy.contains('Create Bank Account')
//         welcomepage.BankName('Standard Chartered')
//         welcomepage.RoutingNumber('623812344')
//         welcomepage.AccountNumber('3467549023')
//         welcomepage.Save()
    
//     })
//     })

// })





describe('Home Page date and Amount filter test',()=>{
    before(()=> {
    cy.viewport(1320, 768);
    cy.login('testuser877', 'testuser532029');
  })
    it ('HomePage Date and Amount Filter Test',()=>{
        cy.loginSession;
        homepage.DateFilter()
        homepage.StartDate()
        homepage.EndDate()
        cy.wait(1500)
        homepage.ClearFilter()
        homepage.AmountFilter()
        homepage.MinAmount()
        cy.wait(1000)
        homepage.MaxAmount()
        homepage.CloseAmountFilter()
        cy.wait(1000)
        homepage.ClearAmount()
      
})
    it('Create a Transaction flow test',()=>{
        cy.loginSession;
        cy.wait(1500)
        homepage.CreateATransaction()
        cy.wait(1500)
        homepage.SearchUser('Arely Kertzmann')
        cy.get('[data-test="main"]').scrollIntoView()
        cy.wait(1500)
        homepage.SelectUser()
        homepage.EnterTransferAmount('4000')
        homepage.EnterNote('Loan Payment Purposes')
        cy.wait(1500)
        homepage.PayTheAmount()
        cy.wait(1500)
        homepage.CreateAnotherTransaction()
    })

    it('Likes and Comments functionality test',()=>{
        cy.loginSession;
        homepage.GoToHome()
        cy.wait(1500)
        homepage.OpenPostDetail()
        homepage.PostComment('comment section is working fine')
        homepage.LikeComment()

    })
 })

    describe('Account Settings module test',()=>{
    before(()=> {
    cy.viewport(1320, 768);
    cy.login('testuser877', 'testuser532029');
  })
    it('Account Settings page',()=>{
        cy.loginSession;
        cy.wait(1500)
        accountsettings.OpenAccountSettings()
        accountsettings.FirstName('test1')
        accountsettings.LastName('user1')
        accountsettings.Email('testuser@invozone.com')
        accountsettings.PhoneNo('03134787776')
        accountsettings.Submit()
   })
 })



describe('Bank Account Creation',()=>{
   
    before(()=> {
        cy.viewport(1320, 768);
        cy.login('testuser877', 'testuser532029');
      })
      it('Navigation from homepage to dashboard.', ()=> {
        cy.loginSession;
        cy.get('[data-test="sidenav-toggle"]').dblclick()
        cy.wait(1500)
        bankaccount.OpenBankAccountModule()
        cy.wait(1500)
        bankaccount.Create()
        bankaccount.EnterBankName('JS Bank')
        bankaccount.EnterRoutingNumber('623812344')
        bankaccount.EnterAccountNumber('3467549023')
        bankaccount.Save()
    
      })
})
