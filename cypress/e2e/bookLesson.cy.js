import { describe } from 'mocha';
import testData from '../fixtures/testdata.json';
import { LoginPageObject } from '../page-objects/login.page-object';
import { bookLessonPageObject } from '../page-objects/bookLesson.page-object';

let loginPage = new LoginPageObject();
let bookLessonPage = new bookLessonPageObject();


describe("Book a Lesson", () => {
    //beforeEach(() => {
     //cy.visit("/request-a-lesson")
    //})


    it("Verify user is not logged in", ()=> {
        cy.visit("/request-a-lesson")
        bookLessonPage.validateUserLoggedOut();
    })

    it("verify user can book a lesson for self", ()=> {
        cy.visit("/login")
        loginPage.login(testData.validEmail, testData.validPassword);
        bookLessonPage.validateUserCanBookForSelf();  
    })

    it.only("verify user can book a lesson for child", ()=> {
        cy.visit("/login")
        loginPage.login(testData.validEmail, testData.validPassword);
        bookLessonPage.validateUserCanBookForChild();  
    })
})