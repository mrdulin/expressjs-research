import { expect } from 'chai';
import _ from 'lodash';

describe('63811326', () => {
  it('should pass', () => {
    function genResponse() {
      const successResponse = {
        data: {},
        success: true,
      };
      const failResponse = {
        success: false,
        errorMessage: 'API error',
      };
      return Math.random() > 0.5 ? failResponse : successResponse;
    }

    const expectedJson1 = { data: {}, success: true };
    const expectedJson2 = { success: false, errorMessage: 'API error' };
    expect(genResponse()).to.satisfy((actualResponse) => {
      console.log(actualResponse);
      return _.isEqual(actualResponse, expectedJson1) || _.isEqual(actualResponse, expectedJson2);
    });
  });
});
