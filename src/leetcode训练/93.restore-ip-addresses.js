/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const ans = []
  const res = []

  const isDigit = (ch) => {
    const code = ch.charCodeAt() - 48
    return code >= 0 && code <= 9
  }

  const isValid = (t, n) => {
    if (t.length === 0 || t.length > 3) return false

    if (t.length === 1 && n === 0) {
      return false
    }

    if (t.length > 1 && t[0] === '0') {
      return false
    }

    if (t.length === 3 && Number(t) > 255) {
      return false
    }

    return true
  }

  const dfs = (i, n) => {
    if (n === 4) {
      if (res.length === 4 && i === s.length) {
        ans.push(res.join('.'))
      }

      return
    }

    let t = ''
    let j = i

    // 是数字
    // 取一位
    // 取两位
    // 取三位
    while (t.length < 4) {
      // 非法字符，跳过
      while (j < s.length && !isDigit(s[j])) j++

      if (j === s.length) break

      t += s[j]
      j++

      // 必须在 0 ~ 255 范围内
      if (!isValid(t)) break

      let backup = res[n]
      res[n] = t
      dfs(j, n + 1)
      res[n] = backup
    }
  }

  dfs(0, 0)
  return ans
};
// @lc code=end
