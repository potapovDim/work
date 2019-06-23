const {expect} = require('chai')

describe('Senior specs', () => {
  it('spec 1 object properties', () => {
    const a = {}

    // implementation

    expect({...a}).to.eql({a: 10})
    expect(a.b).to.eql(12)
  })

  it('spec 2 ES5 inheritance', () => {
    /**
     * ES5
     *
     * add "hello" method to parent, "hello" should return string "hello"
     * child should inherit parent method
     * and child should have own "walk" method should return strung "walk"
     */

    function Parent() {}

    function Child() {}

    // implementation

    const child = new Child()
    expect(child.hello()).to.eql('hello')
    expect(child.walk()).to.eql('walk')
  })

  it('spec 3 deep merge objects', () => {
    const obj1 = {
      a: {
        b: 1,
        c: {
          z: 12,
          x: 10
        }
      },
      b: 22
    }

    const obj2 = {
      a: {
        b: 'changed',
        c: {
          d: 10,
          x: 'changed',
          y: 1
        }
      },
      b: {
        d: 1
      }
    }

    Object.freeze(obj1)
    Object.freeze(obj2)

    function deepMergeObejcts(obj1, obj2) {
      // implementation
    }

    expect(mergeObejcts(obj1, obj2)).to.eql({
      a: {
        b: 'changed',
        c: {
          d: 10,
          x: 'changed',
          y: 1,
          z: 12
        }
      },
      b: {
        d: 1
      }
    })
  })
})