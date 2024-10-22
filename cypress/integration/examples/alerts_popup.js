/// <reference types="Cypress" />

// Handling Alerts & Popup
describe('Alerts & Popup', () => {
    // Cypress auto accepts alert popup
    // You can use window:alert to fire an event to window popup
    it('Alerts', () => {
        // Visit url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        // Cypress auto accepts alert popup
            // Alert Popup
        cy.get('#alertbtn').click();

        // You can use window:alert to fire an event to window popup
        cy.on('window:alert', (str) => {
            // Chai assertion
            expect(str).to.eql('Hello , share this practice page and share your knowledge');
        })
    })

    // You can use window:confirm to fire an event to windown confirmation popup
    // Cypress will automatically accept confirm popup
    // Return false to cancel confirm popup
    it('Confirmation Alert', () => {
        // Visit url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        // Cypress auto accepts alert popup
            // Confim Popup
        cy.get('#confirmbtn').click();

        // You can use window:confirm to fire an event to windown confirmation popup
        // Cypress will automatically accept confirm popup
        cy.on('window:confirm', (str) => {
            // Chai assertion
            expect(str).to.eql('Hello , Are you sure you want to confirm?');
        })

        // Return false to cancel confirm popup
        cy.on('window:confirm', (str) => {
            // Chai assertion
            expect(str).to.eql('Hello , Are you sure you want to confirm?');
            return false;
        })
    })
})