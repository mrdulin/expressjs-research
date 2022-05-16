const sinon = require('sinon');

describe('72234931', () => {
  it('should pass', () => {
    const drive = {
      files: {
        create(opts) {},
      },
    };

    const stub = sinon.stub(drive.files, 'create');

    stub.withArgs({ requestBody: 'requestBody', media: 'media' }).returns({
      status: 200,
      data: {
        files: [{ id: 1 }],
      },
    });
    stub.withArgs({ resource: 'resource' }).returns({ status: 500 });

    const r1 = drive.files.create({ requestBody: 'requestBody', media: 'media' });
    sinon.assert.match(r1, { status: 200, data: { files: [{ id: 1 }] } });

    const r2 = drive.files.create({ resource: 'resource' });
    sinon.assert.match(r2, { status: 500 });
  });
});
