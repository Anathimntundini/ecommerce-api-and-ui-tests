
## Cat Facts API Testing
### Overview

The collection validates response structure, data integrity, pagination, and performance for each endpoint.

## Endpoints Covered

1. **/breeds** – Retrieves a paginated list of cat breeds by limit.
2. **/facts** – Retrieves a paginated list of cat facts with support for limit and page parameters.
3. **/fact** – Retrieves a single random cat fact.


## Files Included
Cat_Facts_API_Testing
Cat_Facts_environment

## How to Run

1. Import the Postman collection
2. Import the environment
3. Select the environment
4. Run the requests

---------------------------------------------------------------------------------------------------------------------------------------
# Web Automation Assessment – nopCommerce


## Project Overview

This project automates an end-to-end user journey on the nopCommerce demo site using Playwright with JavaScript.

The automation simulates real user actions including:
1.User registration
2.Product browsing
3. Cart management
4. Checkout
5. Order verification

---

The framework follows the **Page Object Model (POM)** design pattern to ensure maintainability, scalability, and reusability.

---

## Tech Stack

* **Automation Framework:** Playwright
* **Language:** JavaScript (Node.js)
* **Test Runner:** Playwright Test Runner
* **Design Pattern:** Page Object Model (POM)

---

## Project Structure

```
nopcommerce-playwright
│
├── POM
│   ├── HomePage.js
│   ├── RegisterPage.js
│   ├── LoginPage.js
│   ├── DesktopsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── TESTS
│   └── test.spec.js
│
├── playwright.config.js
└── package.json
```

### Folder Description

* **POM:** Contains page classes responsible for UI interactions
* **TESTS:** Contains test scenarios orchestrating the full user journey

---

## Automated Test Scenario

The automation covers the following flow:
1. Navigate to the nopCommerce homepage
2. Register a new user
3. Log in with the registered user
4. Navigate to **Computers → Desktops**
5. Apply all sorting options
6. Add all desktop items to cart and validate total price
7. Remove one item and validate updated total
8. Proceed to checkout
9. Complete billing and shipping details
10. Confirm order
11. Navigate to **My Account** and verify order creation

---

## How to Run the Tests

### Install dependencies

```
npm install
```

### Install Playwright browsers

```
npx playwright install
```

### Run tests

```
npx playwright test
```

### Run tests in headed mode

```
npx playwright test --headed
```

---

## Known Limitations

The nopCommerce demo site is protected by **Cloudflare bot verification**, which may intermittently appear during automation and interrupt test execution.

In real-world testing environments, automation is typically executed against staging environments where such protections are disabled, allowing stable and reliable test runs.

---

## Bugs Identified

1. **Cloudflare Verification Blocks Automation**

   * Bot protection occasionally interrupts automated flows

2. **Automatic Login After Registration**

   * Users are automatically logged in after registration, which may cause redundant login steps to fail

3. **Sorting UI Lacks Clear State Indication**

   * The active sorting option is not clearly highlighted

---

## Suggested Negative Test Cases

* Register with an existing email
* Register with invalid email format
* Login with incorrect credentials
* Attempt checkout with missing billing details
* Attempt checkout with an empty cart

---


## Repository

[Git Repository Link Here]
