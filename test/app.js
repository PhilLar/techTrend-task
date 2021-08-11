var app = require('../app');
var expect = require('chai').expect;

const testArrays = [
	[1, 2, 3, 4, 5, 6, 7, 8],
	[1,3,4,5,6,7,8],
	[1,3,4,5,6,7,8,10,11,12],
	[1,2,3],
	[1,2],
	[1,2,4],
    [1,2,4,5,6],
    [1,2,3,7,8,9,15,17,19,20,21],
    [1,2,3,4,5,6,100,1091,1999,2000,2001,2002],
	[1],
    [1,3,5,7,9,11]
];

const result = [
    '1-8',        
    '1,3-8',      
    '1,3-8,10-12',
    '1-3',        
    '1,2',        
    '1,2,4',
    '1,2,4-6',
    '1-3,7-9,15,17,19-21',
    '1-6,100,1091,1999-2002',
    '1',
    '1,3,5,7,9,11'];

describe('#Testing getStringsPromise() that works only with two-dimensional array (array of integer arrays)', function() {

    context('with one-dimensional array as input', function() {
        it('should throw error', function() {
          expect(function() {
            app.getStringsPromise(testArrays[0])
          }).to.throw(Error, "getStringsPromise works only with 2dimensional array!/n Try 'getStringPromise' instead.");
        })
      })

    context('with two-dimensional array as input', function() {
      it('should convert arrays to strings by algorythm', function() {
        return app.getStringsPromise(testArrays)
          .then(function(res) {
            expect(res).deep.to.equal(result);
          })
      })
    }) 
})

describe('#Testing getStringPromise() that works only with one-dimensional array (integer array)', function() {
    context('with two-dimensional array as input', function() {
        it('should throw error', function() {
          expect(function() {
            app.getStringPromise(testArrays)
          }).to.throw(Error, "getStringsPromise works only with 1dimensional array!/n Try 'getStringsPromise' instead.")
        })
      })

      context('with one-dimensional array as input', function() {
        it('should convert arrays to strings by algorythm', function() {
            for (let ind in testArrays) {
                return app.getStringPromise(testArrays[ind])
                    .then(function(res) {
                    expect(res).equal(result[ind]);
              })
            }
          })
      })
})