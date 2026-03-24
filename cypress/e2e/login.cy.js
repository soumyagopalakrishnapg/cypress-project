import LoginPage from '../pages/LoginPage'

describe('Login Test Suite', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  it('Valid Login Test', () => {

    cy.fixture('user').then((user) => {

      LoginPage.enterUsername(user.username)
      LoginPage.enterPassword(user.password)
      LoginPage.clickLogin()

      LoginPage.verifyLoginSuccess()

    })

  })

})