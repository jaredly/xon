
var expect = require('expect.js')
  , xon = require('../')
  , lib = require('../lib')

describe('xon', function () {
  describe('binder', function () {
    it('should work', function () {
      expect(lib.binder(function (a, b) {
        return a + b * 2
      })(3, 10)()).to.equal(23)
    })
  })
  
  describe('helpers', function () {
    describe('.ObjectId', function () {
      it('should generate something that looks like an objectId', function () {
        expect(lib.helpers.ObjectId()).to.match(/^[a-f0-9]{32}$/)
      })
      it('should work with variable length', function () {
        expect(lib.helpers.ObjectId(14)).to.match(/^[a-f0-9]{14}$/)
      })
    })
  })
})
