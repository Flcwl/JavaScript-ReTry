/*
 * @lc app=leetcode id=1319 lang=javascript
 *
 * [1319] Number of Operations to Make Network Connected
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  if (connections.length < n - 1) return -1
  const parent = []
  for (let i = 0; i < n; i++) {
    parent[i] = i
  }

  const find = (id) => {
    while (parent[id] !== id) {
      id = parent[id]
    }
    return id
  }
  const union = (aId, bId) => {
    const aPID = find(aId)
    const bPID = find(bId)

    if (aPID !== bPID) {
      parent[aPID] = bPID
    }
  }

  for (let i = 0; i < connections.length; i++) {
    const item = connections[i];
    union(item[0], item[1])
  }

  const count = parent.filter((item, id) => item === id).length
  // 将集合当成点再连通次数即所需电缆数
  return count > 1 ? count - 1 : 0
};
// @lc code=end
