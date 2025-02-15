import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { SideNav } from "../pages/sideNav";

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
      await loginPage.inputUserName("admin");
      await loginPage.inputPassword("password123");
      await loginPage.clickSubmitBtn();
      await expect(sideNav.projectsHeading).toBeVisible();
    }
  );
});
