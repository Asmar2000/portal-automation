const random = require("random-name");
const tariffName = "Tariff " + random.place();

class tariffs {
    navigateTariffs() {
        cy.tariffsIconSideMenu().should("be.exist");
        cy.intercept("**/backoffice/cpo?**").as("landingTariffs");
        cy.tariffsIconSideMenu().click();
        cy.tariffsLink().click();
        cy.wait("@landingTariffs").then(({ response }) => {
          expect(response.statusCode).to.eq(200);
        });
        cy.url().should("include", "/tariffs");
      }
      createTariff() {
        const fee = "4";
        const grace = "10";
        const idle = "15";
        const reservation = "20";
        cy.createIcon().click();
        cy.wait(1000);
        cy.url().should("include", "/tariffs/new");
        cy.tariffNameField().type(tariffName);
        cy.tariffType().click();
        cy.contains("FIXED RATE").click();
        cy.OperatorSelection().click();
        cy.searchDropdown().type(data.OperatorName);
        cy.intercept("**/cpo/search?**").as("searchOperator");
        cy.wait("@searchOperator").then(({ response }) => {
          expect(response.statusCode).to.eq(200);
          expect(response.body.content[0].name).to.eq(data.OperatorName);
        });
        cy.contains(data.OperatorName).click();
        cy.connectorOutputType().click();
        cy.contains("AC").click();
        cy.Fee().type(fee);
        cy.gracePeriod().type(grace);
        cy.idleFee().type(idle);
        cy.reservationFee().type(reservation);
        cy.createBTN().click();
        cy.contains(tariffName + " was created successfully").should("be.exist");
        cy.contains("Tariff Created").should("be.exist");
        cy.openTariffTab();
        cy.url().should("include", "/tariffs");
        cy.tableSearch().type(tariffName);
        cy.intercept("**/tariff/search?**").as("searchTariff");
        cy.tableSearchResult().click();
        cy.wait("@searchTariff").then(({ response }) => {
          expect(response.statusCode).to.eq(200);
          expect(response.body.content[0].tariff.name).to.eq(tariffName);
        });
    
      }
      deleteTariff() {
        cy.tableSearch().type(tariffName);
        cy.intercept("**/tariff/search?**").as("searchTariff");
        cy.tableSearchResult().click();
        cy.wait("@searchTariff").then(({ response }) => {
          expect(response.statusCode).to.eq(200);
          expect(response.body.content[0].tariff.name).to.eq(tariffName);
        });
        cy.contains(tariffName).should("be.exist");
        cy.intercept("**/backoffice/tariff**").as("DeleteTariff");
        cy.actionsBTN().click();
        cy.deleteChargePointBTN().click();
        cy.deleteChargePointConfirmBTN().click();
        cy.wait("@DeleteTariff").then(({ response }) => {
          expect(response.statusCode).to.eq(200);
        });
        cy.contains(tariffName + " was deleted successfully").should("be.exist");
        cy.contains("Tariff Deleted").should("be.exist");
        cy.tableSearch().clear();
        cy.tableSearch().type(tariffName);
        cy.tableSearchResult().click();
        cy.contains(tariffName).should("not.exist");
    
      }
      editTariff() {


        
      }
}

export default tariffs;