const inventoryPage = require("../../pages/inventory-page")

describe("InventoryTest", () => {
   
   beforeEach( ()=> {
        cy.visit('https://www.saucedemo.com/')
        inventoryPage.elements.userName().type('standard_user')
        inventoryPage.elements.password().type('secret_sauce')
        inventoryPage.elements.loginBtn().click()      
    })

    it("InventoryTest1", ()=> {
        inventoryPage.elements.inventoryList().find('.inventory_item').should('have.length', 6)

    })


    
    before(() => {
        cy.fixture('inventory.json').then(function (inventory) {
            this.data = inventory
        })
    })
    
    it("inventoryTest2", ()=> {
        inventoryPage.elements.inventoryList().each((el, index, list) =>{
           
            inventoryPage.elements.inventoryList().find('.inventory_item').
           
            cy.wrap(el).get('.inventory_item_name').should('have.text','ALGO')
            
           
            

        } )


        }) 


   


})