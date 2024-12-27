import 'cypress-axe';

describe('ds-button', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('should render with default props', () => {
    cy.get('ds-button')
      .shadow()
      .find('button')
      .should('have.class', 'primary');
  });

  it('should handle click events', () => {
    const onClick = cy.spy().as('onClick');
    cy.window().then((win) => {
      win.document.addEventListener('ds-click', onClick);
    });

    cy.get('ds-button').click();
    cy.get('@onClick').should('have.been.calledOnce');
  });

  it('should not emit click events when disabled', () => {
    const onClick = cy.spy().as('onClick');
    cy.window().then((win) => {
      win.document.addEventListener('ds-click', onClick);
    });

    cy.get('ds-button').invoke('attr', 'disabled', 'true');
    cy.get('ds-button').click({ force: true });
    cy.get('@onClick').should('not.have.been.called');
  });

  it('should have no accessibility violations', () => {
    cy.checkA11y('ds-button');
  });
});