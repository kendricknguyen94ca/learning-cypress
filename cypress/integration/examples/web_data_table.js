/// <reference types="Cypress" />

// Define your test suite here
describe('Handling web data table', () => {
    it('Handle web table', () => {
        // Visit url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        // Search column index by name
        cy.get("[name='courses']").as('coursesTable');
        cy.get('@coursesTable').find('th').as('coursesHeaderElements');
        // Search column index by header name
        cy.get('@coursesHeaderElements').each(($el, index, $list) => {
            const headerName = $el.text();

            if (headerName.includes('Course')) {
                // Get row index
                const colIndex = index + 1;
                // Search for row index by Course Name
                cy.get('@coursesTable').find('tr td:nth-child('+colIndex+')').as('coursesNamesElement')
                cy.get('@coursesNamesElement').each(($el, index, $list) => {
                    const courseName = $el.text();
                    
                    if (courseName.includes('Python Language')) {
                        // Because Price is next to Course, 
                        // we can use .next() to call its element.
                        // This is jQuery method, so use .then(function()) after
                        // and write verification code inside
                        cy.wrap($el).next().then((price) => {
                            const priceText = price.text();
                            expect(priceText).to.eql('25');
                        })

                        // Dynamic Solution: Search for Price colIndex
                        // Then use rowIndex and colIndex to target verifying data
                        const rowIndex = index+1;
                        // Search price with given information
                        // Search Price column index by header name
                        cy.get('@coursesHeaderElements').each(($el, index, $list) => {
                            const headerName = $el.text();

                            if (headerName === 'Price') {
                                // Get information using given rowIndex
                                cy.get('@coursesTable').find('tr:nth-child('+rowIndex+')').find('td:nth-child('+(index+1)+')').should('have.text', '25');

                                // End loop
                                return false;
                            }
                        })

                        // End loop
                        return false;
                    }
                })

                // End loop
                return false;
            }
        })
    })
})