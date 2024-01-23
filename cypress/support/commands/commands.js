// plugins
import 'cypress-file-upload';
// commands

//login
Cypress.Commands.add('userNameField', () => {
    cy.get('#username')
})
Cypress.Commands.add('passwordField', () => {
    cy.get('#password')
})
Cypress.Commands.add('loginButton', () => {
    cy.get('[type="submit"][class="p-element"]')
})

Cypress.Commands.add('loginFailedMessage', () => {
    cy.get("[class='p-message-wrapper ng-tns-c2895595169-4']")
})

//charge point
Cypress.Commands.add('AssetsSideMenu', () => {
    cy.get("[alt='charge points icon link']")
})
Cypress.Commands.add('chargePointLink', () => {
    cy.get('[href="/assets-and-activity/charge-points"]')
})
Cypress.Commands.add('createIcon', () => {
    cy.get("[aria-hidden='false']")
})
Cypress.Commands.add('chargePointNameField', () => {
    cy.get('input#name')
})
Cypress.Commands.add('minimumPowerField', () => {
    cy.get('input#minPower')
})
Cypress.Commands.add('maximumPowerField', () => {
    cy.get('input#maxPower')
})
Cypress.Commands.add('brandSelection', () => {
    cy.get("[filterplaceholder='Search for brand'] .p-dropdown-label")
})
Cypress.Commands.add('modelSelection', () => {
    cy.get("[filterplaceholder='Search for model'] .p-dropdown-label")
})
Cypress.Commands.add('OperatorSelection', () => {
    cy.get("[filterplaceholder='Search for operator'] .p-dropdown-label")
})
Cypress.Commands.add('searchDropdown', () => {
    cy.get(".p-dropdown-filter")
})
Cypress.Commands.add('connectorsNavigate', () => {
    cy.get(".p-tabview-nav .ng-star-inserted:nth-of-type(2) span")
})
Cypress.Commands.add('connectorId', () => {
    cy.get("input#qrCode")
})
Cypress.Commands.add('connectorType', () => {
    cy.get("[inputid='connectorType'] .p-dropdown-label")
})
Cypress.Commands.add('connectorOutputType', () => {
    cy.get("[inputid='circuitType'] .p-dropdown-label")
})
Cypress.Commands.add('connectorFormat', () => {
    cy.get("[inputid='format'] .p-dropdown-label")
})
Cypress.Commands.add('selectTariff', () => {
    cy.get("[inputid='tariffId'] .p-dropdown-label")
})
Cypress.Commands.add('StationNavigate', () => {
    cy.get(".p-tabview-nav .ng-star-inserted:nth-of-type(3) .p-tabview-nav-link")
})
Cypress.Commands.add('selectStation', () => {
    cy.get("bs-create-charge-point-station .p-dropdown-label")
})
Cypress.Commands.add('OCPPSecurityNavigate', () => {
    cy.get(".p-tabview-nav .ng-star-inserted:nth-of-type(4) span")
})
Cypress.Commands.add('OCPPVersion', () => {
    cy.get("[inputid='ocppVersion'] .p-dropdown-label")
})
Cypress.Commands.add('authenticationMethod', () => {
    cy.get("[inputid='authenticationMethod'] .p-dropdown-label")
})
Cypress.Commands.add('openChargepointTable', () => {
    cy.visit(data.url+"/charge-points")
})  
Cypress.Commands.add('tableSearch', () => {
    cy.get("input#searchInput")
})
Cypress.Commands.add('tableSearchResult', () => {
    cy.get("img[alt='dropdown icon']")
})
Cypress.Commands.add('actionsBTN', () => {
    cy.get(".p-datatable-tbody .ng-star-inserted:nth-of-type(1) [aria-label]")
})
Cypress.Commands.add('editChargePointBTN', () => {
    cy.get("ul[role='menu'] > li:nth-of-type(1)")
})
Cypress.Commands.add('deleteChargePointBTN', () => {
    cy.get("ul[role='menu'] > li:nth-of-type(2)")
})
Cypress.Commands.add('deleteChargePointConfirmBTN', () => {
    cy.get("p-button:nth-of-type(2)  .ng-star-inserted.p-button-label")
})


//operators
Cypress.Commands.add('operatorIconSideMenu', () => {
    cy.get('[ptooltip="Operators"]')
})
Cypress.Commands.add('addNewOpBTN', () => {
    cy.get('[label="Add New"] [type="button"]')
})
Cypress.Commands.add('attachImageField', () => {
    cy.get('.no-upload [type]')
})
Cypress.Commands.add('opNameFLD', () => {
    cy.get('#name')
})
Cypress.Commands.add('opEmailFLD', () => {
    cy.get('#email')
})
Cypress.Commands.add('phoneNumberField', () => {
    cy.get('#phoneNumber')
})
Cypress.Commands.add('addressField', () => {
    cy.get('#address')
})
Cypress.Commands.add('createOperator', () => {
    cy.get('[data-pc-name="button"][class="p-ripple p-element p-button p-component"]')
})
Cypress.Commands.add('attachPDF', () => {
    cy.get('input[accept=".pdf"]')
})
Cypress.Commands.add('insideTabs', () => {
    cy.get('[role="tab"]')
})

//tariffs

