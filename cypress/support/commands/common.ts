import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (isPersonal?: boolean) => {
  cy.visit('/auth');
  cy.getByTestId('AuthPage').should('exist');
  cy.getByTestId(isPersonal ? 'SingInAsPersonalUser' : 'SingInAsManagedUser').click();
};

export const logout = () => {
  const headerMenu = cy.getByTestId('HeaderMenu');
  headerMenu.should('exist').click();
  headerMenu.get('li').contains('Log out').should('exist').click();
  cy.getByTestId('AuthPage').should('exist');
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(isPersonal?: boolean): Chainable<void>;
      logout(): Chainable<void>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
