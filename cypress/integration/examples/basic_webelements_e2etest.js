/// <reference types="Cypress" />

// Define your test suite here
describe('Section 6', () => {
    // Define your test case here
    it('Section 6 - E2E Place Order', () => {
        // Visit url 'https://rahulshettyacademy.com/seleniumPractise/#/'
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Verify brand name is GREENKART
        cy.get('.brand').should('have.text', 'GREENKART');

        // Search items contains letter "ca"
        cy.get('input.search-keyword').type('ca');

        cy.get('.products').as('productsElement');
        cy.get('@productsElement').find('.product').as('productElements')
        // Then Verify there are 4 items apprear
        cy.get('@productsElement').find('.product').should('have.length',4);

        // Select the 3rd item on the list
        cy.get('@productElements').eq(2).contains('ADD TO CART').click();

        // Select an item with a name "Carrot"
        cy.get('@productElements').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            let productName = $el.find('.product-name').text();
            if (productName.includes('Carrot')) {
                // wrap this element so we can
                // use cypress commands on it
                cy.wrap($el).contains('ADD TO CART').click();
                return false;
            } 
            else if (index === ($list.length-1) && !productName.includes('Carrot')) {
                throw new Error('No product found!');
            }
        })

        // Verify cart count is 2
        cy.get('.cart-icon').find('.cart-count').as('cartCountElement');
        cy.get('@cartCountElement').should('have.text', 2)

        // Open cart and check added items
        cy.get('.cart-icon').click();

        cy.get('.cart-items').as('cartElement');
        cy.get('.cart-items').find('.cart-item:visible').as('cartItemElements');
        const expectedItem = ['Capsicum', 'Carrot'];
        // Verify added item in cart
        cy.get('@cartItemElements').each(($el, index, $list) => {
            cy.wrap($el.find('.product-name')).should('contain.text', expectedItem[index]);
        })

        // Proceed to checkout and Place Order
        cy.get('.cart-preview').contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    })
})