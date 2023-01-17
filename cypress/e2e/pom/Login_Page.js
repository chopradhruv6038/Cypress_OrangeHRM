export class LoginPage{


//Defining element locators

loginUsername = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
loginPassword = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
loginBtn = '.oxd-button';


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




}