export class LoginPageObject {
	emailFieldLocator = ":nth-child(1) > .w-full";
    passwordFieldLocator ='.mt-4 > .relative > .block';
    loginButtonLocator = ".mt-6 > .flex";
    infoMessageLabel = ".flex-col";

    login(email, password) {
        if(email != "") {
            cy.enterText(this.emailFieldLocator, email, 'email field');
        }

        if(password != "") {
            cy.enterText(this.passwordFieldLocator, password, 'password field');
        }
        
        cy.clickElement(this.loginButtonLocator, 'login button');
	}

    validateInvalidCredentials() {
		cy.get(this.infoMessageLabel).contains("Invalid login details");
        cy.get(this.emailFieldLocator).should('exist');
        cy.get(this.passwordFieldLocator).should('exist');
	}

    validateEmptyCredentials() {
		cy.get(this.infoMessageLabel).contains(/Email is required|Password is required/);
        cy.get(this.emailFieldLocator).should('exist');
        cy.get(this.passwordFieldLocator).should('exist');
	}

    validateMinimumPasswordLength() {
		cy.get(this.infoMessageLabel).contains("password must be at least 8 characters");
        cy.get(this.emailFieldLocator).should('exist');
        cy.get(this.passwordFieldLocator).should('exist');
	}
}
