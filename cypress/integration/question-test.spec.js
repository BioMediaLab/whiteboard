/* global cy */
import {signIn} from '../utils';
describe('Basic', () => {
  beforeEach(() => {
    cy.visit('/');
    signIn();
  })
  it('Should open homepage', () => {
    cy.visit('/');
  });

  it('Should open question create page', () => {
    cy.visit('/questions');
    cy.get('.Polaris-Page-Header .Polaris-Button.Polaris-Button--primary:visible').click()
  });

  it('Should create question', () => {
    cy.visit('/questions');
    cy.get('.Polaris-Page-Header .Polaris-Button.Polaris-Button--primary:visible').click()
    cy.get('#question').type('This is an e2e test question1?');
    cy.get('[data-cy=choice] .Polaris-Button').click();
    cy.get('[data-cy=choice] .Polaris-Button').click();
    cy.get('[data-cy=choice] .Polaris-Button').click();
    cy.get('[data-cy=choice] .Polaris-Button').click();
    cy.get('[aria-label="Choice A"]').type('choice 1');
    cy.get('[aria-label="Choice B"]').type('choice 2');
    cy.get('[aria-label="Choice C"]').type('choice 3');
    cy.get('[aria-label="Choice D"]').type('choice 4');
    cy.get('.Polaris-Button.Polaris-Button--primary').click();
  });

  it('Should display question list', () => {
    cy.visit('/questions');
    cy.wait(2000);
    cy.get('.Polaris-Pagination__Button.Polaris-Pagination__NextButton:enabled').click();
    cy.wait(2000);
    cy.get('.Polaris-Pagination__Button.Polaris-Pagination__PreviousButton:enabled').click();
  });
});