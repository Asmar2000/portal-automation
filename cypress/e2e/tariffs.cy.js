import Environment from "../support/pages/env";
import tariffs from "../support/pages/tariffsPom";
import loginPage from "../support/pages/loginPom";
const browseLogin = new loginPage()
const browseEnv = new Environment();
const browseTariffs = new tariffs();

describe('Tariffs TCs', () => {
    before(() => {
      cy.fixture("example").then((data) => {
        globalThis.data = data;
      });
    });
  
    beforeEach(() => {
      browseEnv.dev();
    });
  
    it('[1] Create Tariff', () => {
    //[CPMS-28]
        browseLogin.userValidCredentails()
        browseTariffs.navigateTariffs()
        browseTariffs.createTariff()
  
    });
    it('[2] delete Tariff', () => {
    //[CPMS-29]
        browseLogin.userValidCredentails()
        browseTariffs.navigateTariffs()
        browseTariffs.deleteTariff()
  
    });
    it('[3] edit Tariff', () => {
    //[CPMS-30]
        browseLogin.userValidCredentails()
        browseTariffs.navigateTariffs()
        browseTariffs.editTariff()
  
    });
  });