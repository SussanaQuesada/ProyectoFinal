class InventoryPage{
    elements = {
        userName:()=> cy.get('#user-name'),
        password:()=> cy.get('#password'),
        loginBtn:()=> cy.get('#login-button'),
        inventoryList:()=> cy.get('.inventory_list'),  
        inventoryItem:()=> cy.get('.inventory_item'),

    }
}

module.exports = new InventoryPage()