/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

// Define your test suite here
describe('Handling iFrame', () => {// Define your test case here
    it('Handle iFrame', () => {
        // Visit url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        // Load iFrame using frameLoaded('[iFrame css]')
        cy.frameLoaded('#courses-iframe');

        // Interact with iFrame using cy.iFrame()
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.wait(3000);
        cy.iframe().find("h1[class*='pricing-title']", { timeout: 3000}).should('have.length',2);
    })
})