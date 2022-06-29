const menuPage = require("../../pages/menu-page")

describe("MenuTest", () => {
   
    
  
    
    it("LoginTest", ()=> {
        cy.visit('https://www.saucedemo.com/')
        menuPage.elements.userName().type('standard_user')
        menuPage.elements.password().type('secret_sauce')
        menuPage.elements.loginBtn().click()      
    })
    
    before(() => {
        cy.fixture('menuOptions.json').then(function (menuOptions) {
            this.data = menuOptions
        })
    })

    it("menuTest1", ()=> {
        menuPage.elements.menuBtn().click()
        menuPage.elements.menuItenList().each((el, index, list) =>{
            console.log(el.text())
        } )
        menuPage.elements.exitMenuBtn().click()
    }) 
    
}) 



