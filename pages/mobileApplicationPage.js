const { expect } = require("@playwright/test");
const mobileApplicationHeading_Name = "Mobile Application";

exports.MobileApplicationPage = class MobileApplicationPage {
  constructor(page) {
    this.page = page;
    // Locate the exact "To Do" column using its class or structure
    this.mobileApplicationHeading = page
      .getByRole("banner")
      .getByRole("heading", { name: mobileApplicationHeading_Name });
    this.toDoColumn = page.locator("div:has(h2:text('To Do'))");
    this.inProgressColumn = page.locator("div:has(h2:text('In Progress'))");
    this.doneColumn = page.locator("div:has(h2:text('Done'))");
  }

  getToDoTaskCards(taskName) {
    return this.toDoColumn.locator(`div.bg-white:has-text("${taskName}")`);
  }

  async verifyToDoTaskExists(taskName) {
    const task = this.getToDoTaskCards(taskName);
    await expect(task).toBeVisible();
  }

  async verifyToDoTaskTags(taskName, tags) {
    const task = this.getToDoTaskCards(taskName);
    for (const tag of tags) {
      await expect(task.locator(`text="${tag}"`)).toBeVisible();
    }
  }
  /* --------------------------------------------------------------- */
  getInProgressTaskCards(taskName) {
    return this.inProgressColumn.locator(
      `div.bg-white:has-text("${taskName}")`
    );
  }

  async verifyInProgressTaskExists(taskName) {
    const task = this.getInProgressTaskCards(taskName);
    await expect(task).toBeVisible();
  }

  async verifyInProgressTaskTags(taskName, tags) {
    const task = this.getInProgressTaskCards(taskName);
    for (const tag of tags) {
      await expect(task.locator(`text="${tag}"`)).toBeVisible();
    }
  }
  /* --------------------------------------------------------------- */
  getDoneTaskCards(taskName) {
    return this.doneColumn.locator(`div.bg-white:has-text("${taskName}")`);
  }

  async verifyDoneTaskExists(taskName) {
    const task = this.getDoneTaskCards(taskName);
    await expect(task).toBeVisible();
  }

  async verifyDoneTaskTags(taskName, tags) {
    const task = this.getDoneTaskCards(taskName);
    for (const tag of tags) {
      await expect(task.locator(`text="${tag}"`)).toBeVisible();
    }
  }
};
