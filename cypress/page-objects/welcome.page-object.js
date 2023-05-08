export class WelcomePageObject {
	profileIconPopupLocator = ".block";
	firstNameFieldLocator = "input[name='firstname']";
	emailFieldLocator = "input[name='email']";

    validatePageTitle() {
		
	}

	validateUserIsLoggedIn() {
		cy.wait(2000);
		cy.visit('/student/dashboard/profile/details');
		cy.get(this.firstNameFieldLocator).should('have.value', 'Qa');
		cy.get(this.emailFieldLocator).should('have.value', 'qa.analyst@email.com');
	}
}
