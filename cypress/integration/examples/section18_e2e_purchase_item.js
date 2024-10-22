/// <reference types='Cypress'/>
import neatCSV from 'neat-csv';

describe("Section 18: E2E Purchase Item", function() {
    it("Section 18: E2E Purchase Item", async function() {
        // Login using API
        cy.loginByApi(Cypress.env('loginApiUrl'), Cypress.env('userEmail'), Cypress.env('userPass'))
            .then(function() {
                cy.visit("https://rahulshettyacademy.com/client",
                {
                    onBeforeLoad: function(window) {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                });
            }
        )
        // Select product
        cy.get(".card-body button:last-of-type").eq(0).click();
        // Open Cart
        cy.get("button[routerlink*='cart']").click();
        // Click Checkout
        cy.contains("Checkout").click();
        // Select Country
        cy.get('.user__address input').type('ind');
        cy.get(".ta-results button").each(($el) => {
            let currentCountry = $el.text();
            if(currentCountry.trim() === 'India'){
                cy.wrap($el).click();
                return false;
            }
        })
        // Click Place Order
        cy.get('.action__submit').click();
        // Download CSV file
        cy.wait(2000)
        cy.contains("Click To Download Order Details in CSV").click();
        // Read CSV file
        const fileServerFolderPath = Cypress.config("fileServerFolder");
        cy.readFile(fileServerFolderPath+"/cypress/downloads/order-invoice_khoa.ngp.csv")
            .then(async(text) => {
                const csv = await neatCSV(text);
                const actualProductCSV = csv[0]["Product Name"];
                expect("ZARA COAT 3").to.equal(actualProductCSV);
            }); 
    })
})