Cypress.Commands.add('tariffsIconSideMenu', () => {
    cy.get("button:nth-of-type(2) > img[alt='Billing & Invoices icon link']")
})
Cypress.Commands.add('tariffsLink', () => {
    cy.get("[href='\/tariffs']")
})
Cypress.Commands.add('tariffNameField', () => {
    cy.get(".p-component.ng-pristine")
})
Cypress.Commands.add('tariffType', () => {
    cy.get("p-dropdown#tariff")
})
Cypress.Commands.add('Fee', () => {
    cy.get("input#feePerKWH")
})
Cypress.Commands.add('gracePeriod', () => {
    cy.get("input#gracePeriod")
})
Cypress.Commands.add('idleFee', () => {
    cy.get("input#idleFee")
})
Cypress.Commands.add('reservationFee', () => {
    cy.get("input#reservationFee")
})
Cypress.Commands.add('openTariffTab', () => {
    cy.visit(data.url+"/tariffs")
})

// Stations

Cypress.Commands.add('stationsIconSideMenu', () => {
    cy.get('[href="/stations"]')
})

Cypress.Commands.add('addNewStationBTN', () => {
    cy.get('[href="/stations/new"]')
})
Cypress.Commands.add('stationNameFLD', () => {
    cy.get('#location-name')
})
Cypress.Commands.add('stationAddressFLD', () => {
    cy.get('#address')
})
Cypress.Commands.add('stationLatitudeFLD', () => {
    cy.get('input#latitude')
})
Cypress.Commands.add('stationLongitudeFLD', () => {
    cy.get('input#longitude')
})
Cypress.Commands.add('stationAccessibilityFLD', () => {
    cy.get('#location-access-type > .p-dropdown > .p-dropdown-label');
})
Cypress.Commands.add('stationCountryFLD', () => {
    cy.get('p-dropdown#country')
})
Cypress.Commands.add('stationCityFLD', () => {
    cy.get('p-dropdown#city')
})
Cypress.Commands.add('stationStateFLD', () => {
    cy.get('p-dropdown#state')
})


Cypress.Commands.add('stationNameFLD', () => {
    cy.get('#location-name')
})
Cypress.Commands.add('stationAddressFLD', () => {
    cy.get('#address')
})
Cypress.Commands.add('stationLatitudeFLD', () => {
    cy.get('input#latitude')
})
Cypress.Commands.add('stationLongitudeFLD', () => {
    cy.get('input#longitude')
})
Cypress.Commands.add('stationAccessibilityFLD', () => {
    cy.get('#location-access-type > .p-dropdown > .p-dropdown-label');
})
Cypress.Commands.add('stationCountryFLD', () => {
    cy.get('p-dropdown#country')
})
Cypress.Commands.add('stationCityFLD', () => {
    cy.get('p-dropdown#city')
})
Cypress.Commands.add('clearFromBTN', () => {
    cy.get('[icon="pi pi-sync"] > .p-ripple > .p-button-label');
})
Cypress.Commands.add('amenitiesTapBTN', () => {
    cy.get('#pn_id_27_header_action > span.ng-star-inserted')
})

Cypress.Commands.add('restaurantsCheckbox', () => {
    cy.contains('Restaurants')
})
Cypress.Commands.add('cafeCheckbox', () => {
    cy.contains('Cafe')

})
Cypress.Commands.add('freeWifiCheckbox', () => {
    cy.contains('Free wifi')
})
Cypress.Commands.add('freeParkingCheckbox', () => {
    cy.contains('Free parking')
})
Cypress.Commands.add('repairCenterCheckbox', () => {
    cy.contains('Repair center')
})
Cypress.Commands.add('marketCheckbox', () => {
    cy.contains('Market')
})
Cypress.Commands.add('searchAmenitites', () => {
    cy.get('input[placeholder="Search amenities"]')
})
Cypress.Commands.add('generalInfoTapBTN', () => {
    cy.get('#pn_id_92_header_action > span.ng-star-inserted')
})
Cypress.Commands.add('workingHRsTapBTN', () => {
    cy.get('#pn_id_28_header_action > span.ng-star-inserted')
})

Cypress.Commands.add('workingHRsToggleBTN', () => {
    cy.get('.p-inputswitch')
    //cy.get('.p-inputswitch-slider')
 })



 //AccountsManagement

    Cypress.Commands.add('accountsManagementIconSideMenu', () => {
        cy.get('[alt="Accounts management icon link"]')
    })
    Cypress.Commands.add('voltEdgeAccounts', () => {
        cy.contains('VoltEdge User Accounts')
    })

    Cypress.Commands.add('addNewBTN', () => {
        cy.contains('Add New')
    })

    Cypress.Commands.add('nameField', () => {
        cy.get('[id="name"]')
    })
    Cypress.Commands.add('emailField', () => {
        cy.get('[id="email"]')
    })
    Cypress.Commands.add('phoneNumberField', () => {
        cy.get('[inputid="phoneNumber"]')
    })
    Cypress.Commands.add('role', () => {
        cy.contains('Select User Role')
    })
    Cypress.Commands.add('createBTN', () => {
        cy.contains('Create')
    })

    Cypress.Commands.add('operatorAccounts', () => {
        cy.contains('Operators User Accounts')
    })
    Cypress.Commands.add('searchOpereator', () => {
       cy.get('[placeholder="Search for operator"]')
    })
   
    Cypress.Commands.add('searchResult', () => {
        cy.get('[class="p-inputgroup-addon"]')
    })