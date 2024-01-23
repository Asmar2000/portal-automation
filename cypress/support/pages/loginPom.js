class loginPage {
  userValidCredentails(){
      cy.userNameField().should("be.exist");
      cy.passwordField().should("be.exist");
      cy.loginButton().should("be.exist");
      cy.userNameField().type(data.userName)
      cy.passwordField().type(data.password)
      // intercept Backend
      cy.intercept("**/auth/login").as("loginSucess");
      cy.loginButton().click()
      cy.wait("@loginSucess").then(({ response }) => {
        expect(response.statusCode).to.eq(200);
      });
      cy.url().should('include','/dashboard')
  }
  userInvalidCredentails(){
    cy.userNameField().should("be.exist");
    cy.passwordField().should("be.exist");
    cy.loginButton().should("be.exist");
    cy.userNameField().type(data.wrongUserName)
    cy.passwordField().type(data.wrongPassword)
    // intercept Backend
    cy.intercept("**/auth/login").as("loginFailed");
    cy.loginButton().click()
    cy.wait("@loginFailed").then(({ response }) => {
      expect(response.statusCode).to.eq(401);
    });
    cy.loginFailedMessage().should('have.text', ' Invalid username or password, please check your credentials and try again ');
    }
  
}
export default loginPage