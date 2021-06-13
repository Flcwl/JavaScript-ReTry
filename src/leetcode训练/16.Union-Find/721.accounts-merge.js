/*
 * @lc app=leetcode id=721 lang=javascript
 *
 * [721] Accounts Merge
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  // 归类问题，并查集
  const uf = new UnionFind(accounts.length);

  const emailToIndexes = new Map();

  // 建立 email 和其所在账户下标的关系
  accounts.forEach((emails, idx) => {
    for (let i = 1; i < emails.length; ++i) {
      const email = emails[i];
      let indexes = emailToIndexes.get(email);
      if (!indexes) {
        indexes = [];
        emailToIndexes.set(email, indexes);
      }
      indexes.push(idx);
    }
  });

  // 将相同的账号下标联合起来
  emailToIndexes.forEach((indexes) => {
    for (let i = 1; i < indexes.length; ++i) {
      uf.union(indexes[0], indexes[i]);
    }
  });

  const indexToAccount = new Map();

  // 考虑账户名会同名，使用 index 进行聚合
  accounts.forEach((account, idx) => {
    const root = uf.find(idx);

    let emails = indexToAccount.get(root);

    if (!emails) {
      // 第一个作为 name
      emails = [account[0]];
      indexToAccount.set(root, emails);
    }

    // 添加账户邮箱
    for (let i = 1; i < account.length; ++i) {
      emails.push(account[i]);
    }
  });

  const ret = [];
  indexToAccount.forEach(([name, ...emails]) => {
    // 使用 Set 进行去重
    // 并根据题意进行排序
    emails = Array.from(new Set(emails)).sort();
    ret.push([name].concat(emails));
  });

  return ret;
};
// @lc code=end

class UnionFind {
  constructor(len) {
    this.init(len);
  }

  // 向上查找父亲，直到找到 root，即自己等于自己
  find = (p) => {
    if (p !== this.parents[p]) {
      // 路径压缩
      this.parents[p] = this.find(this.parents[p]);
    }
    return this.parents[p];
  };

  // 联合 q 指向 p 的父亲，使两者在同一集合上
  union = (p, q) => {
    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (rootP !== rootQ) {
      this.parents[rootQ] = rootP;
    }
  };

  init = (len) => {
    this.parents = new Array(len).fill().map((_, idx) => idx);
    // this.parents = {};
  };
}
