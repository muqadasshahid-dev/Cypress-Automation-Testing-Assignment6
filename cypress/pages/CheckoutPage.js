class CheckoutPage {
  firstNameInput = '[data-test="firstName"]';
  lastNameInput = '[data-test="lastName"]';
  postalCodeInput = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';
  cancelButton = '[data-test="cancel"]';
  errorMessage = '[data-test="error"]';
  checkoutSummary = '.summary_info';
  summaryProductName = '[data-test="inventory-item-name"]';
  summaryProductPrice = '[data-test="inventory-item-price"]';
  summaryQuantity = '[data-test="item-quantity"]';
  itemTotal = '[data-test="subtotal-label"]';
  tax = '[data-test="tax-label"]';
  total = '[data-test="total-label"]';
  finishButton = '[data-test="finish"]';
  confirmationContainer = '#checkout_complete_container';
  confirmationHeading = '[data-test="complete-header"]';
  confirmationMessage = '[data-test="complete-text"]';

  getFirstNameInput() {
    return cy.get(this.firstNameInput);
  }

  getLastNameInput() {
    return cy.get(this.lastNameInput);
  }

  getPostalCodeInput() {
    return cy.get(this.postalCodeInput);
  }

  fillCustomerInformation({ firstName, lastName, postalCode }) {
    this.getFirstNameInput().clear().type(firstName);
    this.getLastNameInput().clear().type(lastName);
    this.getPostalCodeInput().clear().type(postalCode);
  }

  clickContinue() {
    cy.get(this.continueButton).click();
  }

  clickCancel() {
    cy.get(this.cancelButton).click();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }

  getCheckoutSummary() {
    return cy.get(this.checkoutSummary);
  }

  getSummaryProductName() {
    return cy.get(this.summaryProductName);
  }

  getSummaryProductPrice() {
    return cy.get(this.summaryProductPrice);
  }

  getSummaryQuantity() {
    return cy.get(this.summaryQuantity);
  }

  getItemTotal() {
    return cy.get(this.itemTotal);
  }

  getTax() {
    return cy.get(this.tax);
  }

  getTotal() {
    return cy.get(this.total);
  }

  clickFinish() {
    cy.get(this.finishButton).click();
  }

  getConfirmationContainer() {
    return cy.get(this.confirmationContainer);
  }

  getConfirmationHeading() {
    return cy.get(this.confirmationHeading);
  }

  getConfirmationMessage() {
    return cy.get(this.confirmationMessage);
  }
}

module.exports = CheckoutPage;
