import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { documentsResponseToModel, DocumentsModel } from 'utils/dto/document';

export const documentsService = createApi({
  reducerPath: 'documentsService',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getDocuments: build.query<DocumentsModel, void>({
      query: () => ({
        url: '/documents.json',
      }),
      transformResponse: (documents: DocumentsModel): DocumentsModel =>
        documentsResponseToModel(documents),
    }),
  }),
});

export const { useGetDocumentsQuery } = documentsService;
