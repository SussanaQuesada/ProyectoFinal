class ProductoPage{
    elements = {
        userName:()=> cy.get('#user-name'),
        password:()=> cy.get('#password'),
        loginBtn:()=> cy.get('#login-button'),
        productImg:()=> cy.get ('.inventory_item_img'),
        detailsProduct:()=> cy.get('.inventory_details_desc_container'),
        detailsProductName:()=> cy.get('.inventory_details_name'),
        detailsProductPrice:()=> cy.get('.inventory_details_price'),
        detailsProductImg:()=> cy.get('#item_4_img_link'),
        exitDetailsProduct:()=> cy.get('#back-to-products'), 
        title:()=> cy.get('.title')
    }
}


module.exports = new ProductoPage()