describe('Basic', () => {
      it('Should open homepage', () => {
      cy.visit('http://localhost:3000/');
    });

    it('Should open classes', () => {
        cy.visit('http://localhost:3000/classes/');
      });
});


//('.Polaris-Button.Polaris-Button--primary').click()