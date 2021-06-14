/*
 * @lc app=leetcode id=729 lang=javascript
 *
 * [729] My Calendar I
 */

// @lc code=start

var MyCalendar = function () {
  this.list = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  let l = 0;
  let r = this.list.length - 1;

  // 正常思路：二分暴力判断区间重合判断
  while (l <= r) {
    const mid = (l + r) >> 1;
    const [s, e] = this.list[mid];
    // 根据题意 start <= x < end，区间属于“左闭右开”
    // 判断区间重合：不重合（区间分离）的反例
    // overlap 公式：Max(s1, s2) < Max(e1, e2)
    if (!(end <= s || start >= e)) {
      console.log(start);
      return false;
    }

    // 二分区间缩小查找范围
    if (start > s) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  // 插入到 l 这个位置，保证有序
  // 可以使用 treeMap 优化
  this.list.splice(l, 0, [start, end]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
