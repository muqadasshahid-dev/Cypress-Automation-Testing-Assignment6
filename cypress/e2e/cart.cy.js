const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');

describe('SauceDemo - Cart', () => {
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();

  const addBackpackAndOpenCart = () => {
    cy.fixture('testData').then(({ product }) => {
      inventoryPage.addProductToCart(product.name);
      inventoryPage.getCartLink().click();
    });
    cy.location('pathname').should('eq', '/cart.html');
  };

  beforeEach(() => {
    cy.login();
    cy.location('pathname').should('eq', '/inventory.html');
  });

  it('CART-001 should add a product to the cart', () => {
    cy.fixture('testData').then(({ product }) => {
      inventoryPage.addProductToCart(product.name);
      inventoryPage.getCartBadge().should('be.visible').and('have.text', '1');
    });
  });

  it('CART-002 should display the added product in the cart', () => {
    addBackpackAndOpenCart();
    cy.fixture('testData').then(({ product }) => {
      cartPage.getCartContainer().should('be.visible');
      cartPage.getCartItemNames().should('have.length', 1).and('have.text', product.name);
      cartPage.getCartItemPrices().should('have.length', 1).invoke('text').should('match', /^\$\d+\.\d{2}$/);
      cartPage.getCartItemQuantity().should('have.length', 1).and('have.text', '1');
    });
  });

  it('CART-003 should remove a product from the cart', () => {
    addBackpackAndOpenCart();
    cy.fixture('testData').then(({ product }) => {
      cartPage.getCartItemNames().should('contain.text', product.name);
      cartPage.removeItem(product.name);
      cartPage.getCartItems().should('not.exist');
      cartPage.getCartBadge().should('not.exist');
    });
  });

  it('CART-004 should continue shopping from the cart', () => {
    addBackpackAndOpenCart();
    cartPage.clickContinueShopping();
    cy.location('pathname').should('eq', '/inventory.html');
    inventoryPage.getInventoryContainer().should('be.visible');
  });
});
