const productoPage = require("../../pages/producto-page")

describe("ProductoTest", () => {
   
    it("Test1", ()=> {
        cy.visit('https://www.saucedemo.com/')
        productoPage.elements.userName().type('standard_user')
        productoPage.elements.password().type('secret_sauce')
        productoPage.elements.loginBtn().click()   
        productoPage.elements.productImg()
        productoPage.elements.detailsProductImg().click()
        productoPage.elements.detailsProduct()
        productoPage.elements.detailsProductPrice().should('have.text','$29.99')
        productoPage.elements.detailsProductName().should('have.text','Sauce Labs Backpack')
        productoPage.elements.exitDetailsProduct().click()
        productoPage.elements.title().should('have.text','Products')

    
    })


 })