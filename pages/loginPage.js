const { UiUtilities } = require("../utilities/uiUtilities");
const usernameInput_Id = "#username";
const passwordInput_Id = "#password";
const signInBtn_Name = "Sign In";

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.uiUtilities = new UiUtilities(this.page);
  }

  //Actions

  async inputUserName(username) {
    await this.uiUtilities.inputText("id", usernameInput_Id, username);
  }

  async inputPassword(password) {
    await this.uiUtilities.inputText("id", passwordInput_Id, password);
  }

  async clickSubmitBtn() {
    await this.uiUtilities.clickBtn("role", signInBtn_Name);
  }
};
