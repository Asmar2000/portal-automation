import { expect } from "chai";

const random = require("random-name");
const name = "VoltEdge " + random.first();
const OPname = "Operator " + random.first();
const email = random.first() + random.last() + "@mailinator.com";
class accountManagement {
  voltedgeNavigate() {
    cy.accountsManagementIconSideMenu().click();
    cy.intercept("**/api/backoffice/users/paginated?**").as(
        "landingVoltageUsers"
      );
    cy.voltEdgeAccounts().click();
    cy.wait(1000);
    cy.url().should("include", "/account-management/voltedge-users");
    cy.contains("VoltEdge User Accounts").should("be.exist");
    
    cy.wait("@landingVoltageUsers").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });
    
  }
  operatorNavigate() {
    cy.accountsManagementIconSideMenu().click();
    cy.operatorAccounts().click();
    cy.wait(1000);
    cy.url().should("include", "/account-management/operator-users");
    cy.contains("Operators User Accounts").should("be.exist");
  }
  

  createVoltEdgeUser() {
    cy.addNewBTN().click();
    cy.wait(1000);
    cy.url().should("include", "/account-management/voltedge-users/new");
    cy.contains("Add New VoltEdge User").should("be.exist");
    cy.nameField().type(name);
    cy.emailField().type(email);

    let createMobilePhoneNumber = require("random-mobile-numbers");
    let phone = createMobilePhoneNumber("USA");

    let validPhone = phone.toString();
    let egNumber = validPhone.slice(4);
    let vodafone = "010" + egNumber;
    cy.phoneNumberField().type(vodafone);
    cy.userNameField().type(name);
    cy.role().click()
    cy.contains('Admin').click()
    cy.wait(1000);
    cy.createBTN().click();
  }
createOpreatorUser() {
    cy.addNewBTN().click();
    cy.wait(1000);
    cy.url().should("include", "/account-management/operator-users/new");
    cy.contains("Add New Operator User").should("be.exist");
    cy.nameField().type(OPname);
    cy.emailField().type(email);

    let createMobilePhoneNumber = require("random-mobile-numbers");
    let phone = createMobilePhoneNumber("USA");

    let validPhone = phone.toString();
    let egNumber = validPhone.slice(4);
    let vodafone = "010" + egNumber;
    cy.phoneNumberField().type(vodafone);
    cy.userNameField().type(OPname);
    cy.role().click()
    cy.contains('Admin').click()
    cy.wait(1000);
    cy.contains('Select operator').click()
    cy.searchOpereator().type(data.OperatorName)
    cy.contains(data.OperatorName).click()
    cy.intercept("**/api/backoffice/users").as("createOperatorUser")
    cy.createBTN().click();
    cy.wait("@createOperatorUser").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });
  }

  operatorUserAssertions() {
    cy.url().should("include", "/account-management/operator-users/new");
    cy.contains("Add New Operator User").should("be.exist");
    
    cy.contains("Operator User Account Created").should("be.exist");
    cy.contains(OPname + " user account was created successfully.").should("be.exist");
    cy.wait(1000);
    cy.operatorAccounts().click();
    cy.wait(1000);
    cy.intercept("**/api/backoffice/users/paginated?**").as("searchUser");
    cy.tableSearch().type(OPname)
    cy.searchResult().click()
    cy.wait(1000);
    cy.wait("@searchUser").then(({ response }) => {
      expect(response.statusCode).to.eq(200)
      expect(response.body.content[0].name).to.eq(OPname);
      expect(response.body.content[0].email).to.eq(email);
    });
    cy.contains(OPname).should("be.exist");
  }
  voltEdgeUserAssertions() {
    cy.wait(1000);
    cy.contains("VoltEdge User Account Created").should("be.exist");
    cy.contains(name + " user account was created successfully.").should("be.exist");

    //Operator Gillian user account was created successfully.
  }
  
}
export default accountManagement;
