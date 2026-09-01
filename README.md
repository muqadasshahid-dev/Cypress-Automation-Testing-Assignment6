# SauceDemo Cypress Automation Testing

A maintainable end-to-end automation testing framework built with Cypress for the SauceDemo application.

## Project Overview

This project automates major user flows of the SauceDemo application using Cypress and JavaScript.

## Technologies Used

- Cypress
- JavaScript
- Node.js
- Page Object Model (POM)
- Cypress Fixtures
- Custom Cypress Commands

## Project Structure

```text
cypress/
├── e2e/
│   ├── login.cy.js
│   ├── inventory.cy.js
│   ├── product.cy.js
│   ├── cart.cy.js
│   └── checkout.cy.js
│
├── fixtures/
│   └── testData.json
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
└── support/
    ├── commands.js
    └── index.js