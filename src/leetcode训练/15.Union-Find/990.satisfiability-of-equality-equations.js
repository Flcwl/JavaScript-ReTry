/*
 * @lc app=leetcode id=990 lang=javascript
 *
 * [990] Satisfiability of Equality Equations
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  const parents = []

  // 变量必然是小写字母，共计 26 个字母
  for (let i = 0; i < 26; i++) {
    parents[i] = i
  }

  const find = (id) => {
    while (parents[id] !== id) {
      id = parents[id]
    }
    return id
  }

  const union = (aId, bId) => {
    const aPID = find(aId)
    const bPID = find(bId)
    if (aPID !== bPID) {
      parents[aPID] = bPID
    }
  }

  // ASCII 码转 0 起始，方便存储
  const aCode = 'a'.charCodeAt() // 97

  // 先连通等号
  for (let i = 0; i < equations.length; i++) {
    if (equations[i][1] === '=') {
      union(equations[i][0].charCodeAt() - aCode, equations[i][3].charCodeAt() - aCode)
    }
  }

  // 处理非等号集合，发现冲突，即不成立
  for (let i = 0; i < equations.length; i++) {
    if (equations[i][1] === '!') {
      const aPID = find(equations[i][0].charCodeAt() - aCode)
      const bPID = find(equations[i][3].charCodeAt() - aCode)
      console.log(equations[i][0], equations[i][3], aPID, bPID);
      if (aPID === bPID) {
        return false
      }
    }
  }

  return true
};
// @lc code=end
