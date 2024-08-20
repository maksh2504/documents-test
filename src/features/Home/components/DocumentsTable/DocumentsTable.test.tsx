import { screen, waitFor } from '@testing-library/react';
import { renderWithProvider, mockServer, overrideMatchMedia } from 'tests';
import DocumentsTable from './DocumentsTable';

const server = mockServer();

describe('DocumentsTable', () => {
  beforeAll(() => {
    overrideMatchMedia();
  });
  it('Rendered documents table', async () => {
    renderWithProvider(<DocumentsTable />);

    await waitFor(() => expect(screen.getByTestId('DocumentsTable')).toBeInTheDocument());
  });
});
