import { assert } from "chai";

describe("Util.SplitNumAndOper Tests", function(){
  it('should have "6+4+3" return [6,"+",4,"+",3]', function(){
    const  a = [6,'+',4,'+',3];
    assert.deepEqual(a,[6,'+',4,'+',3]);
  })
})