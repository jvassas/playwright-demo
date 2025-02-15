const { expect } = require("@playwright/test");
const webApplicationHeading_Name = "Web Application";

exports.WebApplicationPage = class WebApplicationPage {
  constructor(page) {
    this.page = page;
    // Locate the exact "To Do" column using its class or structure
    this.webApplicationHeading = page
      .getByRole("banner")
      .getByRole("heading", { name: webApplicationHeading_Name });
    this.columns = {
      toDoColumn: page.locator("div:has(h2:text('To Do'))"),
      inProgressColumn: page.locator("div:has(h2:text('In Progress'))"),
    };
  }

  getTaskCards(column, taskName) {
    return this.columns[column].locator(
      `:scope :is(.bg-white:has-text("${taskName}"))`
    );
  }

  async verifyTaskExists(column, taskName) {
    const task = this.getTaskCards(column, taskName);
    await expect(task).toBeVisible();
  }

  async verifyTaskTags(column, taskName, tags) {
    const task = this.getTaskCards(column, taskName);
    for (const tag of tags) {
      await expect(task.locator(`text="${tag}"`)).toBeVisible();
    }
  }
};
