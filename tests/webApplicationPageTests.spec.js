import { test, expect } from "@playwright/test";
import { WebApplicationPage } from "../pages/webApplicationPage";
const Data = require("../utilities/data.json");
const { Common } = require("../utilities/common");

test.describe("Web Application Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    const common = new Common(page);
    await page.goto("/");
    const username = Data.user1.username;
    const password = Data.user1.password;
    await common.loginUser(username, password);
  });

  test(
    "Test Case 1: Verify 'Implement user authentication' is in the 'To Do' column and has the tags 'Feature' and 'High Priority' ",
    { tag: ["@smoke", "@webApplicationPage"] },
    async ({ page }) => {
      const webApplicationPage = new WebApplicationPage(page);
      await expect(webApplicationPage.webApplicationHeading).toBeVisible();
      await webApplicationPage.verifyTaskExists(
        "toDoColumn",
        "Implement user authentication"
      );
      await webApplicationPage.verifyTaskTags(
        "toDoColumn",
        "Implement user authentication",
        ["Feature", "High Priority"]
      );
    }
  );

  test(
    "Test Case 2: Verify 'Fix navigation bug' is in the 'To Do' column and has the tag 'Bug' ",
    { tag: ["@smoke", "@webApplicationPage"] },
    async ({ page }) => {
      const webApplicationPage = new WebApplicationPage(page);
      await expect(webApplicationPage.webApplicationHeading).toBeVisible();
      await webApplicationPage.verifyTaskExists(
        "toDoColumn",
        "Fix navigation bug"
      );
      await webApplicationPage.verifyTaskTags(
        "toDoColumn",
        "Fix navigation bug",
        ["Bug"]
      );
    }
  );

  test(
    "Test Case 3: Verify 'Design system updates' is in the 'In Progress' column and has the tag 'Design' ",
    { tag: ["@smoke", "@webApplicationPage"] },
    async ({ page }) => {
      const webApplicationPage = new WebApplicationPage(page);
      await expect(webApplicationPage.webApplicationHeading).toBeVisible();
      await webApplicationPage.verifyTaskExists(
        "inProgressColumn",
        "Design system updates"
      );
      await webApplicationPage.verifyTaskTags(
        "inProgressColumn",
        "Design system updates",
        ["Design"]
      );
    }
  );
});
