class InventoryPage {
  inventoryContainer = '[data-test="inventory-container"]';
  inventoryItems = '[data-test="inventory-item"]';
  productNames = '[data-test="inventory-item-name"]';
  productPrices = '[data-test="inventory-item-price"]';
  addToCartButtons = '[data-test^="add-to-cart"]';
  cartLink = '.shopping_cart_link';
  cartBadge = '.shopping_cart_badge';

  getInventoryContainer() {
    return cy.get(this.inventoryContainer);
  }

  getProductCards() {
    return cy.get(this.inventoryItems);
  }

  getProductNames() {
    return cy.get(this.productNames);
  }

  getProductPrices() {
    return cy.get(this.productPrices);
  }

  getAddToCartButtons() {
    return cy.get(this.addToCartButtons);
  }

  openProduct(productName) {
    cy.contains(this.productNames, productName).click();
  }

  addProductToCart(productName) {
    cy.contains(this.inventoryItems, productName)
      .find('[data-test^="add-to-cart"]')
      .click();
  }

  getCartLink() {
    return cy.get(this.cartLink);
  }

  getCartBadge() {
    return cy.get(this.cartBadge);
  }
}

module.exports = InventoryPage;
