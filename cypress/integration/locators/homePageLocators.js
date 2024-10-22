
class HomePageLocators {
    createLibraryTextField(fieldName) {
        const xpathToTextField = new Map([
            ["name", "[name='name']:nth-child(2)"]
        ]);
        return xpathToTextField.get(fieldName);
    }

    createLibraryButton(fieldName) {
        const xpathToButton = new Map([
            ["shop", ":nth-child(2) > .nav-link"]
        ]);
        return xpathToButton.get(fieldName);
    }

    createLibraryDropdown(fieldName) {
        const xpathToDropdown = new Map([
            ["gender", "#exampleFormControlSelect1"]
        ]);
        return xpathToDropdown.get(fieldName);
    }
}
  
export default HomePageLocators;