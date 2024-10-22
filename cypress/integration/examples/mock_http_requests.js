/// <reference types='Cypress'/>

describe("Mock HTTP Responses", function() {
    it("Mock HTTP Responses for generating Stub Data to test edge Scenarios", function() {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com//Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"
                }
            ]
        }).as('bookretrieval');

        cy.get("button[class='btn btn-primary']").click();

        cy.wait('@bookretrieval').then(function ({request, response}) {
            cy.get('tbody tr').should('have.length', response.body.length);
        });
    });

    it("Intercepting HTTP request details to test Security Scenarios", function() {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept(
            'GET',
            'https://rahulshettyacademy.com//Library/GetBook.php?AuthorName=shetty',
            (req) => {
            req.url = 'https://rahulshettyacademy.com//Library/GetBook.php?AuthorName=khoa';

            req.continue((res) => {
                // expect(res.statusCode).to.be.eql(403);
            })
        }).as('dummyUrl');

        cy.get("button[class='btn btn-primary']").click();

        cy.wait('@dummyUrl');
    });

    it('Handling API call directly with out involving browser with cypress', function() {
        // cy.request(method, url, body);
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name":"Learn Appium Automation with Java",
            "isbn":"bcd",
            "aisle":"227",
            "author":"John foe"
        }).then((response) => {
            expect(response.status).to.be.eql(200);
        })
    })
})