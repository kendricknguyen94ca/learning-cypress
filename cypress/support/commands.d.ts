declare namespace Cypress {
    interface Chainable<Subject> {    
      /**
       * Get element by css locator
       *
       * @param {string} cssLocator
       * @example
       *    cy.getElementByCss(cssLocator)
       *
       */
      getElementByCss(cssLocator: string): Chainable<any>
      /**
       * Get element by text value
       *
       * @param {string} textValue
       * @example
       *    cy.getElementByText(cssLocator)
       *
       */
      getElementByText(textValue: string): Chainable<any>
      /**
       * Click to a web element
       *
       * @param {webElement} webElement
       * @example
       *    cy.clickToElement(webElement)
       *
       */
      clickToElement(webElement: Cypress.Chainable): Chainable<any>
      /**
       * Enter text to a web element
       *
       * @param {webElement} webElement
       * @param {string} textValue
       * @example
       *    cy.enterValueToTextField(webElement, textValue)
       *
       */
      enterValueToTextField(webElement: Cypress.Chainable, textValue: string): Chainable<any>
      /**
       * Select an option from a static dropdown
       *
       * @param {webElement} webElement
       * @param {string} option
       * @example
       *    cy.enterValueToTextField(webElement, textValue)
       *
       */
      selectStaticDropdown(webElement: Cypress.Chainable, option: string): Chainable<any>
      /**
       * Select product by productName
       *
       * @param {string} productName to select
       * @example
       *    cy.selectProduct(productName)
       *
       */
      selectProduct(productName: string): Chainable<any>
      /**
       * Login using API
       *
       * @param {string} url
       * @param {string} userName
       * @param {string} userPassword
       * @returns {string} loginToken
       * @example
       *    cy.loginByApi(url, username, userPassword)
       *
       */
      loginByApi(): Chainable<any>
    }
  }  