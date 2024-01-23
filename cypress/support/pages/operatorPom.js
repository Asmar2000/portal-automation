class operatorPage{
    navigateToOperator(){
        cy.operatorIconSideMenu().should("be.exist");
        cy.intercept("**/backoffice/cpo?**").as("landingOperator");
        cy.operatorIconSideMenu().click()
        cy.wait("@landingOperator").then(({ response }) => {
          expect(response.statusCode).to.eq(200);
        });
        cy.url().should('include','/operators')
    }
    attachOperatorImage(){
        cy.addNewOpBTN().click()
        cy.wait(1000)
        cy.attachImageField().attachFile("postive-test.jpg")
    }
    generalTab(){
        let random = require("random-name");
        let operatorName = "voltage "+ random.first()
        let opertorEmail = random.first() + "." + random.last()+"@mailinator.com"
        cy.opNameFLD().type(operatorName)
        cy.opEmailFLD().type(opertorEmail)
    }
    optionalInputsGeneral(){
        cy.addressField().type(data.address)
        let createMobilePhoneNumber = require("random-mobile-numbers");
        let phone = createMobilePhoneNumber("USA");
        cy.wrap(phone)
        let validPhone = phone.toString()
        let egNumber = validPhone.slice(4)
        let vodafone = "010"+egNumber
        cy.phoneNumberField().type(vodafone)
    }
    submitSuccessCreation(){
        cy.createOperator().click()
    }
    legalTabNav(){
        cy.wait(2000)
        cy.insideTabs().eq(1).click()
    }
    legalTabAttachments(){
        cy.attachPDF().eq(0).attachFile("pdf-test.pdf")
        cy.attachPDF().eq(1).attachFile("pdf-test.pdf")
        cy.attachPDF().eq(2).attachFile("pdf-test.pdf")
    }
    legalInputs(){
        let createMobilePhoneNumber = require("random-mobile-numbers");
        let phone = createMobilePhoneNumber("USA");
        cy.wrap(phone)
        let randNum = phone.toString()
        let genNumber = randNum.slice(4)
        const commReg = "9"+genNumber
        const taxReg = "8"+genNumber
        const elecID = "7"+genNumber
        cy.get('#documentId0').type(commReg)
        cy.get('#documentId1').type(taxReg)
        cy.get('#documentId2').type(elecID)
    }
}
export default operatorPage