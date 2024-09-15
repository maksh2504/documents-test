import React from 'react';
import { MenuProps, Table } from 'antd';
import { useGetDocumentsQuery } from 'service';
import { SingleDocument } from 'utils/dto/document';
import { documentsTableColumns } from './columns';

import './DocumentsTable.scss';

const documentItemActions = (document: SingleDocument): MenuProps => ({
  items: [
    {
      key: 'someAction',
      label: 'Some action',
      onClick: () => console.log('Some action with document', document.id),
    },
  ],
});

export const DocumentsTable = () => {
  const { data: documents } = useGetDocumentsQuery();

  return (
    <div className="documents-table__section">
      <Table
        className="documents-table"
        data-testid="DocumentsTable"
        columns={documentsTableColumns(documentItemActions)}
        dataSource={documents?.data.map((value) => ({ ...value, key: value.id }))}
        pagination={false}
        bordered={false}
        scroll={{ x: '100%' }}
      />
    </div>
  );
};

export default DocumentsTable;
