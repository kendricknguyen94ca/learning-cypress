/// <reference types="Cypress" />

import HomePage from "../pages/homePage";
// Cypress e2e framework tutorial
describe('Cypress Framework - Section 10, Section 11', function () {
    // Define your test case here
    it('Cypress e2e framework tutorial', function () {
        const homePage = new HomePage();
        // Visit url 'https://rahulshettyacademy.com/angularpractice'
        cy.clearAllCookies();
        cy.visit(Cypress.env("URL")+'/angularpractice/');

        // Enter name
        homePage.enterText("name", this.data.name);
        
        // Select gender
        homePage.selectStaticDropdown("gender", this.data.gender);

        // Validate name
        cy.getElementByCss(':nth-child(4) > .ng-untouched').should('have.value', this.data.name);
        cy.getElementByCss("[name='name']:nth-child(2)").should('have.attr', 'minlength', '2');
        cy.getElementByCss('#inlineRadio3').should('be.disabled');

        // Click Shop link
        homePage.clickButton("shop");

        // Select products
        const productLists = this.data.expectedProduct;
        productLists.forEach(product => {
            cy.selectProduct(product);
        });

        // Go to Checkout page & Verify total amount;
        cy.clickToElement(cy.getElementByText('Checkout'));
        var sum=0;
        cy.getElementByCss('tr td:nth-child(4) strong').as('productPrice').each(function($el) {
            const productPrice = $el.text().split(' ');
            sum += parseInt(productPrice[1]);
        }).then(function() {
            expect(sum).to.eq(115000);
        })

        // Proceed with Checkout
        cy.clickToElement(cy.getElementByText('Checkout'));

        // Select Country & check Agree checkbox
        cy.enterValueToTextField(cy.getElementByCss('#country'), 'India');
        cy.wait(6000);
        cy.getElementByCss('.suggestions li a').as('countryDropdownOption').each(function($el,index) {
            const countryDropdownText = $el.text();
            if (countryDropdownText.includes('India'))
                cy.getElementByCss('@countryDropdownOption').eq(index).click();
        })
        cy.clickToElement(cy.getElementByCss('#checkbox2'));
        cy.clickToElement(cy.getElementByText("Purchase"));
        cy.getElementByCss('.alert').then(function($el) {
            const actualMessage = $el.text();
            expect(actualMessage.includes("Success")).to.be.true;
        })
    })
})
