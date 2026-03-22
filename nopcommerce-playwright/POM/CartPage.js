class CartPage {

constructor(page){
this.page = page
}

async removeFirstItem(){

await this.page.locator('input[name="removefromcart"]').first().check()

await this.page.click('button[name="updatecart"]')

}

async checkout(){

await this.page.check('#termsofservice')

await this.page.click('#checkout')

}

}

module.exports = { CartPage }