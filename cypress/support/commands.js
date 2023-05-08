// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

function entertext(locator, text, label) {
    let element = cy.get(locator);

    element.clear();
    element.type(text);

    cy.log(`"${text}" entered into ${label}`); //Mask if password
}

Cypress.Commands.add("enterText", entertext);

function clickElement(locator, label) {
    let element = cy.get(locator);
    element.click();

    cy.log(`${label} clicked!`);
}

Cypress.Commands.add("clickElement", clickElement);

function forceClickElement(locator, label) {
    let element = cy.get(locator);
    element.click({ force: true }).click({ force: true });

    cy.log(`${label} clicked!`);

    // let element = cy.get(locator);
    // cy.wait(2000);
    // element.focus().trigger('mouseover', { force: true });

    // cy.log(`Hovered over ${label}`);
}

Cypress.Commands.add("forceClickElement", forceClickElement);