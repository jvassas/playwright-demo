import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { SideNav } from "../pages/sideNav";
const Data = require("../utilities/data.json");

test.describe("Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test(
    "Verify System Admin User can login successfully",
    { tag: ["@sanity", "@login"] },
    async ({ page }) => {
      const loginPage = new LoginPage(page);
      const sideNav = new SideNav(page);
      await loginPage.inputUserName(Data.user1.username);
      await loginPage.inputPassword(Data.user1.password);
      await loginPage.clickSubmitBtn();
      await expect(sideNav.projectsHeading).toBeVisible();
    }
  );
});
