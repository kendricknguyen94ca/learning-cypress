/// <reference types="Cypress" />

// Define your test suite here
describe('Checkbox - Dropdown - Mouse Hover', () => {
    // Checkbox
    it('Checkbox', () => {
        // Visit url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        // Get checkbox id and use check() to click checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        // Select multiple checkboxes
        cy.get("input[type='checkbox']").check(['option2', 'option3']).should('be.checked');
    })

    // Static dropdown
    it('Static dropdown', () => {
        // Visit url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        // Find dropdown then use select()
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');
    })

    // Dynamic dropdown
    it('Dynamic dropdown', () => {
        // Visit url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('#select-class-example').as('dynamicDropdownElement');
        const expectedOption = 'British Indian Ocean Territory';
        // Enter value to text field
        cy.get('@dynamicDropdownElement').find('input').type('india');
        // Loop through dropdownOption
        // then select option that match textfield input
        cy.get('.ui-menu-item div:visible').as('dropdownOptionElements');
        cy.get('@dropdownOptionElements').each(($el) => {
            let dropdownOptionValue = $el.text();
            if (dropdownOptionValue === expectedOption) {
                cy.wrap($el).click();
                return false;
            }
        })

        cy.get('@dynamicDropdownElement').find('input').should('have.value', expectedOption);
    })

    // Handle visible and invisible elements using Assertions
    it('Handle visible and invisible elements using Assertions', () => {
        // Visit url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('#hide-textbox').as('hideTextboxButton');
        cy.get('#show-textbox').as('showTextboxButton');
        cy.get('#displayed-text').as('showHideTextbox');
        
        // Hide textbox and verify
        cy.get('@hideTextboxButton').click()
        cy.get('@showHideTextbox').should('be.hidden');
        cy.get('@showHideTextbox').should('not.be.visible');

        // Hide textbox and verify
        cy.get('@showTextboxButton').click()
        cy.get('@showHideTextbox').should('not.be.hidden');
        cy.get('@showHideTextbox').should('be.visible');
    })

    // Mouse hover
    it('Mouse hover', () => {
        // Visit url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        // Invoke a jQuery action show() on mouse hover menu
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include','top')
    })
})