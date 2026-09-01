class ProductPage {
  productName = '[data-test="inventory-item-name"]';
  productDescription = '[data-test="inventory-item-desc"]';
  productPrice = '[data-test="inventory-item-price"]';
  productImage = 'img.inventory_details_img';
  addToCartButton = '[data-test^="add-to-cart"]';
  backToProductsButton = '[data-test="back-to-products"]';

  getProductName() {
    return cy.get(this.productName);
  }

  getProductDescription() {
    return cy.get(this.productDescription);
  }

  getProductPrice() {
    return cy.get(this.productPrice);
  }

  getProductImage() {
    return cy.get(this.productImage);
  }

  getAddToCartButton() {
    return cy.get(this.addToCartButton);
  }

  getBackToProductsButton() {
    return cy.get(this.backToProductsButton);
  }

  clickBackToProducts() {
    this.getBackToProductsButton().click();
  }
}

module.exports = ProductPage;
