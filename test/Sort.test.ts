import Sort from '../src/Sort'

describe('测试排序算法', () => {
  test('冒泡排序', () => {
    expect(Sort.Bubble([2, 1, 7, 3, 4])).toStrictEqual([1, 2, 3, 4, 7])
  })

  test('选择排序', () => {
    expect(Sort.Select([2, 1, 7, 3, 4])).toStrictEqual([1, 2, 3, 4, 7])
  })

  test('插入排序', () => {
    expect(Sort.Insert([2, 1, 7, 3, 4])).toStrictEqual([1, 2, 3, 4, 7])
  })
})
