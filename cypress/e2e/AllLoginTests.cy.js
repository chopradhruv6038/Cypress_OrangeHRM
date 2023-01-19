


import { BasePage } from "./pom/Base_Page";
import { LoginPage } from "./pom/Login_Page";


const basepage = new BasePage();
const loginPage = new LoginPage();

let loginInfo;



describe('Validating Valid and Invalid Login Tests', ()=> {

beforeEach('Before Each for Loading URL and Wait',()=> {

basepage.loadUrl();
basepage.waitForSync();

})

before('Before for Loading the LoginDetails json',()=> {

cy.readFile('./cypress/fixtures/loginDetails.json').then((data) =>{

loginInfo = data;


})

})

it('Validating valid login with correct username and correct password', ()=> {

loginPage.enterUsername(loginInfo.validUsername)

loginPage.enterPassword(loginInfo.validPassword);

loginPage.clickLoginBtn();

loginPage.assertDashboardTextonvalidLogin();

})

it('Validating Invalid login with Incorrect username and correct password', ()=> {

loginPage.enterUsername(loginInfo.invalidUsername)

loginPage.enterPassword(loginInfo.validPassword);

loginPage.clickLoginBtn();

loginPage.assertInvalidCredTextOnInvalidLogin();

loginPage.assertInvalidLoginIconPresence();

})

it('Validating Invalid login with Correct username and Incorrect password', ()=> {

loginPage.enterUsername(loginInfo.invalidUsername)

loginPage.enterPassword(loginInfo.invalidPassword);

loginPage.clickLoginBtn();

loginPage.assertInvalidCredTextOnInvalidLogin();

loginPage.assertInvalidLoginIconPresence();

})

it('Validating Invalid login with Incorrect username and Incorrect password', ()=> {

loginPage.enterUsername(loginInfo.invalidUsername)

loginPage.enterPassword(loginInfo.invalidPassword);

loginPage.clickLoginBtn();

loginPage.assertInvalidCredTextOnInvalidLogin();

loginPage.assertInvalidLoginIconPresence();

cy.log('login Tests completed');

})



})
