import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { SideNav } from "../pages/sideNav";

const { Common } = require("../utilities/common");

test.describe("Web Application Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    const common = new Common(page);
    await page.goto("/");
    const username = "admin";
    const password = "password123";
    await common.loginUser(username, password);
  });

  test(
    "Verify System Admin User can login successfully",
    { tag: ["@sanity", "@login"] },
    async ({ page }) => {
      const sideNav = new SideNav(page);
      await expect(sideNav.projectsHeading).toBeVisible();
    }
  );
});
