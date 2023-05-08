export class bookLessonPageObject{
    subjectDropdownLocator =':nth-child(1) > .bg-secondary > .css-1cborp-control > .css-1d8n9bt > .css-7h3ajl';
    levelDropdownLocator = ":nth-child(2) > .bg-secondary > .css-1cborp-control > .css-1wy0on6 > .css-13gv2ww-indicatorContainer";
    meStudentRadioButton = ".mt-4 > :nth-child(1) > .border-\[1px\] > .bg-white";
    tuitionFrequency = ":nth-child(2) > :nth-child(1) > .border-\[1px\] > .bg-secondary";
    lessonDateSelector = 'p.text-sm';
    firstLessonDate = ':nth-child(5) > :nth-child(8)' ;
    firstLessonTime = ':nth-child(7) > :nth-child(1) > .text-sm';
    firstLesonDuration = ".mt-3 > .sm\:flex-row > :nth-child(2) > .bg-secondary > .css-1cborp-control > .css-1wy0on6 > .css-13gv2ww-indicatorContainer";
    callTimeLocator = ".sm\:mt-3 > .flex-1 > .text-primary > .css-1cborp-control > .css-1wy0on6 > .css-13gv2ww-indicatorContainer";
    subjectLevelContainer = ".pt-6";
    aboutYourselfTextArea = 'textarea[name="hello"]';
    submitButton = '.container > .flex > .flex-1';
    submitStatusPopup = '.swal2-popup';
    childFirstName = '[placeholder="First Name"]' ;
    childLastName = '[placeholder="Last Name"]';
    childEmail = ':nth-child(3) > .block';
    childPhonenumber = '.form-control' ;
    childGender = ':nth-child(4) > .text-xs > .css-1cborp-control > .css-1wy0on6 > .css-13gv2ww-indicatorContainer';
    childDOB = '.border-light-purple-light';
    

    // login(email, password) {
    //     if(email != "") {
    //         cy.enterText(this.emailFieldLocator, email, 'email field');
    //     }

    //     if(password != "") {
    //         cy.enterText(this.passwordFieldLocator, password, 'password field');
    //     }
        
    //     cy.clickElement(this.loginButtonLocator, 'login button');
	// }

    validateUserLoggedOut(){
        cy.get(this.subjectLevelContainer).contains("Already have an account? Log in");
        cy.get(this.subjectLevelContainer).contains("First Name");
        cy.get(this.subjectLevelContainer).contains("Last Name");
    }

    validateUserCanBookForSelf(){
        cy.wait(3000);
        cy.get(':nth-child(3) > .bg-white > .justify-between').click();
        cy.get(this.subjectDropdownLocator).click().get('.css-11unzgr').contains('Computing - ICT').click();
        cy.get(this.levelDropdownLocator).click().get('.css-11unzgr').contains('A-Level').click();
        cy.get('div.border-light-purple div').eq(0).click();//meStudentRadioButton
        cy.get('div.border-light-purple div').eq(3).click();//one-offTuitionFrequency
        cy.get(this.lessonDateSelector).click().get(this.firstLessonDate).click().get(this.firstLessonTime).click();
        cy.get('div.text-xs div').eq(15).click().get('.css-11unzgr').contains('3 hours').click();
        cy.get('div.bg-secondary div').eq(21).click().get('.css-11unzgr').contains('9:00').click();
        cy.get(this.aboutYourselfTextArea).type("I want to learn A level Computing");
        //cy.get(this.submitButton).click();
        //cy.wait(5000);
        //cy.get(this.submitStatusPopup).contains("Success!")
    }

    validateUserCanBookForChild(){
        cy.wait(3000);
        cy.get(':nth-child(3) > .bg-white > .justify-between').click();
        cy.get(this.subjectDropdownLocator).click().get('.css-11unzgr').contains('Mathematics').click();
        cy.get(this.levelDropdownLocator).click().get('.css-11unzgr').contains('WAEC').click();
        cy.get('div.border-light-purple div').eq(1).click();//childStudentRadioButton
        cy.get(this.childFirstName).type("Usman").get(this.childLastName).type("Danfodio");
        cy.get(this.childEmail).type("child@gmil.com").get(this.childPhonenumber).type("8123456789");
        cy.get(this.childGender).click().get('.css-11unzgr').contains('Female').click();
        cy.get(this.childDOB).type("07/04/2005").type('{enter}');
        cy.get('div.border-light-purple div').eq(3).click();//one-offTuitionFrequency
        cy.get(this.lessonDateSelector).click().get(this.firstLessonDate).click().get(this.firstLessonTime).click();
        cy.get('div.bg-secondary div').eq(15).click().get('.css-11unzgr').contains('2 hours').click();
        cy.get('div.bg-secondary div').eq(21).click().get('.css-11unzgr').contains('11:00').click();
        cy.get(this.aboutYourselfTextArea).type("I want my child to learn Mathematics for WAEC Exams");
        //cy.get(this.submitButton).click();
        //cy.wait(5000);
        //cy.get(this.submitStatusPopup).contains("Success!")
    }



}