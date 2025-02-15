import { test, expect } from "@playwright/test";
import { SideNav } from "../pages/sideNav";
import { MobileApplicationPage } from "../pages/mobileApplicationPage";
const Data = require("../utilities/data.json");
const { Common } = require("../utilities/common");

test.describe("Mobile Application Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    const common = new Common(page);
    await page.goto("/");
    const username = Data.user1.username;
    const password = Data.user1.password;
    await common.loginUser(username, password);
  });

  test(
    "Test Case 4: Verify 'Push notification system' is in the 'To Do' column and has the tag 'Feature' ",
    { tag: ["@smoke", "@webApplicationPage"] },
    async ({ page }) => {
      const mobileApplicationPage = new MobileApplicationPage(page);
      const sideNav = new SideNav(page);
      await sideNav.clickMobileApplicationLink();
      await expect(
        mobileApplicationPage.mobileApplicationHeading
      ).toBeVisible();
      await mobileApplicationPage.verifyToDoTaskExists(
        "Push notification system"
      );
      await mobileApplicationPage.verifyToDoTaskTags(
        "Push notification system",
        ["Feature"]
      );
    }
  );

  test(
    "Test Case 5: Verify 'Offline mode' is in the 'In Progress' column and has the tags 'Feature' and 'High Priority' ",
    { tag: ["@smoke", "@webApplicationPage"] },
    async ({ page }) => {
      const mobileApplicationPage = new MobileApplicationPage(page);
      const sideNav = new SideNav(page);
      await sideNav.clickMobileApplicationLink();
      await expect(
        mobileApplicationPage.mobileApplicationHeading
      ).toBeVisible();
      await mobileApplicationPage.verifyInProgressTaskExists("Offline mode");
      await mobileApplicationPage.verifyInProgressTaskTags("Offline mode", [
        "Feature",
        "High Priority",
      ]);
    }
  );

  test(
    "Test Case 6: Verify 'App icon design' is in the 'Done' column and has the tag 'Design' ",
    { tag: ["@smoke", "@webApplicationPage"] },
    async ({ page }) => {
      const mobileApplicationPage = new MobileApplicationPage(page);
      const sideNav = new SideNav(page);
      await sideNav.clickMobileApplicationLink();
      await expect(
        mobileApplicationPage.mobileApplicationHeading
      ).toBeVisible();
      await mobileApplicationPage.verifyDoneTaskExists("App icon design");
      await mobileApplicationPage.verifyDoneTaskTags("App icon design", [
        "Design",
      ]);
    }
  );
});
