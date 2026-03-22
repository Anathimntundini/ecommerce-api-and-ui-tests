class RegisterPage {

constructor(page){
this.page = page
}

async registerUser(firstName,lastName,email,password){

await this.page.fill('#FirstName', firstName)
await this.page.fill('#LastName', lastName)
await this.page.fill('#Email', email)
await this.page.fill('#Password', password)
await this.page.fill('#ConfirmPassword', password)

await this.page.click('#register-button')

// wait for registration success message
await this.page.waitForSelector('.result')

}

// Click Continue after successful registration
async clickContinue(){

await this.page.getByRole('button', { name: 'Continue' }).waitFor()

await this.page.getByRole('button', { name: 'Continue' }).click()

}

}

module.exports = { RegisterPage }