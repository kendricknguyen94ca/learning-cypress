import HomePageLocators from "../locators/homePageLocators";

const xpathToTextField = new HomePageLocators().createLibraryTextField;
const xpathToButton = new HomePageLocators().createLibraryButton;
const xpathToDropdown = new HomePageLocators().createLibraryDropdown;

class HomePage {
    enterText(fieldName, textValue) {
        const textFieldWebElement = cy.getElementByCss(xpathToTextField(fieldName))
        cy.enterValueToTextField(textFieldWebElement, textValue);
    }

    selectStaticDropdown(fieldName, option) {
        const dropDownWebElement = cy.getElementByCss(xpathToDropdown(fieldName))
        cy.selectStaticDropdown(dropDownWebElement, option);
    }

    clickButton(fieldName) {
        const buttonWebElement = cy.getElementByCss(xpathToButton(fieldName))
        cy.clickToElement(buttonWebElement);
    }
}

export default HomePage;