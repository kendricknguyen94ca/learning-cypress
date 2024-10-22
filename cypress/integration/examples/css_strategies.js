/// <reference types="Cypress" />

// Define your test suite here
describe('Basic Cypress - CSS Strategies', () => {
    // Define your test case here
    it('Basic Cypress - CSS Strategies', () => {
        // Write your test step here
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        // Get element(s)
        cy.get('input.search-keyword').type('ca');
        cy.get('.product:visible').should('have.length',4);
        // Parent Child
        cy.get('.products').as('productsElement');
        cy.get('@productsElement').find('.product').should('have.length',4);
        // Select an item from a list of elements by its index
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        // Loop through a list of elements and find an item using an if-else condition
        cy.get('.products').find('.product').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            let productName = $el.find('.product-name').text();
            if (productName.includes('Carrot')) {
                // wrap this element so we can
                // use cypress commands on it
                cy.wrap($el).contains('ADD TO CART').click();

                // Solving asynchronous problem when using jQuery commands
                // Call a cypress commands & using .then(($el) => {
                //      Then write jQuery commands inside this code block
                // })
                cy.get('.brand').then(($el) => {
                    const logo = $el.text();
                    cy.log(logo);
                })
                // Cypress commands & Chai assertion will handle 
                // asynchronous automatically from the background
                cy.get('.brand').should('have.text', 'GREENKART');
                
                return false;
            } 
            else if (index === ($list.length-1) && !productName.includes('Carrot')) {
                throw new Error('No product found!');
            }
          })
    })
})