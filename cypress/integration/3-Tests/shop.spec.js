const shopPage = require("../../pages/shop-page")

describe("ShopTest", () => {


    beforeEach( () => {
        cy.visit('https://www.saucedemo.com/')
        shopPage.elements.userName().type('standard_user')
        shopPage.elements.password().type('secret_sauce')
        shopPage.elements.loginBtn().click() 
    })


    it("Test1", ()=> {
        shopPage.elements.addToCartArt1().click()
        shopPage.elements.removeCart().click()
    })


    it("Test2", ()=> {
        shopPage.elements.addToCartArt1().click()
        shopPage.elements.cartBtn().click()
        shopPage.elements.removeCartBtn().click()

    })


    it("Test3", ()=> {
        shopPage.elements.addToCartArt1().click()
        shopPage.elements.addToCartArt2().click()
        shopPage.elements.addToCartArt3().click()
        shopPage.elements.shoppingCartBadge().should('be.visible')
    })

    it("Test4", ()=> {
        shopPage.elements.addToCartArt1().click()
        shopPage.elements.cartBtn().click()
        shopPage.elements.checkoutBtn().click()
        shopPage.elements.fistName().type('Maria')
        shopPage.elements.lastName().type('Quesada')
        shopPage.elements.postalCode().type('303529')
        shopPage.elements.continueBtn().click()
        shopPage.elements.finishBtn().click()

    })



})