import {signIn} from '../utils/sign-in';
describe('Basic', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    signIn();
  })
  it('Should open homepage', () => {
    cy.visit('http://localhost:3000/');
  });

  it('Should open classes', () => {
    cy.visit('http://localhost:3000/classes/');
  });
  it('should click primary button', () => {
    cy.visit('http://localhost:3000/classes/c26842f0-9be9-4c9b-b176-af9ec23af92e/quizzes');
    cy.get('.Polaris-Page-Header .Polaris-Button.Polaris-Button--primary:visible').click()
  });
});

