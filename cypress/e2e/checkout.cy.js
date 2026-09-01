const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

describe('SauceDemo - Checkout', () => {
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  const openCheckout = () => {
    cy.fixture('testData').then(({ product }) => {
      inventoryPage.addProductToCart(product.name);
      inventoryPage.getCartLink().click();
    });
    cy.location('pathname').should('eq', '/cart.html');
    cartPage.clickCheckout();
    cy.location('pathname').should('eq', '/checkout-step-one.html');
    checkoutPage.getFirstNameInput().should('be.visible');
  };

  const continueWithValidInformation = () => {
    cy.fixture('testData').then(({ checkoutUser }) => {
      checkoutPage.fillCustomerInformation(checkoutUser);
      checkoutPage.clickContinue();
    });
    cy.location('pathname').should('eq', '/checkout-step-two.html');
  };

  beforeEach(() => {
    cy.login();
    cy.location('pathname').should('eq', '/inventory.html');
  });

  it('CHECKOUT-001 should complete checkout information successfully', () => {
    openCheckout();
    continueWithValidInformation();
    checkoutPage.getCheckoutSummary().should('be.visible');
  });

  it('CHECKOUT-002 should prevent checkout when required information is missing', () => {
    openCheckout();
    checkoutPage.clickContinue();
    checkoutPage
      .getErrorMessage()
      .should('be.visible')
      .and('have.text', 'Error: First Name is required');
    cy.location('pathname').should('eq', '/checkout-step-one.html');
  });

  it('CHECKOUT-003 should display correct product information in checkout overview', () => {
    openCheckout();
    continueWithValidInformation();
    cy.fixture('testData').then(({ product }) => {
      checkoutPage.getSummaryProductName().should('have.text', product.name);
      checkoutPage.getSummaryProductPrice().should('have.text', product.price);
      checkoutPage.getSummaryQuantity().should('have.text', '1');
      checkoutPage.getItemTotal().should('have.text', `Item total: ${product.price}`);
      checkoutPage.getTax().should('contain.text', 'Tax: $');
      checkoutPage.getTotal().should('contain.text', 'Total: $');
    });
  });

  it('CHECKOUT-004 should successfully complete the order', () => {
    openCheckout();
    continueWithValidInformation();
    checkoutPage.clickFinish();
    cy.location('pathname').should('eq', '/checkout-complete.html');
    checkoutPage.getConfirmationContainer().should('be.visible');
    checkoutPage.getConfirmationHeading().should('have.text', 'Thank you for your order!');
    checkoutPage.getConfirmationMessage().should('be.visible').invoke('text').should('not.be.empty');
  });

  it('CHECKOUT-005 should cancel checkout and return to the cart', () => {
    openCheckout();
    checkoutPage.clickCancel();
    cy.location('pathname').should('eq', '/cart.html');
    cartPage.getCartContainer().should('be.visible');
  });
});
