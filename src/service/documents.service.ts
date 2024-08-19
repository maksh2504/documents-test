import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { documentsResponseToModel, DocumentsModel, DocumentsRes } from 'utils/dto/singleDocument';

export const documentsService = createApi({
  reducerPath: 'documentsService',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getDocuments: build.query<DocumentsModel, void>({
      query: () => ({
        url: '/documents',
      }),
      transformResponse: (documents: DocumentsRes): DocumentsModel =>
        documentsResponseToModel(documents),
    }),
  }),
});

export const { useGetDocumentsQuery } = documentsService;
