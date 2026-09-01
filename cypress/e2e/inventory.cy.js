const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

describe('SauceDemo - Inventory Page', () => {
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    cy.login();
    cy.location('pathname').should('eq', '/inventory.html');
  });

  it('should display the inventory page', () => {
    inventoryPage.getInventoryContainer().should('be.visible');
    inventoryPage.getProductCards().should('have.length.greaterThan', 0);
  });

  it('should display products with visible names and prices', () => {
    inventoryPage.getProductNames().should('have.length.greaterThan', 0).each(($name) => {
      cy.wrap($name).should('be.visible').invoke('text').should('not.be.empty');
    });

    inventoryPage.getProductPrices().should('have.length.greaterThan', 0).each(($price) => {
      cy.wrap($price).should('be.visible').invoke('text').should('match', /^\$\d+\.\d{2}$/);
    });
  });

  it('should display enabled Add to Cart buttons', () => {
    inventoryPage.getAddToCartButtons().should('have.length.greaterThan', 0).each(($button) => {
      cy.wrap($button).should('be.visible').and('be.enabled');
    });
  });
});
