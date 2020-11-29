class Search {
  /**
   * 从左至右依次查找；
   * 时间复杂度 O(n)
   * @description 线性查找
   */
  static Line<T>(arr: T[], item: T): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i
      }
    }
    return -1
  }
}

export default Search
