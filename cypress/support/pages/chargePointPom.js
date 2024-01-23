const random = require("random-name");
const cpName = "CP " + random.first();
const Id = require("random-number");
var options = {
  min: 1000,
  max: 9999,
  integer: true,
};
const random_Id = Id(options);

class chargePoint {
  navigateChargePoint() {
    cy.AssetsSideMenu().should("be.exist");
    cy.intercept("**/backoffice/cpo?**").as("landingChargePoint");
    cy.AssetsSideMenu().click();
    cy.chargePointLink().click();
    cy.wait("@landingChargePoint").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });
    cy.url().should("include", "/charge-points");
  }
  generalTab() {
    const minPower = "1";
    const maxPower = "10";
    cy.createIcon().click();
    cy.wait(1000);
    cy.url().should("include", "/charge-points/new");
    cy.chargePointNameField().type(cpName);
    cy.minimumPowerField().type(minPower);
    cy.maximumPowerField().type(maxPower);
    cy.brandSelection().click();
    cy.contains("schneider").click();
    cy.modelSelection().click();
    cy.contains("EVB1").click();
    cy.OperatorSelection().click();
    cy.searchDropdown().type(data.OperatorName);
    cy.intercept("**/cpo/search?**").as("searchOperator");
    cy.wait("@searchOperator").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.content[0].name).to.eq(data.OperatorName);
    });
    cy.contains(data.OperatorName).click();
    cy.wait(1000);
  }
  connectorsTab() {
    cy.connectorsNavigate().click();
    cy.connectorId().type(random_Id);
    cy.connectorType().click();
    cy.contains("Type 2").click();
    cy.connectorOutputType().click();
    cy.contains("AC").click();
    cy.connectorFormat().click();
    cy.contains("Socket").click();
    cy.selectTariff().click();
    cy.searchDropdown().type(data.tariffName);
    cy.intercept("**/tariff/search?**").as("searchTariff");
    cy.wait("@searchTariff").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.content[0].tariff.name).to.eq(data.tariffName);
    });
    cy.contains(data.tariffName).click();
    cy.wait(1000);
  }

  stationTab() {
    cy.StationNavigate().click();
    cy.selectStation().click();
    cy.searchDropdown().type(data.stationName);
    cy.intercept("**/locations/search?**").as("searchStation");
    cy.wait("@searchStation").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.content[0].name).to.eq(data.stationName);
    });
    cy.contains(data.stationName).click();
    cy.wait(1000);
  }
  OCPPSecurityTab() {
    cy.OCPPSecurityNavigate().click();
    cy.OCPPVersion().click();
    cy.contains("OCPP 1.6").click();
    cy.authenticationMethod().click();
    cy.contains("No authentication").click();
    cy.wait(1000);
  }
  chargePointCreationAssertions() {
    cy.intercept("**/backoffice/chargePoint**").as("ChrgePointCreated");
    cy.createBTN().click();
    cy.wait("@ChrgePointCreated").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });

    cy.wait(1000);

    cy.contains(cpName + " charge point was created successfully.").should(
      "be.exist"
    );

    cy.openChargepointTable();
    cy.url().should("include", "/charge-points");
    this.searchChargePoint()
    cy.contains(cpName).should("be.exist");
    cy.contains(data.stationName).should("be.exist");
    cy.contains(random_Id).should("be.exist");
    cy.contains(data.OperatorName).should("be.exist");
  }

  editChargePoint() {
    this.searchChargePoint()
    cy.contains(cpName).should("be.exist");
    cy.contains(data.stationName).should("be.exist");
    cy.contains(random_Id).should("be.exist");
    cy.contains(data.OperatorName).should("be.exist");
    cy.actionsBTN().click();
    cy.editChargePointBTN().click();
    cy.chargePointNameField().clear();
    cy.chargePointNameField().type(cpName + " edited");
    cy.minimumPowerField().clear();
    cy.minimumPowerField().type("2");
    cy.maximumPowerField().clear();
    cy.maximumPowerField().type("20");
    cy.brandSelection().click();
    cy.contains("ABB").click();
    cy.OperatorSelection().click();
    cy.searchDropdown().type(data.OperatorName);
    cy.contains(data.OperatorName).click();
    //inporgress https://brightskiesinc.atlassian.net/browse/CPMS-477
    cy.contains(
      cpName + " edited charge point was updated successfully."
    ).should("be.exist");
    cy.contains(cpName + " edited").should("be.exist");
  }
  deleteChargePoint() {
    this.searchChargePoint()
    cy.contains(cpName).should("be.exist");
    cy.contains(data.stationName).should("be.exist");
    cy.contains(random_Id).should("be.exist");
    cy.contains(data.OperatorName).should("be.exist");
    cy.intercept("**/chargePoint**").as("DeleteChargePoint");
    cy.actionsBTN().click();
    cy.deleteChargePointBTN().click();
    cy.deleteChargePointConfirmBTN().click();
    cy.wait("@DeleteChargePoint").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });
    cy.contains(cpName + " was deleted successfully").should("be.exist");
    cy.contains("Charge Point Deleted").should("be.exist");
    cy.tableSearch().type(cpName);
    cy.tableSearchResult().click();
    cy.contains(cpName).should("not.exist");
  }
  searchChargePoint() {
    cy.tableSearch().type(cpName);
    cy.intercept("**/chargePoint/search?**").as("searchChargePoint");
    cy.tableSearchResult().click();
    cy.wait("@searchChargePoint").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.content[0].name).to.eq(cpName);
    });
  }
}
export default chargePoint;
