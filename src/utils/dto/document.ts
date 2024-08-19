import { Paginated } from './paginated';

export type SingleDocument = {
  id: 1;
  status: string;
  document_name: string;
  issuer_name: string;
  issuer_logo_url: string;
  recipient_name: string;
  received_on?: Date;
  expire_at?: Date;
  created_at: Date;
  updated_at?: Date;
  archived_at?: Date;
  deleted_at?: Date;
  key?: string | number;
};

export type DocumentsModel = Paginated<SingleDocument>;

const paginatedDocumentsResponseToModel = (data: SingleDocument): SingleDocument => ({
  ...data,
  received_on: data.received_on && new Date(data.received_on),
  expire_at: data?.expire_at && new Date(data.expire_at),
  created_at: data?.created_at && new Date(data.created_at),
  updated_at: data?.updated_at && new Date(data.updated_at),
  archived_at: data?.archived_at && new Date(data.archived_at),
  deleted_at: data?.deleted_at && new Date(data.deleted_at),
  key: data.id,
});

export const documentsResponseToModel = (data: DocumentsModel): DocumentsModel => ({
  ...data,
  data: data.data.map((i) => paginatedDocumentsResponseToModel(i)),
});
