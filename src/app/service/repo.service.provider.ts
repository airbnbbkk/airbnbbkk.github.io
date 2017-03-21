import { RepoService } from './repo.service';

export const repoServiceFactory = (dbName: string) => {
  console.log('dbName', dbName);
  return () => new RepoService(dbName);
};
