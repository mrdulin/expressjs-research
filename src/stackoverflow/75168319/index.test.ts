import assert from 'assert'
import _ from 'lodash'

const collectMap = (collection, iteratee) => _.map(collection, iteratee)

const actual = collectMap([1,2], n => n * 2);
const expected = [2,4]
assert.deepStrictEqual(actual, expected, 'should pass')
console.log('actual: ', actual)