const { test, expect } = require('@playwright/test')

const { HomePage } = require('../POM/HomePage')
const { RegisterPage } = require('../POM/RegisterPage')
const { LoginPage } = require('../POM/LoginPage')
const { DesktopsPage } = require('../POM/DesktopsPage')
const { CartPage } = require('../POM/CartPage')
const { CheckoutPage } = require('../POM/CheckoutPage')

test('nopCommerce full user journey', async ({ browser }) => {

const context = await browser.newContext({
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36'
})

const page = await context.newPage()

const home = new HomePage(page)
const register = new RegisterPage(page)
const login = new LoginPage(page)
const desktops = new DesktopsPage(page)
const cart = new CartPage(page)
const checkout = new CheckoutPage(page)

const email = `test${Date.now()}@mail.com`
const password = "Test@123"

await home.navigate()

// Register
await home.clickRegister()
await register.registerUser("Test","User",email,password)

// Continue after successful registration (user is already logged in)
await register.clickContinue()

// Computers
await home.clickComputers()

// Desktops
await desktops.selectDesktops()

// Sort products
await desktops.sortProducts()

// Add to cart
await desktops.addAllDesktopsToCart()

// Cart
await home.goToCart()

// Remove item
await cart.removeFirstItem()

// Checkout
await cart.checkout()

// Fill address
await checkout.fillBillingDetails()

// Confirm order
await checkout.confirmOrder()

// Validate order success
await expect(page.locator('.title')).toContainText('successfully processed')

})