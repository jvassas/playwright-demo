const { UiUtilities } = require("../utilities/uiUtilities");
const projectsHeading_Name = "Projects";
const webApplicationLink_Name = "Web Application Main web";
const mobileApplicationLink_Name = "Mobile Application Native";
const marketingCampaignLink_Name = "Marketing Campaign Q2";

exports.SideNav = class SideNav {
  constructor(page) {
    this.page = page;
    this.uiUtilities = new UiUtilities(this.page);
    this.projectsHeading = page.getByRole("heading", {
      name: projectsHeading_Name,
    });
  }

  //Actions
  async clickWebApplicationLink() {
    await this.uiUtilities.clickBtn("role", webApplicationLink_Name);
  }

  async clickMobileApplicationLink() {
    await this.uiUtilities.clickBtn("role", mobileApplicationLink_Name);
  }

  async clickMarketingCampaignLink() {
    await this.uiUtilities.clickBtn("role", marketingCampaignLink_Name);
  }
};
