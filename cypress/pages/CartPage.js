class CartPage {
  cartContainer = '[data-test="cart-list"]';
  cartItems = '[data-test="inventory-item"]';
  cartItemNames = '[data-test="inventory-item-name"]';
  cartItemPrices = '[data-test="inventory-item-price"]';
  cartItemQuantity = '[data-test="item-quantity"]';
  removeButtons = '[data-test^="remove-"]';
  checkoutButton = '[data-test="checkout"]';
  continueShoppingButton = '[data-test="continue-shopping"]';
  cartBadge = '.shopping_cart_badge';

  getCartContainer() {
    return cy.get(this.cartContainer);
  }

  getCartItems() {
    return cy.get(this.cartItems);
  }

  getCartItemNames() {
    return cy.get(this.cartItemNames);
  }

  getCartItemPrices() {
    return cy.get(this.cartItemPrices);
  }

  getCartItemQuantity() {
    return cy.get(this.cartItemQuantity);
  }

  getCheckoutButton() {
    return cy.get(this.checkoutButton);
  }

  clickCheckout() {
    this.getCheckoutButton().click();
  }

  getRemoveButtons() {
    return cy.get(this.removeButtons);
  }

  getContinueShoppingButton() {
    return cy.get(this.continueShoppingButton);
  }

  getCartBadge() {
    return cy.get(this.cartBadge);
  }

  removeItem(productName) {
    cy.contains(this.cartItems, productName)
      .find(this.removeButtons)
      .click();
  }

  clickContinueShopping() {
    cy.get(this.continueShoppingButton).click();
  }
}

module.exports = CartPage;
