/*
The uiUtilities class houses all 
page object specific functions
*/

import { LoginPage } from "../pages/loginPage";

exports.Common = class Common {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
  }

  async loginUser(username, password) {
    await this.loginPage.inputUserName(username);
    await this.loginPage.inputPassword(password);
    await this.loginPage.clickSubmitBtn();
  }
};
