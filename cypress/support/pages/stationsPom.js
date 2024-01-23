const lat = "30.077262585598845";
const long = "31.024987424685932";
let random = require("random-name");
let stationName = "Station " + random.first();
const streetNumber = require("random-number");
var options = {
    min: 1,
    max: 1000,
    integer: true,
};
const statoinAddress = "street " + streetNumber(options) + ", " + random.place() + ", Egypt";



class stationsPage {
    navigateToStations() {
        cy.stationsIconSideMenu().should("be.exist");
        cy.intercept("**/backoffice/locations?**").as("landingStations");
        cy.stationsIconSideMenu().click({ waitForAnimations: false });
        cy.wait("@landingStations").then(({ response }) => {
            expect(response.statusCode).to.eq(200);
        });
        cy.url().should('include', 'stations')
    }
    generalTap() {
        cy.addNewStationBTN().click();
        cy.wrap(stationName);
        cy.stationNameFLD().type(stationName);
        cy.wrap(statoinAddress);
        cy.stationAddressFLD().type(statoinAddress);
        cy.stationLatitudeFLD().type(lat);
        cy.stationLongitudeFLD().type(long);
        cy.stationAccessibilityFLD().click();
        cy.contains("Private Access").click();
        cy.stationCountryFLD().click();
        cy.contains("Egypt").click();
        cy.stationCityFLD().click();
        cy.contains("Cairo").click();
        cy.stationStateFLD().click();
        cy.contains("New Cairo").click();
    }
    createStation() {
        cy.intercept("**/backoffice/locations**").as("stationCreated");
        cy.createBTN().click({ waitForAnimations: false });
        cy.wait("@stationCreated").then(({ response }) => {
            expect(response.statusCode).to.eq(201);
        });
        cy.wait(1000);
        cy.contains(stationName + " station was created successfully.").should("be.exist");
    }
    clearStationForm() {
        cy.clearFromBTN().click({ waitForAnimations: false });
    }

    validationMSGsAsseration() {
        cy.createBTN().click({ waitForAnimations: false });
        cy.contains('Enter station name').and("be.visible")
        cy.contains(' Enter station address ').and("be.visible")
        cy.contains(' Enter station latitude or choose location on map ').and("be.visible");
        cy.contains(' Enter station longitude or choose location on map ').and("be.visible");
        cy.contains(' Select station accessibility ').and("be.visible");
        cy.contains(' Select station’s country ').and("be.visible");
        cy.contains('Select station’s city').and("be.visible");
        cy.contains(' Select station’s state ').and("be.visible");
    }
    amenitiesTap() {
        cy.amenitiesTapBTN().click();
        cy.restaurantsCheckbox().click();
        cy.cafeCheckbox().click();
        cy.freeWifiCheckbox().click();
        cy.freeParkingCheckbox().click();
        cy.repairCenterCheckbox().click();
        cy.marketCheckbox().click();
    }
    SearchBoxAmenities() {
        cy.searchAmenitites().type(data.amenities);
        cy.cafeCheckbox().click();
    }
    workingHRsTap() {
        cy.addNewStationBTN().click();
        cy.workingHRsTapBTN().click();
        cy.workingHRsToggleBTN().should("be.exist");
        cy.workingHRsToggleBTN().should('not.have.class', 'p-inputswitch-checked');
        cy.workingHRsToggleBTN().click();
        //cy.workingHRsToggleBTN().find('.timer-switch > p-inputswitch input[type=checkbox]').should('have.attr', 'aria-checked', true);
        cy.workingHRsToggleBTN().should('have.class', 'p-inputswitch-checked');
    }


} export default stationsPage