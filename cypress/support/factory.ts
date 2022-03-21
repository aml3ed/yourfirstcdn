import { FactoryNames } from "../../test/factories";

export function factory({
  name,
  type,
  attrs,
}: {
  name: string;
  type: FactoryNames;
  attrs?: Record<string, any>;
}): any {
  const args = `${type} '${
    attrs ? JSON.stringify(attrs) : JSON.stringify({})
  }'`;
  cy.exec(
    `node --require esbuild-register ./cypress/support/runFactory.ts ${args}`
  ).then(({ stdout }) => {
    cy.then(() => JSON.parse(stdout)).as(name);
  });
  return cy.get(`@${name}`);
}
