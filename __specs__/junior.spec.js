const {expect} = require('chai')

describe('Junior specs', () => {
  it('spec 1 every item plus 1', () => {
    const arr = [1, 2, 3, 4, 5]

    function arrItemPlusOneForEvery() {
      // implementation
    }

    expect(arrItemPlusOneForEvery(arr)).to.eql([2, 3, 4, 5, 6])
  })

  it('spec 2 array items summ', () => {
    const arr = [1, 2, 3, 4, 5]

    function arrItemsSumm(param) {
      // implementation
    }

    expect(arrItemsSumm(arr)).to.eql(15)
  })

  it('spec 2 array items  that are divided by 2 without remainder', () => {
    const arr = [1, 2, 3, 4, 5]

    function arrItemsDividedByTwoWithoutRemainder(param) {
      // implementation
    }

    expect(arrItemsDividedByTwoWithoutRemainder(arr)).to.eql([2, 4])
  })
})