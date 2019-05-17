export function signIn() {
    cy.get('input[name=username]').type('megha');
    cy.get('input[name=password]').type('June@120688');
    cy.get('button[type=submit]').click();
    cy.wait(2000);
}