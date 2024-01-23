import Environment from "../support/pages/env";
import loginPage from "../support/pages/loginPom";
import accountManagement from "../support/pages/accountsManagement";
const ACCMGT = new accountManagement()
const browseEnv = new Environment()
const browseLogin = new loginPage()
describe("Login TCs", () => {
    before(function () {
      cy.fixture("example").then(function (data) {
        globalThis.data = data;
      });
    });
    beforeEach(function () {
        browseEnv.dev()
        browseLogin.userValidCredentails()
      });
it('[CPMS-81] Create VoltEdge User Account', () => {
    ACCMGT.voltedgeNavigate()
    ACCMGT.createVoltEdgeUser()
    ACCMGT.voltEdgeUserAssertions()
});
 
it.only('Navigate to operators user accounts page', () => {
  ACCMGT.operatorNavigate()
  ACCMGT.createOpreatorUser()
  ACCMGT.operatorUserAssertions()
});



});