import { RepoServiceProvider } from '../service/repo.service.provider';
export class ListingsRepoService extends RepoServiceProvider {
  constructor() {
    super('listing');
  }
}
