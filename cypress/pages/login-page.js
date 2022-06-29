class LoginPage{
    elements = {
        userName:()=> cy.get('#user-name'),
        password:()=> cy.get('#password'),
        loginBtn:()=> cy.get('#login-button'),
        menssageError:()=> cy.get('h3'),
        title:()=> cy.get('.title'),
    }
}

module.exports = new LoginPage()