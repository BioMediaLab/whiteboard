/* global cy */
import {signIn} from '../utils';
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
    cy.get('#primary-action-create').click({force:true})
  });

  it('Should create question', () => {
    cy.visit('/question-banks');
    cy.get('#primary-action-create').click({force:true})
    cy.get('#title').type('This is an e2e test question1?');
    cy.get('#description').type('This question was created to test e2e.');
    cy.get('#courseId').type('101');
    cy.get('#primary-action-2').click();
  });

  it.skip('Should display question list', () => {
    cy.visit('/question-banks');
  });
});