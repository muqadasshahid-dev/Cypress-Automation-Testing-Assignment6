const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const ProductPage = require('../pages/ProductPage');

describe('SauceDemo - Product Navigation', () => {
  const inventoryPage = new InventoryPage();
  const productPage = new ProductPage();

  beforeEach(() => {
    cy.login();
    cy.location('pathname').should('eq', '/inventory.html');

    cy.fixture('testData').then(({ product }) => {
      inventoryPage.openProduct(product.name);
    });

    cy.location('pathname').should('include', '/inventory-item.html');
  });

  it('should navigate from inventory to product detail page', () => {
    cy.fixture('testData').then(({ product }) => {
      productPage.getProductName().should('be.visible').and('have.text', product.name);
    });
  });

  it('should validate product details on product detail page', () => {
    cy.fixture('testData').then(({ product }) => {
      productPage.getProductName().should('be.visible').and('have.text', product.name);
    });
    productPage.getProductPrice().should('be.visible').invoke('text').should('match', /^\$\d+\.\d{2}$/);
    productPage.getProductDescription().should('be.visible').invoke('text').should('not.be.empty');
    productPage.getProductImage().should('be.visible').and('have.attr', 'src').and('not.be.empty');
    productPage.getAddToCartButton().should('be.visible').and('be.enabled');
  });

  it('should navigate back to inventory from product detail page', () => {
    productPage.getBackToProductsButton().should('be.visible');
    productPage.clickBackToProducts();

    cy.location('pathname').should('eq', '/inventory.html');
    inventoryPage.getInventoryContainer().should('be.visible');
  });
});
