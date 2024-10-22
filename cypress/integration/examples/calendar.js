/// <reference types="Cypress" />

// Define your test suite here
let currentYear;
describe('Calendar', () => {
    // Define your test case here
    it('Calendar', () => {
        // Access url
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        
        // Open calendar panel
        cy.get("button[class*='calendar-button']").click();

        const date = '10';
        const month = '04';
        const year = '2021';
        // Select year
        cy.get('.react-calendar__navigation__label').as('selectYearElement').click();
        const timeOut = 100;
        cy.get('@selectYearElement').find('span').then(($el) => {
            let currentYear = $el.text();
            for (let index = 0; index < timeOut; index++) {
                if (currentYear < year) {
                    cy.get('.react-calendar__navigation__next-button').click();
                    currentYear = parseInt(currentYear)+1;
                }
                else if (currentYear > year) {
                    cy.get('.react-calendar__navigation__prev-button').click();
                    currentYear = parseInt(currentYear)-1;
                }
                else if (currentYear === year)
                    break;
            }
        })

        // Select month
        cy.get('.react-calendar__year-view__months__month').eq(parseInt(month)-1).click();

        // Select day
        cy.get('.react-calendar__month-view__days__day').eq(parseInt(date)-1).click();
        
    })
})