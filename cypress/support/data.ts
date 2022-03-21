export function data(name: string): any {
  return cy.get(`@${name}`);
}

export function resetDB() {
  return cy.task("resetDB");
}
