/*
 * @lc app=leetcode id=1268 lang=javascript
 *
 * [1268] Search Suggestions System
 */

// @lc code=start
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  // 输出按字典序，且不超过三个
  products = products.sort()
  const ret = []
  for (var i = 0; i < searchWord.length; i++) {
    const result = products.filter((str) => {
      return str.startsWith(searchWord.slice(0, i + 1))
    }).slice(0, 3)

    ret.push(result)
  }
  return ret
};
// @lc code=end
