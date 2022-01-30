/// <reference types="cypress" />

describe('test Project', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/dashboard/app');
  });

  it('should click on a checkbox of an element', () => {
    cy.get('#checkbox-selected-item-project').check();
  });

  it('should click on the input search and search element', () => {
    cy.get('[data-testid="KeyboardArrowRightIcon"]').click();
    cy.get('[data-testid="KeyboardArrowLeftIcon"]').click();
    cy.get('.MuiOutlinedInput-input').type('Apple').blur();
    cy.get('#enhanced-table-checkbox-0').contains('Apple');
  });
});
