import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { cleanup } from '@testing-library/react';

export const mockServer = () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
  afterEach(() => {
    server.resetHandlers();
    cleanup();
    jest.clearAllTimers();
  });
  afterAll(() => server.close());

  return server;
};
