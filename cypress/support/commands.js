// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


// Get element by css
Cypress.Commands.add('getElementByCss', (cssLocator) => { 
    return cy.get(cssLocator);
});

// Get element by contains text
Cypress.Commands.add('getElementByText', (textValue) => { 
    return cy.contains(textValue);
})

// Click to Element
Cypress.Commands.add('clickToElement', (webElement) => { 
    webElement.click({force: true});
})

// Enter value to Element
Cypress.Commands.add('enterValueToTextField', (webElement, textValue) => { 
    webElement.clear().type(textValue);
})

// Select option to static dropdown
Cypress.Commands.add('selectStaticDropdown', (webElement, option) => { 
    webElement.select(option);
})

// Add item to cart by name
Cypress.Commands.add('selectProduct', (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list)=>{
        if (productName.match($el.text().trim()))
            cy.get('button.btn.btn-info').eq(index).click();
    })
})

// Login using API Call
Cypress.Commands.add('loginByApi', (url,userName, userPassword) => {
    cy.request(
        "POST",
        url,
        {
            "userEmail": userName,
            "userPassword": userPassword
        }
    ).then(function (response) {
        expect(response.status).to.be.eql(200);
        Cypress.env('token', response.body.token);
    })
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })