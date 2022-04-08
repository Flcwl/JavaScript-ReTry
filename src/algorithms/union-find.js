export class UnionFind {
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
