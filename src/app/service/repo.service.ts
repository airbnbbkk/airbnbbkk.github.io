import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';

@Injectable()
export class RepoService {

  private _db: PouchDB.Database<any>;

  constructor(db: string) {
    // To use PouchDB Chrome plugin
    window['PouchDB'] = PouchDB;
    this._db = this.createDb(db);
  }

  public list() {
    return this._db.allDocs({
      include_docs: true
    });
  }

  public get(id: string) {
    return this._db.get(id);
  }

  public save(data: PouchDB.Core.PutDocument<any>) {
    if (this.isIdIncluded(data)) {
      return this._db.put(data);
    } else {
      return this._db.post(data);
    }
  }

  public saveAll(data: any[]) {
    return this._db.bulkDocs(data);
  }

  private createDb(db: string) {
    return new PouchDB(db);
  }

  private isIdIncluded(data: PouchDB.Core.PutDocument<any>) {
    return !!data['_id'];
  }
}
