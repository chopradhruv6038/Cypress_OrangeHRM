export class LoginPage{


//Defining element locators

loginUsername = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
loginPassword = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
loginBtn = '.oxd-button';

actualDashboard = '.oxd-topbar-header-breadcrumb';
expectedDashboardText = 'Dashboard';

actualInvalidLoginText = '.oxd-alert-content';
expectedInvalidLoginText = 'Invalid credentials';

invalidLoginIconClass = '.oxd-alert-content-icon';



//Creating methods / functions

enterUsername(username){

cy.get(this.loginUsername).type(username);

}


enterPassword(password){

cy.get(this.loginPassword).type(password);

}


clickLoginBtn(){

cy.get(this.loginBtn).click();

}


assertDashboardTextonvalidLogin(){

cy.get(this.actualDashboard).should('have.text', this.expectedDashboardText);

}

assertInvalidCredTextOnInvalidLogin(){

cy.get(this.actualInvalidLoginText).should('have.text', this.expectedInvalidLoginText);

}

assertInvalidLoginIconPresence(){

cy.get(this.invalidLoginIconClass).should('be.visible');



}

}