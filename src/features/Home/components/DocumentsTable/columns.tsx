import React from 'react';
import { Dropdown, MenuProps, TableProps } from 'antd';
import { ReactComponent as Document } from 'assets/svg/documentTable/document.svg';
import { ReactComponent as More } from 'assets/svg/documentTable/more.svg';
import { SingleDocument } from 'utils/dto/singleDocument';
import { format } from 'date-fns';

export const documentsTableColumns = (
  menu: (document: SingleDocument) => MenuProps,
): TableProps<SingleDocument>['columns'] => [
  {
    key: 'document_name',
    title: 'Document Name',
    dataIndex: 'document_name',
    width: '100%',
    render: (document_name) => (
      <div className="documents-table__name">
        <Document /> {document_name}
      </div>
    ),
  },
  {
    key: 'received_on',
    title: 'Received On',
    dataIndex: 'received_on',
    render: (received_on) => (received_on ? format(received_on, 'dd MMM yyyy') : null),
  },
  {
    key: 'more',
    dataIndex: 'more',
    className: 'documents-table__more',
    render: (_, record) => (
      <Dropdown menu={menu(record)} trigger={['click']}>
        <More />
      </Dropdown>
    ),
  },
];
