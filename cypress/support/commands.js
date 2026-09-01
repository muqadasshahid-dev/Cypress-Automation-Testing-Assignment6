// Cross-spec commands are registered here and loaded by support/index.js.
// Page objects retain selector ownership; commands only orchestrate common flows.

const LoginPage = require('../pages/LoginPage');

/**
 * Visit SauceDemo and submit credentials through the LoginPage object.
 * With no arguments, uses the validUser fixture. Optional arguments make the
 * command useful for explicit, non-default credential scenarios.
 */
Cypress.Commands.add('login', (username, password) => {
  const loginPage = new LoginPage();

  const performLogin = (resolvedUsername, resolvedPassword) => {
    loginPage.visit();
    loginPage.login(resolvedUsername, resolvedPassword);
  };

  if (username !== undefined || password !== undefined) {
    if (username === undefined || password === undefined) {
      throw new Error('cy.login(username, password) requires both credentials.');
    }
    performLogin(username, password);
    return;
  }

  return cy.fixture('testData').then(({ validUser }) => {
    performLogin(validUser.username, validUser.password);
  });
});
