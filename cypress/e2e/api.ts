import { Project } from "@prisma/client";

describe("API", () => {
  before(() => {
    cy.factory({ name: "project1", type: "Project" });
  });

  it("should retrieve file from project if present", () => {
    const project = cy.get("@project1") as unknown as Project;
    cy.request("GET", `/v1/${project.id}/hello`).then((resp) => {
      expect(resp.headers["content-type"]).to.eq("image/png");
    });
  });
});
