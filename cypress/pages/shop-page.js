class ShopPage{
    elements = {
        userName:()=> cy.get('#user-name'),
        password:()=> cy.get('#password'),
        loginBtn:()=> cy.get('#login-button'),
        addToCartArt1:()=> cy.get('#add-to-cart-sauce-labs-backpack'),
        removeCart:()=> cy.get('#remove-sauce-labs-backpack'),
        cartBtn:()=> cy.get('.shopping_cart_link'), 
        removeCartBtn:()=> cy.get('#remove-sauce-labs-backpack'),
        addToCartArt2:()=> cy.get('#add-to-cart-sauce-labs-bike-light'),
        addToCartArt3:()=> cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
        shoppingCartBadge:()=> cy.get('.shopping_cart_badge'),
        checkoutBtn:()=> cy.get('#checkout'),
        fistName:()=> cy.get('#first-name'),
        lastName:()=> cy.get('#last-name'),
        postalCode:()=> cy.get('#postal-code'),
        continueBtn:()=> cy.get('#continue'),
        finishBtn:()=> cy.get('#finish'),

    }
}

module.exports = new ShopPage()

