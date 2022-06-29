class MenuPage{
    elements = {
        userName:()=> cy.get('#user-name'),
        password:()=> cy.get('#password'),
        loginBtn:()=> cy.get('#login-button'),
        menuBtn:()=> cy.get('#react-burger-menu-btn'),
        menuItenList:()=> cy.get('.bm-item-list a'),  
        exitMenuBtn:()=> cy.get('#react-burger-cross-btn'),
        



    }
}

module.exports = new MenuPage()