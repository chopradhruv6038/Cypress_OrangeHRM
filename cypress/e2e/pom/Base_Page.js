export class BasePage{


url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

loadUrl(){

cy.visit(this.url);

}


waitForSync(){

    cy.wait(1000);
}


}