/**
 * @description 排序
 */
class Sort {
  /**
   * 每次从最右边开始；
   * 比较相邻两数，右数小于左数，交换位置；
   * 每次比较完毕后，小数位于左；
   * 时间复杂度 O(n²)
   * @description 冒泡排序
   */
  static Bubble(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
      for (let j = arr.length; j > i; j--) {
        if (arr[j] < arr[j - 1]) {
          const tmp = arr[j]
          arr[j] = arr[j - 1]
          arr[j - 1] = tmp
        }
      }
    }
    return arr
  }

  /**
   * 线性查找待排序中的最小值；
   * 与序列左数交换；
   * 时间复杂度 O(n²)
   * @description 选择排序
   */
  static Select(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i, min = arr[minIndex]
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < min) {
          min = arr[j]
          minIndex = j
        }
      }
      if (minIndex !== i) {
        const tmp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = tmp
      }
    }
    return arr
  }
}

export default Sort
