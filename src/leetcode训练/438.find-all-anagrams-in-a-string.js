/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (p.length > s.length) return []

  const mp = new Map()
  for (let i = 0; i < p.length; i++) {
    const ch = p[i]
    mp.set(ch, (mp.get(ch) || 0) + 1)
  }

  const result = []
  const smp = new Map()
  let left = 0


  let totalCount = mp.size

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    const count = (smp.get(ch) || 0) + 1
    smp.set(ch, count)

    if (mp.get(ch) === count) {
      totalCount--
    }

    if (i - left + 1 === p.length) {
      if (totalCount === 0) {
        result.push(left)
      }

      const leftCh = s[left]
      const prev = smp.get(leftCh)
      smp.set(leftCh, prev - 1)

      if (mp.has(leftCh) && mp.get(leftCh) === prev) {
        totalCount++
      }

      left++
    }
  }

  return result
};
// @lc code=end


var findAnagrams = function (s, p) {
  if (p.length > s.length) return []

  const mp = new Map()
  for (let i = 0; i < p.length; i++) {
    const ch = p[i]
    mp.set(ch, (mp.get(ch) || 0) + 1)
  }

  const result = []
  let totalCount = p.length
  let left = 0

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    const count = mp.get(ch) || 0

    if (count > 0) totalCount--
    // 非 p 中的字符永远不能为正
    mp.set(ch, count - 1)

    if (totalCount === 0) result.push(left)

    if (i - left + 1 === p.length) {
      const leftCh = s[left]
      // 回补个数，表示该字母可匹配数
      const leftCount = mp.get(leftCh) + 1
      if (leftCount > 0) totalCount++
      mp.set(leftCh, leftCount)

      left++
    }
  }

  return result
};
