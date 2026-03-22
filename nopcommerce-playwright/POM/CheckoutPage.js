class CheckoutPage {

constructor(page){
this.page = page
}

async fillBillingDetails(){

await this.page.fill('#BillingNewAddress_City','Cape Town')
await this.page.fill('#BillingNewAddress_Address1','Long Street')
await this.page.fill('#BillingNewAddress_ZipPostalCode','8000')
await this.page.fill('#BillingNewAddress_PhoneNumber','0812345678')

await this.page.click('.new-address-next-step-button')

}

async confirmOrder(){

await this.page.click('.shipping-method-next-step-button')
await this.page.click('.payment-method-next-step-button')
await this.page.click('.payment-info-next-step-button')
await this.page.click('.confirm-order-next-step-button')

}

}

module.exports = { CheckoutPage }