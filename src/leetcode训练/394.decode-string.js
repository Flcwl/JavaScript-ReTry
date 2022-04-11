/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const isNumber = (ch) => {
    const code = ch.charCodeAt() - 48
    return code >= 0 && code <= 9
  }

  let i = 0

  const dfs = () => {
    let ret = ''

    // 跳出该次递归
    while (i < s.length && s[i] !== ']') {
      if (isNumber(s[i])) {
        // 合法的：数字不可能出现在末尾
        let count = ''
        while (isNumber(s[i])) {
          count += s[i]
          i++
        }

        // 规则中是合法的 3[a]
        i++ // '['
        let t = dfs(i)
        ret += t.repeat(Number(count))
        i++ // ']'
      } else {
        ret += s[i]
        i++
      }
    }

    return ret
  }

  return dfs()
};
// @lc code=end
