import { screen } from '@testing-library/react';
import { documents, renderWithProvider } from 'tests';
import DocumentsTable from './DocumentsTable';
import { useGetDocumentsQuery } from 'service';

jest.mock('service', () => {
  const originalModule = jest.requireActual('service');
  return {
    ...originalModule,
    useGetDocumentsQuery: jest.fn(),
  };
});

describe('DocumentsTable with RTL', () => {
  test('renders DocumentsTable', async () => {
    await (useGetDocumentsQuery as jest.Mock).mockReturnValue({
      data: documents,
      error: undefined,
      isFetching: false,
      isLoading: false,
    });

    renderWithProvider(<DocumentsTable />);

    const table = screen.getByTestId('DocumentsTable');
    expect(table).toBeInTheDocument();
  });
});
