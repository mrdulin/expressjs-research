import { getDatabaseName } from './maria_db_connector';

export default class MigrationRepository {
  getExistingVersions() {
    return getDatabaseName();
  }
}
