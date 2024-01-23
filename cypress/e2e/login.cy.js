import environment from "../support/pages/env";
import loginPage from "../support/pages/loginPom";
const browseEnv = new environment()
const browseLogin = new loginPage()
describe("Login TCs", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => { 
    browseEnv.visit();
  }) 
  
  it(' Verify that users can login with a valid password and username', () => {
    browseLogin.userValidCredentails();
  });

  it('Verify that users cannot login with valid username and invalid password', () => {
    browseLogin.userInvalidCredentails();
  });

  
});
