class HomePage {

constructor(page){
  this.page = page
}

async navigate(){
  await this.page.goto("https://demo.nopcommerce.com/", {
    waitUntil: "domcontentloaded"
  });

  // Wait until homepage is fully loaded (Cloudflare check finished)
  await this.page.waitForSelector('.header-logo', { timeout: 15000 });
}

async clickRegister(){
  await this.page.getByRole('link', { name: 'Register' }).click();
}

async clickLogin(){
  await this.page.getByRole('link', { name: 'Log in' }).click();
}

async clickComputers(){
  await this.page.getByRole('link', { name: 'Computers' }).click();
}

async goToCart(){
  await this.page.locator('.cart-label').click();
}

async goToMyAccount(){
  await this.page.locator('.ico-account').click();
}

}

module.exports = { HomePage };