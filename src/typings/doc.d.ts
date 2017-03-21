interface RepoDoc {
  _id?: PouchDB.Core.DocumentId;
  createdAt: number;
  updatedAt: number;
  [key: string]: any;
}
