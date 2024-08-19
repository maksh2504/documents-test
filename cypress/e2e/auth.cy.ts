describe('Authorization', () => {
  afterEach('Log out', () => {
    cy.logout();
  });

  it('Sing in as personal user', () => {
    cy.login(true);
    cy.getByTestId('HomePage').should('exist');
  });
  it('Sing in as managed user', () => {
    cy.login();
    cy.getByTestId('HomePage').should('exist');
  });
});
