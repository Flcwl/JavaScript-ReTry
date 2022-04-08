/*
 * @lc app=leetcode id=547 lang=javascript
 *
 * [547] Number of Provinces
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  class UnionFind {
    constructor (length) {
      this.parents = []
      this.init(length)
    }

    init (len) {
      for (let i = 0; i < len; i++) {
        this.parents[i] = i
      }
    }

    find (nodeId) {
      while (this.parents[nodeId] !== nodeId) {
        nodeId = this.parents[nodeId]
      }
      return nodeId
    }

    union (aId, bId) {
      const aPID = this.find(aId)
      const bPID = this.find(bId)
      if (aPID !== bPID) {
        this.parents[aPID] = bPID
      }
    }
  }

  const uf = new UnionFind(isConnected.length)

  for (let i = 1; i < isConnected.length; i++) {
    for (let j = 0; j < i; j++) {
      if (isConnected[i][j] === 1) {
        uf.union(i, j)
      }
    }
  }

  return uf.parents.filter((item, index) => item === index).length
};
// @lc code=end
