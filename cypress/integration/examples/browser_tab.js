/// <reference types="Cypress" />

describe('Handling new windows tab', () => {
    // Find linkTag element and invoke a jQuery to remove target attribute
    // And get the linkTag button to open url in current tab
    it('Using invoke to removeAttr target in linkTag element', () => {
        // Visit url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        // Set origin url to the new one for cypress to handle its elements
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get('#about-page h2').should('have.text', 'Welcome to QAClick Academy ');
        })
    })

    // Use jQuery method prop() to get href value from linkTag
    // Then visit url using cy.visit()
    it('Using prop() to copy url from href from linkTag element', () => {
        // Visit url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('#opentab').then(($el) => {
            const url = $el.prop('href');
            cy.visit(url);
            // Set origin url to the new one for cypress to handle its elements
            cy.origin(url, () => {
                cy.get("#navbarSupportedContent a[href*='about']").click();
                cy.get('#about-page h2').should('have.text', 'Welcome to QAClick Academy ');
            })
        });
    })
})