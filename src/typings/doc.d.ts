interface RepoDoc {
  _id?: PouchDB.Core.DocumentId;
  createdAt: number;
  updatedAt: number;
  [key: string]: any;
}

interface RepoDocResponse<T> {
  doc?: PouchDB.Core.Document<T & RepoDoc & PouchDB.Core.AllDocsMeta>;
  id: PouchDB.Core.DocumentId;
  key: PouchDB.Core.DocumentKey;
  value: {
    rev: PouchDB.Core.RevisionId;
    deleted?: boolean;
  };
}
