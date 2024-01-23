import stationsPage from "../support/pages/stationsPom";
import environment from "../support/pages/env";
import loginPage from "../support/pages/loginPom";
const browseEnv = new environment();
const browseLogin = new loginPage();
const browseStation= new stationsPage();

describe('Stations TCs', () => {

    before(function () {
        cy.fixture("example").then(function (data) {
          globalThis.data = data;
        });
      });
      beforeEach(function () {
        browseEnv.dev()
        browseLogin.userValidCredentails()
        browseStation.navigateToStations()
      });
    it('[1] Verify the functionality of Create station from general tap only', () => {
        browseStation.generalTap();
        browseStation.amenitiesTap();
        browseStation.createStation();
    });

    it('[2] Verify the functionality of Create station from general tap and amenities', () => {
        browseStation.generalTap();
        browseStation.amenitiesTap();
        browseStation.SearchBoxAmenities();
        browseStation.createStation();
    });

    it('[3] Verify that all validation MSGs are displayed when all fields are left blank after clicking Create', () => {
        browseStation.generalTap();
        browseStation.clearStationForm();
        browseStation.validationMSGsAsseration();
    });

    it('[4] Verify the functionality of clear form button', () => {
        browseStation.generalTap();
        browseStation.clearStationForm();
    
    });

    it.only('[5] Verify the functionality of toggle button in working hours page', () => {
        browseStation.workingHRsTap();
    
    });



    
});