export function signIn() {
    cy.get('input[name=username]').type(Cypress.env('USERNAME'));
    cy.get('input[name=password]').type(Cypress.env('PASSWORD'));
    cy.get('button[type=submit]').click();
    cy.wait(2000);
}