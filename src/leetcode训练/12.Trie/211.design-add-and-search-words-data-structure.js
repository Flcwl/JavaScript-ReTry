/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Design Add and Search Words Data Structure
 */

// @lc code=start

var WordDictionary = function() {
  this.treeMap = { value: {} }
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let mp = this.treeMap.value

  for (var i = 0; i < word.length; i++) {
    const ch = word[i]
    if (!mp[ch]) {
      mp[ch] = { value: {} }
    }

    // 标记存在该单词
    if (i === word.length - 1) {
      mp[ch].hasNode = true
    }

    mp = mp[ch].value
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  let list = [this.treeMap]

  for (let i = 0; i < word.length; i++) {
    const ch = word[i]
    if (ch === '.') {
      list = list.reduce((acc, cur) => {
        // 将当前父节点下所有的孩子加入到数组中
        const nextList = Object.values(cur.value)
        return acc.concat(nextList)
      }, [])

      continue
    }

    // 查找可能项
    list = list.filter((item) => item.value[ch] !== undefined)

    if (list.length === 0) return false

    // 将当前父节点下找到的孩子加入到数组中
    list = list.reduce((acc, cur) => {
      const nextItem = cur.value[ch]
      return acc.concat(nextItem)
    }, [])
  }

  return list.some((item) => item.hasNode)
};
// @lc code=end

// const a = new WordDictionary();

// console.log(
//   a.addWord('at'),
//   a.addWord('and'),
//   a.addWord('an'),
//   a.addWord('add'),
//   // a.search('a'),
//   // a.search('.at'),
//   a.addWord('bat'),
//   // a.search('.at'),
//   // a.search('an.'),
//   // a.search('a.d.'),
//   a.search('b.')
//   // a.search('a.d'),
//   // a.search('.')
// );
