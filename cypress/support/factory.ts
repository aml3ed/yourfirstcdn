import { FactoryNames } from "../../test/factories";

export function factory({
  name,
  type,
  attrs,
}: {
  name: string;
  type: FactoryNames;
  attrs?: Record<string, any>;
}) {
  const args = `${type} ${attrs ? JSON.stringify(attrs) : "{}"}`;
  cy.exec(
    `node --require esbuild-register ./cypress/support/factory.ts ${args}`
  ).then(({ stdout }) => {
    cy.then(() => JSON.parse(stdout)).as(name);
  });
}
