describe('test', function () {
  before(async function () {
    const xyz = 'd';
    const file = 'aa';
    if (!file.includes(xyz)) {
      throw new Error(`exit test. reason: '${xyz}' data not found`);
    }
  });

  it('should pass 1', () => {});
  it('should pass 2', () => {});
  it('should pass 3', () => {});
});
