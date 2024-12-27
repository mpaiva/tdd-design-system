import 'cypress-axe';

describe('ds-input', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('should render with label and placeholder', () => {
    cy.get('ds-input')
      .shadow()
      .find('label')
      .should('contain.text', 'Username');

    cy.get('ds-input')
      .shadow()
      .find('input')
      .should('have.attr', 'placeholder', 'Enter your username');
  });

  it('should handle input events', () => {
    const onInput = cy.spy().as('onInput');
    cy.window().then((win) => {
      win.document.addEventListener('ds-input', onInput);
    });

    cy.get('ds-input')
      .shadow()
      .find('input')
      .type('test');

    cy.get('@onInput').should('have.been.called');
  });

  it('should display validation states correctly', () => {
    // Error state
    cy.get('ds-input[state="error"]')
      .shadow()
      .find('.input-wrapper')
      .should('have.class', 'error');

    // Success state
    cy.get('ds-input[state="success"]')
      .shadow()
      .find('.input-wrapper')
      .should('have.class', 'success');
  });

  it('should have no accessibility violations', () => {
    cy.checkA11y('ds-input');
  });
});