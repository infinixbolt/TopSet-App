import { describe } from "mocha";
import testData from '../fixtures/testdata.json';
import { LoginPageObject } from "../page-objects/login.page-object";
import { WelcomePageObject } from "../page-objects/welcome.page-object";

let loginPage = new LoginPageObject();
let welcomePage = new WelcomePageObject();

describe("Login Functionality Test", () => {

  beforeEach(() => {
    cy.visit("/login");
  });
 
  // TC-01: Login with a valid username and password
  // Expected Result: The user should be redirected to the welcome page
  it('Successful login with valid credentials', () => {
    loginPage.login(testData.validEmail, testData.validPassword);
    welcomePage.validateUserIsLoggedIn();
  });

  // TC-02: Login with an invalid username and password
  // Expected Result: An error message should be displayed indicating Invalid login details
  it("Unsuccessful login with invalid credentials", () => {
    loginPage.login(testData.invalidEmail, testData.invalidPassword);
    loginPage.validateInvalidCredentials();
  });

  // TC-03: Submit the login form without entering any values in the required fields
  // Expected Result: An error message should be displayed indicating that username and/or password are required
  it("Error message displayed when the required fields are left blank", () => {
    loginPage.login("", "");
    loginPage.validateEmptyCredentials();
  });

  // TC-04: Enter a password that does not meet the minimum length requirement
  // Expected Result: An error message should be displayed indicating that the password must be at least 8 characters long
  it("Error message displayed when the password does not meet the minimum length requirement", () => {
    loginPage.login(testData.validEmail, testData.shortPassword);
    loginPage.validateMinimumPasswordLength();
  });
});
