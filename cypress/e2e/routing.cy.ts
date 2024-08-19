describe('Routing', () => {
  describe('Not authorized user', () => {
    it('auth page', () => {
      cy.visit('/auth');
      cy.getByTestId('AuthPage').should('exist');
    });
    it('home page', () => {
      cy.visit('/');
      cy.getByTestId('AuthPage').should('exist');
    });
    it('not exist page ', () => {
      cy.visit('/unknown-page');
      cy.getByTestId('AuthPage').should('exist');
    });
  });

  describe('Authorized personal user', () => {
    beforeEach('Login', () => {
      cy.login(true);
    });
    it('auth page', () => {
      cy.visit('/auth');
      cy.getByTestId('HomePage').should('exist');
    });
    it('home page', () => {
      cy.visit('/');
      cy.getByTestId('HomePage').should('exist');
    });
    it('not exist page ', () => {
      cy.visit('/unknown-page');
      cy.getByTestId('HomePage').should('exist');
    });
  });

  describe('Authorized managed user', () => {
    beforeEach('Login', () => {
      cy.login();
    });
    it('auth page', () => {
      cy.visit('/auth');
      cy.getByTestId('HomePage').should('exist');
    });
    it('home page', () => {
      cy.visit('/');
      cy.getByTestId('HomePage').should('exist');
    });
    it('not exist page ', () => {
      cy.visit('/unknown-page');
      cy.getByTestId('HomePage').should('exist');
    });
  });
});
