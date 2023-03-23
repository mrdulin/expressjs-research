import proxyquire from 'proxyquire';
const proxy = proxyquire.noCallThru();

describe('MigrationRepository', function () {
  it('should pass', () => {
    const MigrationRepository = proxy.load('./migration_repository', {
      './maria_db_connector': {
        getDatabaseName: function () {
          return 'test';
        },
      },
    }).default;
    const migrationRepository = new MigrationRepository();
    const actual = migrationRepository.getExistingVersions();
    console.log('🚀 ~ file: migration_repository.test.js:15 ~ test ~ actual:', actual);
  });
});
