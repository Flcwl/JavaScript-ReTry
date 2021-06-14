/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.data = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  const arr = word.split("");
  let data = this.data;

  arr.forEach((ch) => {
    if (!data[ch]) {
      data[ch] = {};
    }
    data = data[ch];
  });

  data.count = (data.count || 0) + 1;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const arr = word.split("");
  let data = this.data;

  for (let i = 0; i < arr.length; ++i) {
    const ch = arr[i];

    // 没有 data 了 或者 data 的对应字符不存在
    // 说明该单词不存在
    if (!data || !data[ch]) {
      return false;
    }

    data = data[ch];
  }

  // 存在该单词路径
  // 判断下一层的 count 标识，校验是否完整匹配有插入过该单词
  return data && data.count > 0;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const arr = prefix.split("");
  let data = this.data;

  for (let i = 0; i < arr.length; ++i) {
    const ch = arr[i];

    if (!data || !data[ch]) {
      return false;
    }

    data = data[ch];
  }

  // 存在该单词路径，返回 true
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
