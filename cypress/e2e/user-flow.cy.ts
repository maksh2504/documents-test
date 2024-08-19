describe('User flow', () => {
  afterEach('Log out', () => {
    cy.logout();
  });

  it('Personal user', () => {
    cy.login(true);

    cy.getByTestId('HomePage').should('exist');
    cy.getByTestId('SideMenu').should('exist');
    cy.getByTestId('DocumentsTable').should('exist');

    cy.getByTestId('CareerGoal').should('not.exist');
  });

  it('Managed user', () => {
    cy.login();

    cy.getByTestId('HomePage').should('exist');
    cy.getByTestId('SideMenu').should('exist');
    cy.getByTestId('DocumentsTable').should('exist');

    cy.getByTestId('CareerGoal').should('exist');
  });
});
