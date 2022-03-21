/// <reference types="cypress" />

// import 'cypress';
import { truncateDB } from "@/test/helpers/truncateDB";

declare global {
  // eslint-disable-next-line
  namespace Cypress {
    interface Chainable<Subject = any> {
      task<T>(
        event: string,
        arg?: any,
        options?: Partial<Loggable & Timeoutable>
      ): Chainable<T>;
    }
  }
}

/**
 * @type {Cypress.PluginConfig}
 */
export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  const isDev = config.watchForFileChanges;
  const port = process.env.PORT ?? (isDev ? "3000" : "8811");
  const configOverrides: Partial<Cypress.PluginConfigOptions> = {
    baseUrl: `http://localhost:${port}`,
    video: !process.env.CI,
    screenshotOnRunFailure: !process.env.CI,
  };
  Object.assign(config, configOverrides);

  // To use this:
  // cy.task('log', whateverYouWantInTheTerminal)
  on("task", {
    log(message) {
      console.log(message);
      return null;
    },
    async resetDB() {
      await truncateDB();
      return null;
    },
  });

  return config;
};
