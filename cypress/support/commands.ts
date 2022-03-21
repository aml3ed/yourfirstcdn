import { FactoryNames } from "../../test/factories";
import { factory } from "./factory";
import { cleanupUser, login } from "./user-commands";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Logs in with a random user. Yields the user and adds an alias to the user
       *
       * @returns {typeof login}
       * @memberof Chainable
       * @example
       *    cy.login()
       * @example
       *    cy.login({ email: 'whatever@example.com' })
       */
      login: typeof login;

      /**
       * Deletes the current @user
       *
       * @returns {typeof cleanupUser}
       * @memberof Chainable
       * @example
       *    cy.cleanupUser()
       * @example
       *    cy.cleanupUser({ email: 'whatever@example.com' })
       */
      cleanupUser: typeof cleanupUser;
      /**
       * Creates objects using Prisma factories
       *
       * @returns {typeof factory}
       * @memberof Chainable
       * @example
       *    cy.factory({ name: 'project1', type: 'Project', attrs: {} })
       */
      factory: typeof factory;
    }
  }
}

Cypress.Commands.add("login", login);
Cypress.Commands.add("cleanupUser", cleanupUser);
Cypress.Commands.add("factory", factory);

/*
eslint
  @typescript-eslint/no-namespace: "off",
*/
