class LoginPage {

constructor(page){
  this.page = page
}

async login(email,password){

await this.page.fill('#Email', email)
await this.page.fill('#Password', password)

await this.page.click('button.login-button')

}

}

module.exports = { LoginPage }