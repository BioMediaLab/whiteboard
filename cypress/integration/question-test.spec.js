/* global cy */
import {signIn} from '../utils';
describe('Basic', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    signIn();
  })
  it.skip('Should open homepage', () => {
    cy.visit('http://localhost:3000/');
  });

  it.skip('Should open classes', () => {
    cy.visit('http://localhost:3000/classes/');
  });

  it.skip('Should open question create page', () => {
    cy.visit('http://localhost:3000/questions');
    cy.get('.Polaris-Page-Header .Polaris-Button.Polaris-Button--primary:visible').click()
  });

  it.skip('Should create question', () => {
    cy.visit('http://localhost:3000/questions');
    cy.get('.Polaris-Page-Header .Polaris-Button.Polaris-Button--primary:visible').click()
    cy.get('#question').type('This is an e2e test question?');
    cy.get('.Polaris-Button:visible').click({multiple:true});
    cy.get('#choice').type('choice 1');
    cy.get('.Polaris-Button.Polaris-Button--primary').click();
  });

  it('Should display question list', () => {
    cy.visit('http://localhost:3000/questions');
    cy.wait(2000);
    cy.get('.Polaris-Pagination__Button.Polaris-Pagination__NextButton:enabled').click();
    cy.wait(2000);
    cy.get('.Polaris-Pagination__Button.Polaris-Pagination__PreviousButton:enabled').click();
  });
});