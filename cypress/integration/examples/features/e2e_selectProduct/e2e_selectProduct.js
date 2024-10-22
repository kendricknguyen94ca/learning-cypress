/// <reference types="Cypress" />
import HomePage from "/Users/khoa/Documents/Study/Cypress/Learning Cypress Automation/cypress/integration/pages/homePage";

const { Given, When, Then, Before, BeforeAll } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = new HomePage();

Given('user visit ECommercePage page', function() {
    cy.visit(Cypress.env("URL")+'/angularpractice/');
})

When('user add items to cart', function() {
    // Click Shop link
    homePage.clickButton("shop");

    // Select products
    const productLists = this.data.expectedProduct;
    productLists.forEach(product => {
        cy.selectProduct(product);
    });
})

Then('user go to checkout page and verify total amount', function() {
    // Go to Checkout page & Verify total amount;
    cy.clickToElement(cy.getElementByText('Checkout'));
    var sum=0;
    cy.getElementByCss('tr td:nth-child(4) strong').as('productPrice').each(function($el) {
        const productPrice = $el.text().split(' ');
        sum += parseInt(productPrice[1]);
    }).then(function() {
        expect(sum).to.eq(115000);
    })
}) 

// When user fill the form details
When('user fill the form details', function(table) {
    // Using dataTable in Cucumber
    table.hashes().forEach((row) => {
        // Enter name
        homePage.enterText("name", row.name);
    
        // Select gender
        homePage.selectStaticDropdown("gender", row.gender);
    })

    
})

Then('user validate the form behaviour', function() {
    // Validate name
    cy.getElementByCss(':nth-child(4) > .ng-untouched').should('have.value', this.data.name);
    cy.getElementByCss("[name='name']:nth-child(2)").should('have.attr', 'minlength', '2');
    cy.getElementByCss('#inlineRadio3').should('be.disabled');
}) 

Then('user select the Shop page', function() {
    // Click Shop link
    homePage.clickButton("shop");
}) 