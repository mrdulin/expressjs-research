import { expect } from 'chai';
import proxyquire from 'proxyquire';

describe('66691249', () => {
  it('should use voxelsize of custom config', () => {
    const itemModel = proxyquire('./item.model', {
      './config': {
        default: function getConfig() {
          return { amount: 100 };
        },
      },
    }).default;

    const testItem = new itemModel(1);
    expect(testItem.amount).to.equal(100);
  });
});
