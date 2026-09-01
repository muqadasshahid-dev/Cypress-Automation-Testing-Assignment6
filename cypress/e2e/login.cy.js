const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

describe('SauceDemo - Login', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should display an error message when invalid credentials are submitted', () => {
    cy.fixture('testData').then(({ invalidUser }) => {
      loginPage.login(invalidUser.username, invalidUser.password);
    });

    loginPage
      .getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    cy.location('pathname').should('eq', '/');
    cy.location('pathname').should('not.include', 'inventory');
  });

  it('should successfully login with valid credentials', () => {
    cy.login();

    cy.location('pathname').should('eq', '/inventory.html');
    inventoryPage.getInventoryContainer().should('be.visible');
  });
});
