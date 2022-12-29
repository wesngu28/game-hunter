/// <reference types="cypress" />

import cypress from "cypress";

Cypress.Commands.add('searchForGame', (gameName) => {
  cy.visit('http://localhost:3000');
  cy.get('input').type(gameName);
  cy.get('button[type=submit]').click();
});

declare global {
  namespace Cypress {
    interface Chainable {
      searchForGame(gameName: string): Chainable<void>
    }
  }
}