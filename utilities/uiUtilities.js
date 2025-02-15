/*
The uiUtilities class houses all 
page object specific functions
*/

exports.UiUtilities = class UiUtilities {
  constructor(page) {
    this.page = page;
  }

  // This function can be modified if there are different locator types
  async inputText(locatorType, locator, text) {
    switch (locatorType) {
      case "id":
        await this.page.locator(locator).scrollIntoViewIfNeeded();
        await this.page.locator(locator).fill(text);
        break;
      default:
        throw new Error("IVALID PARAMETER");
    }
  }

  // This function can be modified if there are different locator types
  async clickBtn(locatorType, locator) {
    switch (locatorType) {
      case "role":
        await this.page.getByRole("button", { name: locator }).click();
        break;
      default:
        throw new Error("IVALID PARAMETER");
    }
  }
};
