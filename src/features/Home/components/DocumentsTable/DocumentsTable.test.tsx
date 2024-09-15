import { screen } from '@testing-library/react';
import { documents, renderWithProvider, mockRTKQueryHookReturnValue, mockRTKQuery } from 'tests';
import DocumentsTable from './DocumentsTable';
import { useGetDocumentsQuery } from 'service';

mockRTKQuery();

describe('DocumentsTable with RTL', () => {
  test('renders DocumentsTable', () => {
    mockRTKQueryHookReturnValue(useGetDocumentsQuery, {
      data: documents,
      isLoading: false,
    });

    renderWithProvider(<DocumentsTable />);

    const table = screen.getByTestId('DocumentsTable');
    expect(table).toBeInTheDocument();
  });

  // test('DocumentsTable is loading', () => {
  //   mockRTKQueryHookReturnValue(useGetDocumentsQuery, {
  //     isLoading: true,
  //   });
  //
  //   renderWithProvider(<DocumentsTable />);
  //
  //   const loader = screen.getByTestId('DocumentsTableLoader');
  //   expect(loader).toBeInTheDocument();
  //
  //   const table = screen.queryByTestId('DocumentsTable');
  //   expect(table).toBeNull();
  // });
});
