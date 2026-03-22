class DesktopsPage {

constructor(page){
this.page = page
}

async selectDesktops(){
await this.page.click('text=Desktops')
}

async sortProducts(){

const sortOptions = [
"Name: A to Z",
"Name: Z to A",
"Price: Low to High",
"Price: High to Low",
"Created on"
]

for (const option of sortOptions){

await this.page.selectOption('#products-orderby', { label: option })

}

}

async addAllDesktopsToCart(){

const products = this.page.locator('button:has-text("Add to cart")')

const count = await products.count()

for(let i=0;i<count;i++){

await products.nth(i).click()

await this.page.waitForTimeout(1000)

}

}

}

module.exports = { DesktopsPage }