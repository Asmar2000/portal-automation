import Environment from "../support/pages/env";
import chargePoint from "../support/pages/chargePointPom";
import loginPage from "../support/pages/loginPom";
const browseLogin = new loginPage()
const browseEnv = new Environment();
const browseChargePoint = new chargePoint();

describe('Charge points TCs', () => {
  before(() => {
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    browseEnv.dev();
  });

  it.only('[CPMS-26] Create charge point', () => {
    browseLogin.userValidCredentails()
    browseChargePoint.navigateChargePoint()
    browseChargePoint.generalTab()
    browseChargePoint.connectorsTab()
    browseChargePoint.stationTab()
    browseChargePoint.OCPPSecurityTab()
    browseChargePoint.chargePointCreationAssertions()
    

  });
  it.skip('[CPMS-27] Edit charge point', () => {
    browseLogin.userValidCredentails()
    browseChargePoint.navigateChargePoint()
    //browseChargePoint.editChargePoint() inprogress  https://brightskiesinc.atlassian.net/browse/CPMS-477
  });
  it('[CPMS-31] Delete charge point', () => {
    browseLogin.userValidCredentails()
    browseChargePoint.navigateChargePoint()
    browseChargePoint.deleteChargePoint()
  });
});