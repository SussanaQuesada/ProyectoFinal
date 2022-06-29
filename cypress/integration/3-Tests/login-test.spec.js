const loginPage = require("../../pages/login-page")

describe("LoginTest", () => {
   
    beforeEach( () => {
        cy.visit('https://www.saucedemo.com/')
    })
    
    it("test1", ()=> {
            loginPage.elements.userName().type('standard_user')
            loginPage.elements.password().type('secret_sauce')
            loginPage.elements.loginBtn().click()
            loginPage.elements.title().should('have.text','Products')       
        })

        it("test2", ()=> {
            loginPage.elements.password().type('secret_sauce')
            loginPage.elements.loginBtn().click()
            loginPage.elements.menssageError().should('include.text', 'Epic sadface: Username is required')
        
        })

        it("test3", ()=> {
            loginPage.elements.userName().type('standard_user')
            loginPage.elements.loginBtn().click()
            loginPage.elements.menssageError().should('include.text', 'Epic sadface: Password is required')
        
        })


        it("test4", ()=> {
            loginPage.elements.userName().type('standard_user')
            loginPage.elements.password().type('secret_sauce123')
            loginPage.elements.loginBtn().click()
            loginPage.elements.menssageError().should('include.text', 'Epic sadface: Username and password do not match any user in this service')
       
        })





})