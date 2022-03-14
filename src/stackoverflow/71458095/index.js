const assert = require('assert');
const joi = require('joi');
const { describe, it } = require('mocha');

describe('should validate joi schema', () => {
  it('test for joi instance', () => {
    let schema = joi.object({
      name: joi.string(),
    });

    assert(joi.isSchema(schema), 'schema is joi schema');
  });
});
