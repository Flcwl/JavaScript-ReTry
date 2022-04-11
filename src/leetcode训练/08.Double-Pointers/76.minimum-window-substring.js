/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let ret = ''

  const countMap = new Map();
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    countMap.set(ch, (countMap.get(ch) || 0) + 1)
  }

  const keys = [...countMap.keys()];
  const mp = new Map();

  // 最小包含 t 字符窗口，可以重复
  let left = 0
  while (left < s.length && !t.includes(s[left])) left++
  // 一个字符都不匹配
  if (left >= s.length) return ''

  mp.set(s[left], [left])

  let j
  for (j = 0; j < keys.length; j++) {
    const ch = keys[j];
    if ((!mp.has(ch)) || mp.get(ch).length < countMap.get(ch)) {
      break
    }
  }

  // 存在
  if (j === keys.length) {
    return t
  }

  for (let i = left + 1; i < s.length; i++) {
    const ch = s[i];
    if (t.includes(ch)) {
      mp.set(ch, (mp.get(ch) || []).concat(i))

      if (s[left] === ch && mp.get(s[left]).length > countMap.get(s[left])) {
        const nextArr = mp.get(ch)
        nextArr.shift()
        mp.set(ch, nextArr)

        left++
        while (left < i && !t.includes(s[left])) left++
        // 继续移除
        while (mp.get(s[left]).length > countMap.get(s[left])) {
          const nextArr = mp.get(s[left])
          nextArr.shift()
          mp.set(s[left], nextArr)

          left++
          while (left < i && !t.includes(s[left])) left++
        }
      }
      // ADOBECODEBANC ABC
      // A
      // ADOB
      // ADOBEC
      // ADOBECODEB
      // BECODEBA(CODEBA)
      // BANC
      let j
      for (j = 0; j < keys.length; j++) {
        const ch = keys[j];
        if ((!mp.has(ch)) || mp.get(ch).length < countMap.get(ch)) {
          break
        }
      }

      // 存在
      if (j === keys.length) {
        if (!ret.length) {
          ret = s.slice(left, i + 1)
        } else if (i + 1 - left <= ret.length) {
          ret = s.slice(left, i + 1)
        }
      }
    }
  }

  return ret
};
// @lc code=end
