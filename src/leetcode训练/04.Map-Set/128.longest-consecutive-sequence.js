/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let ret = 0;

  // 通过 set 优化数组查询速度
  const mp = new Set();
  nums.forEach((item) => mp.add(item));

  mp.forEach((item) => {
    // 剪枝优化
    // 没有才向下遍历，保证所有连续序列都只遍历一遍
    if (!mp.has(item - 1)) {
      let t = 1;

      // 从当前节点向下遍历连续序列
      while (mp.has(++item)) t++;

      // 每次判断更新最大数
      if (t > ret) ret = t;
    }
  });

  return ret;
};
// @lc code=end
