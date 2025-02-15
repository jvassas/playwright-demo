const { UiUtilities } = require("../utilities/uiUtilities");
const projectsHeading_Name = "Projects";

exports.SideNav = class SideNav {
  constructor(page) {
    this.page = page;
    this.uiUtilities = new UiUtilities(this.page);
    this.projectsHeading = page.getByRole("heading", {
      name: projectsHeading_Name,
    });
  }

  //Actions
};
