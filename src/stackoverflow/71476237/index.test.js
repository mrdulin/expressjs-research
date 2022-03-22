const assert = require('assert');

describe('71476237', () => {
  let originalArgv;
  beforeEach(() => {
    originalArgv = process.argv;
  });

  afterEach(() => {
    process.argv = originalArgv;
  });

  it('it replace value of node argument', () => {
    process.argv = process.argv.concat(['node', 'C:\\home\\project\\assignment', '--local']);
    assert(process.argv.slice(2)[0], '--local');
  });
});
