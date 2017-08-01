import { RepoService } from './repo.service';

export abstract class RepoServiceProvider {
  constructor(dbName: string) {
    console.log('dbName', dbName);
    return new RepoService(dbName);
  }
}

