import Search from '../src/Search'

describe('测试查找算法', () => {
  test('线性查找', () => {
    expect(Search.Line([1, 2, 3, 6, 5], 3)).toBe(2)
  })
})
