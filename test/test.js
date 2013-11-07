
var expect = require('expect.js')
  , xon = require('../')
  , lib = require('../lib')
  , h = lib.helpers

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
        expect(h.ObjectId()).to.match(/^[a-f0-9]{32}$/)
      })
      it('should work with variable length', function () {
        expect(h.ObjectId(14)).to.match(/^[a-f0-9]{14}$/)
      })
    })
    describe('.choice', function () {
      it('should return something from the list', function () {
	var items = ['one', 'two', 'three']
        expect(items).to.contain(h.choice(items))
      })
    })
    describe('.fullName', function () {
      it('should return a string', function () {
        expect(h.fullName()).to.be.a('string')
      })
    })
    describe('.randInt', function () {
      it('should return an integer', function () {
        expect(h.randInt(10)%1).to.equal(0)
      })
      it('should be within the bounds', function () {
        var n = h.randInt(20, 25)
        expect(n).to.be.lessThan(25)
        expect(n).to.be.greaterThan(19)
      })
    })
    describe('.some', function () {
      it('should return a list with the right length', function () {
        var items = h.some(3, 7, 'man')
        expect(items).to.be.an('array')
        expect(items.length).to.be.within(3, 7)
      })
    })
  })

  describe('.resolve', function () {
    it('should x->x a string', function () {
      expect(lib.resolve('hi')).to.equal('hi')
    })
    it('should x->x a number', function () {
      expect(lib.resolve(2.34)).to.equal(2.34)
    })
    it('should x->x undefined', function () {
      expect(lib.resolve(undefined)).to.be.an('undefined')
    })
    it('should x->x an object w/ no helpers', function () {
      var obj = {
        one: 2,
        three: {
          4: 5,
          6: [1,2, 'seven']
        },
        'eight': 9.10
      }
      expect(lib.resolve(obj)).to.eql(obj)
    })
  })
})
