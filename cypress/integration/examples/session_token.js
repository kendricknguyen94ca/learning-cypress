/// <reference types='Cypress'/>

describe("Make Login API Calls to extract the response token and save in window Local Storage", function() {
    it("Make Login API Calls to extract the response token and save in window Local Storage", function() {
        cy.loginByApi(
            "https://rahulshettyacademy.com/api/ecom/auth/login",
            "khoa.ngp@yopmail.com",
            "lM#b05zh!mF0M7sH")
            .then(function() {
                cy.visit("https://rahulshettyacademy.com/client",
                {
                    onBeforeLoad: function(window) {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                });
            })
    })
})