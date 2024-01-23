import environment from "../support/pages/env";
import loginPage from "../support/pages/loginPom";
import operatorPage from "../support/pages/operatorPom";
const browseEnv = new environment()
const browseLogin = new loginPage()
const browseOperator = new operatorPage
describe("AWS Smoke Test the main function", () => {
    before(function () {
      cy.fixture("example").then(function (data) {
        globalThis.data = data;
      });
    });
    beforeEach(function () {
        browseEnv.dev()
        browseLogin.userCredentails()
      });

  it('[1] create New Operator', () => {
    browseOperator.navigateToOperator()
    browseOperator.attachOperatorImage()
    browseOperator.generalTab()
    browseOperator.optionalInputsGeneral()
    browseOperator.legalTabNav()
    browseOperator.legalTabAttachments()
    browseOperator.legalInputs()
    // browseOperator.submitSuccessCreation()
  });
});