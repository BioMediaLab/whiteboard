/* global cy */
import { signIn } from '../utils';
describe('Basic', () => {
  beforeEach(() => {
    cy.visit('/');
    signIn();
  })
  it.skip('Should open homepage', () => {
    cy.visit('/');
  });

  it.skip('Should open question create page', () => {
    cy.visit('/question-banks');
    cy.get('#primary-action-create').click({ force: true })
  });

  it('Should create question', () => {
    let i = 0;
    cy.visit('/question-banks');
    cy.get('#primary-action-create').click({ force: true })
    cy.get('#title').type('This is an e2e  test question1?');
    cy.get('#Description').type('This question was created to test e2e.');
    cy.get('#courseId').type('102');
    cy.get('#button-add-question').click();
    cy.get('#TextField1').type('What is your hobby?');
    while (i < 4) {
      cy.get('#button-add-choice').click();
      i++
    };
    cy.get('#TextField2:visible').type('Painting');
    cy.get('#TextField3').type('Singing ');
    cy.get('#TextField4').type('Reading');
    cy.get('#TextField5').type('Sleeping');
    cy.get('#choice-a:visible ').click()
    cy.get('#primary-action-2').click();
  });

  it.skip('Should display question list', () => {
    cy.visit('/question-banks');
  });
});